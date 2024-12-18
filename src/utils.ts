import type { Direction, Grid, Position } from "./types";

export const DirectionUtils = {
	CW: {
		N: "E",
		E: "S",
		S: "W",
		W: "N",
		"^": ">",
		">": "v",
		v: "<",
		"<": "^",
	} satisfies Record<Direction, Direction>,
	CCW: {
		N: "W",
		W: "S",
		S: "E",
		E: "N",
		"^": "<",
		"<": "v",
		v: ">",
		">": "^",
	} satisfies Record<Direction, Direction>,
};

export const GridUtils = {
	adjacent: <T = string>(grid: Grid<T>, position: Position) => {
		const nP = PositionUtils.ahead.N(position);
		const nV = GridUtils.get(grid, nP);
		const eP = PositionUtils.ahead.E(position);
		const eV = GridUtils.get(grid, eP);
		const sP = PositionUtils.ahead.S(position);
		const sV = GridUtils.get(grid, sP);
		const wP = PositionUtils.ahead.W(position);
		const wV = GridUtils.get(grid, wP);

		return {
			N: {
				position: nP,
				value: nV,
			},
			E: {
				position: eP,
				value: eV,
			},
			S: {
				position: sP,
				value: sV,
			},
			W: {
				position: wP,
				value: wV,
			},
		};
	},
	clone: <T = string>(grid: Grid<T>): Grid<T> => grid.map((row) => [...row]),
	diagonal: <T = string>(grid: Grid<T>, position: Position) => {
		const neP = PositionUtils.ahead.NE(position);
		const neV = GridUtils.get(grid, neP);
		const seP = PositionUtils.ahead.SE(position);
		const seV = GridUtils.get(grid, seP);
		const swP = PositionUtils.ahead.SW(position);
		const swV = GridUtils.get(grid, swP);
		const nwP = PositionUtils.ahead.NW(position);
		const nwV = GridUtils.get(grid, nwP);

		return {
			NE: {
				position: neP,
				value: neV,
			},
			SE: {
				position: seP,
				value: seV,
			},
			SW: {
				position: swP,
				value: swV,
			},
			NW: {
				position: nwP,
				value: nwV,
			},
		};
	},
	get: <T = string>(grid: Grid<T>, [y, x]: Position) => grid[y]?.[x],
	find: (grid: Grid<unknown>, value: unknown): Position | null => {
		let position: Position | null = null;

		GridUtils.forEach(grid, (val, pos) => {
			if (val === value) {
				position = pos;

				return true;
			}
		});

		return position;
	},
	forEach: <T = string>(
		grid: Grid<T>,
		// biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
		callback: (value: T, position: Position, grid: Grid<T>) => void | boolean,
	) => {
		const [height, width] = GridUtils.size(grid);

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				const position: Position = [y, x];

				if (callback(GridUtils.get(grid, position), position, grid)) {
					return;
				}
			}
		}
	},
	log: (grid: Grid<unknown>) => {
		console.log(grid.map((row) => row.join("")).join("\n"));
	},
	parse: <T = string>(
		input: string,
		{
			separator = "",
			callback = (value) => value as T,
		}: {
			separator?: string | RegExp;
			callback?: (value: string, position: Position) => T;
		} = {},
	): Grid<T> =>
		input
			.split("\n")
			.map((line, y) =>
				line.split(separator).map((value, x) => callback(value, [y, x])),
			),
	reduce: <A, T = string>(
		grid: Grid<T>,
		callback: (acc: A, value: T, position: Position, grid: Grid<T>) => A,
		acc: A,
	) => {
		let a: A = acc;

		GridUtils.forEach(grid, (value, position) => {
			a = callback(a, value, position, grid);
		});

		return a;
	},
	set: <T = string>(grid: Grid<T>, position: Position, value: T) => {
		const size = GridUtils.size(grid);

		if (!PositionUtils.inBounds(position, size)) {
			return false;
		}

		const [y, x] = position;

		grid[y][x] = value;

		return true;
	},
	size: (grid: Grid<unknown>): Position => [grid.length, grid[0].length],
};

type PositionUtilsType = {
	add: (a: Position, b: Position) => Position;
	ahead: Record<
		Direction | "NE" | "SE" | "SW" | "NW",
		(position: Position) => Position
	>;
	equals: (a: Position, b: Position) => boolean;
	inBounds: (position: Position, max: Position, min?: Position) => boolean;
	sub: (a: Position, b: Position) => Position;
	toString: (position: Position, separator?: string) => string;
};

export const PositionUtils: PositionUtilsType = {
	add: ([aY, aX], [bY, bX]) => [aY + bY, aX + bX],
	ahead: {
		N: (position) => PositionUtils.add(position, [-1, 0]),
		NE: (position) => PositionUtils.add(position, [-1, 1]),
		E: (position) => PositionUtils.add(position, [0, 1]),
		SE: (position) => PositionUtils.add(position, [1, 1]),
		S: (position) => PositionUtils.add(position, [1, 0]),
		SW: (position) => PositionUtils.add(position, [1, -1]),
		W: (position) => PositionUtils.add(position, [0, -1]),
		NW: (position) => PositionUtils.add(position, [-1, -1]),
		"^": (position) => PositionUtils.ahead.N(position),
		">": (position) => PositionUtils.ahead.E(position),
		v: (position) => PositionUtils.ahead.S(position),
		"<": (position) => PositionUtils.ahead.W(position),
	},
	equals: ([aY, aX], [bY, bX]) => aY === bY && aX === bX,
	inBounds: ([y, x], [MY, MX], [mY, mX] = [0, 0]) =>
		y >= mY && y < MY && x >= mX && x < MX,
	sub: ([aY, aX], [bY, bX]) => [aY - bY, aX - bX],
	toString: ([y, x], separator = ",") => `${y}${separator}${x}`,
};

export const TimeUtils = {
	log: <T>(callback: () => T, label = "runtime") => {
		console.time(label);

		const result = callback();

		console.timeEnd(label);

		return result;
	},
};

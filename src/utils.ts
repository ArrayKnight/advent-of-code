import type { Grid, Position } from "./types";

export const GridUtils = {
	clone: <T = string>(grid: Grid<T>): Grid<T> => grid.map((row) => [...row]),
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

export const PositionUtils = {
	add: ([aY, aX]: Position, [bY, bX]: Position): Position => [aY + bY, aX + bX],
	equals: ([aY, aX]: Position, [bY, bX]: Position) => aY === bY && aX === bX,
	inBounds: (
		[y, x]: Position,
		[MY, MX]: Position,
		[mY, mX]: Position = [0, 0],
	) => y >= mY && y < MY && x >= mX && x < MX,
	sub: ([aY, aX]: Position, [bY, bX]: Position): Position => [aY - bY, aX - bX],
	toString: ([y, x]: Position, separator = ",") => `${y}${separator}${x}`,
};

export const TimeUtils = {
	log: <T>(callback: () => T, label = "runtime") => {
		console.time(label);

		const result = callback();

		console.timeEnd(label);

		return result;
	},
};

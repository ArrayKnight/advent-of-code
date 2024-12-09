import type { Grid, Position } from "./types";

export const GridUtils = {
	clone: <T = string>(grid: Grid<T>): Grid<T> => grid.map((row) => [...row]),
	get: <T = string>(grid: Grid<T>, [y, x]: Position) => grid[y]?.[x],
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
	sub: ([aY, aX]: Position, [bY, bX]: Position): Position => [aY - bY, aX - bX],
	inBounds: (
		[y, x]: Position,
		[MY, MX]: Position,
		[mY, mX]: Position = [0, 0],
	) => y >= mY && y < MY && x >= mX && x < MX,
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

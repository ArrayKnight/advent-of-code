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
	set: <T = string>(grid: Grid<T>, [y, x]: Position, value: T) => {
		const row = grid[y];

		if (row && x >= 0 && x < row.length) {
			row[x] = value;

			return true;
		}

		return false;
	},
	size: (grid: Grid<unknown>): Position => [grid.length, grid[0].length],
};

export const PositionUtils = {
	add: ([aY, aX]: Position, [bY, bX]: Position): Position => [aY + bY, aX + bX],
	sub: ([aY, aX]: Position, [bY, bX]: Position): Position => [aY - bY, aX - bX],
	inBounds: ([y, x]: Position, [mY, mX]: Position) =>
		y >= 0 && y < mY && x >= 0 && x < mX,
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

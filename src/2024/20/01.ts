import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

function findPath(grid: Grid, start: Position, end: Position) {
	let position = start;
	const positions = new Map<string, Position>();

	while (!PositionUtils.equals(position, end)) {
		positions.set(PositionUtils.toString(position), position);

		const { N, E, S, W } = GridUtils.adjacent(grid, position);
		const directions = [N, E, S, W];

		for (const D of directions) {
			if (
				D.value &&
				D.value !== "#" &&
				!positions.has(PositionUtils.toString(D.position))
			) {
				position = D.position;
			}
		}
	}

	positions.set(PositionUtils.toString(end), end);

	return positions;
}

const multiples = [
	[1, 1],
	[1, -1],
	[-1, 1],
	[-1, -1],
];

function findAllShortcuts(grid: Grid, position: Position, cheats: number) {
	const size = GridUtils.size(grid);
	const positions = new Map<string, [Position, number]>();

	function add([dY, dX]: Position) {
		const dist = dY + dX;

		if (dist > cheats) return;

		for (const [mY, mX] of multiples) {
			const pos = PositionUtils.add(position, [dY * mY, dX * mX]);

			if (
				PositionUtils.inBounds(pos, size) &&
				GridUtils.get(grid, pos) !== "#"
			) {
				positions.set(PositionUtils.toString(pos), [pos, dist]);
			}
		}
	}

	for (let dY = 0; dY <= cheats; dY++) {
		for (let dX = 0; dX <= cheats; dX++) {
			add([dY, dX]);
		}
	}

	return positions;
}

export default (grid: Grid, cheats: number, threshold: number) => {
	const start = GridUtils.find(grid, "S");
	const end = GridUtils.find(grid, "E");

	if (!start || !end) return 0;

	const path = findPath(grid, start, end);

	if (!path) return 0;

	const length = path.size;
	const lengths = new Map<string, number>(
		path
			.values()
			.map((position, index) => [
				PositionUtils.toString(position),
				length - index,
			]),
	);
	let count = 0;
	let step = 0;

	for (const [, enter] of path) {
		if ((lengths.get(PositionUtils.toString(enter)) ?? 0) < threshold) break;

		const shortcuts = findAllShortcuts(grid, enter, cheats);

		for (const [, [exit, b]] of shortcuts) {
			const c = lengths.get(PositionUtils.toString(exit));

			if (c == null) continue;

			const combined = step + b + c;
			const delta = length - combined;

			if (delta >= threshold) {
				count++;
			}
		}

		step++;
	}

	return count;
};

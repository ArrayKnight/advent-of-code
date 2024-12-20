import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Path = {
	position: Position;
	positions: Map<string, Position>;
};

function findPath(grid: Grid, start: Position, end: Position) {
	const paths: Path[] = [
		{
			position: start,
			positions: new Map([[PositionUtils.toString(start), start]]),
		},
	];
	const visited = new Set<string>();

	while (paths.length) {
		const path = paths.shift();

		if (!path) return;

		const { position } = path;

		if (visited.has(PositionUtils.toString(position))) {
			continue;
		}

		visited.add(PositionUtils.toString(position));

		if (PositionUtils.equals(position, end)) {
			return path.positions;
		}

		const adjacent = GridUtils.adjacent(grid, position);
		const directions = Object.values(adjacent);
		const positions = new Map([
			...path.positions,
			[PositionUtils.toString(position), position],
		]);

		for (const D of directions) {
			if (D.value && D.value !== "#") {
				paths.push({
					position: D.position,
					positions,
				});
			}
		}
	}

	return null;
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
	const lengths = new Map<string, number>([[PositionUtils.toString(end), 0]]);
	let count = 0;
	let i = 0;

	for (const [, enter] of path) {
		lengths.set(PositionUtils.toString(enter), length - i);
		i++;
	}

	i = 0;

	for (const [, enter] of path) {
		if ((lengths.get(PositionUtils.toString(enter)) ?? 0) < threshold) break;

		const shortcuts = findAllShortcuts(grid, enter, cheats);

		for (const [, [exit, b]] of shortcuts) {
			const c = lengths.get(PositionUtils.toString(exit));

			if (c == null) continue;

			const combined = i + b + c;
			const delta = length - combined;

			if (delta >= threshold) {
				count++;
			}
		}

		i++;
	}

	return count;
};

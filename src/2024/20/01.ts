import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Path = {
	position: Position;
	positions: Map<string, Position>;
	steps: number;
};

function findPath(grid: Grid, start: Position, end: Position) {
	const paths: Path[] = [
		{
			position: start,
			positions: new Map([[PositionUtils.toString(start), start]]),
			steps: 0,
		},
	];
	const visited = new Set<string>();

	while (paths.length) {
		const path = paths.shift();

		if (!path) return;

		const { position, steps } = path;

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
					steps: steps + 1,
				});
			}
		}
	}

	return null;
}

function findAllShortcuts(grid: Grid, position: Position, cheats: number) {
	const positions = new Map<string, [Position, number]>();
	const visited = new Set<string>();
	const active = [{ position, value: GridUtils.get(grid, position) }];

	for (let i = 0; i <= cheats; i++) {
		const length = active.length;

		for (let j = 0; j < length; j++) {
			const step = active.shift();

			if (!step) return positions;

			const key = PositionUtils.toString(step.position);

			if (visited.has(key)) continue;

			visited.add(key);

			if (i > 1 && step.value !== "#" && !positions.has(key)) {
				positions.set(key, [step.position, i]);
			}

			if (i === cheats) continue;

			const { N, E, S, W } = GridUtils.adjacent(grid, step.position);
			const directions = [N, E, S, W];

			for (const D of directions) {
				if (D.value) {
					active.push(D);
				}
			}
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

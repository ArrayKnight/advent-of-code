import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Path = {
	position: Position;
	positions: Set<string>;
	steps: number;
};

function findPath(grid: Grid<boolean>) {
	const size = GridUtils.size(grid);
	const start: Position = [0, 0];
	const end = PositionUtils.sub(size, [1, 1]);
	const paths: Path[] = [
		{
			position: start,
			positions: new Set([PositionUtils.toString(start)]),
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
		const positions = new Set([
			...path.positions,
			PositionUtils.toString(position),
		]);

		for (const D of directions) {
			if (D.value) {
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

export default (blocks: Position[], size: Position, count: number) => {
	const [height, width] = size;
	const grid: Grid<boolean> = Array.from({ length: height }, () =>
		new Array(width).fill(true),
	);
	let positions: Set<string> | null | undefined = null;

	for (let i = 0; i < blocks.length; i++) {
		const position = blocks[i];

		GridUtils.set(grid, position, false);

		if (
			i < count ||
			(positions && !positions.has(PositionUtils.toString(position)))
		) {
			continue;
		}

		const { N, E, S, W } = GridUtils.adjacent(grid, position);
		const { NE, SE, SW, NW } = GridUtils.diagonal(grid, position);

		if (
			[
				[N, S],
				[E, W],
				[NE, SW],
				[NW, SE],
			].every(([a, b]) => a.value || b.value)
		) {
			continue;
		}

		positions = findPath(grid);

		if (!positions) {
			const [y, x] = position;

			return PositionUtils.toString([x, y]);
		}
	}
};

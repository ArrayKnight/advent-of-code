import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Path = {
	position: Position;
	steps: number;
};

export default (blocks: Position[], size: Position, count: number) => {
	const [height, width] = size;
	const start: Position = [0, 0];
	const end = PositionUtils.sub(size, [1, 1]);
	const grid: Grid<boolean> = Array.from({ length: height }, () =>
		new Array(width).fill(true),
	);

	for (let i = 0; i < count; i++) {
		GridUtils.set(grid, blocks[i], false);
	}

	const paths: Path[] = [
		{
			position: start,
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
			return steps;
		}

		const adjacent = GridUtils.adjacent(grid, position);
		const directions = Object.values(adjacent);

		for (const D of directions) {
			if (D.value) {
				paths.push({
					position: D.position,
					steps: steps + 1,
				});
			}
		}
	}

	return Number.POSITIVE_INFINITY;
};

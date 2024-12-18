import type { CardinalDirection, Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Path = {
	position: Position;
	positions: Record<string, number>;
	steps: number;
};

export default (blocks: Position[], size: Position, count: number) => {
	const [height, width] = size;
	const start: Position = [0, 0];
	const end = PositionUtils.sub(size, [1, 1]);
	const grid: Grid<number | string> = Array.from({ length: height }, () =>
		new Array(width).fill(Number.POSITIVE_INFINITY),
	);

	for (let i = 0; i < count; i++) {
		GridUtils.set(grid, blocks[i], "#");
	}

	const paths: Record<CardinalDirection, Path[]> = {
		N: [
			{
				position: start,
				positions: { [PositionUtils.toString(start)]: 0 },
				steps: 0,
			},
		],
		E: [],
		S: [],
		W: [],
	};
	let length = height * width - count;

	while (paths.N.length || paths.E.length || paths.S.length || paths.W.length) {
		let path: Path | undefined;

		if (!path && paths.E.length) path = paths.E.pop();
		if (!path && paths.S.length) path = paths.S.pop();
		if (!path && paths.N.length) path = paths.N.pop();
		if (!path && paths.W.length) path = paths.W.pop();
		if (!path) return;

		const { position, steps } = path;

		if (steps >= length) {
			continue;
		}

		if (PositionUtils.equals(position, end)) {
			length = Math.min(length, steps);

			continue;
		}

		const value = GridUtils.get(grid, position);

		if (typeof value === "number" && value < steps) {
			continue;
		}

		GridUtils.set(grid, position, steps);

		const adjacent = GridUtils.adjacent(grid, position);
		const directions = Object.entries(adjacent);
		const positions = {
			...path.positions,
			[PositionUtils.toString(position)]: steps + 1,
		};

		for (const [key, D] of directions) {
			if (
				typeof D.value === "number" &&
				D.value > steps + 1 &&
				!positions[PositionUtils.toString(D.position)]
			) {
				paths[key as CardinalDirection].push({
					position: D.position,
					positions,
					steps: steps + 1,
				});
			}
		}
	}

	return length;
};

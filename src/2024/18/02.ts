import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Path = {
	position: Position;
	positions: Record<string, boolean>;
	steps: number;
};

function isPassable(grid: Grid<number | string>) {
	const size = GridUtils.size(grid);
	const start: Position = [0, 0];
	const end = PositionUtils.sub(size, [1, 1]);
	const paths: Path[] = [
		{
			position: start,
			positions: { [PositionUtils.toString(start)]: true },
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
		const positions = {
			...path.positions,
			[PositionUtils.toString(position)]: true,
		};

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

export default (blocks: Position[], size: Position, count: number) => {
	const [height, width] = size;
	const grid: Grid<string> = Array.from({ length: height }, () =>
		new Array(width).fill("."),
	);
	let positions: Record<string, boolean> | null | undefined = null;

	for (let i = 0; i < blocks.length; i++) {
		const position = blocks[i];

		GridUtils.set(grid, position, "#");

		if (i < count) continue;

		const { N, E, S, W } = GridUtils.adjacent(grid, position);
		const { NE, SE, SW, NW } = GridUtils.diagonal(grid, position);
		const pairs = [
			[N, S],
			[E, W],
			[NE, SW],
			[NW, SE],
		];
		const blocked = pairs.some(
			([a, b]) =>
				(!a.value || a.value === "#") && (!b.value || b.value === "#"),
		);

		if (
			blocked &&
			(!positions || positions[PositionUtils.toString(position)])
		) {
			positions = isPassable(GridUtils.clone(grid));
		}

		if (blocked && !positions) {
			const [y, x] = position;

			return PositionUtils.toString([x, y]);
		}
	}
};

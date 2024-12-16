import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

export default (grid: Grid<number>) => {
	const trailheads = GridUtils.reduce<Position[], number>(
		grid,
		(acc, value, position) => {
			if (!value) {
				acc.push(position);
			}

			return acc;
		},
		[],
	);

	const paths = new Set<string>();

	function walk(start: Position, latest: Position, value: number) {
		if (value === 9) {
			return paths.add(
				`${PositionUtils.toString(start)}:${PositionUtils.toString(latest)}`,
			);
		}

		const next = value + 1;
		const { N, E, S, W } = GridUtils.adjacent(grid, latest);

		if (N.value === next) {
			walk(start, N.position, N.value);
		}

		if (E.value === next) {
			walk(start, E.position, E.value);
		}

		if (S.value === next) {
			walk(start, S.position, S.value);
		}

		if (W.value === next) {
			walk(start, W.position, W.value);
		}
	}

	for (const trailhead of trailheads) {
		walk(trailhead, trailhead, 0);
	}

	return paths.size;
};

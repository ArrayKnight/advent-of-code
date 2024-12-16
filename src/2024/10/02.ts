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

	function walk(step: Position, value: number): number {
		if (value === 9) {
			return 1;
		}

		const next = value + 1;
		const { N, E, S, W } = GridUtils.adjacent(grid, step);

		return (
			(N.value === next ? walk(N.position, N.value) : 0) +
			(E.value === next ? walk(E.position, E.value) : 0) +
			(S.value === next ? walk(S.position, S.value) : 0) +
			(W.value === next ? walk(W.position, W.value) : 0)
		);
	}

	return trailheads.reduce((acc, trailhead) => acc + walk(trailhead, 0), 0);
};

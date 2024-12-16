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
		const nP = PositionUtils.ahead.N(step);
		const nV = GridUtils.get(grid, nP);
		const eP = PositionUtils.ahead.E(step);
		const eV = GridUtils.get(grid, eP);
		const sP = PositionUtils.ahead.S(step);
		const sV = GridUtils.get(grid, sP);
		const wP = PositionUtils.ahead.W(step);
		const wV = GridUtils.get(grid, wP);

		return (
			(nV === next ? walk(nP, nV) : 0) +
			(eV === next ? walk(eP, eV) : 0) +
			(sV === next ? walk(sP, sV) : 0) +
			(wV === next ? walk(wP, wV) : 0)
		);
	}

	return trailheads.reduce((acc, trailhead) => acc + walk(trailhead, 0), 0);
};

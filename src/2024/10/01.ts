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
		const nP = PositionUtils.ahead.N(latest);
		const nV = GridUtils.get(grid, nP);
		const eP = PositionUtils.ahead.E(latest);
		const eV = GridUtils.get(grid, eP);
		const sP = PositionUtils.ahead.S(latest);
		const sV = GridUtils.get(grid, sP);
		const wP = PositionUtils.ahead.W(latest);
		const wV = GridUtils.get(grid, wP);

		if (nV === next) {
			walk(start, nP, nV);
		}

		if (eV === next) {
			walk(start, eP, eV);
		}

		if (sV === next) {
			walk(start, sP, sV);
		}

		if (wV === next) {
			walk(start, wP, wV);
		}
	}

	for (const trailhead of trailheads) {
		walk(trailhead, trailhead, 0);
	}

	return paths.size;
};

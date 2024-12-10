import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

const ahead: Record<string, (pos: Position) => Position> = {
	N: (pos: Position) => PositionUtils.sub(pos, [1, 0]),
	E: (pos: Position) => PositionUtils.add(pos, [0, 1]),
	S: (pos: Position) => PositionUtils.add(pos, [1, 0]),
	W: (pos: Position) => PositionUtils.sub(pos, [0, 1]),
};

export default (grid: Grid<number>) => {
	const size = GridUtils.size(grid);
	const [height, width] = size;
	const trailheads: Position[] = [];

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (!GridUtils.get(grid, [i, j])) {
				trailheads.push([i, j]);
			}
		}
	}

	function walk(step: Position): number {
		const value = GridUtils.get(grid, step);

		if (value === 9) {
			return 1;
		}

		const next = value + 1;
		const nP = ahead.N(step);
		const nV = GridUtils.get(grid, nP);
		const eP = ahead.E(step);
		const eV = GridUtils.get(grid, eP);
		const sP = ahead.S(step);
		const sV = GridUtils.get(grid, sP);
		const wP = ahead.W(step);
		const wV = GridUtils.get(grid, wP);

		return (
			(nV === next ? walk(nP) : 0) +
			(eV === next ? walk(eP) : 0) +
			(sV === next ? walk(sP) : 0) +
			(wV === next ? walk(wP) : 0)
		);
	}

	return trailheads.reduce((acc, trailhead) => acc + walk(trailhead), 0);
};

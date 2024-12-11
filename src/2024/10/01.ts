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

	const paths = new Set<string>();

	function walk(start: Position, latest: Position, value: number) {
		if (value === 9) {
			return paths.add(
				`${PositionUtils.toString(start)}:${PositionUtils.toString(latest)}`,
			);
		}

		const next = value + 1;
		const nP = ahead.N(latest);
		const nV = GridUtils.get(grid, nP);
		const eP = ahead.E(latest);
		const eV = GridUtils.get(grid, eP);
		const sP = ahead.S(latest);
		const sV = GridUtils.get(grid, sP);
		const wP = ahead.W(latest);
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

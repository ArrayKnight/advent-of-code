import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

export default (grid: Grid) => {
	function collect(position: Position, char: string) {
		const positions = new Map<string, Position>();
		const queue = new Map<string, Position>([
			[PositionUtils.toString(position), position],
		]);
		let perimeter = 0;

		for (const [, p] of queue) {
			positions.set(PositionUtils.toString(p), p);

			GridUtils.set(grid, p, char.toLowerCase());

			const nP = PositionUtils.ahead.N(p);
			const nV = GridUtils.get(grid, nP);
			const eP = PositionUtils.ahead.E(p);
			const eV = GridUtils.get(grid, eP);
			const sP = PositionUtils.ahead.S(p);
			const sV = GridUtils.get(grid, sP);
			const wP = PositionUtils.ahead.W(p);
			const wV = GridUtils.get(grid, wP);

			let edges = 4;

			if (nV === char) {
				queue.set(PositionUtils.toString(nP), nP);
			}

			if (nV === char || nV?.toUpperCase() === char) {
				edges--;
			}

			if (eV === char) {
				queue.set(PositionUtils.toString(eP), eP);
			}

			if (eV === char || eV?.toUpperCase() === char) {
				edges--;
			}

			if (sV === char) {
				queue.set(PositionUtils.toString(sP), sP);
			}

			if (sV === char || sV?.toUpperCase() === char) {
				edges--;
			}

			if (wV === char) {
				queue.set(PositionUtils.toString(wP), wP);
			}

			if (wV === char || wV?.toUpperCase() === char) {
				edges--;
			}

			perimeter += edges;
		}

		return { area: positions.size, perimeter };
	}

	return GridUtils.reduce(
		grid,
		(acc, value, position) => {
			if (value === value.toUpperCase()) {
				const { area, perimeter } = collect(position, value);

				return acc + area * perimeter;
			}

			return acc;
		},
		0,
	);
};

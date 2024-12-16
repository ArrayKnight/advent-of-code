import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

const ahead: Record<string, (pos: Position) => Position> = {
	N: (pos: Position) => PositionUtils.sub(pos, [1, 0]),
	E: (pos: Position) => PositionUtils.add(pos, [0, 1]),
	S: (pos: Position) => PositionUtils.add(pos, [1, 0]),
	W: (pos: Position) => PositionUtils.sub(pos, [0, 1]),
};

export default (grid: Grid) => {
	function collect(position: Position, char: string) {
		const positions = new Map<string, Position>();
		const queue = new Map<string, Position>([
			[PositionUtils.toString(position), position],
		]);
		const axis: Record<string, Record<number, Position[]>> = {
			x: {},
			y: {},
		};

		for (const [, p] of queue) {
			positions.set(PositionUtils.toString(p), p);

			GridUtils.set(grid, p, char.toLowerCase());

			const nP = ahead.N(p);
			const nV = GridUtils.get(grid, nP);
			const eP = ahead.E(p);
			const eV = GridUtils.get(grid, eP);
			const sP = ahead.S(p);
			const sV = GridUtils.get(grid, sP);
			const wP = ahead.W(p);
			const wV = GridUtils.get(grid, wP);

			if (nV === char) {
				queue.set(PositionUtils.toString(nP), nP);
			}

			if (nV?.toUpperCase() !== char) {
				axis.x[p[0] - 0.5] ??= [];
				axis.x[p[0] - 0.5].push(p);
			}

			if (eV === char) {
				queue.set(PositionUtils.toString(eP), eP);
			}

			if (eV?.toUpperCase() !== char) {
				axis.y[p[1] + 0.5] ??= [];
				axis.y[p[1] + 0.5].push(p);
			}

			if (sV === char) {
				queue.set(PositionUtils.toString(sP), sP);
			}

			if (sV?.toUpperCase() !== char) {
				axis.x[p[0] + 0.5] ??= [];
				axis.x[p[0] + 0.5].push(p);
			}

			if (wV === char) {
				queue.set(PositionUtils.toString(wP), wP);
			}

			if (wV?.toUpperCase() !== char) {
				axis.y[p[1] - 0.5] ??= [];
				axis.y[p[1] - 0.5].push(p);
			}
		}

		const sides =
			Object.values(axis.x).reduce((acc, intersections) => {
				let s = 1;

				intersections.sort(([, a], [, b]) => a - b);

				for (let i = 0; i < intersections.length - 1; i++) {
					const a = intersections[i];
					const b = intersections[i + 1];

					if (a[0] !== b[0] || b[1] - a[1] > 1) {
						s++;
					}
				}

				return acc + s;
			}, 0) +
			Object.values(axis.y).reduce((acc, intersections) => {
				let s = 1;

				intersections.sort(([a], [b]) => a - b);

				for (let i = 0; i < intersections.length - 1; i++) {
					const a = intersections[i];
					const b = intersections[i + 1];

					if (a[1] !== b[1] || b[0] - a[0] > 1) {
						s++;
					}
				}

				return acc + s;
			}, 0);

		return {
			area: positions.size,
			sides,
		};
	}

	return GridUtils.reduce(
		grid,
		(acc, value, position) => {
			if (value === value.toUpperCase()) {
				const { area, sides } = collect(position, value);

				return acc + area * sides;
			}

			return acc;
		},
		0,
	);
};

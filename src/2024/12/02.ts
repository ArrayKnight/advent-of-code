import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

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

			const { N, E, S, W } = GridUtils.adjacent(grid, p);

			if (N.value === char) {
				queue.set(PositionUtils.toString(N.position), N.position);
			}

			if (N.value?.toUpperCase() !== char) {
				axis.x[p[0] - 0.5] ??= [];
				axis.x[p[0] - 0.5].push(p);
			}

			if (E.value === char) {
				queue.set(PositionUtils.toString(E.position), E.position);
			}

			if (E.value?.toUpperCase() !== char) {
				axis.y[p[1] + 0.5] ??= [];
				axis.y[p[1] + 0.5].push(p);
			}

			if (S.value === char) {
				queue.set(PositionUtils.toString(S.position), S.position);
			}

			if (S.value?.toUpperCase() !== char) {
				axis.x[p[0] + 0.5] ??= [];
				axis.x[p[0] + 0.5].push(p);
			}

			if (W.value === char) {
				queue.set(PositionUtils.toString(W.position), W.position);
			}

			if (W.value?.toUpperCase() !== char) {
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

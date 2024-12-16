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

			const { N, E, S, W } = GridUtils.adjacent(grid, p);

			let edges = 4;

			if (N.value === char) {
				queue.set(PositionUtils.toString(N.position), N.position);
			}

			if (N.value === char || N.value?.toUpperCase() === char) {
				edges--;
			}

			if (E.value === char) {
				queue.set(PositionUtils.toString(E.position), E.position);
			}

			if (E.value === char || E.value?.toUpperCase() === char) {
				edges--;
			}

			if (S.value === char) {
				queue.set(PositionUtils.toString(S.position), S.position);
			}

			if (S.value === char || S.value?.toUpperCase() === char) {
				edges--;
			}

			if (W.value === char) {
				queue.set(PositionUtils.toString(W.position), W.position);
			}

			if (W.value === char || W.value?.toUpperCase() === char) {
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

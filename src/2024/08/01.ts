import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Group = Position[];

export default (grid: Grid) => {
	const size = GridUtils.size(grid);
	const frequencies = GridUtils.reduce<Record<string, Group>>(
		grid,
		(acc, value, position) => {
			if (value !== ".") {
				acc[value] ??= [];
				acc[value].push(position);
			}

			return acc;
		},
		{},
	);
	const groups = Object.values(frequencies);
	const positions: Record<string, boolean> = {};

	for (const group of groups) {
		for (let i = 0; i < group.length - 1; i++) {
			for (let j = i + 1; j < group.length; j++) {
				let a = group[i];
				let b = group[j];
				const delta = PositionUtils.sub(a, b);

				a = PositionUtils.add(a, delta);

				if (PositionUtils.inBounds(a, size)) {
					positions[PositionUtils.toString(a)] = true;
				}

				b = PositionUtils.sub(b, delta);

				if (PositionUtils.inBounds(b, size)) {
					positions[PositionUtils.toString(b)] = true;
				}
			}
		}
	}

	return Object.keys(positions).length;
};

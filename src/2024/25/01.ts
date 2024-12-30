import type { Grid } from "../../types";
import { GridUtils } from "../../utils";

export default (grids: Grid[]) => {
	const keys: Grid<number> = [];
	const locks: Grid<number> = [];

	for (const grid of grids) {
		const [height, width] = GridUtils.size(grid);
		const isKey = GridUtils.get(grid, [0, 0]) === ".";
		const values: number[] = [];

		for (let x = 0; x < width; x++) {
			let prev = GridUtils.get(grid, [height - 1, x]);

			for (let y = 1; y < height; y++) {
				const curr = GridUtils.get(grid, [height - 1 - y, x]);

				if (curr !== prev) {
					values.push(y - 1);
					break;
				}

				prev = curr;
			}
		}

		if (isKey) {
			keys.push(values);
		} else {
			locks.push(values);
		}
	}

	return locks.reduce((acc, lock) => {
		let fit = 0;

		for (const key of keys) {
			if (key.every((value, index) => lock[index] >= value)) {
				fit++;
			}
		}

		return acc + fit;
	}, 0);
};

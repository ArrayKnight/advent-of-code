import type { Grid } from "../../types";

export default (grid: Grid<number>) => {
	const { left, right } = grid.reduce<{ left: number[]; right: number[] }>(
		(acc, [l, r]) => {
			acc.left.push(l);
			acc.right.push(r);

			return acc;
		},
		{ left: [], right: [] },
	);

	left.sort((a, b) => a - b);
	right.sort((a, b) => a - b);

	return left.reduce((acc, l, i) => acc + Math.abs(l - right[i]), 0);
};

import type { Grid } from "../../types";

export default (grid: Grid<number>) => {
	const { left, right } = grid.reduce<{
		left: number[];
		right: Record<number, number>;
	}>(
		(acc, [l, r]) => {
			acc.left.push(l);
			acc.right[r] = (acc.right[r] ?? 0) + 1;

			return acc;
		},
		{ left: [], right: {} },
	);

	return left.reduce((acc, l) => acc + l * (right[l] ?? 0), 0);
};

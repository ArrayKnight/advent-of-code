import type { ArrowDirection, Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Input = {
	grid: Grid;
	instructions: ArrowDirection[];
};

export default ({ grid, instructions }: Input) => {
	let position = GridUtils.find(grid, "@");

	if (!position) return;

	i: for (const instruction of instructions) {
		const next = PositionUtils.ahead[instruction](position);
		const char = GridUtils.get(grid, next);

		if (char === "#") {
			continue;
		}

		if (char === ".") {
			GridUtils.set(grid, next, "@");
			GridUtils.set(grid, position, ".");

			position = next;

			continue;
		}

		const evaluating = new Map<string, Position>([
			[PositionUtils.toString(next), next],
		]);
		const moving = new Map<string, [Position, Position, string]>();

		if (char === "[" || char === "]") {
			const sibling = PositionUtils.ahead[char === "[" ? ">" : "<"](next);

			evaluating.set(PositionUtils.toString(sibling), sibling);
		}

		for (const [, p] of evaluating) {
			const n = PositionUtils.ahead[instruction](p);
			const c = GridUtils.get(grid, n);

			if (c === "#") {
				continue i;
			}

			moving.set(PositionUtils.toString(p), [p, n, GridUtils.get(grid, p)]);

			if (c !== ".") {
				evaluating.set(PositionUtils.toString(n), n);
			}

			if (c === "[" || c === "]") {
				const sibling = PositionUtils.ahead[c === "[" ? ">" : "<"](n);

				evaluating.set(PositionUtils.toString(sibling), sibling);
			}
		}

		const m = moving.values().toArray();

		for (let i = m.length - 1; i >= 0; i--) {
			const [p, n, c] = m[i];

			GridUtils.set(grid, n, c);
			GridUtils.set(grid, p, ".");
		}

		GridUtils.set(grid, position, ".");

		position = next;
	}

	return GridUtils.reduce(
		grid,
		(acc, value, [y, x]) =>
			acc + (value === "O" || value === "[" ? 100 * y + x : 0),
		0,
	);
};

import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Input = {
	grid: Grid;
	instructions: string[];
};

type Direction = "^" | ">" | "v" | "<";

const ahead: Record<Direction, (pos: Position) => Position> = {
	"^": (pos: Position) => PositionUtils.sub(pos, [1, 0]),
	">": (pos: Position) => PositionUtils.add(pos, [0, 1]),
	v: (pos: Position) => PositionUtils.add(pos, [1, 0]),
	"<": (pos: Position) => PositionUtils.sub(pos, [0, 1]),
};

export default ({ grid, instructions }: Input) => {
	let position = GridUtils.find(grid, "@");

	if (!position) return;

	i: for (const instruction of instructions) {
		const next = ahead[instruction as Direction](position);
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

		let sibling: Position;
		const evaluating = new Map<string, Position>([
			[PositionUtils.toString(next), next],
		]);
		const moving = new Map<string, [Position, Position, string]>();

		if (char === "[" || char === "]") {
			sibling = ahead[char === "[" ? ">" : "<"](next);

			evaluating.set(PositionUtils.toString(sibling), sibling);
		}

		for (const [, p] of evaluating) {
			const n = ahead[instruction as Direction](p);
			const c = GridUtils.get(grid, n);

			if (c === "#") {
				continue i;
			}

			moving.set(PositionUtils.toString(p), [p, n, GridUtils.get(grid, p)]);

			if (c !== ".") {
				evaluating.set(PositionUtils.toString(n), n);
			}

			if (c === "[" || c === "]") {
				sibling = ahead[c === "[" ? ">" : "<"](n);

				evaluating.set(PositionUtils.toString(sibling), sibling);
			}
		}

		const m = moving.values().toArray().reverse();

		for (const [p, n, c] of m) {
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

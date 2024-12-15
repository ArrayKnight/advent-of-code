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

	inst: for (const instruction of instructions) {
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
		const moving = new Map<string, Position>([
			[PositionUtils.toString(next), next],
		]);

		if (char === "[" || char === "]") {
			sibling = ahead[char === "[" ? ">" : "<"](next);

			moving.set(PositionUtils.toString(sibling), sibling);
		}

		for (const [, p] of moving) {
			const n = ahead[instruction as Direction](p);
			const c = GridUtils.get(grid, n);

			if (c === "#") {
				continue inst;
			}

			if (c !== ".") {
				moving.set(PositionUtils.toString(n), n);
			}

			if (c === "[" || c === "]") {
				sibling = ahead[c === "[" ? ">" : "<"](n);

				moving.set(PositionUtils.toString(sibling), sibling);
			}
		}

		const m = moving.values().toArray();

		for (let i = m.length - 1; i >= 0; i--) {
			const p = m[i];
			const n = ahead[instruction as Direction](p);
			const c = GridUtils.get(grid, p);

			GridUtils.set(grid, n, c);
			GridUtils.set(grid, p, ".");
		}

		GridUtils.set(grid, position, ".");

		position = next;
	}

	let gps = 0;

	GridUtils.forEach(grid, (value, [y, x]) => {
		if (value === "O" || value === "[") {
			gps += 100 * y + x;
		}
	});

	return gps;
};

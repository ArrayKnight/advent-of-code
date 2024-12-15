import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Input = {
	grid: Grid;
	instructions: string[];
};

type Direction = "^" | ">" | "v" | "<";

const flip: Record<Direction, Direction> = {
	"^": "v",
	">": "<",
	v: "^",
	"<": ">",
};
const ahead: Record<Direction, (pos: Position) => Position> = {
	"^": (pos: Position) => PositionUtils.sub(pos, [1, 0]),
	">": (pos: Position) => PositionUtils.add(pos, [0, 1]),
	v: (pos: Position) => PositionUtils.add(pos, [1, 0]),
	"<": (pos: Position) => PositionUtils.sub(pos, [0, 1]),
};

export default ({ grid, instructions }: Input) => {
	const size = GridUtils.size(grid);
	const [height, width] = size;
	let position: Position = [0, 0];

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (GridUtils.get(grid, [i, j]) === "@") {
				position = [i, j];
			}
		}
	}

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

		if (instruction === "<" || instruction === ">") {
			let n = next;
			let c = char;

			while (c === "[" || c === "]") {
				n = ahead[instruction as Direction](n);
				c = GridUtils.get(grid, n);
			}

			if (c === "#") {
				continue;
			}

			const back = flip[instruction as Direction];

			while (!PositionUtils.equals(n, position)) {
				const p = ahead[back](n);

				GridUtils.set(grid, n, GridUtils.get(grid, p));

				n = p;
			}
		} else {
			let sibling = ahead[char === "[" ? ">" : "<"](next);
			const moving = new Map<string, Position>([
				[PositionUtils.toString(next), next],
				[PositionUtils.toString(sibling), sibling],
			]);

			for (const [, p] of moving) {
				const n = ahead[instruction as Direction](p);
				const c = GridUtils.get(grid, n);

				if (c === "#") {
					continue inst;
				}

				if (c === "[" || c === "]") {
					sibling = ahead[c === "[" ? ">" : "<"](n);

					moving.set(PositionUtils.toString(n), n);
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
		}

		GridUtils.set(grid, position, ".");

		position = next;
	}

	let gps = 0;

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (GridUtils.get(grid, [i, j]) === "[") {
				gps += 100 * i + j;
			}
		}
	}

	return gps;
};

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

	for (const instruction of instructions) {
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

		let n = next;
		let c = char;

		while (c === "O") {
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

		GridUtils.set(grid, position, ".");

		position = next;
	}

	let gps = 0;

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (GridUtils.get(grid, [i, j]) === "O") {
				gps += 100 * i + j;
			}
		}
	}

	return gps;
};

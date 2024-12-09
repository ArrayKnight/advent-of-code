import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Direction = "^" | ">" | "v" | "<";

export default (grid: Grid) => {
	const size = GridUtils.size(grid);
	const [height, width] = size;

	let position: Position = [0, 0];

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			if (GridUtils.get(grid, [y, x]) === "^") {
				position = [y, x];
			}
		}
	}

	const turns: Record<Direction, Direction> = {
		"^": ">",
		">": "v",
		v: "<",
		"<": "^",
	};
	const ahead: Record<Direction, (pos: Position) => Position> = {
		"^": (pos: Position) => PositionUtils.sub(pos, [1, 0]),
		">": (pos: Position) => PositionUtils.add(pos, [0, 1]),
		v: (pos: Position) => PositionUtils.add(pos, [1, 0]),
		"<": (pos: Position) => PositionUtils.sub(pos, [0, 1]),
	};
	const blocks = new Map<string, Position>();

	function placeBlock(pos: Position) {
		const g = GridUtils.clone(grid);

		GridUtils.set(g, pos, "#");

		return g;
	}

	function walk(block?: Position) {
		const g = block ? placeBlock(block) : grid;
		let p: Position = [...position];
		let d: Direction = "^";

		const steps: Record<string, boolean> = {
			[PositionUtils.toString(p, d)]: true,
		};

		while (PositionUtils.inBounds(p, size)) {
			const next = ahead[d](p);
			const [y, x] = next;

			if (g[y]?.[x] === "#") {
				d = turns[d];
			} else {
				if (!block) {
					blocks.set(PositionUtils.toString(next), next);
				}

				p = next;
			}

			if (block) {
				const step = PositionUtils.toString(p, d);

				if (steps[step]) {
					return true;
				}

				steps[step] = true;
			}
		}

		return false;
	}

	walk();

	blocks.delete(PositionUtils.toString(position));

	let positions = 0;

	for (const [, block] of blocks) {
		if (walk(block)) {
			positions++;
		}
	}

	return positions;
};

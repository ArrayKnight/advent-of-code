import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Direction = "^" | ">" | "v" | "<";

type Block = {
	block: Position;
	position: Position;
	direction: Direction;
};

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

	const blocks = new Map<string, Block>();

	function placeBlock(pos: Position) {
		const g = GridUtils.clone(grid);

		GridUtils.set(g, pos, "#");

		return g;
	}

	function walk(block?: Block) {
		const g = block ? placeBlock(block.block) : grid;
		let p: Position = [...(block?.position ?? position)];
		let d: Direction = block?.direction ?? "^";

		const steps: Record<string, boolean> = {
			[PositionUtils.toString(p, d)]: true,
		};
		const visited: Record<string, boolean> = {};

		while (PositionUtils.inBounds(p, size)) {
			const next = ahead[d](p);

			if (GridUtils.get(g, next) === "#") {
				d = turns[d];
			} else {
				if (!block) {
					visited[PositionUtils.toString(p)] = true;

					if (!visited[PositionUtils.toString(next)]) {
						blocks.set(PositionUtils.toString(next), {
							block: next,
							position: p,
							direction: d,
						});
					}
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

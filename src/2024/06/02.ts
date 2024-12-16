import type { ArrowDirection, Grid, Position } from "../../types";
import { DirectionUtils, GridUtils, PositionUtils } from "../../utils";

type Block = {
	block: Position;
	position: Position;
	direction: ArrowDirection;
};

export default (grid: Grid) => {
	const size = GridUtils.size(grid);
	const position = GridUtils.find(grid, "^");
	const blocks = new Map<string, Block>();

	if (!position) return;

	function placeBlock(pos: Position) {
		const g = GridUtils.clone(grid);

		GridUtils.set(g, pos, "#");

		return g;
	}

	function walk(start: Position, block?: Block) {
		const g = block ? placeBlock(block.block) : grid;
		let p: Position = [...(block?.position ?? start)];
		let d: ArrowDirection = block?.direction ?? "^";
		const steps: Record<string, boolean> = {
			[PositionUtils.toString(p, block ? d : undefined)]: true,
		};

		while (PositionUtils.inBounds(p, size)) {
			const next = PositionUtils.ahead[d](p);

			if (GridUtils.get(g, next) === "#") {
				d = DirectionUtils.CW[d];
			} else {
				if (!block) {
					steps[PositionUtils.toString(p)] = true;

					const step = PositionUtils.toString(next);

					if (!steps[step]) {
						blocks.set(step, {
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

	walk(position);

	let positions = 0;

	for (const [, block] of blocks) {
		if (walk(position, block)) {
			positions++;
		}
	}

	return positions;
};

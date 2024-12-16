import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Direction = "^" | ">" | "v" | "<";

const turns: Record<Direction, Direction> = {
	"^": ">",
	">": "v",
	v: "<",
	"<": "^",
};

export default (grid: Grid) => {
	const size = GridUtils.size(grid);
	let direction: Direction = "^";
	let position = GridUtils.find(grid, direction);

	if (!position) return;

	const positions = new Set<string>();

	while (position && PositionUtils.inBounds(position, size)) {
		const next = PositionUtils.ahead[direction](position);

		if (GridUtils.get(grid, next) === "#") {
			direction = turns[direction];
		} else {
			positions.add(PositionUtils.toString(position));
			position = next;
		}
	}

	return positions.size;
};

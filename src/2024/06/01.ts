import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Direction = "^" | ">" | "v" | "<";

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
	let direction: Direction = "^";
	let position = GridUtils.find(grid, direction);

	if (!position) return;

	const positions = new Set<string>();

	while (PositionUtils.inBounds(position, size)) {
		const next = ahead[direction](position);

		if (GridUtils.get(grid, next) === "#") {
			direction = turns[direction];
		} else {
			positions.add(PositionUtils.toString(position));
			position = next;
		}
	}

	return positions.size;
};

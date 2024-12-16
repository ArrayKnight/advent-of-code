import type { ArrowDirection, Grid } from "../../types";
import { DirectionUtils, GridUtils, PositionUtils } from "../../utils";

export default (grid: Grid) => {
	const size = GridUtils.size(grid);
	let direction: ArrowDirection = "^";
	let position = GridUtils.find(grid, direction);

	if (!position) return;

	const positions = new Set<string>();

	while (position && PositionUtils.inBounds(position, size)) {
		const next = PositionUtils.ahead[direction](position);

		if (GridUtils.get(grid, next) === "#") {
			direction = DirectionUtils.CW[direction];
		} else {
			positions.add(PositionUtils.toString(position));
			position = next;
		}
	}

	return positions.size;
};

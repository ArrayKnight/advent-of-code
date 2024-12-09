import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

const FORWARD = "MAS";
const BACKWARD = "SAM";

export default (grid: Grid) => {
	const size = GridUtils.size(grid);
	const [height, width] = size;

	let count = 0;

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			const position: Position = [i, j];
			const strings = [
				[
					GridUtils.get(grid, PositionUtils.sub(position, [1, 1])),
					GridUtils.get(grid, position),
					GridUtils.get(grid, PositionUtils.add(position, [1, 1])),
				].join(""),
				[
					GridUtils.get(grid, PositionUtils.add(position, [-1, 1])),
					GridUtils.get(grid, position),
					GridUtils.get(grid, PositionUtils.add(position, [1, -1])),
				].join(""),
			];

			if (strings.every((str) => str === FORWARD || str === BACKWARD)) {
				count++;
			}
		}
	}

	return count;
};

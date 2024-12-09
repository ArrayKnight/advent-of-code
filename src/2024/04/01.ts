import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

const FORWARD = "XMAS";
const BACKWARD = "SAMX";

export default (grid: Grid) => {
	const size = GridUtils.size(grid);
	const [height, width] = size;

	let count = 0;

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			const position: Position = [i, j];
			const strings = [
				grid[i].slice(j, j + 4).join(""),
				[
					GridUtils.get(grid, [i, j]),
					GridUtils.get(grid, PositionUtils.add(position, [1, 0])),
					GridUtils.get(grid, PositionUtils.add(position, [2, 0])),
					GridUtils.get(grid, PositionUtils.add(position, [3, 0])),
				].join(""),
				[
					GridUtils.get(grid, [i, j]),
					GridUtils.get(grid, PositionUtils.add(position, [1, 1])),
					GridUtils.get(grid, PositionUtils.add(position, [2, 2])),
					GridUtils.get(grid, PositionUtils.add(position, [3, 3])),
				].join(""),
				[
					GridUtils.get(grid, [i, j]),
					GridUtils.get(grid, PositionUtils.add(position, [1, -1])),
					GridUtils.get(grid, PositionUtils.add(position, [2, -2])),
					GridUtils.get(grid, PositionUtils.add(position, [3, -3])),
				].join(""),
			];

			count += strings.reduce(
				(acc, str) => acc + (str === FORWARD || str === BACKWARD ? 1 : 0),
				0,
			);
		}
	}

	return count;
};

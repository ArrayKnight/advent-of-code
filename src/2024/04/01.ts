import type { Grid } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

const FORWARD = "XMAS";
const BACKWARD = "SAMX";

export default (grid: Grid) => {
	return GridUtils.reduce<number>(
		grid,
		(acc, value, position) => {
			const [y, x] = position;
			const strings = [
				grid[y].slice(x, x + 4).join(""),
				[
					value,
					GridUtils.get(grid, PositionUtils.add(position, [1, 0])),
					GridUtils.get(grid, PositionUtils.add(position, [2, 0])),
					GridUtils.get(grid, PositionUtils.add(position, [3, 0])),
				].join(""),
				[
					value,
					GridUtils.get(grid, PositionUtils.add(position, [1, 1])),
					GridUtils.get(grid, PositionUtils.add(position, [2, 2])),
					GridUtils.get(grid, PositionUtils.add(position, [3, 3])),
				].join(""),
				[
					value,
					GridUtils.get(grid, PositionUtils.add(position, [1, -1])),
					GridUtils.get(grid, PositionUtils.add(position, [2, -2])),
					GridUtils.get(grid, PositionUtils.add(position, [3, -3])),
				].join(""),
			];

			return (
				acc +
				strings.reduce(
					(acc, str) => acc + (str === FORWARD || str === BACKWARD ? 1 : 0),
					0,
				)
			);
		},
		0,
	);
};

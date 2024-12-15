import type { Grid } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

const FORWARD = "MAS";
const BACKWARD = "SAM";

export default (grid: Grid) => {
	return GridUtils.reduce(
		grid,
		(acc, value, position) => {
			const strings = [
				[
					GridUtils.get(grid, PositionUtils.sub(position, [1, 1])),
					value,
					GridUtils.get(grid, PositionUtils.add(position, [1, 1])),
				].join(""),
				[
					GridUtils.get(grid, PositionUtils.add(position, [-1, 1])),
					value,
					GridUtils.get(grid, PositionUtils.add(position, [1, -1])),
				].join(""),
			];

			return (
				acc +
				(strings.every((str) => str === FORWARD || str === BACKWARD) ? 1 : 0)
			);
		},
		0,
	);
};

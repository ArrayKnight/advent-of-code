import type { Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Robot = {
	position: Position;
	velocity: Position;
};

export default (robots: Robot[], size: Position, display?: boolean) => {
	const [height, width] = size;

	function areTree() {
		const positions: Record<number, Record<number, boolean>> = {};

		const found = robots.find(({ position: [y, x] }) => {
			positions[y] ??= {};
			positions[y][x] = true;

			return (
				positions[y][x - 3] &&
				positions[y][x - 2] &&
				positions[y][x - 1] &&
				positions[y][x + 1] &&
				positions[y][x + 2] &&
				positions[y][x + 3]
			);
		});

		if (found && display) {
			const scene: string[][] = Array.from({ length: height }, () =>
				new Array(width).fill("."),
			);

			for (const { position } of robots) {
				GridUtils.set(scene, position, "X");
			}

			GridUtils.log(scene);
		}

		return found;
	}

	let i = 0;

	while (!areTree()) {
		i++;

		for (const robot of robots) {
			let [y, x] = PositionUtils.add(robot.position, robot.velocity);

			if (y < 0) {
				y += height;
			} else if (y >= height) {
				y -= height;
			}

			if (x < 0) {
				x += width;
			} else if (x >= width) {
				x -= width;
			}

			robot.position = [y, x];
		}
	}

	return i;
};

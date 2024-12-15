import type { Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Robot = {
	position: Position;
	velocity: Position;
};

export default (robots: Robot[], size: Position, display?: boolean) => {
	const [height, width] = size;
	let i = 0;

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

			console.log(scene.map((line) => line.join("")).join("\n"));
		}

		return found;
	}

	while (!areTree()) {
		i++;

		for (const robot of robots) {
			let [y, x] = PositionUtils.add(robot.position, robot.velocity);

			if (y < 0) {
				y = height + y;
			} else if (y >= height) {
				y = y - height;
			}

			if (x < 0) {
				x = width + x;
			} else if (x >= width) {
				x = x - width;
			}

			robot.position = [y, x];
		}
	}

	return i;
};

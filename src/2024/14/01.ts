import type { Position } from "../../types";

type Robot = {
	position: Position;
	velocity: Position;
};

export default (robots: Robot[], size: Position, iterations: number) => {
	const [height, width] = size;

	for (const robot of robots) {
		const [dY, dX] = robot.velocity;
		let [y, x] = robot.position;

		y = (dY * iterations + y) % height;
		x = (dX * iterations + x) % width;

		if (y < 0) {
			y += height;
		}

		if (x < 0) {
			x += width;
		}

		robot.position = [y, x];
	}

	const middle = {
		column: Math.floor(width / 2),
		row: Math.floor(height / 2),
	};

	const { nw, ne, se, sw } = robots.reduce(
		(acc, { position }) => {
			const [y, x] = position;

			if (y !== middle.row && x !== middle.column) {
				const top = y < middle.row;
				const left = x < middle.column;

				return {
					nw: acc.nw + (top && left ? 1 : 0),
					ne: acc.ne + (top && !left ? 1 : 0),
					se: acc.se + (!top && !left ? 1 : 0),
					sw: acc.sw + (!top && left ? 1 : 0),
				};
			}

			return acc;
		},
		{ nw: 0, ne: 0, se: 0, sw: 0 },
	);

	return nw * ne * se * sw;
};

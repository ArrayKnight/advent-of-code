import type { CardinalDirection, Grid, Position } from "../../types";
import { DirectionUtils, GridUtils, PositionUtils } from "../../utils";

type Step = {
	position: Position;
	direction: CardinalDirection;
};

type Cost = Record<
	CardinalDirection,
	Record<CardinalDirection, number | null> | null
>;

type Marker = { step: Step; score: number };

const MAX = Number.POSITIVE_INFINITY;
const SCORE = {
	move: 1,
	rotate: 1000,
};

export default (grid: Grid) => {
	const start = GridUtils.find(grid, "S");
	const end = GridUtils.find(grid, "E");

	if (!start || !end) return;

	const [height, width] = GridUtils.size(grid);
	const costs = GridUtils.reduce<Grid<Cost | null>>(
		grid,
		(acc, value, position) => {
			if (value === "#") {
				GridUtils.set(acc, position, null);
			}

			const { N, E, S, W } = GridUtils.adjacent(grid, position);

			GridUtils.set(acc, position, {
				N:
					N.value === "#"
						? null
						: {
								N: SCORE.move,
								E: SCORE.rotate,
								S: null,
								W: SCORE.rotate,
							},
				E:
					E.value === "#"
						? null
						: {
								N: SCORE.rotate,
								E: SCORE.move,
								S: SCORE.rotate,
								W: null,
							},
				S:
					S.value === "#"
						? null
						: {
								N: null,
								E: SCORE.rotate,
								S: SCORE.move,
								W: SCORE.rotate,
							},
				W:
					W.value === "#"
						? null
						: {
								N: SCORE.rotate,
								E: null,
								S: SCORE.rotate,
								W: SCORE.move,
							},
			});

			return acc;
		},
		Array.from({ length: height }, () => new Array(width)),
	);

	const initial: Step = { position: start, direction: "E" };
	const active: Marker[] = [{ step: initial, score: 0 }];
	const markers = new Map<string, Marker>([
		[
			PositionUtils.toString(initial.position, initial.direction),
			{ step: initial, score: 0 },
		],
	]);
	let least = MAX;

	while (active.length) {
		const path = active.shift();

		if (!path) break;

		const { step, score } = path;
		const { position, direction } = step;

		if (PositionUtils.equals(position, end)) {
			if (score < least) {
				least = score;
			}

			continue;
		}

		const cost = GridUtils.get(costs, position);
		const options = [
			{
				step: {
					position: PositionUtils.ahead[direction](position),
					direction: direction,
				},
				score: score + (cost?.[direction]?.[direction] ?? MAX),
			},
			{
				step: { position: position, direction: DirectionUtils.CW[direction] },
				score:
					score + (cost?.[DirectionUtils.CW[direction]]?.[direction] ?? MAX),
			},
			{
				step: { position: position, direction: DirectionUtils.CCW[direction] },
				score:
					score + (cost?.[DirectionUtils.CCW[direction]]?.[direction] ?? MAX),
			},
		];

		for (const option of options) {
			if (option.score === MAX) continue;

			const key = PositionUtils.toString(
				option.step.position,
				option.step.direction,
			);
			const marker = markers.get(key);

			if (!marker || option.score < marker.score) {
				markers.set(key, option);
				active.push(option);
			}
		}
	}

	return least;
};

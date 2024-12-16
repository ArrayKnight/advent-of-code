import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Direction = "N" | "E" | "S" | "W";

type Step = {
	position: Position;
	direction: Direction;
};

type Cost = Record<Direction, Record<Direction, number | null> | null>;

type Marker = { step: Step; score: number };

type Path = { steps: Step[]; score: number };

const CW: Record<Direction, Direction> = {
	N: "E",
	E: "S",
	S: "W",
	W: "N",
};
const CCW: Record<Direction, Direction> = {
	N: "W",
	W: "S",
	S: "E",
	E: "N",
};
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

			const nP = PositionUtils.ahead.N(position);
			const nV = GridUtils.get(grid, nP);
			const eP = PositionUtils.ahead.E(position);
			const eV = GridUtils.get(grid, eP);
			const sP = PositionUtils.ahead.S(position);
			const sV = GridUtils.get(grid, sP);
			const wP = PositionUtils.ahead.W(position);
			const wV = GridUtils.get(grid, wP);

			GridUtils.set(acc, position, {
				N:
					nV === "#"
						? null
						: {
								N: SCORE.move,
								E: SCORE.rotate,
								S: null,
								W: SCORE.rotate,
							},
				E:
					eV === "#"
						? null
						: {
								N: SCORE.rotate,
								E: SCORE.move,
								S: SCORE.rotate,
								W: null,
							},
				S:
					sV === "#"
						? null
						: {
								N: null,
								E: SCORE.rotate,
								S: SCORE.move,
								W: SCORE.rotate,
							},
				W:
					wV === "#"
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
	const active: Path[] = [{ steps: [initial], score: 0 }];
	const markers = new Map<string, Marker>([
		[
			PositionUtils.toString(initial.position, initial.direction),
			{ step: initial, score: 0 },
		],
	]);
	const complete: Path[] = [];
	let least = MAX;

	while (active.length) {
		const path = active.shift();

		if (!path) break;

		const { steps, score } = path;
		const step = steps[steps.length - 1];
		const { position, direction } = step;

		if (PositionUtils.equals(step.position, end)) {
			complete.push(path);

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
				step: { position: position, direction: CW[direction] },
				score: score + (cost?.[CW[direction]]?.[direction] ?? MAX),
			},
			{
				step: { position: position, direction: CCW[direction] },
				score: score + (cost?.[CCW[direction]]?.[direction] ?? MAX),
			},
		];

		for (const option of options) {
			if (option.score === MAX) continue;

			const key = PositionUtils.toString(
				option.step.position,
				option.step.direction,
			);
			const marker = markers.get(key);

			if (!marker || option.score <= marker.score) {
				markers.set(key, option);
				active.push({
					steps: [...steps, option.step],
					score: option.score,
				});
			}
		}
	}

	return complete.reduce((acc, { score, steps }) => {
		if (score === least) {
			for (const { position } of steps) {
				acc.add(PositionUtils.toString(position));
			}
		}

		return acc;
	}, new Set<string>()).size;
};

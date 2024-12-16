import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Direction = "N" | "E" | "S" | "W";
type Step = {
	position: Position;
	direction: Direction;
};
type Cost = Record<Direction, Record<Direction, number | null> | null>;
type Marker = { step: Step; score: number };

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
const ahead: Record<string, (pos: Position) => Position> = {
	N: (pos: Position) => PositionUtils.sub(pos, [1, 0]),
	E: (pos: Position) => PositionUtils.add(pos, [0, 1]),
	S: (pos: Position) => PositionUtils.add(pos, [1, 0]),
	W: (pos: Position) => PositionUtils.sub(pos, [0, 1]),
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

			const nP = ahead.N(position);
			const nV = GridUtils.get(grid, nP);
			const eP = ahead.E(position);
			const eV = GridUtils.get(grid, eP);
			const sP = ahead.S(position);
			const sV = GridUtils.get(grid, sP);
			const wP = ahead.W(position);
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
					position: ahead[direction](position),
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
			const existing = markers.get(key);

			if (!existing || option.score < existing.score) {
				markers.set(key, option);
				active.push(option);
			}
		}
	}

	return least;
};

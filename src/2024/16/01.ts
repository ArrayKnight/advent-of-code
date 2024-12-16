import type { Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

type Step = {
	position: Position;
	direction: string;
};
type Cost = Record<string, Record<string, number | null> | null>;

const cw: Record<string, string> = {
	N: "E",
	E: "S",
	S: "W",
	W: "N",
};
const ccw: Record<string, string> = {
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

	let least = MAX;
	const active: { step: Step; score: number }[] = [
		{ step: { position: start, direction: "E" }, score: 0 },
	];
	const positions = new Map<string, { step: Step; score: number }>([
		[
			PositionUtils.toString(start, "E"),
			{ step: { position: start, direction: "E" }, score: 0 },
		],
	]);

	while (active.length) {
		const { step, score } = active.shift() as { step: Step; score: number };

		if (PositionUtils.equals(step.position, end)) {
			if (score < least) {
				least = score;
			}

			continue;
		}

		const options = walk(step, score);

		for (const option of options) {
			const key = PositionUtils.toString(
				option.step.position,
				option.step.direction,
			);
			const existing = positions.get(key);

			if (
				option.score !== MAX &&
				(!existing || option.score < existing.score)
			) {
				positions.set(key, option);
				active.push(option);
			}
		}
	}

	function walk(latest: Step, score: number) {
		const cost = GridUtils.get(costs, latest.position);

		return [
			{
				step: {
					position: ahead[latest.direction](latest.position),
					direction: latest.direction,
				},
				score: score + (cost?.[latest.direction]?.[latest.direction] ?? MAX),
			},
			{
				step: { position: latest.position, direction: cw[latest.direction] },
				score:
					score + (cost?.[cw[latest.direction]]?.[latest.direction] ?? MAX),
			},
			{
				step: { position: latest.position, direction: ccw[latest.direction] },
				score:
					score + (cost?.[ccw[latest.direction]]?.[latest.direction] ?? MAX),
			},
		];
	}

	return least;
};

import type { ArrowDirection, Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

const numericKeypad: Grid = [
	["7", "8", "9"],
	["4", "5", "6"],
	["1", "2", "3"],
	["", "0", "A"],
];
const numericPositions = GridUtils.reduce<Record<string, Position>>(
	numericKeypad,
	(acc, value, position) => {
		acc[value] = position;

		return acc;
	},
	{},
);

const directionalKeypad: Grid = [
	["", "^", "A"],
	["<", "v", ">"],
];
const directionalPositions = GridUtils.reduce<Record<string, Position>>(
	directionalKeypad,
	(acc, value, position) => {
		acc[value] = position;

		return acc;
	},
	{},
);

type Path = {
	position: Position;
	directions: string;
};

function countDirectionChanges(directions: string) {
	let changes = 0;

	for (let i = 1; i < directions.length; i++) {
		if (directions[i - 1] !== directions[i]) {
			changes++;
		}
	}

	return changes;
}

const numericCache = new Map<string, Path>();
const directionalCache = new Map<string, Path>();

function findPath(grid: Grid, a: string, b: string) {
	const isNumeric = grid === numericKeypad;
	const cache = isNumeric ? numericCache : directionalCache;
	const key = `${a}:${b}`;

	if (cache.has(key)) {
		return cache.get(key);
	}

	const positions = isNumeric ? numericPositions : directionalPositions;
	const start = positions[a];
	const end = positions[b];
	const paths: Path[] = [
		{
			position: start,
			directions: "",
		},
	];
	const complete: Path[] = [];
	let length = Number.MAX_SAFE_INTEGER;

	while (paths.length) {
		const path = paths.shift();

		if (!path) return;

		const { position, directions } = path;

		if (directions.length > length) continue;

		if (PositionUtils.equals(position, end)) {
			complete.push(path);

			length = Math.min(length, directions.length);

			continue;
		}

		const { N, E, S, W } = GridUtils.adjacent(grid, position);
		const dirs: [{ position: Position; value: string }, ArrowDirection][] = [
			[N, "^"],
			[E, ">"],
			[S, "v"],
			[W, "<"],
		];

		for (const [D, arrow] of dirs) {
			if (D.value) {
				paths.push({
					position: D.position,
					directions: `${directions}${arrow}`,
				});
			}
		}
	}

	const [best] = complete
		.filter((path) => path.directions.length === length)
		.sort((a, b) => {
			const seqA = countDirectionChanges(a.directions);
			const seqB = countDirectionChanges(b.directions);

			const indexLeftA = a.directions.lastIndexOf("<");
			const indexLeftB = b.directions.lastIndexOf("<");

			const indexDownA = a.directions.lastIndexOf("v");
			const indexDownB = b.directions.lastIndexOf("v");

			return seqA !== seqB
				? seqA - seqB
				: indexLeftA !== indexLeftB
					? indexLeftA - indexLeftB
					: indexDownA - indexDownB;
		});

	cache.set(key, best);

	return best;
}

function type(grid: Grid, start: string, sequence: string) {
	let position = start;
	let seq = "";

	for (const b of sequence) {
		const path = findPath(grid, position, b);

		if (!path) continue;

		position = b;

		seq += path.directions;
		seq += "A";
	}

	return seq;
}

export default (codes: string[], robots: number) => {
	GridUtils.forEach(numericKeypad, (a) => {
		GridUtils.forEach(numericKeypad, (b) => {
			if (a && b) {
				findPath(numericKeypad, a, b);
			}
		});
	});

	GridUtils.forEach(directionalKeypad, (a) => {
		GridUtils.forEach(directionalKeypad, (b) => {
			if (a && b) {
				findPath(directionalKeypad, a, b);
			}
		});
	});

	return codes.reduce((acc, code) => {
		let sequence = code;

		sequence = type(numericKeypad, "A", sequence);

		for (let i = 0; i < robots; i++) {
			sequence = type(directionalKeypad, "A", sequence);
		}

		return acc + Number(code.slice(0, 3)) * sequence.length;
	}, 0);
};

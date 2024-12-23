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

const numericCache = new Map<string, string>();
const directionalCache = new Map<string, string>();

function findPath(keypad: Grid, a: string, b: string) {
	const isNumeric = keypad === numericKeypad;
	const cache = isNumeric ? numericCache : directionalCache;
	const key = `${a}:${b}`;

	if (cache.has(key)) {
		return cache.get(key) ?? "";
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

		if (!path) return "";

		const { position, directions } = path;

		if (directions.length > length) continue;

		if (PositionUtils.equals(position, end)) {
			complete.push(path);

			length = Math.min(length, directions.length);

			continue;
		}

		const { N, E, S, W } = GridUtils.adjacent(keypad, position);
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

	cache.set(key, best.directions);

	return best.directions;
}

function type(keypad: Grid, a: string, b: string) {
	if (a === b) return "A";

	const directions = findPath(keypad, a, b);

	return `${directions}A`;
}

function count(
	keypad: Grid,
	a: string,
	sequence: string,
	depth: number,
	cache: Map<string, number>,
): number {
	const key = `${a}:${sequence}:${depth}`;
	let length = cache.get(key);

	if (length != null) return length;

	length = 0;

	for (let i = 0; i < sequence.length; i++) {
		const b = sequence[i];
		const seq = type(keypad, a, b);

		if (depth) {
			let _a = "A";

			for (let j = 0; j < seq.length; j++) {
				const _b = seq[j];

				length += count(directionalKeypad, _a, _b, depth - 1, cache);

				_a = _b;
			}
		} else {
			length = seq.length;
		}

		// biome-ignore lint/style/noParameterAssign: <explanation>
		a = b;
	}

	cache.set(key, length);

	return length;
}

export default (codes: string[], depth: number) => {
	const cache = new Map<string, number>();

	return codes.reduce(
		(acc, code) =>
			acc +
			Number(code.slice(0, 3)) * count(numericKeypad, "A", code, depth, cache),
		0,
	);
};

import type { ArrowDirection, Grid, Position } from "../../types";
import { GridUtils, PositionUtils } from "../../utils";

const numericKeypad: Grid = [
	["7", "8", "9"],
	["4", "5", "6"],
	["1", "2", "3"],
	["", "0", "A"],
];
const directionalKeypad: Grid = [
	["", "^", "A"],
	["<", "v", ">"],
];

type Path = {
	position: Position;
	directions: ArrowDirection[];
};

function countDirectionChanges(directions: ArrowDirection[]) {
	let changes = 0;

	for (let i = 1; i < directions.length; i++) {
		if (directions[i - 1] !== directions[i]) {
			changes++;
		}
	}

	return changes;
}

const sequenceCache = new Map<string, Path>();

function findPath(grid: Grid, start: Position, target: string) {
	const key = PositionUtils.toString(start, target);

	if (grid === directionalKeypad && sequenceCache.has(key)) {
		return sequenceCache.get(key);
	}

	const end = GridUtils.find(grid, target);

	if (!end) return;

	const paths: Path[] = [
		{
			position: start,
			directions: [],
		},
	];
	const complete: Path[] = [];
	let length = Number.MAX_SAFE_INTEGER;

	while (paths.length) {
		const path = paths.shift();

		if (!path) return;

		const { position } = path;

		if (path.directions.length > length) continue;

		if (PositionUtils.equals(position, end)) {
			complete.push(path);
			length = Math.min(length, path.directions.length);

			continue;
		}

		const { N, E, S, W } = GridUtils.adjacent(grid, position);
		const directions: [
			{ position: Position; value: string },
			ArrowDirection,
		][] = [
			[N, "^"],
			[E, ">"],
			[S, "v"],
			[W, "<"],
		];

		for (const [D, arrow] of directions) {
			if (D.value) {
				paths.push({
					position: D.position,
					directions: [...path.directions, arrow],
				});
			}
		}
	}

	if (complete.length === 1) {
		if (grid === directionalKeypad) {
			sequenceCache.set(key, complete[0]);
		}

		return complete[0];
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

	if (grid === directionalKeypad) {
		sequenceCache.set(key, best);
	}

	return best;
}

const routeCache = new Map<string, string[]>();

function type(grid: Grid, start: Position, sequence: string[]) {
	let position = start;
	const seq: string[] = [];

	for (const b of sequence) {
		// if (grid === directionalKeypad) {
		// 	const a = GridUtils.get(grid, position);
		//
		// 	if (!a) continue;
		//
		// 	const key = `${a}:${b}`;
		//
		// 	if (routeCache.has(key)) {
		// 		seq.push(...(routeCache.get(key) ?? []));
		//
		// 		continue;
		// 	}
		//
		// 	const path = findPath(grid, position, b);
		//
		// 	if (!path) continue;
		//
		// 	position = path.position;
		//
		// 	const route = (path.directions as string[]).concat(["A"]);
		//
		// 	seq.push(...route);
		//
		// 	routeCache.set(key, route);
		// } else {
		// 	const path = findPath(grid, position, b);
		//
		// 	if (!path) continue;
		//
		// 	position = path.position;
		//
		// 	seq.push(...path.directions, "A");
		// }

		const path = findPath(grid, position, b);

		if (!path) continue;

		position = path.position;

		seq.push(...path.directions, "A");
	}

	return seq;
}

function count(sequence: string[]) {
	const counts = new Map<string, number>();

	for (let i = 1; i < sequence.length; i++) {
		const a = sequence[i - 1];
		const b = sequence[i];
		const key = `${a}:${b}`;

		counts.set(key, (counts.get(key) ?? 0) + 1);
	}

	return counts;
}

function typeCount(counts: Map<string, number>) {}

export default (codes: string[], robots: number) => {
	const numStart = GridUtils.find(numericKeypad, "A");
	const dirStart = GridUtils.find(directionalKeypad, "A");

	if (!numStart || !dirStart) return 0;

	GridUtils.forEach(directionalKeypad, (a, position) => {
		GridUtils.forEach(directionalKeypad, (b) => {
			if (a && b) {
				type(directionalKeypad, position, [b]);
			}
		});
	});

	console.log(routeCache);

	return codes.reduce((acc, code) => {
		let sequence = code.split("");

		// console.log(sequence.join(""));
		sequence = type(numericKeypad, numStart, sequence);
		// console.log(sequence.join(""), sequence.length);

		// let counts = count(type(numericKeypad, numStart, sequence));
		// console.log(counts);

		for (let i = 0; i < robots; i++) {
			// console.log(i, sequence.length);
			sequence = type(directionalKeypad, dirStart, sequence);
			// console.log(sequence.join(""), sequence.length);

			// counts = typeCount(counts);

			//console.log(counts);
		}

		return acc + Number(code.slice(0, 3)) * sequence.length;
	}, 0);
};

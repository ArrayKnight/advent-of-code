type Party = Map<string, Party>;

function getCombinations(values: string[]) {
	const combinations: string[][] = [];
	let temp: string[] = [];

	for (let i = 0; i < 2 ** values.length; i++) {
		temp = [];

		for (let j = 0; j < values.length; j++) {
			if (i & (2 ** j)) {
				temp.push(values[j]);
			}
		}

		if (temp.length >= 3) {
			combinations.push(temp);
		}
	}

	return combinations;
}

export default (connections: [string, string][]) => {
	const parties: Party = new Map();

	for (const [a, b] of connections) {
		const pA = parties.get(a) ?? new Map();
		const pB = parties.get(b) ?? new Map();

		parties.set(a, pA);
		parties.set(b, pB);

		pA.set(b, pB);
		pB.set(a, pA);
	}

	const groups = new Map<string, number>();
	let group = "";
	let biggest = 0;

	for (const [id, party] of parties) {
		const combinations = getCombinations([id, ...party.keys()].sort());

		for (const combination of combinations) {
			const key = combination.join();
			const size = (groups.get(key) ?? 0) + 1;

			groups.set(key, size);

			if (size > biggest && size === combination.length) {
				biggest = size;
				group = key;
			}
		}
	}

	return group;
};

type Party = Map<string, Party>;

type Combo = {
	group: string;
	length: number;
};

function getCombinations(values: string[]) {
	const combinations: Combo[] = [];
	const combosByLength: Combo[][] = new Array(values.length);
	let group: string[] = [];

	for (let i = 0; i < 2 ** values.length; i++) {
		group = [];

		for (let j = 0; j < values.length; j++) {
			if (i & (2 ** j)) {
				group.push(values[j]);
			}
		}

		const length = group.length;

		if (length >= 3) {
			combosByLength[length] ??= [];
			combosByLength[length].push({
				group: group.join(),
				length,
			});
		}
	}

	for (let i = values.length - 1; i >= 0; i--) {
		if (!combosByLength[i]) continue;

		combinations.push(...combosByLength[i]);
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

	const combinations = new Map<string, Combo[]>();
	let length = 0;

	for (const [id, party] of parties) {
		const combos = getCombinations([id, ...party.keys()].sort());

		if (combos.length) {
			length = Math.max(length, combos.length ?? 0);

			combinations.set(id, combos);
		}
	}

	const groups = new Map<string, number>();

	for (let i = 0; i < length; i++) {
		for (const [, combos] of combinations) {
			const combo = combos[i];

			if (!combo) continue;

			const { group, length } = combo;

			const size = (groups.get(group) ?? 0) + 1;

			groups.set(group, size);

			if (size === length) {
				return group;
			}
		}
	}
};

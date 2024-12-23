type Party = Map<string, Party>;

export default (connections: [string, string][], startsWith: string) => {
	const parties: Party = new Map();
	const ids = new Set<string>();

	for (const [a, b] of connections) {
		const pA = parties.get(a) ?? new Map();
		const pB = parties.get(b) ?? new Map();

		parties.set(a, pA);
		parties.set(b, pB);

		pA.set(b, pB);
		pB.set(a, pA);

		if (a.startsWith(startsWith)) {
			ids.add(a);
		}

		if (b.startsWith(startsWith)) {
			ids.add(b);
		}
	}

	return Array.from(ids).reduce((acc, a) => {
		const party = parties.get(a);

		if (!party) return acc;

		const entries = party.entries();

		for (const [b, value] of entries) {
			const keys = value.keys().toArray();
			for (const c of keys) {
				if (c !== a && party.has(c)) {
					acc.add([a, b, c].sort().join());
				}
			}
		}

		return acc;
	}, new Set<string>()).size;
};

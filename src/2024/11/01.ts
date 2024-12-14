export default (values: number[], iterations: number) => {
	const cache: Record<number, number[]> = {};
	let active = new Set(values);
	let multiples = new Map<number, number>();

	for (const value of values) {
		multiples.set(value, (multiples.get(value) ?? 0) + 1);
	}

	for (let i = 0; i < iterations; i++) {
		const a = new Set<number>();

		for (const value of active) {
			cache[value] ??= [];

			const result = cache[value];

			if (!result.length) {
				const val = `${value}`;

				if (value === 0) {
					result.push(1);
					a.add(1);
				} else if (val.length % 2 === 0) {
					const half = val.length / 2;
					const left = Number(val.slice(0, half));
					const right = Number(val.slice(half));

					result.push(left, right);
					a.add(left);
					a.add(right);
				} else {
					const product = value * 2024;

					result.push(product);
					a.add(product);
				}
			}
		}

		active = a;

		const m = new Map<number, number>();

		for (const [value, times] of multiples) {
			const iteration = cache[value];

			for (const val of iteration) {
				m.set(val, (m.get(val) ?? 0) + times);
			}
		}

		multiples = m;
	}

	return multiples.values().reduce((acc, count) => acc + count, 0);
};

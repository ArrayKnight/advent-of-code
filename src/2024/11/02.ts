export default (stones: number[]) => {
	const cache: Record<number, number[]> = {};
	let active = new Set(stones);
	let i = 0;

	while (active.size && i < 75) {
		const next = new Set<number>();

		for (const value of active) {
			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			const result = (cache[value] ??= []);

			if (!result.length) {
				const val = `${value}`;

				if (value === 0) {
					result.push(1);
					next.add(1);
				} else if (val.length % 2 === 0) {
					const half = val.length / 2;
					const left = Number(val.slice(0, half));
					const right = Number(val.slice(half));

					result.push(left, right);
					next.add(left);
					next.add(right);
				} else {
					const product = value * 2024;

					result.push(product);
					next.add(product);
				}
			}
		}

		active = next;
		i++;
	}

	let multiples = new Map<number, number>();

	for (const value of stones) {
		multiples.set(value, (multiples.get(value) ?? 0) + 1);
	}

	for (let i = 0; i < 75; i++) {
		const next = new Map<number, number>();

		for (const [value, times] of multiples) {
			const iteration = cache[value];

			for (const val of iteration) {
				next.set(val, (next.get(val) ?? 0) + times);
			}
		}

		multiples = next;
	}

	return multiples.values().reduce((acc, count) => acc + count, 0);
};

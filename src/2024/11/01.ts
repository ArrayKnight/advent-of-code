export default (stones: number[]) => {
	let values: number[] = stones;

	for (let i = 1; i <= 25; i++) {
		const next: number[] = [];

		for (const value of values) {
			const val = `${value}`;

			if (value === 0) {
				next.push(1);
			} else if (val.length % 2 === 0) {
				const half = val.length / 2;

				next.push(Number(val.slice(0, half)), Number(val.slice(half)));
			} else {
				next.push(value * 2024);
			}
		}

		values = next;
	}

	return values.length;
};

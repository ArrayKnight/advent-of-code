import func from "./01";

type Input = {
	register: {
		A: bigint;
		B: bigint;
		C: bigint;
	};
	program: bigint[];
};

export default ({ register: { B, C }, program }: Input) => {
	const expected = program.join();
	const attempts = [{ a: 0n, index: -1 }];
	const answers: bigint[] = [];

	while (attempts.length) {
		const attempt = attempts.pop();

		if (!attempt) return;

		const { a, index } = attempt;

		for (let add = 0n; add < 8n; add++) {
			const A = a * 8n + add;
			const result = func({
				register: {
					A,
					B,
					C,
				},
				program,
			});

			if (result === expected) {
				answers.push(A);
				continue;
			}

			if (result.at(index) === expected.at(index)) {
				attempts.push({ a: A, index: index - 2 });
			}
		}
	}

	answers.sort((a, b) => Number(a - b));

	return answers[0];
};

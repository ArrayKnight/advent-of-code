type Input = {
	register: {
		A: bigint;
		B: bigint;
		C: bigint;
	};
	program: bigint[];
};

export default ({ register, program }: Input) => {
	const output: bigint[] = [];
	let i = 0;
	const combo: Record<number, () => bigint> = {
		0: () => 0n,
		1: () => 1n,
		2: () => 2n,
		3: () => 3n,
		4: () => register.A,
		5: () => register.B,
		6: () => register.C,
		7: () => {
			throw new Error();
		},
	};
	// biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
	const opcodes: Record<number, (value: bigint) => void | boolean> = {
		// adv
		0: (c: bigint) => {
			register.A = register.A / 2n ** combo[Number(c)]();
		},
		// bxl
		1: (l: bigint) => {
			register.B ^= l;
		},
		// bst
		2: (c: bigint) => {
			register.B = combo[Number(c)]() % 8n;
		},
		// jnz
		3: (l: bigint) => {
			if (register.A === 0n) return false;

			i = Number(l);

			return true;
		},
		// bxc
		4: (_: bigint) => {
			register.B ^= register.C;
		},
		// out
		5: (c: bigint) => {
			output.push(combo[Number(c)]() % 8n);
		},
		// bdv
		6: (c: bigint) => {
			register.B = register.A / 2n ** combo[Number(c)]();
		},
		// cdv
		7: (c: bigint) => {
			register.C = register.A / 2n ** combo[Number(c)]();
		},
	};

	while (i < program.length - 1) {
		const oc = program[i];
		const op = program[i + 1];

		if (!opcodes[Number(oc)](op)) {
			i += 2;
		}
	}

	return output.join();
};

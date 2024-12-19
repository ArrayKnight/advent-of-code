type Input = {
	patterns: string[];
	designs: string[];
};

export default ({ designs, patterns }: Input) => {
	return designs.reduce((acc, design) => {
		const indexed: string[][] = new Array(design.length);

		for (const pattern of patterns) {
			let i = 0;

			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			while ((i = design.indexOf(pattern, i)) >= 0) {
				indexed[i] ??= [];
				indexed[i].push(pattern);
				i++;
			}
		}

		const counts = new Map([["", 1]]);

		for (let i = 0; i < design.length; i++) {
			const str = design.slice(0, i);
			const count = counts.get(str) ?? 0;
			const strings = indexed[str.length] ?? [];

			for (const s of strings) {
				counts.set(str + s, (counts.get(str + s) ?? 0) + count);
			}
		}

		return acc + (counts.get(design) ?? 0);
	}, 0);
};

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
			const patterns = indexed[str.length] ?? [];

			for (const pattern of patterns) {
				const key = str + pattern;

				counts.set(key, (counts.get(key) ?? 0) + count);
			}
		}

		return acc + (counts.get(design) ?? 0);
	}, 0);
};

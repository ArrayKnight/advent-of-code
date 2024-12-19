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

		const strings = [""];

		while (strings.length) {
			const str = strings.pop();

			if (str === undefined) return acc;

			if (str === design) return acc + 1;

			if (str.length >= design.length) continue;

			const patterns = indexed[str.length] ?? [];

			for (const pattern of patterns) {
				strings.push(str + pattern);
			}
		}

		return acc;
	}, 0);
};

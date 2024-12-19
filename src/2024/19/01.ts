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

		const attempts = [""];

		while (attempts.length) {
			const str = attempts.pop();

			if (str === undefined) return acc;

			if (str === design) return acc + 1;

			if (str.length >= design.length || !indexed[str.length]) continue;

			for (const s of indexed[str.length]) {
				attempts.push(str + s);
			}
		}

		return acc;
	}, 0);
};

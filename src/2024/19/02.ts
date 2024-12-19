type Input = {
	patterns: string[];
	designs: string[];
};

export default ({ designs, patterns }: Input) => {
	return designs.reduce((acc, design) => {
		const indexed: string[][] = new Array(design.length);

		for (const pattern of patterns) {
			let copy = design;
			let match: RegExpExecArray | null;

			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			while ((match = new RegExp(pattern, "g").exec(copy))) {
				indexed[match.index + (design.length - copy.length)] ??= [];
				indexed[match.index + (design.length - copy.length)].push(pattern);

				copy = copy.slice(match.index + 1);
			}
		}

		const attempts = new Map([["", 1]]);

		for (let i = 0; i <= design.length; i++) {
			const str = design.slice(0, i);
			const count = attempts.get(str) ?? 0;
			const strings = indexed[str.length];

			if (str === design) return acc + count;

			if (!strings) continue;

			for (const s of strings) {
				attempts.set(str + s, (attempts.get(str + s) ?? 0) + count);
			}
		}

		return acc;
	}, 0);
};

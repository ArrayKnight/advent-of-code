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

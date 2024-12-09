export default (input: string[]) => {
	let result = 0;
	let should = true;

	for (const line of input) {
		const reg = /(?:(do\(\))|(don't\(\))|(mul\((\d{1,3}),(\d{1,3})\)))/g;
		let match: RegExpExecArray | null;

		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		while ((match = reg.exec(line))) {
			const [, yes, no, multiply, a, b] = match;

			if (yes) {
				should = true;
			}

			if (no) {
				should = false;
			}

			if (should && multiply) {
				result += Number(a) * Number(b);
			}
		}
	}

	return result;
};

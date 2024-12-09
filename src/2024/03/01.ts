export default (input: string[]) => {
	let result = 0;

	for (const line of input) {
		const reg = /mul\((\d{1,3}),(\d{1,3})\)/g;
		let match: RegExpExecArray | null;

		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		while ((match = reg.exec(line))) {
			const [, a, b] = match;

			result += Number(a) * Number(b);
		}
	}

	return result;
};

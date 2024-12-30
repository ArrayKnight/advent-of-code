export type Input = {
	inputs: Record<string, number>;
	outputs: {
		condition: [string, string, string];
		output: string;
	}[];
};

function and(a: number, b: number) {
	return a === 1 && b === 1 ? 1 : 0;
}

function or(a: number, b: number) {
	return a === 1 || b === 1 ? 1 : 0;
}

function xor(a: number, b: number) {
	return a !== b ? 1 : 0;
}

export const operators: Record<string, (a: number, b: number) => number> = {
	AND: and,
	OR: or,
	XOR: xor,
};

export function toId(base: string, index: number) {
	const num = `${index}`.padStart(2, "0");

	return `${base}${num}`;
}

export function getValue(values: Record<string, number>, base: string) {
	let i = 0;
	let key: string;
	const binary: number[] = [];

	while (
		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		(key = toId(base, i)) &&
		Object.hasOwn(values, key)
	) {
		binary.unshift(values[key] ?? Number.NaN);
		i++;
	}

	return binary;
}

export function process({ inputs, outputs }: Input) {
	const values: Record<string, number> = { ...inputs };

	const processing = outputs.slice();

	while (processing.length) {
		const output = processing.shift();

		if (!output) break;

		const [a, operand, b] = output.condition;
		const vA = values[a];
		const vB = values[b];

		if (vA === undefined || vB === undefined) {
			processing.push(output);

			continue;
		}

		values[output.output] = operators[operand](vA, vB);
	}

	return values;
}

export function toNumber(binary: number[]) {
	return Number.parseInt(binary.join(""), 2);
}

export default (input: Input) => {
	return toNumber(getValue(process(input), "z"));
};

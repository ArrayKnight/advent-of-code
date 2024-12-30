import { toId, getValue, type Input, operators, process, toNumber } from "./01";
import { assert } from "../../utils";

type Calculation = {
	aId: string;
	bId: string;
	rId: string;
	operand: string;
};

function parseId(value: string) {
	let base = "";
	let index = "";

	for (const char of value) {
		if (Number.isNaN(Number(char))) {
			base += char;
		} else {
			index += char;
		}
	}

	return {
		base,
		index: index ? Number(index) : null,
	};
}

function getBit(value: number[], index: number) {
	return value[value.length - 1 - index];
}

type ValidatorInputs = {
	calculation: Calculation;
	calculationsByInput: Map<string, Calculation[]>;
	calculationsByOperand: Map<string, Map<string, Map<string, Calculation>>>;
	incorrect: Set<string>;
	index: number;
	length: number;
	values: Map<string, number>;
	aId: string;
	aValue: number;
	bId: string;
	bValue: number;
	cId?: string;
	cValue?: number;
};
type Validator = (inputs: ValidatorInputs) => string;

function findCarry(
	calculationsByInput: Map<string, Calculation[]>,
	usedCalculations: Set<Calculation>,
) {
	for (const { rId } of usedCalculations) {
		const calculations = calculationsByInput.get(rId) ?? [];

		for (const calculation of calculations) {
			if (!usedCalculations.has(calculation)) {
				return rId;
			}
		}
	}

	return "";
}

function findNext(
	calculationsByOperand: Map<string, Map<string, Map<string, Calculation>>>,
	ids: string[],
	operand: string,
	usedCalculations: Set<Calculation>,
) {
	const calculations =
		calculationsByOperand.get(operand) ??
		new Map<string, Map<string, Calculation>>();

	for (let i = 0; i < ids.length - 1; i++) {
		const aId = ids[i];

		for (let j = i + 1; j < ids.length; j++) {
			const bId = ids[j];

			const calculation = calculations.get(aId)?.get(bId);

			if (calculation && !usedCalculations.has(calculation)) {
				return calculation;
			}
		}
	}
}

const validators: Record<string, Validator> = {
	MINI: ({ calculation, incorrect, index }) => {
		if (calculation.rId !== toId("z", index)) {
			incorrect.add(calculation.rId);
		}

		// Example doesn't deal with carry over
		return "";
	},
	HALF: ({
		calculation,
		calculationsByInput,
		calculationsByOperand,
		incorrect,
		index,
		aId,
		bId,
	}) => {
		if (calculation.rId !== toId("z", index)) {
			incorrect.add(calculation.rId);
		}

		const AND = calculationsByOperand.get("AND")?.get(aId)?.get(bId);

		assert(AND);

		return findCarry(calculationsByInput, new Set([AND, calculation]));
	},
	FULL: (inputs) => {
		const {
			calculation,
			calculationsByInput,
			calculationsByOperand,
			incorrect,
			index,
			length,
			aId,
			bId,
			cId,
			cValue,
		} = inputs;

		if (cId == null) return validators.HALF(inputs);

		assert(cId);
		assert(cValue);

		const calculations = new Set<Calculation>([calculation]);
		const ids = [aId, bId, cId, calculation.rId];

		if (
			parseId(calculation.rId).base === "z" ||
			calculationsByInput
				.get(calculation.rId)
				?.some(({ operand }) => operand === "OR")
		) {
			incorrect.add(calculation.rId);
		}

		const AND1 =
			calculationsByOperand.get("AND")?.get(aId)?.get(bId) ??
			findNext(calculationsByOperand, ids, "AND", calculations);

		assert(AND1);

		calculations.add(AND1);
		ids.push(AND1.rId);

		if (
			parseId(AND1.rId).base === "z" ||
			calculationsByInput
				.get(AND1.rId)
				?.some(({ operand }) => operand === "XOR")
		) {
			incorrect.add(AND1.rId);
		}

		const XOR =
			calculationsByOperand.get("XOR")?.get(cId)?.get(calculation.rId) ??
			findNext(calculationsByOperand, ids, "XOR", calculations);

		assert(XOR);

		calculations.add(XOR);
		ids.push(XOR.rId);

		if (
			XOR.rId !== toId("z", index) ||
			calculationsByInput.get(XOR.rId)?.some(({ operand }) => operand === "OR")
		) {
			incorrect.add(XOR.rId);
		}

		const AND2 =
			calculationsByOperand.get("AND")?.get(cId)?.get(calculation.rId) ??
			findNext(calculationsByOperand, ids, "AND", calculations);

		assert(AND2);

		calculations.add(AND2);
		ids.push(AND2.rId);

		if (
			parseId(AND2.rId).base === "z" ||
			calculationsByInput
				.get(AND2.rId)
				?.some(({ operand }) => operand === "XOR")
		) {
			incorrect.add(AND2.rId);
		}

		const OR =
			calculationsByOperand.get("OR")?.get(AND1.rId)?.get(AND2.rId) ??
			findNext(calculationsByOperand, ids, "OR", calculations);

		assert(OR);

		calculations.add(OR);
		ids.push(OR.rId);

		if (index !== length - 1 && parseId(OR.rId).base === "z") {
			incorrect.add(OR.rId);
		}

		return findCarry(calculationsByInput, calculations);
	},
};

export default (input: Input) => {
	const { outputs } = input;
	const values = process(input);
	const calculationsByInput = new Map<string, Calculation[]>();
	const calculationsByOperand = new Map<
		string,
		Map<string, Map<string, Calculation>>
	>();

	for (const { condition, output: rId } of outputs) {
		const [aId, operand, bId] = condition;
		const calc = {
			aId,
			bId,
			rId,
			operand,
		};

		let calculations = calculationsByInput.get(aId) ?? [];

		calculationsByInput.set(aId, calculations);
		calculations.push(calc);

		calculations = calculationsByInput.get(bId) ?? [];

		calculationsByInput.set(bId, calculations);
		calculations.push(calc);

		const opMap = calculationsByOperand.get(operand) ?? new Map();
		const aMap = opMap.get(aId) ?? new Map();
		const bMap = opMap.get(bId) ?? new Map();

		opMap.set(aId, aMap);
		opMap.set(bId, bMap);
		aMap.set(bId, calc);
		bMap.set(aId, calc);
		calculationsByOperand.set(operand, opMap);
	}

	const xValue = getValue(values, "x");
	const yValue = getValue(values, "y");
	const incorrect = new Set<string>();
	const length = xValue.length;
	let cId: string | undefined = undefined;

	for (let i = 0; i < length; i++) {
		const aId = toId("x", i);
		const aValue = getBit(xValue, i);
		const bId = toId("y", i);
		const bValue = getBit(yValue, i);
		const cValue = cId ? values.get(cId) : undefined;

		// Would need to be more complex if more types of adders were supported
		const AND = calculationsByOperand.get("AND")?.get(aId)?.get(bId);
		const XOR = calculationsByOperand.get("XOR")?.get(aId)?.get(bId);
		const calculation = XOR ?? AND;

		assert(calculation);

		// Would need to be more complex if more types of adders were supported
		const validator = validators[XOR ? "FULL" : "MINI"];

		cId = validator({
			calculation,
			calculationsByInput,
			calculationsByOperand,
			incorrect,
			index: i,
			length,
			values,
			aId,
			aValue,
			bId,
			bValue,
			cId,
			cValue,
		});
	}

	return Array.from(incorrect).sort().join(",");
};

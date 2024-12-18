import { expect, it } from "vitest";
import { TimeUtils } from "../../utils";
import func from "./01";

function process(input: string) {
	const [registers, program] = input.split("\n\n");

	return {
		register: registers.split("\n").reduce(
			(acc, register) => {
				const [, key, value] = /([A-C]): (\d+)/.exec(register) ?? [];

				acc[key as "A" | "B" | "C"] = BigInt(value);

				return acc;
			},
			{ A: 0n, B: 0n, C: 0n },
		),
		program: program.replace("Program: ", "").split(",").map(BigInt),
	};
}

const example = process(`Register A: 729
Register B: 0
Register C: 0

Program: 0,1,5,4,3,0`);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example))).toBe("4,6,3,5,6,3,5,2,1,0");
});

const challenge = process(`Register A: 22571680
Register B: 0
Register C: 0

Program: 2,4,1,3,7,5,0,3,4,3,1,5,5,5,3,0`);

it("should pass challenge", () => {
	expect(TimeUtils.log(() => func(challenge))).toBe("2,0,1,3,4,0,2,1,7");
});

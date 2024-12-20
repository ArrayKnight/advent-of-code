import { expect, it } from "bun:test";
import { TimeUtils } from "../../utils";
import func from "./01";

function process(input: string) {
	return input.split(" ").map(Number);
}

const example = process("125 17");

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example, 25))).toBe(55312);
});

const challenge = process("5 127 680267 39260 0 26 3553 5851995");

it("should pass challenge", () => {
	expect(TimeUtils.log(() => func(challenge, 25))).toBe(216042);
});

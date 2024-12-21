import { expect, it } from "bun:test";
import { TimeUtils } from "../../utils";
import func from "./01";

function process(input: string) {
	return input.split("\n");
}

const example = process(`029A
980A
179A
456A
379A`);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example, 2))).toBe(126384);
});

const challenge = process(`964A
246A
973A
682A
180A`);

it("should pass challenge", () => {
	expect(TimeUtils.log(() => func(challenge, 2))).toBe(212488);
});

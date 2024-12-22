import { expect, it } from "bun:test";
import { TimeUtils } from "../../utils";
import func from "./01";

function process(input: string) {
	return input.split("\n");
}

const challenge = process(`964A
246A
973A
682A
180A`);

it("should pass challenge", () => {
	expect(TimeUtils.log(() => func(challenge, 25))).toBe(258263972600402);
});

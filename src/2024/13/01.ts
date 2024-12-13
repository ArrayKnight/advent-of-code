import type { Position } from "../../types";

type Game = {
	a: Position;
	b: Position;
	prize: Position;
};

const COST = {
	a: 3,
	b: 1,
};

export default (games: Game[]) => {
	let total = 0;

	for (const { a, b, prize } of games) {
		const cA =
			(b[1] * prize[0] - b[0] * prize[1]) / (b[1] * a[0] - b[0] * a[1]);

		if (Math.round(cA) !== cA) {
			continue;
		}

		const cB = (a[0] * cA - prize[0]) / (b[0] * -1);

		total += COST.a * cA + COST.b * cB;
	}

	return total;
};

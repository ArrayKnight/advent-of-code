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
		const [aX, aY] = a;
		const [bX, bY] = b;
		const [pX, pY] = prize;
		/**
		 * Find intersection of two slopes
		 *
		 * Start with defining slopes:
		 * aX * aCount + bX * bCount = pX
		 * aY * aCount + bY * bCount = pY
		 *
		 * Solve for aCount:
		 * bCount = (pX - aX * aCount) / bX
		 * bCount = (pY - aY * aCount) / bY
		 *
		 * (pX - aX * aCount) / bX = (pY - aY * aCount) / bY
		 * bY * (pX - aX * aCount) = bX * (pY - aY * aCount)
		 * bY * pX - bY * aX * aCount = bX * pY - bX * aY * aCount
		 * bY * pX - bX * pY = bY * aX * aCount - bX * aY * aCount
		 * (bY * pX - bX * pY) / (bY * aX - bX * aY) = aCount
		 */
		const aCount = (bY * pX - bX * pY) / (bY * aX - bX * aY);

		// Solution can't involve partial button presses
		if (!Number.isInteger(aCount)) {
			continue;
		}

		const bCount = (pX - aX * aCount) / bX;

		total += COST.a * aCount + COST.b * bCount;
	}

	return total;
};

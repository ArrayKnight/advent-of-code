import type { Grid } from "../../types";

export default (rules: Grid<number>, updates: Grid<number>) => {
	const lookup = rules.reduce<Record<number, Record<number, boolean>>>(
		(acc, rule) => {
			const [before, after] = rule;

			acc[before] ??= {};
			acc[before][after] = true;

			return acc;
		},
		{},
	);

	return updates.reduce((acc, update) => {
		let corrected = false;
		let i = update.length - 1;
		let j = i - 1;

		while (i > 0) {
			const a = update[i];
			const b = update[j];

			if (lookup[a]?.[b]) {
				update[i] = b;
				update[j] = a;
				corrected = true;
			}

			j--;

			if (j < 0) {
				i--;
				j = i - 1;
			}
		}

		return acc + (corrected ? update[Math.floor(update.length / 2)] : 0);
	}, 0);
};

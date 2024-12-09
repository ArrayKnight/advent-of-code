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
		for (let i = update.length - 1; i >= 1; i--) {
			const a = update[i];

			for (let j = i - 1; j >= 0; j--) {
				const b = update[j];

				if (lookup[a]?.[b]) {
					return acc;
				}
			}
		}

		return acc + update[Math.floor(update.length / 2)];
	}, 0);
};

import type { Grid } from "../../types";

type Operator = (a: number, b: number) => number;

function canProduce(total: number, values: number[], operators: Operator[]) {
	let totals = [values[0]];

	for (let i = 1; i < values.length; i++) {
		const value = values[i];
		const subtotals: number[] = [];

		for (let j = 0; j < totals.length; j++) {
			const subtotal = totals[j];

			for (const operator of operators) {
				subtotals.push(operator(subtotal, value));
			}
		}

		totals = subtotals;
	}

	return totals.includes(total);
}

export default (grid: Grid<number>, operators: Operator[]) => {
	return grid.reduce((acc, line) => {
		const [total, ...values] = line;

		return acc + (canProduce(total, values, operators) ? total : 0);
	}, 0);
};

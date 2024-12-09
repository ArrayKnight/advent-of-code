import type { Grid } from "../../types";

function canProduce(total: number, values: number[]): boolean {
	let totals = [values[0]];

	for (let i = 1; i < values.length; i++) {
		const value = values[i];
		const subtotals: number[] = [];

		for (let j = 0; j < totals.length; j++) {
			const subtotal = totals[j];
			const combo = Number(`${subtotal}${value}`);
			const sum = subtotal + value;
			const product = subtotal * value;

			subtotals.push(combo, sum, product);
		}

		totals = subtotals;
	}

	return totals.includes(total);
}

export default (grid: Grid<number>) => {
	return grid.reduce((acc, line) => {
		const [total, ...values] = line;

		return acc + (canProduce(total, values) ? total : 0);
	}, 0);
};

import type { Grid } from "../../types";

function isSafe(report: number[]) {
	const isIncreasing = report[0] < report[1];

	for (let i = 1; i < report.length; i++) {
		const prev = report[i - 1];
		const curr = report[i];
		const isInc = prev < curr;
		const delta = Math.abs(curr - prev);

		if (isInc !== isIncreasing || delta < 1 || delta > 3) {
			return false;
		}
	}

	return true;
}

export default (reports: Grid<number>) => reports.filter(isSafe).length;

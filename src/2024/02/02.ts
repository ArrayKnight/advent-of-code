import type { Grid } from "../../types";

// WIP: not working, attempt at O(nm) instead of O(nm^2)
// type Relationship = {
// 	value: number;
// 	diff: number;
// 	isIncreasing: boolean;
// 	isUnsafe: boolean;
// } | null;

// type Meta = {
// 	value: number;
// 	left: Relationship;
// 	right: Relationship;
// 	isDroppable: boolean;
// 	isUnsafe: boolean;
// };

// function isSafe(report: number[]) {
// 	const meta: Meta[] = [];

// 	for (let i = 0; i < report.length; i++) {
// 		const value = report[i];
// 		const left = i > 0 ? meta[i - 1].right : null;
// 		const right =
// 			i < report.length - 1
// 				? (() => {
// 						const next = report[i + 1];
// 						const diff = Math.abs(next - value);
// 						const isIncreasing = next > value;

// 						return {
// 							value: next,
// 							diff,
// 							isIncreasing,
// 							isUnsafe:
// 								diff < 1 ||
// 								diff > 3 ||
// 								(!!left && left.isIncreasing !== isIncreasing),
// 						};
// 					})()
// 				: null;

// 		meta.push({
// 			value,
// 			left,
// 			right,
// 			isDroppable:
// 				!left ||
// 				!right ||
// 				(left.diff + right.diff <= 3 &&
// 					left.isIncreasing === right.isIncreasing),
// 			isUnsafe: !!left?.isUnsafe || !!right?.isUnsafe,
// 		});
// 	}

// 	let dropped = 0;

// 	for (let i = 0; i < meta.length; i++) {
// 		const { isDroppable, isUnsafe } = meta[i];

// 		if (isUnsafe && isDroppable) {
// 			if (dropped) {
// 				return false;
// 			}

// 			dropped++;
// 		}
// 	}

// 	return true;
// }

// console.log(reports.filter(isSafe).length);

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

export default (reports: Grid<number>) =>
	reports.reduce((acc, report) => {
		if (isSafe(report)) {
			return acc + 1;
		}

		for (let i = 0; i < report.length; i++) {
			const redacted = [...report];

			redacted.splice(i, 1);

			if (isSafe(redacted)) {
				return acc + 1;
			}
		}

		return acc;
	}, 0);

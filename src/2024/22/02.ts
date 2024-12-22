import { next } from "./01";

export default (secrets: bigint[]) => {
	const totals = new Map<string, bigint>();
	const indexOf = new Map<string, number>();
	let best = BigInt(Number.MIN_SAFE_INTEGER);

	for (const secret of secrets) {
		let previous = secret;
		let prev = previous % 10n;
		const diffs: bigint[] = [];

		for (let i = 0; i < 2000; i++) {
			const current = next(previous);
			const curr = current % 10n;

			diffs.push(curr - prev);
			previous = current;
			prev = curr;

			const length = diffs.length;

			if (length < 4) continue;

			if (length > 4) {
				diffs.shift();
			}

			const totalKey = diffs.join();
			const indexKey = `${totalKey}:${secret}`;

			if (indexOf.has(indexKey)) continue;

			indexOf.set(indexKey, i);

			const total = (totals.get(totalKey) ?? 0n) + curr;

			totals.set(totalKey, total);

			if (total > best) {
				best = total;
			}
		}
	}

	return best;
};

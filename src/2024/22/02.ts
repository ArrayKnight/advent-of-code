import { next } from "./01";

function last(int: bigint) {
	return int % 10n;
}

function diff(a: bigint, b: bigint) {
	return a - b;
}

export default (secrets: bigint[]) => {
	const latest = new Map<bigint, bigint>(
		secrets.map((secret) => [secret, secret]),
	);
	const diffs = new Map<bigint, bigint[]>(
		secrets.map((secret) => [secret, []]),
	);
	const totals = new Map<string, bigint>();
	const indexOf = new Map<string, number>();
	let best = BigInt(Number.MIN_SAFE_INTEGER);

	for (const secret of secrets) {
		for (let i = 0; i < 2000; i++) {
			const latestDiffs = diffs.get(secret) ?? [];
			const previous = latest.get(secret) ?? secret;
			const prev = last(previous);
			const current = next(previous);
			const curr = last(current);

			latest.set(secret, current);
			latestDiffs.push(diff(curr, prev));

			if (latestDiffs.length < 4) continue;

			if (latestDiffs.length > 4) {
				latestDiffs.shift();
			}

			const totalKey = latestDiffs.join();
			const indexKey = `${totalKey}:${secret}`;

			if (indexOf.has(indexKey)) continue;

			const total = (totals.get(totalKey) ?? 0n) + curr;

			totals.set(totalKey, total);
			indexOf.set(indexKey, i);

			if (total > best) {
				best = total;
			}
		}
	}

	return best;
};

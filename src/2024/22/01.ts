function mix(a: bigint, b: bigint) {
	return a ^ b;
}

function prune(a: bigint) {
	return a % 16777216n;
}

export function next(secret: bigint) {
	let s = secret;
	let result = s * 64n;

	s = mix(s, result);
	s = prune(s);

	result = s / 32n;

	s = mix(s, result);
	s = prune(s);

	result = s * 2048n;

	s = mix(s, result);
	s = prune(s);

	return s;
}

export default (secrets: bigint[]) => {
	return secrets.reduce((acc, secret) => {
		let s = secret;

		for (let i = 0; i < 2000; i++) {
			s = next(s);
		}

		return acc + s;
	}, 0n);
};

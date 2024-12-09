type File = {
	id: number;
	size: number;
	part: number;
};

export default (dense: number[]) => {
	const expanded: (File | null)[] = [];

	for (const [index, value] of dense.entries()) {
		for (let i = 0; i < value; i++) {
			expanded.push(
				index % 2 === 0 ? { id: index / 2, size: value, part: i } : null,
			);
		}
	}

	let l = 0;
	let r = expanded.length - 1;

	while (r > l) {
		if (expanded[l]) {
			l++;
			continue;
		}

		if (!expanded[r]) {
			r--;
			continue;
		}

		expanded[l] = expanded[r];
		expanded[r] = null;

		r--;
	}

	return expanded.reduce(
		(acc, value, index) => acc + (value ? value.id * index : 0),
		0,
	);
};

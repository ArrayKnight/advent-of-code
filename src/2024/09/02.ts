type File = {
	id: number;
	size: number;
	index: number;
};

type Space = {
	size: number;
	index: number;
};

export default (dense: number[]) => {
	const expanded: (File | Space)[] = [];
	const files: File[] = [];
	const spaces = new Map<number, number[]>();

	function allocate(size: number, index: number, sort = false) {
		const space = spaces.get(size) ?? [];

		spaces.set(size, space);

		space.push(index);

		if (sort) {
			space.sort((a, b) => a - b);
		}
	}

	for (const [index, value] of dense.entries()) {
		let file: File | null = null;
		let space: Space | null = null;

		if (index % 2 === 0) {
			file = { id: index / 2, size: value, index: expanded.length };

			files.push(file);
		} else if (value) {
			space = { size: value, index: expanded.length };

			allocate(value, expanded.length);
		}

		if (!file && !space) {
			continue;
		}

		for (let i = 0; i < value; i++) {
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			expanded.push(file ?? space!);
		}
	}

	for (let i = files.length - 1; i >= 0; i--) {
		const file = files[i];
		const [size, index] = spaces.entries().reduce(
			(acc, [size, indices]) => {
				if (size >= file.size && indices[0] < acc[1]) {
					return [size, indices[0]];
				}

				return acc;
			},
			[Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
		);

		if (!size) {
			continue;
		}

		const delta = size - file.size;

		if (index == null || index > file.index) {
			continue;
		}

		spaces.get(size)?.shift();

		for (let j = 0; j < file.size; j++) {
			expanded[index + j] = expanded[file.index + j];
		}

		if (delta) {
			let j = index + size;
			let s = delta;

			while (!("id" in expanded[j])) {
				j++;
				s++;
			}

			allocate(s, index + file.size, true);
		}

		let j = file.index;
		let s = 0;
		let e: File | Space;

		while (
			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			(e = expanded[j]) &&
			(!("id" in e) || e.id === file.id)
		) {
			j++;
			s++;
		}

		allocate(s, file.index, true);

		for (let k = 0; k < s; k++) {
			expanded[file.index + k] = { size: s, index: file.index };
		}
	}

	return expanded.reduce(
		(acc, value, index) => acc + ("id" in value ? value.id * index : 0),
		0,
	);
};

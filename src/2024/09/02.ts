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

		for (let i = 0; i < value; i++) {
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			expanded.push(file ?? space!);
		}
	}

	for (let i = files.length - 1; i >= 0; i--) {
		const file = files[i];

		let size = Number.POSITIVE_INFINITY;
		let indices: number[] = [];
		let index = Number.POSITIVE_INFINITY;

		for (let j = file.size; j < 10; j++) {
			const idc = spaces.get(j) ?? [];

			if (idc[0] < index) {
				indices = idc;
				index = idc[0];
				size = j;
			}
		}

		const delta = size - file.size;

		if (index > file.index) {
			continue;
		}

		indices.shift();

		for (let j = 0; j < size; j++) {
			if (j < file.size) {
				expanded[index + j] = expanded[file.index + j];
				expanded[file.index + j] = { size: 0, index: file.index };
			} else {
				expanded[index + j] = { size, index: index + file.size };
			}
		}

		if (delta) {
			allocate(delta, index + file.size, true);
		}
	}

	return expanded.reduce(
		(acc, value, index) => acc + ("id" in value ? value.id * index : 0),
		0,
	);
};

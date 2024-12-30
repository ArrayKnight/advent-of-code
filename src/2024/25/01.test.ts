import { expect, it } from "bun:test";
import { GridUtils, TimeUtils } from "../../utils";
import func from "./01";

function process(input: string) {
	return input.split("\n\n").map((chunk) => GridUtils.parse(chunk));
}

const example = process(`#####
.####
.####
.####
.#.#.
.#...
.....

#####
##.##
.#.##
...##
...#.
...#.
.....

.....
#....
#....
#...#
#.#.#
#.###
#####

.....
.....
#.#..
###..
###.#
###.#
#####

.....
.....
.....
#....
#.#..
#.#.#
#####`);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example))).toBe(3);
});

const challenge = process(`.....
#....
#....
##..#
###.#
#####
#####

#####
###.#
###..
.##..
..#..
.....
.....

.....
.....
.....
.#...
##...
###.#
#####

#####
#####
##.#.
##...
.#...
.#...
.....

#####
###.#
###.#
###..
##...
.#...
.....

#####
###.#
.#..#
....#
....#
....#
.....

#####
#####
.##.#
.##.#
..#.#
..#..
.....

#####
##.##
##.##
##.##
.#.##
.#..#
.....

#####
#####
##.##
#..##
#..#.
.....
.....

.....
.....
#..#.
#..#.
##.#.
##.#.
#####

#####
#####
#####
###.#
#.#.#
#....
.....

#####
.####
.####
.#.##
...##
...#.
.....

.....
#....
##...
##..#
##.##
##.##
#####

#####
##.##
.#.##
.#.#.
.#.#.
.....
.....

.....
...#.
#..#.
#..#.
##.##
#####
#####

#####
####.
#.#..
#.#..
..#..
..#..
.....

#####
#####
#.##.
#.##.
#.##.
..#..
.....

.....
...#.
...#.
..###
..###
#.###
#####

.....
.....
.....
...#.
.#.#.
##.#.
#####

#####
####.
.###.
.#.#.
.#.#.
.....
.....

#####
#####
##.##
##..#
.#..#
....#
.....

.....
..#..
..#..
.##..
.##..
###.#
#####

.....
.#...
##...
##...
##..#
###.#
#####

#####
#####
#####
##.#.
#..#.
#....
.....

.....
.#...
.##..
###..
###.#
#####
#####

.....
.....
....#
#...#
##.##
##.##
#####

.....
....#
#..##
#..##
#.###
#####
#####

.....
.....
...#.
...##
#.###
#.###
#####

#####
#####
.####
.#.#.
.#.#.
...#.
.....

#####
.####
..###
..##.
..##.
..#..
.....

.....
.....
.#...
.#...
.#...
###.#
#####

.....
...#.
...#.
.#.#.
.#.##
##.##
#####

#####
.####
.##.#
.##.#
.##..
.#...
.....

.....
...#.
...#.
...#.
.#.#.
####.
#####

.....
.....
.....
#...#
#...#
##.##
#####

#####
#####
###.#
###.#
.#..#
.....
.....

.....
#..#.
#..##
##.##
##.##
#####
#####

.....
.....
.....
.....
#.#..
#.##.
#####

#####
####.
###..
###..
###..
#.#..
.....

.....
.....
.#...
.#..#
.##.#
.##.#
#####

#####
#.###
..###
..###
...#.
.....
.....

#####
#####
###.#
###.#
#.#.#
#....
.....

#####
#####
##.##
.#.#.
...#.
...#.
.....

.....
....#
.#..#
.#..#
###.#
#####
#####

#####
###.#
.##.#
.#..#
.#..#
....#
.....

#####
##.##
##.##
#..##
....#
.....
.....

#####
##.##
##.##
#..#.
#..#.
...#.
.....

#####
###.#
###.#
#.#.#
#...#
#...#
.....

.....
.....
....#
#...#
#.#.#
#####
#####

#####
#####
#####
#####
#.#.#
#.#.#
.....

.....
.#.#.
.#.#.
##.##
##.##
#####
#####

.....
..#.#
.##.#
.##.#
.##.#
.####
#####

#####
####.
####.
#.##.
#.##.
...#.
.....

#####
###.#
.##.#
.#...
.#...
.#...
.....

.....
..#..
.##..
.##..
.##.#
.####
#####

.....
.#...
.#...
.#..#
##.##
##.##
#####

#####
#.#.#
..#.#
..#..
..#..
..#..
.....

#####
#.###
#.##.
..##.
..##.
..#..
.....

.....
.#...
.#...
.#.#.
####.
#####
#####

#####
####.
####.
.###.
..#..
.....
.....

.....
#....
#....
##...
##...
###.#
#####

#####
###.#
#.#.#
#.#..
.....
.....
.....

#####
#.###
#.###
#.#.#
#.#.#
..#..
.....

#####
###.#
.##.#
..#.#
..#..
.....
.....

.....
....#
.#..#
##..#
##..#
##.##
#####

.....
..#..
#.#.#
#.#.#
#.#.#
#.###
#####

#####
#####
####.
##.#.
##.#.
.#...
.....

.....
.#...
.#...
.#.#.
##.#.
#####
#####

.....
...#.
#..#.
#..#.
#..##
#.###
#####

#####
##.##
#..#.
#....
#....
.....
.....

#####
.####
.####
..##.
...#.
.....
.....

#####
#####
#####
####.
##.#.
.#.#.
.....

.....
.....
.....
..#..
.###.
.####
#####

#####
##.##
#..##
#..##
#..#.
#..#.
.....

.....
.....
.....
#.#..
###.#
###.#
#####

.....
.....
...#.
#..#.
#.##.
####.
#####

#####
#####
####.
####.
.##..
.#...
.....

.....
#..#.
##.##
##.##
#####
#####
#####

#####
###.#
###.#
#.#.#
..#..
..#..
.....

.....
.....
#....
#..#.
#..#.
#.##.
#####

.....
.....
..#..
#.#..
#.#..
###.#
#####

#####
#####
##.##
.#.#.
.#...
.#...
.....

.....
..#..
..#.#
..#.#
.####
.####
#####

#####
.####
.#.##
.#..#
....#
.....
.....

#####
###.#
###..
#.#..
#.#..
.....
.....

#####
##.##
##..#
.#...
.#...
.....
.....

#####
###.#
.##.#
.##.#
.#...
.#...
.....

.....
#....
##...
##..#
###.#
#####
#####

.....
.....
.#.#.
.#.#.
.###.
.###.
#####

#####
##.##
#...#
....#
....#
.....
.....

#####
##.#.
#..#.
#..#.
#..#.
.....
.....

#####
##.##
.#.#.
.....
.....
.....
.....

#####
#####
#####
#.#.#
....#
....#
.....

#####
#####
###.#
.##.#
..#.#
..#.#
.....

.....
..#..
..#..
.##..
.##.#
#####
#####

.....
.....
.....
#.#.#
#.###
#.###
#####

#####
#####
####.
##.#.
#..#.
...#.
.....

#####
####.
#.#..
#....
#....
.....
.....

#####
#####
#.###
#.#.#
..#..
.....
.....

#####
####.
#.##.
#.##.
#..#.
...#.
.....

#####
###.#
.##.#
.##.#
..#.#
.....
.....

#####
####.
####.
#.#..
.....
.....
.....

.....
#..#.
#..#.
#.##.
#.##.
####.
#####

.....
.....
..#..
..#..
.##..
.###.
#####

#####
#.###
#.##.
#.##.
#..#.
...#.
.....

#####
####.
.##..
.##..
.#...
.#...
.....

.....
#..#.
#..#.
#.##.
#.##.
#.###
#####

#####
#.###
#.#.#
#.#.#
#.#.#
....#
.....

#####
####.
.###.
.##..
..#..
.....
.....

.....
....#
.#..#
.#..#
.##.#
#####
#####

#####
.#.##
.#.##
.#.#.
.#...
.#...
.....

.....
..#..
#.#.#
###.#
#####
#####
#####

#####
#.###
#.###
#..#.
.....
.....
.....

#####
#####
##.#.
##.#.
#..#.
#....
.....

#####
####.
####.
###..
#.#..
.....
.....

.....
.#..#
.#..#
.#..#
.#.##
##.##
#####

.....
.....
#....
##.#.
####.
#####
#####

#####
#####
##.#.
##.#.
#..#.
#..#.
.....

#####
#.###
#.###
..###
..#.#
..#.#
.....

.....
.....
#.#..
#.#..
###..
####.
#####

.....
.....
#.#..
#.#.#
#.#.#
#####
#####

.....
..#.#
.####
.####
.####
.####
#####

.....
....#
....#
#.#.#
#.#.#
#####
#####

#####
.#.#.
.#.#.
.#.#.
.#.#.
.....
.....

.....
.#...
.#.#.
.#.#.
.#.#.
#####
#####

#####
##.#.
#....
#....
#....
.....
.....

.....
.#..#
.##.#
###.#
###.#
#####
#####

.....
.....
...#.
...#.
.#.#.
.###.
#####

#####
####.
####.
#.##.
...#.
.....
.....

.....
.....
.....
#...#
#.#.#
#.###
#####

#####
#####
#####
###.#
#.#.#
....#
.....

.....
.....
.#..#
.#.##
##.##
#####
#####

#####
#####
###.#
##..#
##..#
.#...
.....

.....
..#..
#.#..
#.##.
####.
#####
#####

.....
....#
#..##
#..##
#..##
#.###
#####

.....
#..#.
#..#.
#..#.
#..#.
##.##
#####

.....
.#...
.##..
###..
####.
####.
#####

.....
.#...
.##..
###.#
#####
#####
#####

.....
#....
#.#..
#.##.
#.##.
#####
#####

.....
#....
#....
#..#.
##.#.
##.##
#####

.....
.....
..#..
..#..
#.##.
####.
#####

#####
###.#
###.#
###.#
#.#.#
#...#
.....

#####
.##.#
.##.#
.##.#
.##.#
..#..
.....

.....
....#
..#.#
..#.#
.##.#
.##.#
#####

#####
.##.#
.##.#
..#..
..#..
.....
.....

#####
.###.
.#.#.
.#.#.
.#.#.
.....
.....

#####
####.
####.
###..
.#...
.#...
.....

.....
.#..#
.#.##
.####
.####
#####
#####

#####
#.###
#.###
#.#.#
..#.#
....#
.....

.....
#....
##.#.
##.#.
##.#.
#####
#####

.....
.....
#.#..
#.#.#
#.###
#####
#####

#####
#.#.#
#.#.#
#...#
#...#
.....
.....

.....
.....
.....
#.#.#
#.#.#
#.###
#####

.....
.....
....#
..#.#
..###
.####
#####

#####
#.###
#.##.
#.##.
#.##.
..#..
.....

.....
#....
#....
#....
#....
##.#.
#####

#####
#####
##.##
.#..#
.#..#
....#
.....

#####
#.###
..#.#
..#.#
..#.#
..#..
.....

.....
.....
...#.
..##.
..##.
.####
#####

.....
.#...
.#...
##.#.
##.#.
####.
#####

#####
#####
#####
.####
.###.
..#..
.....

.....
.....
..#..
#.#..
###.#
###.#
#####

#####
#.##.
..#..
..#..
..#..
.....
.....

#####
#####
####.
#.#..
..#..
.....
.....

.....
.#...
.#...
.#.#.
#####
#####
#####

#####
#####
.###.
..#..
.....
.....
.....

.....
#....
#....
#.#.#
#.#.#
#.###
#####

.....
...#.
#..#.
#.###
#.###
#####
#####

#####
#####
#####
.#.##
...#.
.....
.....

.....
#....
#.#..
#.#.#
#.#.#
#.#.#
#####

#####
###.#
###..
##...
#....
#....
.....

#####
##.##
.#.##
...#.
.....
.....
.....

.....
...#.
.#.#.
.#.#.
##.#.
##.#.
#####

#####
##.#.
##.#.
##.#.
#..#.
#....
.....

#####
#.###
#.###
#.##.
..##.
..#..
.....

.....
..#..
..##.
.####
#####
#####
#####

#####
#.###
#.##.
#.#..
..#..
.....
.....

#####
#####
#####
.####
.#.#.
...#.
.....

#####
#####
###.#
##..#
#...#
#....
.....

#####
#.###
#.###
#.###
#..#.
#....
.....

.....
..#.#
..#.#
.##.#
###.#
###.#
#####

#####
.####
.#.##
.#.##
...##
....#
.....

.....
#....
#..#.
#.##.
#.##.
#.###
#####

#####
###.#
###.#
###.#
#.#..
..#..
.....

.....
.#..#
.#..#
##..#
##..#
##.##
#####

.....
.....
.#...
###.#
#####
#####
#####

.....
.....
#....
#..#.
#..##
##.##
#####

.....
.#...
.#...
.#..#
.##.#
.####
#####

.....
.....
.....
....#
#.#.#
#.#.#
#####

#####
#.#.#
#.#.#
#.#..
#.#..
.....
.....

.....
.....
#.#..
###.#
#####
#####
#####

.....
.#...
.#...
.##..
.###.
####.
#####

#####
##.##
.#.##
.#.#.
.#.#.
.#...
.....

.....
.....
..#.#
..#.#
.##.#
.####
#####

.....
....#
..#.#
..#.#
.##.#
.####
#####

.....
.....
....#
....#
..#.#
#.###
#####

#####
##.##
##.#.
##.#.
##.#.
.#.#.
.....

#####
#####
.#.##
.#.##
...#.
...#.
.....

.....
#...#
#.#.#
#.#.#
#####
#####
#####

.....
..#..
#.#..
#.##.
#.##.
#.###
#####

.....
..#..
..#..
..#..
#.##.
#.##.
#####

#####
#.#.#
#.#.#
#.#.#
.....
.....
.....

#####
##.##
##.#.
#..#.
#....
#....
.....

#####
##.##
##.##
#..#.
#..#.
.....
.....

#####
#####
#.###
#.###
#.###
#..#.
.....

#####
#.###
#.###
#.###
#.#.#
..#..
.....

.....
.....
...#.
...#.
#.##.
#.###
#####

.....
....#
....#
...##
..###
.####
#####

.....
....#
#...#
#..##
##.##
##.##
#####

.....
.....
#....
#....
##.#.
##.##
#####

#####
.####
.#.##
.#.#.
.#.#.
...#.
.....

#####
##.##
##.##
#..##
#..##
...#.
.....

#####
#####
#####
##.#.
.#.#.
.#...
.....

#####
##.##
##.##
##.##
##..#
.#...
.....

.....
.....
..#..
#.##.
####.
#####
#####

.....
.....
.....
.#.#.
#####
#####
#####

#####
#####
####.
#.#..
#.#..
..#..
.....

#####
###.#
###.#
###.#
.#..#
.#...
.....

.....
#....
#...#
##.##
#####
#####
#####

.....
..#..
..##.
#.##.
#.###
#####
#####

.....
.....
..#..
#.##.
#.###
#.###
#####

#####
##.##
##..#
#....
.....
.....
.....

.....
.....
.#..#
.#..#
.#..#
.#.##
#####

.....
#.#..
#.#..
#.#.#
#.#.#
###.#
#####

.....
.....
...#.
.#.#.
####.
####.
#####

.....
...#.
...#.
..##.
..##.
#.###
#####

.....
...#.
...#.
...#.
#.##.
#####
#####

.....
.#.#.
##.#.
##.#.
##.##
##.##
#####

.....
.....
..#.#
..#.#
#.#.#
#####
#####

#####
#####
.####
.#.##
...#.
...#.
.....

#####
#####
#####
.##.#
.##..
..#..
.....

.....
..#..
#.#..
#.#.#
#.###
#.###
#####

.....
.#.#.
.#.##
.#.##
.#.##
#####
#####

#####
.####
..#.#
..#.#
..#.#
..#.#
.....

#####
####.
#.##.
#.##.
..##.
..#..
.....

.....
....#
..#.#
..###
#.###
#.###
#####

.....
.#...
.#...
.#...
.#.#.
#####
#####

#####
.####
.##.#
.##.#
..#.#
..#..
.....

#####
#.##.
...#.
...#.
...#.
.....
.....

#####
##.##
##.##
.#.#.
.....
.....
.....

.....
.....
#..#.
##.#.
##.##
#####
#####

.....
.....
#.#..
#.#..
#.#.#
###.#
#####

#####
##.##
##.##
##.##
#..##
#...#
.....

#####
###.#
#.#.#
..#.#
..#.#
.....
.....

.....
#....
#..#.
##.##
##.##
#####
#####

.....
.....
#.#..
#.#.#
#####
#####
#####

#####
#####
####.
##.#.
#..#.
#....
.....

.....
..#..
.##.#
.##.#
.####
#####
#####

#####
#####
####.
#.##.
#.##.
#.#..
.....

#####
#.###
..###
..#.#
....#
....#
.....

#####
#####
#####
.#.##
.#.##
...#.
.....

#####
#####
#####
##.##
.#.#.
...#.
.....

#####
#####
#####
#.##.
#.#..
..#..
.....

.....
.....
#....
#..#.
#.##.
#####
#####

#####
#####
####.
###..
##...
#....
.....

#####
####.
####.
#.##.
#.#..
..#..
.....

.....
.....
..#.#
.##.#
.####
.####
#####

.....
.#..#
##..#
##..#
##..#
##.##
#####

.....
...#.
#.##.
#.###
#.###
#####
#####

#####
##.#.
##...
.#...
.....
.....
.....

#####
#####
#####
#####
.#.##
...#.
.....

.....
.....
....#
...##
.#.##
#####
#####

.....
.....
#...#
#...#
#..##
#.###
#####

.....
.....
#.#..
#.##.
#.##.
#.###
#####

#####
###.#
###.#
##..#
##..#
.#..#
.....

.....
..#..
..#.#
..#.#
#.#.#
#.#.#
#####

#####
.#.##
.#.##
.#..#
.#..#
.#...
.....

.....
.....
.....
.....
#.#..
#.#.#
#####

#####
.###.
.##..
.##..
.##..
.#...
.....

.....
....#
....#
.#..#
.#..#
.##.#
#####

.....
..#..
#.#..
#.#.#
#####
#####
#####

#####
##.##
##.##
##.#.
#....
#....
.....

#####
#####
##.##
.#.##
.#..#
.....
.....

.....
...#.
...#.
.#.#.
.#.#.
.#.##
#####

#####
#.###
..###
..##.
..##.
...#.
.....

.....
.....
...#.
.#.#.
.###.
#####
#####

.....
...#.
#.##.
#.##.
####.
####.
#####

.....
.....
.....
#.#..
#.#.#
#####
#####

.....
.#...
.#..#
.#..#
.##.#
###.#
#####

.....
#.#..
#.#..
###..
###..
###.#
#####

.....
.....
.....
#.#..
#.##.
#.##.
#####

.....
.#...
.#...
##...
##..#
##.##
#####

#####
.####
.#.#.
.#.#.
.....
.....
.....

.....
.#...
##..#
###.#
#####
#####
#####

#####
####.
####.
##.#.
##...
#....
.....

.....
....#
...##
...##
#.###
#.###
#####

#####
#####
.#.##
.#.#.
.#...
.....
.....

.....
.....
.....
.#...
##.#.
#####
#####

#####
#####
###.#
###..
.#...
.#...
.....

.....
#.#..
#.#.#
#.#.#
#.#.#
###.#
#####

.....
.....
....#
.#..#
##.##
##.##
#####

.....
.....
..#..
..#..
..#.#
.####
#####

.....
..#..
#.#..
###..
###.#
#####
#####

.....
.#..#
.#.##
.#.##
##.##
##.##
#####

#####
#.###
#.###
#.#.#
..#.#
..#..
.....

#####
#####
##.#.
#..#.
...#.
.....
.....

.....
....#
.#..#
.#..#
##.##
##.##
#####

#####
#####
#####
#.###
#.###
...#.
.....

.....
.....
#....
#.#.#
###.#
###.#
#####

#####
.#.#.
.#.#.
.#.#.
.#.#.
...#.
.....

.....
.....
....#
.#..#
.##.#
#####
#####

.....
.#.#.
.#.#.
.#.##
#####
#####
#####

.....
.....
..#..
.##..
####.
####.
#####

.....
.....
.#..#
.#..#
.#..#
##.##
#####

.....
.#..#
##.##
##.##
##.##
##.##
#####

.....
...#.
...#.
..##.
#.##.
#.##.
#####

#####
#####
#.#.#
#...#
#...#
#...#
.....

.....
.#...
##...
###..
###.#
#####
#####

#####
#####
##.##
#..##
#..##
...#.
.....

#####
#####
##.##
#..#.
#..#.
#..#.
.....

.....
.#...
.#...
.##.#
.####
#####
#####

.....
.....
.....
.#.#.
.#.#.
#####
#####

.....
#..#.
#.###
#.###
#.###
#.###
#####

#####
#####
#.###
#.###
#..#.
#....
.....

.....
...#.
#..#.
#..#.
#..##
##.##
#####

.....
.....
.#...
.#.#.
##.##
##.##
#####

#####
#.###
#.###
..#.#
....#
.....
.....

.....
....#
....#
.#.##
.#.##
##.##
#####

#####
##.##
#..##
...##
...#.
.....
.....

#####
.##.#
.##.#
.#..#
.#..#
.....
.....

#####
#####
#####
.###.
..#..
..#..
.....

#####
.##.#
.##.#
.#..#
.....
.....
.....

.....
#....
#.#.#
#.#.#
#.#.#
#####
#####

.....
..#..
.##..
.##.#
.##.#
###.#
#####

.....
.....
...#.
..##.
#.###
#.###
#####

.....
....#
....#
...##
...##
.#.##
#####

.....
....#
....#
...##
.#.##
.####
#####

#####
#.##.
#.##.
#.#..
#.#..
..#..
.....

.....
#....
##.#.
##.#.
##.#.
##.##
#####

.....
.....
.#.#.
.#.#.
.###.
####.
#####

.....
.#...
.#.#.
.###.
.###.
#####
#####

#####
####.
##.#.
##.#.
.#.#.
.....
.....

#####
#####
###.#
#.#..
#.#..
#....
.....

#####
#####
.#.##
.#..#
.#..#
.#..#
.....

#####
##.##
##..#
#...#
.....
.....
.....

#####
#####
####.
###..
#.#..
..#..
.....

#####
.#.##
...##
...##
...##
...#.
.....

#####
#.###
#.###
..#.#
.....
.....
.....

.....
..#.#
..#.#
#.###
#####
#####
#####

#####
#####
.####
..###
..#.#
..#..
.....

.....
.....
..#.#
..#.#
.##.#
#####
#####

.....
.#...
.##.#
.##.#
###.#
###.#
#####

#####
#####
###.#
#.#.#
#.#.#
#.#..
.....

#####
#####
#####
.###.
.#.#.
.#.#.
.....

#####
.####
.###.
.###.
.##..
.#...
.....

.....
..#..
..#..
..##.
..##.
#.###
#####

#####
###.#
.##.#
.##..
.##..
..#..
.....

#####
#.###
..###
..###
..#.#
..#.#
.....

.....
.....
.....
.#..#
.#..#
##.##
#####

#####
#####
#####
.#.#.
.#.#.
.#.#.
.....

#####
#####
#####
.####
.#.##
.#..#
.....

.....
..#..
.##..
###..
###.#
###.#
#####

.....
.....
...#.
...#.
#.###
#.###
#####

#####
##.##
.#.##
...#.
...#.
.....
.....

.....
....#
...##
#.###
#####
#####
#####

#####
#####
#####
#.###
..#.#
....#
.....

.....
..#..
..#..
#.#..
#.#.#
#.###
#####

#####
.####
.####
.####
..#.#
..#..
.....

#####
#.###
..##.
..##.
..##.
..#..
.....

#####
.###.
.#.#.
.#...
.#...
.....
.....

.....
...#.
...##
..###
.####
#####
#####

.....
....#
#.#.#
###.#
###.#
###.#
#####

#####
#.###
#..##
...#.
...#.
.....
.....

.....
..#..
..#..
.##..
###..
###.#
#####

#####
#.#.#
#.#..
#....
.....
.....
.....

#####
###.#
##..#
##...
.#...
.....
.....

.....
.....
....#
.#.##
#####
#####
#####

.....
...#.
...#.
...#.
#..#.
#.##.
#####

.....
.#...
.#...
.#.#.
##.#.
##.##
#####

#####
###.#
###.#
###.#
.#..#
.#..#
.....

.....
...#.
..##.
.###.
.###.
.###.
#####

#####
.####
.#.##
.#.#.
.#.#.
.#...
.....

.....
.#...
##.#.
##.#.
##.##
##.##
#####

#####
#####
###.#
.##.#
.##..
.#...
.....

#####
#####
#.###
..###
..##.
..#..
.....

.....
...#.
...#.
#..#.
#..##
#.###
#####

.....
.....
.#.#.
##.#.
##.#.
#####
#####

.....
#....
#..#.
##.#.
#####
#####
#####

#####
.####
.##.#
.#..#
.#..#
.#..#
.....

#####
.##.#
..#..
.....
.....
.....
.....

.....
.....
.#..#
.#.##
.#.##
##.##
#####

#####
#####
.####
.##.#
.#..#
....#
.....

#####
#.#.#
....#
....#
....#
.....
.....

.....
.#...
.#...
##...
##...
##.#.
#####

#####
#.###
...##
...#.
.....
.....
.....

#####
##.##
.#.##
....#
....#
.....
.....

#####
#####
.#.#.
...#.
...#.
...#.
.....

#####
#####
.#.#.
.#.#.
.#...
.....
.....

.....
.#..#
.##.#
.####
#####
#####
#####

#####
#####
#.###
#.#.#
.....
.....
.....

.....
#....
#....
#....
##.#.
#####
#####

.....
.....
.....
....#
#..##
#.###
#####

#####
.###.
..##.
...#.
...#.
.....
.....

#####
##.#.
##.#.
#..#.
#....
#....
.....

.....
....#
....#
.#.##
.####
#####
#####

#####
#####
.####
.#.##
.#..#
.#..#
.....

#####
#.###
#.###
#..##
#...#
.....
.....

.....
.....
#....
#..#.
#.##.
#.###
#####

#####
#.###
#.#.#
..#..
..#..
.....
.....

#####
.####
.##.#
..#.#
..#..
.....
.....

#####
###.#
###.#
###.#
#.#..
#....
.....

.....
...#.
..##.
..###
#.###
#.###
#####

#####
#####
###.#
#.#.#
#...#
#....
.....

.....
..#..
..#..
#.##.
#.##.
####.
#####

#####
.##.#
.#...
.#...
.#...
.....
.....

#####
###.#
###.#
#.#.#
..#.#
..#.#
.....

#####
.####
.####
.####
..###
..#.#
.....

#####
#####
#####
##.##
#...#
.....
.....

.....
.#.#.
####.
####.
#####
#####
#####

#####
.####
.####
.#.#.
.#...
.#...
.....

#####
#####
##.#.
##.#.
.#.#.
.#...
.....

.....
.....
.....
.....
.#.#.
.#.##
#####

.....
#..#.
#..#.
#.##.
#.###
#####
#####

.....
...#.
...##
.#.##
.####
#####
#####

.....
.....
.....
..#.#
#.#.#
###.#
#####

.....
.#...
.#...
.#...
.##.#
.####
#####

#####
###.#
.##.#
..#.#
..#.#
.....
.....

.....
..#..
..#..
.##..
.###.
#####
#####

#####
####.
#.##.
#.#..
..#..
..#..
.....

.....
....#
....#
#..##
##.##
#####
#####

.....
.....
#....
#..#.
##.#.
##.##
#####

#####
#####
.####
.####
.##.#
.#..#
.....

.....
.#...
.#...
##.#.
####.
####.
#####

.....
...#.
...#.
...#.
.#.##
.#.##
#####

.....
..#..
..#..
.##.#
.####
#####
#####

.....
.....
.....
..#.#
..#.#
#.###
#####

#####
#.###
#..#.
...#.
...#.
...#.
.....

#####
#####
#####
#.#.#
#.#.#
#...#
.....

#####
.####
.####
.#.##
.#.##
.#.#.
.....

#####
###.#
.#..#
.#...
.#...
.#...
.....

.....
#...#
#.#.#
#.#.#
#.#.#
#####
#####

.....
#...#
##..#
###.#
#####
#####
#####

.....
#....
#.#.#
#.###
#.###
#####
#####

#####
#####
##.##
##.##
##.##
#..#.
.....

.....
.....
..#..
..#..
..#.#
.##.#
#####

#####
#####
###.#
#.#.#
#.#..
#.#..
.....

#####
##.#.
##.#.
#..#.
...#.
.....
.....

.....
.....
..#.#
#.#.#
#.#.#
#.###
#####

.....
.....
.....
#.#..
#.#.#
###.#
#####

.....
.....
...#.
...#.
.#.##
##.##
#####

.....
..#..
.##..
.##..
###.#
#####
#####

#####
#.###
#.###
...##
....#
....#
.....

#####
#####
##.##
##.##
#..#.
#....
.....

#####
.####
.####
..###
..##.
...#.
.....

#####
#####
#.###
#.#.#
#.#.#
.....
.....

#####
#####
#.##.
...#.
.....
.....
.....

#####
#####
####.
#.##.
#.#..
..#..
.....

#####
####.
###..
.#...
.#...
.....
.....

.....
#..#.
#..#.
#..#.
##.#.
##.##
#####

#####
##.##
##.##
.#.##
.#.#.
.....
.....

#####
#####
###.#
###..
.##..
.#...
.....

.....
.#...
.#..#
.#..#
.#..#
##.##
#####

#####
##.##
##.##
#..##
...#.
.....
.....

#####
.##.#
.##.#
.##.#
.##.#
..#.#
.....

.....
...#.
.#.#.
##.##
#####
#####
#####

#####
.####
.####
..#.#
....#
.....
.....

.....
..#.#
.##.#
.##.#
.####
.####
#####

.....
.....
...#.
.#.##
.#.##
.#.##
#####

.....
...#.
...#.
.#.#.
.###.
.####
#####

.....
.....
...#.
.#.##
.#.##
#####
#####

.....
#....
#....
#.#..
###.#
###.#
#####

#####
#####
###.#
##..#
.#..#
.#...
.....

#####
#.###
#.##.
...#.
.....
.....
.....

#####
###.#
##..#
##..#
#...#
#...#
.....

#####
#####
####.
#.##.
#..#.
#....
.....

#####
#####
#.###
#.###
#..#.
#..#.
.....

#####
#####
####.
####.
.#.#.
.....
.....

.....
#....
#..#.
#..##
#..##
#.###
#####

#####
#.##.
#..#.
#..#.
.....
.....
.....

#####
##.##
##.##
.#..#
.#...
.#...
.....

#####
#####
.####
.##.#
.#..#
.#..#
.....

#####
#.#.#
..#.#
..#..
.....
.....
.....

.....
..#..
.###.
####.
#####
#####
#####

.....
.....
..#..
.##.#
.##.#
###.#
#####

.....
.....
#..#.
##.#.
##.#.
#####
#####

.....
...#.
...##
#..##
##.##
##.##
#####

.....
.....
.....
.#.#.
.#.#.
####.
#####

#####
#####
#.#.#
#.#.#
#.#.#
....#
.....

.....
.#...
##.#.
##.##
#####
#####
#####

#####
#####
##.##
#...#
....#
....#
.....

#####
#.##.
#.##.
#.##.
#..#.
...#.
.....

#####
#####
##.##
##.#.
#....
#....
.....

#####
.##.#
.##..
..#..
.....
.....
.....

.....
..#.#
.####
.####
.####
#####
#####

.....
.#...
.#...
##...
##.#.
##.#.
#####

.....
.....
..#..
#.##.
#.##.
#####
#####

.....
.....
.....
..#.#
.##.#
###.#
#####

#####
#####
#####
.##.#
.#..#
....#
.....

.....
.....
.....
..#.#
.####
.####
#####

#####
.####
..#.#
..#.#
..#.#
....#
.....

.....
....#
..#.#
.##.#
###.#
#####
#####

.....
.#...
.#..#
.##.#
.##.#
###.#
#####

.....
.#.#.
.#.##
.#.##
#####
#####
#####

#####
#####
.#.##
.#..#
....#
.....
.....

.....
#....
#....
#.#..
#.#.#
#.#.#
#####

.....
..#..
..##.
.###.
#####
#####
#####

#####
.####
.###.
..##.
...#.
.....
.....

.....
.....
..#..
..#.#
.####
#####
#####

#####
##.#.
#..#.
#....
#....
.....
.....

.....
.....
.....
...#.
.#.#.
#####
#####`);

it("should pass challenge", () => {
	expect(TimeUtils.log(() => func(challenge))).toBe(3114);
});
import { expect, it } from "bun:test";
import { GridUtils, TimeUtils } from "../../utils";
import func from "./02";

const example1 = GridUtils.parse(`###############
#.......#....E#
#.#.###.#.###.#
#.....#.#...#.#
#.###.#####.#.#
#.#.#.......#.#
#.#.#####.###.#
#...........#.#
###.#.#####.#.#
#...#.....#.#.#
#.#.#.###.#.#.#
#.....#...#.#.#
#.###.#.#.#.#.#
#S..#.....#...#
###############`);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example1))).toBe(45);
});

const example2 = GridUtils.parse(`#################
#...#...#...#..E#
#.#.#.#.#.#.#.#.#
#.#.#.#...#...#.#
#.#.#.#.###.#.#.#
#...#.#.#.....#.#
#.#.#.#.#.#####.#
#.#...#.#.#.....#
#.#.#####.#.###.#
#.#.#.......#...#
#.#.###.#####.###
#.#.#...#.....#.#
#.#.#.#####.###.#
#.#.#.........#.#
#.#.#.#########.#
#S#.............#
#################`);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example2))).toBe(64);
});

const challenge =
	GridUtils.parse(`#############################################################################################################################################
#.#...........#.........#...........................#.......#.....#...#.........#.................#...#.................#.....#...#........E#
#.#.#######.#.###.#.#####.#.###.#####.###.#######.#.#.#####.###.#.#.#.###.###.#.#.###.###.#######.#.#.###.#######.#####.###.#.#.#.#.#######.#
#.#...#.....#...#.#.#.....#.....#.....#...#.#.....#...#.#.......#...#...#.#...#.#...#.#...#.....#...#.....#.....................#...#...#...#
#.#.###.#######.#.###.###########.#####.###.#.#########.#.#####.#######.###.###.#.#.#.#.###.###.#####.#####.#.#.#.#.#.###.#.###.#####.#.#.#.#
#...#...#...#...#.#...#.........#.....#.#...#.#.#.......#.#...#.......#.....#.#.....#.....#...#.#...........#...#.#.....#.#.#.......#.#.#.#.#
#.###.#####.#.###.#.###.###.###.#####.#.#.#.#.#.#.#.#####.#.#.#.#############.#.#.###.#######.#.###.#.#####.#####.###.#.#.#.#.#.#.###.#.#.#.#
#.#.#.#.....#.....#...#...#...#.#...#.#...#.#.#...#.......#.#.#.................#...#...#...#.#...#.#...#...#.....#...#...#.#...#.#...#...#.#
#.#.#.###.#######.###.#.#####.#.#.#.#.#####.#.#.###########.#.#.#################.#.#.#.#.#.#.###.###.#.#.#.#.###.#.#.#####.###.#.#.#######.#
#...#...#.......#.#.#.#.#...#.#.#.#.#...#...#.#.#.....#.#...#.#.#...#.......#.....#...#.#.#.....#.....#.#.#.#.#...#.#.....#.....#.#.#.....#.#
###.###.#.###.###.#.#.###.#.#.#.#.###.#.#.###.#.###.#.#.#.###.#.#.#.#.###.###.###.###.#.#.#############.#.#.#.#.#.#.#.###.#####.#.#.#.#.###.#
#...#...#...#.#...#.#.#...#...#...#...#.#...#.#.....#...#.#.#.#.#.#.#...#.#...#...#.......................#.#.#.......#...#.......#.#.#.#...#
#.###.#####.#.#.###.#.#.#####.#####.#######.#.#######.###.#.#.#.#.#.###.#.#.###.#.###.#.#.###.#.#.#.#####.###.###.###.#.###.###.###.#.#.#.###
#...#...#...#.#.....#...#...#.#.....#.......#.#.......#...#.#.#...#.#...#.#.....#.....#.......#.#.#.#...#.............#.........#.#.#.#...#.#
###.###.###.#.#####.#####.#.#.#.###.#.#######.#########.###.#.#####.#.###.#####.#.###.###.###.#.#.#.#.#.#####.###.###.#######.#.#.#.#.#####.#
#.#.#.#...#.#.....#...#...#.#.#...#.#...#...#.......#...#.......#...#.#...#.....#.......#...#.#.#.#.#.#.....#.......#.......#.#...#.#.......#
#.#.#.###.#.#####.###.#.#####.###.#.###.#.#.#######.#.###.#.###.#.###.#.###.#####.#####.#.#.#.#.#.#.#.#####.#.###.#.#######.#.#.#.#.#######.#
#.#.#...#.#...#.....#...#.......#.#.#...#.#.......#...#.....#.#.#.....#...#.#.....#...#...#.#.#.#.#.#.....#.#.#.#.#...#...............#.....#
#.#.#.#.#.###.#.#######.#.#######.#.#.#####.#####.#.#####.#.#.#.###.#######.#.#####.#.#####.###.#.#.#####.#.#.#.#.###.#.#####.###.###.#######
#.#.#.#.#...#.#...#...#.#.....#...#.#...#...#.....#.....#.#...#.#.#.#.......#.#...#.#.....#.....#.#.....#.#...#.#.....#.....#.#.....#.#.....#
#.#.#.#.###.#.###.#.#.#.#####.#.#######.#.#########.#.#.#.#####.#.#.#.#####.#.#.#.#.#.###.#######.#.#####.#####.#.#.#######.#.#.#.#.#.#.###.#
#.#...#.#.#.#...#...#.#.#.#...#.......#.#...#.....#.#.#.#.#.....#...#...#...#...#.#.#.#.#.#...#...#.....#...#...#.#.......#.#...#.#.#...#...#
#.#####.#.#.#.#.#####.#.#.#.#######.###.#.#.#.###.#.#.#.#.#.###########.#.#.#####.#.#.#.#.#.###.###.#.#.#.#.###.#.#.#####.#.#.###.#.#####.#.#
#...#...#.#...#.....#.#.....#.....#...#.#.#...#...#.#.#...#...........#...#.#.#...#.#.#.#...#...#...#.#...#.....#.#.#...#.#.#.#...#.....#.#.#
#.#.#.###.###.#######.###.#.#.###.###.#.#.#####.###.#.#############.#######.#.#.###.#.#.#.###.###.#.#.###.###.#.#.#.#.#.#.#.#.###.#####.#.#.#
#.#...#...#...#.....#.....#...#...#...#.#.#...#.....#.........#...#.#.....#.#.#.#...#.#...#...#...#.#.#...#.....#.#...#...#...#.......#.#.#.#
#.#####.#.#.#.#.###.#####.###.#.###.#.#.#.#.#.###.#########.#.#.#.#.#.###.#.#.#.#.###.#.###.###.#.#.###.###.#####.#.#####.#####.#.#.###.#.###
#.#.....#.#.....#.#...........#.#...#...#.#.#.#.....#...#...#.#.#.#...#.#.....#.#...#.#...#.#...#.#.......#.#.....#.....#.#.....#.#.#...#...#
#.#####.#####.###.#######.#.###.#.#######.#.#.#.###.#.#.#.###.#.#.#####.#######.#.###.###.#.###.#.###.#.#.#.#.#########.###.#.###.#.#.#####.#
#.....#.............#...#.......#...........#...#.#.#.#.#.#.....#.#.....#...#...........#.#.#...#.#.#.#.#...#.....#.....#...#...#...#.......#
#####.#.#####.###.#.#.#.###########.#####.#.#####.#.#.#.#.#.###.#.#.###.###.#.###.#.#.#.#.#.#.#.#.#.#.###########.#.#####.#####.#.#########.#
#.#...#.....#...#.#.#.#.......#...#...#...#...#...#.#.#...#.....#.#...#.#...#.....#.#.#.#.#...#.#.#.#.........#...#...#...#...#.......#.....#
#.#.###.#####.#.#.#.###.#####.#.#.#.#.#.###.#.#.#.#.#.###########.###.#.#.###.#####.#.#.#.#####.#.#.#.#######.#.#####.#.#.#.#####.###.#.#####
#...#...#.....#...#.....#...#.#.#.#.#.#...#.#.#.#.#...#.......#.#.#...#.#...........#.#.#.#...#.#.#...........#.....#...#...#.......#.......#
#.#####.#.#.#####.#.#####.###.#.#.#.#.###.#.#.#.#.#####.#.###.#.#.#.###.#####.#.#.###.#.#.#.###.#.#.###########.###.#.#####.#.#####.#####.#.#
#.....#.#.#.#...#...#...#.......#.#.#.#...#.#.#.#.....#.#.#...#.#...#...#.....#.#.#.....#...#...#.#.....#...#.....#.#.....#...#...#...#...#.#
#####.#.#.###.#.#.###.#.#########.###.#.#####.#.#####.#.#.#.###.###.#.###.#####.#.###.#.#.###.###.#####.#.#.#.#####.#####.#.#####.#.#.#####.#
#.#...#.#.....#.#...#.#.....#...#.....#.#.....#.....#.#.#.#.#.............#.#...#...#.#.#.#...#...#...#...#.#.#.....#.....#.......#.#...#...#
#.#.#######.###.#.###.#####.#.#########.#.#####.###.#.#.#.#.#.#.###########.#.#####.###.#.#.#.#.#.###.#####.###.#####.#########.###.###.#.###
#.#.......#...#.#.#...#...#.#.#.......#...#.......#.#.#.#.#...#...........#.#.#.....#...#.#.#...#...#...........#.....#.......#.#...#.#.#...#
#.#####.#.###.#.#.#.#####.#.#.#.#####.#####.#####.#.#.#.#.#####.###.#####.#.#.#.###.#.#####.#.###.#.#.#############.###.#####.#.#.###.#.###.#
#.......#...#.#.#.#.......#.#...#.........#.#...#...#.#.#.........#.....#...#.#.#...#.......#.#...#.#...#...#.....#.....#.................#.#
#.#.###.###.#.#.###.#######.#.###.#####.###.#.#.#.#.###.#############.#.#####.#.#.###.#########.#.#.#.#.#.#.#.###.#######.#.#.#####.#.###.#.#
#.#.........#.#.....#.......#...#.#.........#.#.#...#...#.#...#.....#.#.#.....#.#...#.#.........#...#.#...#.......#.......#.#.......#...#...#
#.#####.#####.#######.#######.#.#.#######.###.#.#.###.###.#.#.#.###.###.#.#####.#.#.#.#.#####.#######.#.#######.#####.###.###########.#.###.#
#.#.........#.......#.#.......#.#.........#...#.#.....#...#.#...#.....#...........#.#.#...#...#.......#.......#...#...#...#...........#.#...#
#.#####.###.#.#.#####.#.#######.#############.#.#########.#.#########.#.#######.###.#.#####.###.#############.###.#.#.###.#.###########.#.###
#.......#.......#.....#.....#...#.....#.......#...#.......#.......#...#.#...#...#...#.....#.#...........#...#.#.#.#.#.#.........#.....#...#.#
#######.#.###.###.#########.#.###.###.#.#########.#.#.###########.#.#.###.#.#####.#######.#.#########.#.###.#.#.#.#.###.#######.#.#####.###.#
#.......#...#...#.........#.......#.....#...........#.#.......#...#.......#.#...#.....#.#.#.....#...#.#.....#...#.#.......#...#.#...........#
#####.#####.#.###.#######.###############.#############.#####.#.#########.#.#.#.#####.#.#.#####.#.#.#.#.#######.#.#######.#.#.#.###.#.#.###.#
#...#.....#.....#...#...#.............#.#.#.............#...#...#.#.......#...#.....#.#...#...#...#.#...#.........#...#...#.#.#.......#.....#
#.#.#####.###.#.#.#.#.#.###.#########.#.#.#.###.#########.#.#####.#.###.###########.#.#.#.#.#.#.###.#.###.#####.#.#.#.#.###.#.#####.###.#.###
#.#...........#.#...#.#...#...........#...#...#.#.....#...#.#.....#.#.#.......#...#.#...#...#.#...#.#...#.....#.#...#.#...#.#...........#...#
#.#####.#####.#.#.###.###.#######.#.###.#####.###.###.#.#.###.#.###.#.###.###.#.#.#.###.#####.###.#.###.###.#.#.#####.###.#.#######.###.###.#
#.....#.#...#...#.#...#.#.....#.#.#.#.......#.......#.#.#.....#...#.#...#.#.....#.#...#.#...#...#.#...#.....#.#...#...#...#.....#...#...#...#
#.###.###.#.#.#####.###.###.#.#.#.#.#.#############.#.#.#########.#.###.#.#.###.#####.#.###.###.#####.#######.#.###.###.#######.#.#.#.#.#.###
#.#.#.#...#...#.....#...#.....#...#.#...........#...#.#.........#.......#.#.#.........#.#.....#.....#.......#.#.#...#...#...#...#.#.#...#...#
#.#.#.#.#########.###.#.#.###.#.###.#.###.#####.#####.#.###########.#####.###.#########.#.#########.#.#####.#.#.#.###.###.###.#####.###.#####
#.#.#...#.....#...#...#...#...#...#.#.#.......#.....#.#.#.........#.#...#.......#...#...#.........#.#.#.....#.#.#.#...#...#...#.......#.....#
#.#.#####.#.#.#.###.#####.#.#####.#.#.#.###.#######.#.###.#######.###.#.#######.#.#.#.###.#######.#.###.###.#.#.#.###.#.###.###.###.###.###.#
#.#.......#.#...#...#...#.#.#.....#.#.#...#.#.....#...#...#.....#.....#.......#.#.#...#.#.#...#.#...#...#.#.#...#...#...#.......#.....#.#...#
#.#########.#####.###.#.#.#.#.#.###.#####.#.#.###.###.#.###.#.###############.#.#.#####.#.#.#.#.#####.###.#.###.###.#####.#######.#.#.#.#.###
#.........#...#.......#.#.#.#...#...#.....#...#.#.....#...#.#.#...........#...#...#.....#.#.#.#...#...#.....#...#.#.#...#.#.....#.#...#.#...#
#########.###.#.#######.###.###.#.###.#####.###.#########.#.###.#######.###.###.#######.#.#.#.###.#.#.###.###.###.#.#.#.#.#.#.#.#.#.###.###.#
#.......#.#...#.#...#...#...#...#.#...#...#...#...#.....#.#.........#...#...#.....#...#.#...#.....#.#...#.#.#.#...#.#.#...#...#...#.........#
#.#.#.###.#.#####.#.#.#.#.###.#.#.#.###.#.###.#.#.#.#.###.#######.###.###.###.###.#.#.#.#####.#.###.###.#.#.#.#.#.#.#.#######.#####.###.###.#
#.#...#...#...#...#.#.#.....#...#.#.#...#.#.....#.#.#...#.......#.....#...#...#...#.#.#.....#.#.....#...#...#...#.#.#.#...#.#.......#.....#.#
###.#.#.#####.#.###.#.#.###.#####.#.###.#.#.#######.#.#.#######.#.#####.###.###.###.#.#.#####.#.#####.###.#.#.###.#.#.#.#.#.#####.#.###.###.#
#...#.#.....#.#.#...#.#.#.#.....#.#...#.#...#.....#...#.......#.#.#...#.......#.#.....#.#.....#...#.#.#...#.#.....#.#.#.#.#.#...#.#.#...#...#
#.#.#######.#.#.###.#.#.#.#####.#.###.#####.#.###.###.#####.#.#.#.#.#.#####.###.#.###.#.#.#####.#.#.#.#.#.#######.#.#.#.#.#.#.#.###.#.###.###
#.#.......#.#.#...#.#.#...#.#...#...#.....#.#...#...#.#.#...#.#.#...#.#...#.#...#.#.#.#...#.....#...#...#.#.....#.#...#.....#.#.....#.....#.#
#.#.#####.#.#.#.#.#.#.###.#.#.###.#.#####.#####.###.#.#.#.#.#.#.#####.###.#.#.###.#.#.#.###.#.#####.#####.#.#.#.#.###.#.###.#.#.#####.#####.#
#.#.#.....#...#.#.#.#.#...#.#.#...#.....#...#.....#.#...#.#...#.....#...#.#.#...#.#.#.#.#...#.....#.#...#...#.#.#.....#.#.....#.#...#.......#
#.#.#.###########.#.#.#.###.#.#.#######.###.#.#####.###.#.#########.#.#.#.#.###.#.#.#.#.#.#.#####.#.#.#.#.###.#######.#.#####.#.#.#.#######.#
#...#.#...........#.#.#.....#.#.#...#.....#...#.......#.#...#.....#.#.#.#.#.#...#...#.#...#.#.....#...#.#.....#.......#...#...#.#.#.....#...#
#.#.#.#.#######.###.#.#####.#.#.###.#.#.#######.#######.###.#.#.###.###.#.###.#####.#.###.###.#########.#.#.#.#.#########.#.#####.#####.#####
#.#...#...#...#...#...#...#.#.#.#...#.#.#...#...#.....#...#...#.....#...#...#.......#...#...#...#...#...#.#...#...........#...........#.#...#
###.#####.#.#####.#.###.#.#.#.#.#.###.#.#.#.#.#.#.###.###.###########.#####.#.#.#.#.###.###.#.#.#.#.#.###.###.###########.#############.#.#.#
#...#...#.#...#...#...#.#.#.#.#.#.#...#.#.#...#.#.#.#.....#.....#.....#.....#.#...#...#.#...#.#.#.#.........#.....#.....#...#.........#...#.#
#.#.#.#.#.###.#.###.#.#.#.###.#.#.#.###.#.#####.#.#.###########.#.###.#.#######.#.#####.#.###.#.#.###########.###.#.###.#.###.#######.#.###.#
#.....#.............#.#.#.....#...#.#...#.#.....#.#.......#...#.....#.#.#.......#.......#.#.........#.....#...#.....#...#.#...#.....#.#.#.#.#
#######.#.#.#########.#.###########.#.###.#######.#.#####.#.#.#####.#.#.#.###.###########.#.#.#####.#.###.#.###.#####.#.#.#.###.#.###.#.#.#.#
#...#...#.#.........#.#.#...........#...#.......#.#...#.#.#.#.......#...#.#...#...#...#...#...#...#.#.#...#...#...#...#...#...#.#.....#...#.#
#.#.#.###.#.#######.#.#.#####.#.#####.#########.#.###.#.#.#.#######.#.#.#.###.#.#.###.#.###.###.#.#.#.###.###.#####.###.#####.#######.#.###.#
#.#...#...#.#...#...#...#.......#...#.#.........#.....#.#.#.#.....#...#.#...#.#.#...#.#.#.......#.#.....#...#.......#.......#.......#.#.#...#
#.#.###.###.###.#.#.###.#.#####.#.#.###.#######.#######.#.#.#.###.###.#.#.#.###.###.#.#.###.#.#.#.#.###.###.#.#.###.#.#.#####.#####.#.###.#.#
#.#.#...#.......#.#...#...#...#.#.#.........#...#.......#...#.#.#.....#.#.#.........#.#.........#.#...#...#.#.....#...#.#...#...#...#...#.#.#
#.###.###.#######.#.#.#.###.#.###.#######.#.#.###.###.#.#####.#.#######.#########.###.###########.#######.#.#####.#.#####.#.#####.###.#.#.###
#.....#...#...#...#.#.#.....#.....#.........#.....#...#.#.....#...#...#.........#.#.......#.....#.........#...#.#...#.....#.#.....#.....#...#
#.#########.#.#.###.#.#.#####.#########.#.###.#####.#.###.#####.#.#.#.#########.#.#.#######.#.###############.#.###.#.#####.#.#####.#.#####.#
#.#.....#...#...#...#.#...#...#.......#.#.....#.....#.....#.....#...#...#.......#.........#.#.........#.......#.....#.#...#.#.#...#.#.......#
#.#.#.#.#.#.#####.###.###.#####.#####.#########.###########.#########.###.#######.#.#####.#.#########.#.#######.#####.#.#.#.#.###.#.#.#####.#
#.#.#.#...#.#.....#...#...#.....#...#...#.......#...........#...#...#.#...#.......#...#.#...#...#.....#.#...#...#.#...#.#.#.#.#...#...#...#.#
#.###.#####.#.#####.###.###.#####.#.###.#.#############.###.#.###.#.#.#.#####.#######.#.#####.#.#.###.#.#.#.###.#.#.#####.#.#.#.#######.#.#.#
#...#.............#.....#...#.....#.#...#.#.............#.#.......#...#.......#.....#.#.......#.#.....#...#...#...#.....#...#.#.........#.#.#
###.#####.#.#####.#######.###.#####.#.#.#.#.#############.#.#####################.#.#.#.#######.###.#.#######.#########.###.#.###########.#.#
#.#.....#.#.....#.......#.......#...#.#.#.#.#...#.......#...#.#.......#.....#.....#.#.#.#...........#.....#.#...#.....#...#...#...........#.#
#.#####.#.###########.#.#######.#.###.###.#.###.#.###.#.#.###.#.#####.#.#.#.#.#####.#.#.#.#########.#####.#.###.#.###.#.#.#####.###.#######.#
#...#.#...#.............#.....#...#...#...#...#...#...#.#...#.#.........#.#.#...#.#.#.....#...#.....#...#...#.#.#.#.#.#.#...#...#...#.......#
#.#.#.#.###.#.#########.#.###.#.###.###.#####.#.###.###.###.#.#####.#####.#.###.#.#.#####.#.#.#.#.###.#.###.#.#.#.#.#.#.###.###.#####.#######
#.#.#.#.#...#.#.....#...#...#.#.#.#...#.#.....#...#.#.....#.#.....#.#.....#...#.#.#...#...#.#...#.....#.......#...#...#.#.....#.....#.......#
#.#.#.#.#.#####.###.#.#.###.#.#.#.###.#.#.#.###.#.#.#######.#.#.#.#.#.#######.#.#.###.#####.###.#####.#############.###.#.###.###.#.#######.#
#.#...#.#.......#.#.#.......#.#.#...#...#.#.#.....#.........#.#.#...#.#.....#...#...#...........#...#.#...#.......#.#...#...#...#.#...#.....#
#.#####.#########.#.#.#######.#.#.#.#####.#.#.#####.#.#######.#.#####.#.#.#.#####.###########.###.#.###.#.#.#####.#.#.#####.###.#.###.#.#####
#.....#.#.........#.#...#...#.#.#.#.#.....#.#...#...#.#.......#...#...#.#.#.....#.........#...#...#.....#...#.#...#.#...#.....#.....#.#.#...#
#####.#.#.#######.#.#####.#.###.#.#.#######.###.#.###.#.#.#.#.###.#.###.#.#####.#.#####.###.###.#############.#.###.###.#.#.#####.#.#.#.###.#
#.....#...#.......#.......#.....#.#.......#.#...#.....#...#.#.#...#.#...#.....#...#...#.....#...#.............#...#.#.....#.#...#...#.#.....#
#.###.#####.#####################.#######.#.#.#########.###.###.###.#.#.#.###.#####.#.#####.#.#######.###########.#.###.#####.#.#.###.#####.#
#.#.#.#...#.......#...#.....#...#...#.#...#.#.....#.......#.#...#.#.#...#.#...#...#.#.....#.#.......#.....#.......#...#.#.....#.#.#.....#...#
#.#.#.#.#.#######.#.#.#.###.#.#.#.#.#.#.#.#.#####.#.#####.#.#.###.#.#.###.#.#####.#.#####.#########.#####.#.#####.###.###.#.#.#.#.#####.#.###
#.#.....#.#.....#...#.#...#...#.#.#.#.#.....#.....#...#...#...#...#.#.#...#.....#.#...#.#.........#.......#.#.......#...#.#...#...#.....#.#.#
#.#####.###.###.#####.###.#####.#.#.#.#####.#.#######.###.#######.#.#.#.#######.#.###.#.#########.#######.#.###.#######.#.#######.#.#####.#.#
#.....#.#...#...#.....#...#.#...#.#.#.......#.#...........#.......#.#...#.....#...#.#...#...#...#.....#...#.............#...#.......#.....#.#
#.###.#.#.###.#.#.#####.###.#.###.#.###.#.###.#.###.#####.#.#.#####.###.###.#.###.#.###.#.#.###.###.#.#.#############.###.#.#.#.#.###.#####.#
#...#.#.#.#...#.#...#.#...#.#.....#...#.#.#...#.#.....#...#.#.#...#.#...#...#...#...#.#...#.........#.#.......#.......#.....#.........#.....#
###.#.###.#.###.###.#.###.#.#########.###.#.#####.#####.###.###.#.#.#####.#.#.#.###.#.#########.#.#.#######.#.#.#.###.#.#####.###.#.###.#.#.#
#...............#...#...#.....#...#...#...#.#...#.......#...#...#.........#.#.#.#...#...........#.#.#.......#...#.....#...#...#.#...#...#.#.#
#.#########.###.#.###.#.#####.#.###.###.#.#.#.#.#####.#####.#.###.#.#######.#.#.#.#####.#.#.#####.#.#.#######.#####.#.###.###.#.#####.###.#.#
#...#.....#...#.#...#.#.........#...#...#.#.#.#.....#.....#.#.#.#.#.......#.#.#.#.#...#...#.#.....#.#.#.......#.....#...#...#.#.....#.#...#.#
###.#.###.###.#.###.#####.#.#####.###.#.#.#.#.#####.#####.#.#.#.#.###.#####.###.#.#.#.#.###.#.#.#####.#.###.###.#######.###.#.#.#.###.#.###.#
#...#...#.....#...#.......#...#...#...#.#.....#...#.#.....#.#.......#.#.....#...#.#.#...#...#.#.#.....#.....#.#.#.....#.#...#.#.#.....#...#.#
#.#####.#########.#######.#####.#.#.###.#######.###.#.#####.#.#####.###.#####.#.#.#.###.#.###.###.#####.#####.#.###.###.#.###.#.#########.#.#
#.#.#...#.......#...#...#.....#...#...#.#.....#.....#...#...#.....#.....#.....#.#.#.#.#.#...#.....#...#.#...#.#...#.....#.#...#.#...#.....#.#
#.#.#.#.#.#####.###.#.#.#####.#.#.#####.#.###.#.#######.###.#####.#######.#.#####.#.#.#.###.#######.#.#.#.#.#.#.#.#.#####.###.#.###.#.#####.#
#...#.............#.#.#.....#.#.#...#...#.#.#.........#.........#...#...#.#.......#.#.#...#.....#...#...#.#.....#.#.#.................#...#.#
#.#.#.#######.###.###.###.#.#.#.###.#.#.#.#.###.#.#.#####.#.###.###.#.#.#.#.#######.#.###.#####.#######.#.#####.#.#.#######.#.#####.#.#.#.###
#...#.....#...#.................#.#.#.#.#...#...#.#.....#...#...#...#.#...#.........#...#.#...#.......#.#.#.....#.#.......#.#.....#.#...#...#
#.#.###.###.###.#.#.#.#.#.#.#.#.#.#.#.#####.#.#.###.#.#######.###.###.#####.#####.###.#.#.#.#.#######.#.#.#.###.#.#######.#.###.#.#.#######.#
#.#...#.....#.#.#.#...#.#...#.#...#.#.....#...#...#.#.....................#.#...#.#...#.#.#.#.#.....#.#.#.#.#.....#.....#...#.#.#.....#...#.#
#.###.#######.#.#.#.#.#.#.###.#####.#.###.#####.#.#.#.###.###.#.###.#####.#.#.#.#.###.#.#.#.###.###.#.#.#.#.#.#.###.#.#######.#.#######.#.#.#
#...#...#.....#.#.#.#...#...#...#...#.............#.#...#.#...#.#.#.......#...............#...#...#...#...#.#.#.#...#.........#.........#.#.#
###.#.#.#.#.#.#.#.#.#.###.#.#.#.#.#####.###.###.#.#.#.#.#.#.###.#.#.#.#####.#.#.#.#.#.#######.###.#########.#.#.#.###########.###########.#.#
#.#.#.....#.#.#.#.#.#.....#.#...#.....#.#...#...#.#...#.#.....#.#.#.#.#...#.#.#.#.#.#...#...................................#.....#.#.....#.#
#.#.###.###.#.#.###.#####.#.#.###.###.#.#.###.#.#.###.#.#######.#.#.#.#.#.#.#.#.###.###.#.#####.###.#.#####.#.#.###.#.#.#.#.#.###.#.#.#####.#
#...........................#...#.......................#.......#...#...#...#.#...#...#...#...#.....#.....#.#.#...#...#...#.#.#...#.#.#.....#
#.###.#.#.#.#.###.#.#.#.#.#####.###.#.#.#######.#.#.#.###.#######.###.#######.###.###.#####.#######.#####.###.#.###########.#.#.###.#.###.#.#
#.#...#.#...#.#.#...#.#.#.....#.#...#.#.#...#...#.#.#.....#.#...#.#...#...#...#.#.....#.#...#.....#...#.#.#...#.#.........#.#.#.....#...#.#.#
#.#.#######.#.#.#####.#.#.###.#.#####.#.#.#.#####.###.#####.#.#.#.#.#.#.#.#.###.###.###.#.#.#.###.#.#.#.#.#.###.#.#######.#.#.#########.#.#.#
#S..........#.........#.....#.........#...#...........#.......#.....#...#...#.............#.....#.......#...................#.............#.#
#############################################################################################################################################`);

it("should pass challenge", () => {
	expect(TimeUtils.log(() => func(challenge))).toBe(479);
});

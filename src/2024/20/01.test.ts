import { expect, it } from "bun:test";
import { GridUtils, TimeUtils } from "../../utils";
import func from "./01";

const example = GridUtils.parse(
	`###############
#...#...#.....#
#.#.#.#.#.###.#
#S#...#.#.#...#
#######.#.#.###
#######.#.#...#
#######.#.###.#
###..E#...#...#
###.#######.###
#...###...#...#
#.#####.#.###.#
#.#...#.#.#...#
#.#.#.#.#.#.###
#...#...#...###
###############`,
);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example, 2, 2))).toBe(44);
});

const challenge =
	GridUtils.parse(`#############################################################################################################################################
#...#...###.......#...#.....#...#.......#.........#.....###.....#...#...#.............#.......#.........#...###.........#...#.......#.....###
#.#.#.#.###.#####.#.#.#.###.#.#.#.#####.#.#######.#.###.###.###.#.#.#.#.#.###########.#.#####.#.#######.#.#.###.#######.#.#.#.#####.#.###.###
#.#...#...#.#.....#.#.#...#.#.#.#...#...#.....#...#...#...#...#.#.#...#.#.........#...#.#.....#...#.....#.#...#...#.....#.#.#...#...#...#...#
#.#######.#.#.#####.#.###.#.#.#.###.#.#######.#.#####.###.###.#.#.#####.#########.#.###.#.#######.#.#####.###.###.#.#####.#.###.#.#####.###.#
#.......#.#.#.#...#.#...#.#.#.#.....#.#...###.#.#...#.#...#...#...#...#.#.........#.....#...#...#.#...###.#...#...#.#...#.#...#.#.#...#.#...#
#######.#.#.#.#.#.#.###.#.#.#.#######.#.#.###.#.#.#.#.#.###.#######.#.#.#.#################.#.#.#.###.###.#.###.###.#.#.#.###.#.#.#.#.#.#.###
###.....#...#...#.#...#.#.#.#.....#...#.#.....#.#.#.#.#...#.#...#...#...#...............#...#.#.#.#...#...#...#.#...#.#.#.#...#.#.#.#.#.#.###
###.#############.###.#.#.#.#####.#.###.#######.#.#.#.###.#.#.#.#.#####################.#.###.#.#.#.###.#####.#.#.###.#.#.#.###.#.#.#.#.#.###
#...#.......#.....###.#.#.#.###...#...#.......#.#.#.#.#...#.#.#...#...###.......###.....#.###.#...#.....#.....#.#...#.#.#.#...#.#.#.#.#.#...#
#.###.#####.#.#######.#.#.#.###.#####.#######.#.#.#.#.#.###.#.#####.#.###.#####.###.#####.###.###########.#####.###.#.#.#.###.#.#.#.#.#.###.#
#.....#.....#...###...#...#.....#.....###.....#.#.#.#.#.#...#.....#.#...#.....#.#...#...#.#...#.....#...#.#...#.#...#.#.#.#...#.#.#.#.#.#...#
#######.#######.###.#############.#######.#####.#.#.#.#.#.#######.#.###.#####.#.#.###.#.#.#.###.###.#.#.#.#.#.#.#.###.#.#.#.###.#.#.#.#.#.###
#...###.......#...#.............#...#...#...#...#.#.#.#.#.#.......#.#...#...#.#.#.....#.#.#...#...#.#.#...#.#.#.#...#.#.#.#.....#...#...#...#
#.#.#########.###.#############.###.#.#.###.#.###.#.#.#.#.#.#######.#.###.#.#.#.#######.#.###.###.#.#.#####.#.#.###.#.#.#.#################.#
#.#.#.......#.#...#...###...#...#...#.#.....#...#.#.#.#...#...#...#.#.#...#...#...#.....#.#...#...#...#...#.#...#...#.#...#...#.........#...#
#.#.#.#####.#.#.###.#.###.#.#.###.###.#########.#.#.#.#######.#.#.#.#.#.#########.#.#####.#.###.#######.#.#.#####.###.#####.#.#.#######.#.###
#.#.#.....#...#.....#.#...#...#...###.......#...#.#.#.#.....#.#.#.#.#.#.......#...#.....#...#...#.....#.#.#.....#.#...#.....#...###...#.#...#
#.#.#####.###########.#.#######.###########.#.###.#.#.#.###.#.#.#.#.#.#######.#.#######.#####.###.###.#.#.#####.#.#.###.###########.#.#.###.#
#.#.....#.......#...#.#.......#.#...#...#...#...#.#...#...#...#.#.#.#.#.......#.....#...#...#.....#...#.#.......#...#...#.......#...#.#.....#
#.#####.#######.#.#.#.#######.#.#.#.#.#.#.#####.#.#######.#####.#.#.#.#.###########.#.###.#.#######.###.#############.###.#####.#.###.#######
#.....#.###...#.#.#...#...#...#.#.#...#.#.#...#...#.......#...#.#...#.#.....#.......#...#.#.#...#...###...#.....#.....###.#.....#.#...#.....#
#####.#.###.#.#.#.#####.#.#.###.#.#####.#.#.#.#####.#######.#.#.#####.#####.#.#########.#.#.#.#.#.#######.#.###.#.#######.#.#####.#.###.###.#
#.....#...#.#.#.#.#...#.#.#...#.#...#...#...#...#...###...#.#.#.....#.#.....#.....#...#.#.#...#...#.....#...#...#.........#.......#...#...#.#
#.#######.#.#.#.#.#.#.#.#.###.#.###.#.#########.#.#####.#.#.#.#####.#.#.#########.#.#.#.#.#########.###.#####.#######################.###.#.#
#.#.....#...#...#...#.#.#.....#...#.#...#...###.#.....#.#.#.#.###...#.#.........#...#.#.#.....#...#.#...#.....#...#...#...#...#.....#.#...#.#
#.#.###.#############.#.#########.#.###.#.#.###.#####.#.#.#.#.###.###.#########.#####.#.#####.#.#.#.#.###.#####.#.#.#.#.#.#.#.#.###.#.#.###.#
#...###...#.........#...#.......#.#.#...#.#.#...#.....#.#...#.#...#...#.......#.....#...#...#...#.#.#.#...#.....#.#.#...#.#.#...#...#.#.#...#
#########.#.#######.#####.#####.#.#.#.###.#.#.###.#####.#####.#.###.###.#####.#####.#####.#.#####.#.#.#.###.#####.#.#####.#.#####.###.#.#.###
#.........#.#.......#.....#.....#.#.#.###.#.#...#.....#.#.....#...#.###...#...#...#.....#.#.......#.#.#...#.....#.#.....#.#.....#...#...#...#
#.#########.#.#######.#####.#####.#.#.###.#.###.#####.#.#.#######.#.#####.#.###.#.#####.#.#########.#.###.#####.#.#####.#.#####.###.#######.#
#.....#.....#.........#...#.....#.#.#.#...#.#...#.....#.#...#...#.#.#...#.#.#...#.#.....#...#.....#.#...#.#.....#...#...#.#...#.#...#.....#.#
#####.#.###############.#.#####.#.#.#.#.###.#.###.#####.###.#.#.#.#.#.#.#.#.#.###.#.#######.#.###.#.###.#.#.#######.#.###.#.#.#.#.###.###.#.#
#.....#...#E............#.....#.#.#.#.#...#.#...#.#...#.#...#.#.#.#.#.#.#.#.#...#.#.....#...#...#.#...#.#.#.###...#...###...#...#...#...#.#.#
#.#######.###################.#.#.#.#.###.#.###.#.#.#.#.#.###.#.#.#.#.#.#.#.###.#.#####.#.#####.#.###.#.#.#.###.#.#################.###.#.#.#
#...#.....###################...#...#...#.#.#...#.#.#.#.#.....#.#.#.#.#...#.#...#...#...#.#...#.#...#.#...#.....#.........#...#...#.#...#.#.#
###.#.#################################.#.#.#.###.#.#.#.#######.#.#.#.#####.#.#####.#.###.#.#.#.###.#.###################.#.#.#.#.#.#.###.#.#
###...#...#...#########################.#.#.#...#...#.#.......#.#.#.#.#.....#...###.#...#.#.#.#.#...#.#.....#...#...#.....#.#.#.#.#...#...#.#
#######.#.#.#.#########################.#.#.###.#####.#######.#.#.#.#.#.#######.###.###.#.#.#.#.#.###.#.###.#.#.#.#.#.#####.#.#.#.#####.###.#
#.......#.#.#.#########################...#.#...#.....#...#...#...#.#.#...#...#...#.#...#.#.#...#...#.#...#...#...#...#.....#...#.....#.....#
#.#######.#.#.#############################.#.###.#####.#.#.#######.#.###.#.#.###.#.#.###.#.#######.#.###.#############.#############.#######
#.......#.#.#.#...#########################.#...#.....#.#.#.......#.#.#...#.#.#...#.#...#.#.#.......#.###...#.......#...#.............###...#
#######.#.#.#.#.#.#########################.###.#####.#.#.#######.#.#.#.###.#.#.###.###.#.#.#.#######.#####.#.#####.#.###.###############.#.#
#.......#.#.#.#.#...#######################.#...#.....#.#.#.....#.#.#.#...#.#...#...#...#.#.#.#.....#.#.....#.#.....#...#.#.............#.#.#
#.#######.#.#.#.###.#######################.#.###.#####.#.#.###.#.#.#.###.#.#####.###.###.#.#.#.###.#.#.#####.#.#######.#.#.###########.#.#.#
#.......#...#...#...#######################...###.....#.#...#...#.#.#.###.#.....#...#...#.#.#.#.###...#.......#.........#...#...........#.#.#
#######.#########.###################################.#.#####.###.#.#.###.#####.###.###.#.#.#.#.#############################.###########.#.#
#...###.........#.#######S###############.....#...#...#...#...#...#...#...#...#...#...#.#.#.#.#.#.......................#.....###...#...#.#.#
#.#.###########.#.#######.###############.###.#.#.#.#####.#.###.#######.###.#.###.###.#.#.#.#.#.#.#####################.#.#######.#.#.#.#.#.#
#.#.......#.....#.#######.#...#.........#.#...#.#...#.....#...#.....###...#.#.....###.#.#.#.#.#.#.....................#...#.....#.#...#.#.#.#
#.#######.#.#####.#######.#.#.#.#######.#.#.###.#####.#######.#####.#####.#.#########.#.#.#.#.#.#####################.#####.###.#.#####.#.#.#
#.#.....#.#.....#.#######.#.#.#.#.......#.#...#.#...#...###...#...#...#...#.......#...#.#.#.#...#...#.........#.......#...#...#...#.....#.#.#
#.#.###.#.#####.#.#######.#.#.#.#.#######.###.#.#.#.###.###.###.#.###.#.#########.#.###.#.#.#####.#.#.#######.#.#######.#.###.#####.#####.#.#
#.#.#...#.......#.....###...#.#.#.......#.#...#...#...#...#...#.#...#.#.#...#...#.#...#.#.#.###...#...#.....#.#...#.....#.....#...#.......#.#
#.#.#.###############.#######.#.#######.#.#.#########.###.###.#.###.#.#.#.#.#.#.#.###.#.#.#.###.#######.###.#.###.#.###########.#.#########.#
#...#...............#.#.....#...###...#.#.#.......#...#...#...#...#.#.#.#.#.#.#.#...#...#...#...#.......#...#.....#.#.......#...#.#.....#...#
###################.#.#.###.#######.#.#.#.#######.#.###.###.#####.#.#.#.#.#.#.#.###.#########.###.#######.#########.#.#####.#.###.#.###.#.###
#...............###.#.#...#.....#...#...#.#.......#...#...#...#...#.#.#.#.#...#...#...#.......#...###.....#...#.....#.....#.#...#...###...###
#.#############.###.#.###.#####.#.#######.#.#########.###.###.#.###.#.#.#.#######.###.#.#######.#####.#####.#.#.#########.#.###.#############
#.......#.....#...#.#.#...#.....#...###...#.........#...#...#...###.#.#...#...###.#...#.......#.#.....#.....#.#...#.......#.....#...#...#...#
#######.#.###.###.#.#.#.###.#######.###.###########.###.###.#######.#.#####.#.###.#.#########.#.#.#####.#####.###.#.#############.#.#.#.#.#.#
###...#...###...#...#.#...#.###...#.....#...#.....#...#...#.....#...#.....#.#.#...#.#.....###...#.......#...#.#...#...............#...#...#.#
###.#.#########.#####.###.#.###.#.#######.#.#.###.###.###.#####.#.#######.#.#.#.###.#.###.###############.#.#.#.###########################.#
#...#...........#...#.....#.....#.#.......#.#...#...#...#.#.....#.....#...#.#.#.....#.#...#...###.........#...#.#.........#...............#.#
#.###############.#.#############.#.#######.###.###.###.#.#.#########.#.###.#.#######.#.###.#.###.#############.#.#######.#.#############.#.#
#.........#.......#...#.....#.....#.#...###.....###.....#...#...#...#...###.#.###...#.#.....#...#.........#.....#.......#.#.............#...#
#########.#.#########.#.###.#.#####.#.#.#####################.#.#.#.#######.#.###.#.#.#########.#########.#.###########.#.#############.#####
#.........#.#...#.....#.###.#.....#...#.......#...#.....#.....#...#...###...#.....#.#.#...#...#...###.....#.#...........#...#...#...#...#...#
#.#########.#.#.#.#####.###.#####.###########.#.#.#.###.#.###########.###.#########.#.#.#.#.#.###.###.#####.#.#############.#.#.#.#.#.###.#.#
#...#...#...#.#...#...#...#.....#.#...#.......#.#.#.#...#.#.........#.#...#.........#.#.#...#...#.....#.....#.........#...#...#...#...###.#.#
###.#.#.#.###.#####.#.###.#####.#.#.#.#.#######.#.#.#.###.#.#######.#.#.###.#########.#.#######.#######.#############.#.#.###############.#.#
###...#...#...#...#.#.#...#.....#...#...#...#...#...#.....#.....###...#...#.......###...###...#.........#...#...#.....#.#.#...###.......#.#.#
###########.###.#.#.#.#.###.#############.#.#.#################.#########.#######.#########.#.###########.#.#.#.#.#####.#.#.#.###.#####.#.#.#
#...#...###.....#.#.#.#.###.#...#.........#...#.....#...........#...###...#.......#...#...#.#.#...###.....#...#...###...#...#.....#...#...#.#
#.#.#.#.#########.#.#.#.###.#.#.#.#############.###.#.###########.#.###.###.#######.#.#.#.#.#.#.#.###.###############.#############.#.#####.#
#.#...#.......###...#.#...#...#...#...#.........###...#...........#.#...#...#...#...#.#.#.#.#.#.#.....#...###...#...#.#...#.....#...#.#.....#
#.###########.#######.###.#########.#.#.###############.###########.#.###.###.#.#.###.#.#.#.#.#.#######.#.###.#.#.#.#.#.#.#.###.#.###.#.#####
#.#.........#.#...#...#...#.........#...###...........#...#.....#...#...#...#.#.#.#...#.#.#.#.#.........#.....#...#...#.#.#...#...#...#.....#
#.#.#######.#.#.#.#.###.###.###############.#########.###.#.###.#.#####.###.#.#.#.#.###.#.#.#.#########################.#.###.#####.#######.#
#...###...#.#...#.#.....###.#...#.........#.#.....#...#...#.###...#...#.#...#.#.#.#.....#...#...#...#.......#.....#...#.#.#...#...#.......#.#
#######.#.#.#####.#########.#.#.#.#######.#.#.###.#.###.###.#######.#.#.#.###.#.#.#############.#.#.#.#####.#.###.#.#.#.#.#.###.#.#######.#.#
#.......#.#.....#.#...#...#...#...#.....#...#...#...###...#...#...#.#.#.#.#...#.#.....#.......#.#.#.#.....#.#...#.#.#.#.#.#...#.#.#...###...#
#.#######.#####.#.#.#.#.#.#########.###.#######.#########.###.#.#.#.#.#.#.#.###.#####.#.#####.#.#.#.#####.#.###.#.#.#.#.#.###.#.#.#.#.#######
#.#.....#.......#...#.#.#.#...###...###.......#...###.....#...#.#...#.#.#...#...#...#.#.#.....#...#...#...#.....#...#...#.....#.#.#.#.......#
#.#.###.#############.#.#.#.#.###.###########.###.###.#####.###.#####.#.#####.###.#.#.#.#.###########.#.#######################.#.#.#######.#
#...###...#.....#...#...#.#.#...#...........#...#...#.....#...#.#...#...#.....#...#.#.#.#...#.......#.#...........#.......#...#.#.#.#.......#
#########.#.###.#.#.#####.#.###.###########.###.###.#####.###.#.#.#.#####.#####.###.#.#.###.#.#####.#.###########.#.#####.#.#.#.#.#.#.#######
#.........#.###...#.....#.#...#.............###.....#...#.#...#...#...#...#...#...#.#...###...#.....#.......#.....#.#.....#.#...#...#...#...#
#.#########.###########.#.###.#######################.#.#.#.#########.#.###.#.###.#.###########.###########.#.#####.#.#####.###########.#.#.#
#.......#...#...#...#...#.....#.............###...#...#.#.#...###...#.#.....#.#...#.....#...###...#...#...#...#...#.#...#...#.........#...#.#
#######.#.###.#.#.#.#.#########.###########.###.#.#.###.#.###.###.#.#.#######.#.#######.#.#.#####.#.#.#.#.#####.#.#.###.#.###.#######.#####.#
#...###...###.#...#...#...#...#.#...........#...#.#.#...#.#...#...#.#.#.......#.#.......#.#.#.....#.#.#.#.....#.#.#...#.#.#...#.....#.#.....#
#.#.#########.#########.#.#.#.#.#.###########.###.#.#.###.#.###.###.#.#.#######.#.#######.#.#.#####.#.#.#####.#.#.###.#.#.#.###.###.#.#.#####
#.#...........#.....#...#.#.#...#...........#.#...#.#.#...#...#...#...#...###...#.......#.#.#.......#...#...#...#.....#...#.....#...#...#...#
#.#############.###.#.###.#.###############.#.#.###.#.#.#####.###.#######.###.#########.#.#.#############.#.#####################.#######.#.#
#.#...#...#...#.#...#.#...#.#...............#.#.#...#.#.#...#...#.......#...#...#...#...#.#.#...#.........#.#...#...#...#...#...#...###...#.#
#.#.#.#.#.#.#.#.#.###.#.###.#.###############.#.#.###.#.#.#.###.#######.###.###.#.#.#.###.#.#.#.#.#########.#.#.#.#.#.#.#.#.#.#.###.###.###.#
#.#.#.#.#...#...#.#...#...#.#...#.....#.......#.#...#.#.#.#.....#.......#...#...#.#...#...#...#.#.....#...#...#.#.#.#.#.#.#.#.#...#.....#...#
#.#.#.#.#########.#.#####.#.###.#.###.#.#######.###.#.#.#.#######.#######.###.###.#####.#######.#####.#.#.#####.#.#.#.#.#.#.#.###.#######.###
#.#.#.#.#.....#...#.#...#...#...#.#...#.#.......#...#...#...#...#.......#.###...#...###.#.......#...#...#.....#.#.#...#...#...#...#...#...###
#.#.#.#.#.###.#.###.#.#.#####.###.#.###.#.#######.#########.#.#.#######.#.#####.###.###.#.#######.#.#########.#.#.#############.###.#.#.#####
#...#...#...#.#.....#.#.....#.....#...#.#.....###...#.......#.#.#...#...#...###...#...#.#.#.....#.#.#...#...#.#.#.......###...#...#.#.#.....#
###########.#.#######.#####.#########.#.#####.#####.#.#######.#.#.#.#.#####.#####.###.#.#.#.###.#.#.#.#.#.#.#.#.#######.###.#.###.#.#.#####.#
###...#...#.#.#...###.....#.#...#.....#.#.....#...#.#.###...#.#.#.#.#.#.....#...#...#.#.#.#.#...#.#.#.#.#.#...#...#...#.....#...#...#.#.....#
###.#.#.#.#.#.#.#.#######.#.#.#.#.#####.#.#####.#.#.#.###.#.#.#.#.#.#.#.#####.#.###.#.#.#.#.#.###.#.#.#.#.#######.#.#.#########.#####.#.#####
#...#...#...#.#.#.......#.#...#...#...#.#...#...#.#.#.#...#.#.#.#.#.#.#...#...#.#...#.#.#...#...#.#...#.#...#...#...#...#.....#...###.#.....#
#.###########.#.#######.#.#########.#.#.###.#.###.#.#.#.###.#.#.#.#.#.###.#.###.#.###.#.#######.#.#####.###.#.#.#######.#.###.###.###.#####.#
#.....#.....#...#.....#...#.......#.#.#.#...#...#.#.#.#.#...#.#.#.#...#...#...#.#...#.#.#.......#...###...#...#.....###...###.#...#...#...#.#
#####.#.###.#####.###.#####.#####.#.#.#.#.#####.#.#.#.#.#.###.#.#.#####.#####.#.###.#.#.#.#########.#####.#########.#########.#.###.###.#.#.#
#.....#.###.....#...#.....#...#...#.#...#...#...#...#.#.#.#...#.#.....#...#...#.#...#.#.#...#.....#.....#.#.......#.......#...#...#...#.#...#
#.#####.#######.###.#####.###.#.###.#######.#.#######.#.#.#.###.#####.###.#.###.#.###.#.###.#.###.#####.#.#.#####.#######.#.#####.###.#.#####
#.#...#.#.......#...#...#...#.#...#.....#...#.#.......#.#.#.#...#.....#...#.###.#...#.#.#...#.###.#.....#...#...#.........#.#.....#...#.....#
#.#.#.#.#.#######.###.#.###.#.###.#####.#.###.#.#######.#.#.#.###.#####.###.###.###.#.#.#.###.###.#.#########.#.###########.#.#####.#######.#
#.#.#...#.......#.....#.###...###.#...#.#.#...#.....#...#.#.#...#.....#...#...#.....#.#.#...#.#...#...........#.........###...#.....#...#...#
#.#.###########.#######.#########.#.#.#.#.#.#######.#.###.#.###.#####.###.###.#######.#.###.#.#.#######################.#######.#####.#.#.###
#.#...###...###.#.......#.........#.#...#.#.#.......#.#...#.#...#...#...#...#.....###...###...#...#...#...#...#.........#...###.......#...###
#.###.###.#.###.#.#######.#########.#####.#.#.#######.#.###.#.###.#.###.###.#####.###############.#.#.#.#.#.#.#.#########.#.#################
#.#...#...#.....#...#.....#...#...#.....#.#.#.#...#...#...#.#...#.#.....###.#...#.......###.......#.#.#.#...#.#...........#.....#...........#
#.#.###.###########.#.#####.#.#.#.#####.#.#.#.#.#.#.#####.#.###.#.#########.#.#.#######.###.#######.#.#.#####.#################.#.#########.#
#...###.........#...#.#...#.#...#...#...#.#.#.#.#.#...###.#.#...#.......#...#.#.#.......#...#...#...#.#.###...#...........#.....#.....#...#.#
###############.#.###.#.#.#.#######.#.###.#.#.#.#.###.###.#.#.#########.#.###.#.#.#######.###.#.#.###.#.###.###.#########.#.#########.#.#.#.#
#...............#.###...#.#.#.......#.###.#.#.#.#.#...#...#.#...#...#...#.#...#.#.#.....#...#.#.#...#.#...#...#.........#...#...###...#.#.#.#
#.###############.#######.#.#.#######.###.#.#.#.#.#.###.###.###.#.#.#.###.#.###.#.#.###.###.#.#.###.#.###.###.#########.#####.#.###.###.#.#.#
#.#...#.......#...#.......#.#...#...#...#.#.#.#.#.#.#...#...#...#.#.#.###.#.###.#...#...###.#.#...#.#...#...#...#.....#.......#.....#...#...#
#.#.#.#.#####.#.###.#######.###.#.#.###.#.#.#.#.#.#.#.###.###.###.#.#.###.#.###.#####.#####.#.###.#.###.###.###.#.###.###############.#######
#...#.#.#.....#...#...#...#...#.#.#...#.#...#.#.#.#.#.#...###...#.#.#...#.#.#...#...#.....#...#...#...#...#...#.#...#.....#.....#...#.......#
#####.#.#.#######.###.#.#.###.#.#.###.#.#####.#.#.#.#.#.#######.#.#.###.#.#.#.###.#.#####.#####.#####.###.###.#.###.#####.#.###.#.#.#######.#
#.....#.#.#.....#.###...#.#...#.#...#.#...###...#.#.#...#.......#.#.#...#...#.#...#.#.....#...#...#...###...#.#...#.....#.#...#.#.#...#...#.#
#.#####.#.#.###.#.#######.#.###.###.#.###.#######.#.#####.#######.#.#.#######.#.###.#.#####.#.###.#.#######.#.###.#####.#.###.#.#.###.#.#.#.#
#.#...#.#.#...#.#.#.....#.#.#...#...#...#.....###.#...###...#...#.#.#.#...###.#...#.#.......#...#...#.......#.###...#...#.....#.#.###...#.#.#
#.#.#.#.#.###.#.#.#.###.#.#.#.###.#####.#####.###.###.#####.#.#.#.#.#.#.#.###.###.#.###########.#####.#######.#####.#.#########.#.#######.#.#
#...#...#...#.#.#.#...#...#.#...#...#...#...#...#.....#...#.#.#...#.#...#...#...#.#...#...#...#.....#.......#.#...#.#.........#.#.......#.#.#
###########.#.#.#.###.#####.###.###.#.###.#.###.#######.#.#.#.#####.#######.###.#.###.#.#.#.#.#####.#######.#.#.#.#.#########.#.#######.#.#.#
#...........#.#.#...#.....#...#...#.#.....#.#...#.......#...#.###...#...#...###.#.###...#.#.#.......#...###...#.#...#...#.....#.........#.#.#
#.###########.#.###.#####.###.###.#.#######.#.###.###########.###.###.#.#.#####.#.#######.#.#########.#.#######.#####.#.#.###############.#.#
#...#...#...#.#.....#.....#...#...#.......#.#.###...#...#...#.#...#...#.#.#...#.#...#.....#.....###...#.........#...#.#.#.#...#...#...###...#
###.#.#.#.#.#.#######.#####.###.#########.#.#.#####.#.#.#.#.#.#.###.###.#.#.#.#.###.#.#########.###.#############.#.#.#.#.#.#.#.#.#.#.#######
#...#.#.#.#.#.#.......#...#...#...#...#...#.#.....#.#.#.#.#.#.#...#.#...#...#.#.#...#.#...#...#...#.#...#...#...#.#.#.#.#...#...#...#.......#
#.###.#.#.#.#.#.#######.#.###.###.#.#.#.###.#####.#.#.#.#.#.#.###.#.#.#######.#.#.###.#.#.#.#.###.#.#.#.#.#.#.#.#.#.#.#.###################.#
#.....#...#...#.........#.....###...#...###.......#...#...#...###...#.........#...###...#...#.....#...#...#...#...#...#.....................#
#############################################################################################################################################`);

it("should pass challenge", () => {
	expect(TimeUtils.log(() => func(challenge, 2, 100))).toBe(1263);
});
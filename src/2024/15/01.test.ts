import { expect, it } from "vitest";
import { GridUtils, TimeUtils } from "../../utils";
import func from "./01";

function process(input: string) {
	const [grid, instructions] = input.split("\n\n");

	return {
		grid: GridUtils.parse(grid),
		instructions: instructions.split("\n").flatMap((line) => line.split("")),
	};
}

const example1 = process(`########
#..O.O.#
##@.O..#
#...O..#
#.#.O..#
#...O..#
#......#
########

<^^>>>vv<v>>v<<`);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example1))).toBe(2028);
});

const example2 = process(`##########
#..O..O.O#
#......O.#
#.OO..O.O#
#..O@..O.#
#O#..O...#
#O..O..O.#
#.OO.O.OO#
#....O...#
##########

<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^`);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example2))).toBe(10092);
});

const challenge = process(`##################################################
#....OOO.#.OO.O.#O..OO.......#...O..O..O....O....#
#.O....O#.....#...O#.O..O.....OOO...O...##.OO..O.#
#..OO#O..O...OO.OO.#.OO..OO....OOO..OO...OO#OO...#
###O#O.OO.O.#.O.O...#.O.O...#OO......O.#OO....O..#
#.O.OOO.........O.....OOO..O#O....#O........O.O..#
#....O.OOO.O##O..O.OOO.O.....#....O....O....O.O#O#
#OO...#O.O..O..OO...O..#.O.O....OO..O.O...OO..O#.#
#O...O.#....................O...#..O.....O.OO...##
#..O.O...#.#.OO.....OO...O.O...O.O...OO.O.OO...O##
#.......O...O.....O..O...##..#O.#O.O.O..#......#O#
#.O.......#.O.O...O..O........#..O.OO.O#.O......O#
#OOO.O.#.O...O..O#O#.#..O.....O.#O...OO........O.#
#O.#..O#.O.#OO.O...O.O....O....####.O.O.O.#.OO#..#
#..#.O...#.#O.O.#OO...O.........#...........O.O..#
#..#...O..O.##O#........#..OO.....O......O...#...#
#..OO.O.O..#.O#O..#........#..O..OO#...O..#..#...#
#.O......#..O....OO..#....##OO..#.OO#O#O..O....O.#
#.....O.O...#O.O..OOO..#O...O.O...O.........OO#..#
#.OO......O.#..#O.O.....#..O...O.OO.OO.#OO..O.#..#
#..O.......OOOO.O#O..O.O.#.O.#.#O.OO.O.O.#.OOO.O.#
##.O...O.O.....O.O.OO...OO...O..O..O....OO.O.O...#
#..O..O..O.O.....O..#..OO..O.#.O.OOO..OO...O...OO#
#.#.OOO.....OO..OOO..OO........O.O.OO......OO....#
#.OO...O.OO..#O.#......#@.......#..OO.O......O.O.#
#.OO...OO.O......OO#....O..O..O#...#O.#O..O......#
#.O...O#.OO..O........OO...........#.O..O.O..#.#.#
#....O..O.....OO...O.#..O..........OO..O.........#
##.O..#O....O..O.......OO.#OO##O..OO.OOO.O..O.O..#
#...OOOO.....OO..O....#..O...O#.O.O.O...O.O.O..O.#
#.OO......O..#O..O....#....O...O.O#...#...OOO....#
#...OO.O.O..OO..O#..#.OO.O.O.O.O......O.O..O.OO..#
#O.O........O.O...O......O#.#.O.O.O....#O..O.O...#
#.....OO....#OO.OO......OOO..O...O...#..O.....OOO#
#O.O..O....O..O...O......O........#..O.....#OO...#
#O#O...O#.O..##....OOO.....O##.OO##...O...O.#...O#
#.O....O.O....O.O..O.....OO#OO.OO.....OOOO.....O##
#.O..OO..O#...O....OO.O...O..O.O....O#.....#.#...#
#....O..O....O..O.O....#..##.O.O.........O.O..O.O#
#.O..O......O...##...........O...##O..O.O.#......#
#.##....O.#O...#......#..O#O..O.......O.O.....O.O#
#.O.OO#.OO#O...O.#..O.......#..O..O...O..O#...O.O#
#...O..#....O.O.#.........#..O.OO.O...O...#.OO...#
##..#.O.O...OOO.OO..O..#..O.O.O..............O...#
##O..O.O..O...#.OOO..O.O#........#.....OO....#OO.#
#..#....#...OO..O....#.#..O...#.O...O............#
#O..#OO.#.......O#.....O.....O.............O..#..#
#O......OO.O....#O..O...O...O.OO...OOO.#.#OO#..#O#
#.O#OO..O..O.O.#.O.O....OO.......O..............##
##################################################

>v^<v<<>^<^v^v^>>^>>^^>>^>^^v<>>^v^<^>^<>v>>><vv<v<vv^>><v<<^>^<>>v<>^^^^^v^v^>>>>v><^<>><^^>><vv<v<v>><>v^^>v<<^>>>vv>><>><>>vv><<>^>^<<>>^^>v>^^^^v>vvv^<>vvv^>^v<<<>v<^v<^>^>>v<vv^v>^vvvv^<>v<^^v^v^>^<^><v>vv<^>><>>^v>>^v><vv^<>>v>^>>v>v^^>>^^v^<v^^^>^<<>^<<^<^>^<>vv>v>^v>vvv><^<<^v<^^>>>^<>v<^<^<v><<^>vv>vv<^v<v><<><<>><<vvv^^>vv^^v<>>v<v>^>v>^<^v>^<<^<>^<>^^v<vv<<^><v<>v^^>><^vv>^>^v<^^>^^><vv^v>^>^^vv<^^<>^<v>>^>^>^v<><>v^<<^^<v>><^v>v>^>v^^><>v><v^<<<><vv<^vv^^v^>v>><<>v^v>^>><<^vv<v>v>>>v^v>^>>v^^v^<^vv>v<<><^v>v^v^>vv^v>v>v<^^<<v<^<>^v><^<vv<<>vv<>vv^^v^>v><>>>>>>^v<^>><v^>^><>vv^><<<>>vv^>v^v<>><^<<>v>><^v^v>vvv>>v>><^>>v<>><^^^^<^^<^^^>v>>>>^v^vvv>^v<^>><^^^>v>>v<>v<^<>v><>^v><><^<<<>v>vv>^v<^<v^<<vv^v<v><>><^>>vv>>^<^>>^<>^>>><v><v>^^<><<^<^>>>^<<vvvv>>v^<^vv<vv^^^<<^>^^v<^<vv><^>v<<>^v<^vvv<>v^v>>>v^>><<>^v^^^>><<>^v<><^>^^v>^>^>>>><v>^>^<>>vv^><<v><<<^<<v><>^<>^>^>>^>^^>vv^^<v^<^^<v^<><>>>v<^v^<v<^v<><<^vv>^vv^<v<v^>^^<>>^v<v^vvv<^v^v^<>^<><<^v<>^<<<^>^vv^<v>v^>^^><><>><>^
>>^><^<><>^>^^v>^<^v^<<v><^^>vvv>v>^v<>v<>v>><v<v>>v^vv>v<><v>><><>^^<^^^v>^^<<><<<^>>^<<>>^vv<>^>><^v<>^v^^vv<^^vvv^><^^^v<^v>>vvv>^^^v>v<^^v<<>^<>vv<<><<<^v<^v<>^>>^vv<v^vv<<<>v^<^>^><^><>^v<>v<>^v^>>>v>>^<<><^><^<<>><^v^^<>^^v<>v><v<v>^<v<<>^v<v><><^^>v^v<^>>v^^><<^<v<<vv^vv>^^v^vvv<^<>^<>^>>v<v^>v<<><<>><>^^><>>>^v<v<v>v<<^^<^>v^>><<>v^<v<><<^^<v>v<<^<^^<^>><^>vv<<>^v>>>^<>><^v><<^^<^>^v<^v^^<^v<<v^<>vv^>^^<v<^v<><>><><<^^v<>v^>^^v<v><v<>vv^^<>>^^>^<<v^<^><<v>>>^^v<^>^>>v<v>>^v>>v<^<^^>^vv>vv^v>>><v<v^>>^^v<vv>^^^<v^^<><>^v^^^>v^v<v^>>^<<v>>^<>>^v><v^<^^^vvv>^^><<>v>><>^>v>v<><^v<v<<^^v^>>><><^<>v<v>v<vvv^v>^>>^^^>^<^<^v><<>^^<>>v>^^<>^^^<>v>^vvvvv>>^^^>^>v><<^>^<^^^v<v<v<v>>vv^^>v<vv<<^>^<<v^^^<^^>>^><>>^>v><>^^<^vv>><<v>v><vv>^<>vv>v<^v^<^^v>^><^^<<^><><^^v>v>><^v<>^v>>>><^v<<>>>>v<v><vv<v><<v<^<>v>v>v^>v^<>>v><v<vv><>v>^><><vv^>^<>^>v<v^^v^>v^v>v>^v<<v><^^<><v^^v^>><^<^vvv<v^v<v<v>^^^>v>vv><v<<^><vvv^<^^^v<v>v<^v><<^>v^v^v^v<<>v^<v<v^>^><<><^^vv<<<v>^<v<<v^>^^vv<>>vvv>^>>^vvv^v<
v<>^>vvv>v<^<v>v^>>v>>v^^<^>vv<<>>>v^>^^v<v<<vv<>^v^<>v^^v<v^^<><>^<>^v<^<^^<^^^<>^><v^^^<>v^^>>v>^v^<^v>vv<v^>><v<^vv<><<<>>>>v^v^v<vvv^<v>^<>>^<^>^^>v^<^vvvv^v^<<^>v<^>^v^>^^<^>v^v<vv>^<<vv^v^<<>vv^v>>^>><vv^v^v^^<v>><^>v^^><<>>><<<^<v<>^>^<<^v>^^v<vv>^>^><<v<<><v^>^^v^><><^v^<>^^^^>>^^>v^^^^>^^>v>^>>>>^v<<v<^>><v<v^^v^^v^><<>><^v^<><<^v<<>>>>v><^<v^<<<<>>^^^^>><vvv<><^>>><<vv>v>v<<^<v<><><<v<^^>vv>>vvv>vv^<>vv>^>^v>>><>^v^vv>>>v>^^vv^<v<vvv^v<>^>^<>^>^^^<>>v>v^vv^<>>>>>>>v>^vvv<v^>>>>v<><^<^<^<<<v<vv^v^^^>>>^<>^<v>>^<v^<<^v^>^^<^>><^vvv>><<>v<>^vv^>>v<<v<<v^vvv^vv^^v<^<^><^v<^<><<<v^>>^vv<vvv^<^<<^<<v<<<vv^>^<>^<<^<v><<<>^^v>>^^<v<v>v<>vv<<<>>><<><<<vvv^<>vvv^^^^^v<<^v^>>>^^^>^vv<>^^>>^<v>v^<^^>v<v>^v^>^>>vv<vv><v<^>^v><>^v<>v^vv<v><>><<>^^v>>^>>^^v<^<^v<v<>v>vv>v>>^v<^<<<<>>v<^^^>>^><<>>>v^^<<^><^><>^v>v<v^v^<><><^>^<<v<<>v^>v>>>v^<>^v<vv^v><><>v>^><v<v<>>^^>>^^v>>^v<v<<^<<>^vvv><>^vv<vv^vv<^<<^vv^vvv>^>><v^^<^>>^>><^>^<v<v^>^>v><v>v<<<v^v<v>v<>>^v<>^<>v^^^v<v>vv^>>v><<<><<^^<^<<^v
>v>><>>>>^<<v<>v<>^<><vv<^vv^<>^><<v>v>v<^v^v<^vv<<^v<^>>>^^><<<^<><v^<<^>><<^<^^<v>>^>^v<^<vv<<><<v<>^v<^v><v>v>^<>^<^v^><v<<^^^<v^^>><>>^vv^<v>>v^vvv<vv^<<<^^<><<>vv^vv><v^v^v^>^v>^<<v^>vvv<><<<><>v^v>^<^<^vvvv><><<<v>v<>^<>>><v>^<>>v<<^<<<>vv^vv>^vv><^<>v^>>^<>^>v<>v><vv<<>>^<^<v<^<v<^>v<<<>^>>^<^v<v^^v^>^>v<^<<>><^<>><vvv>>v<><<<<v<^^>^v>><v^>^v>v<^>^vvv<vvv^<^^^<vv><vvvv><v>^^>>v^><>^>^>^>v>>v<<<vvvv>^^^^>>^v<vvvv<<<>^v^<v><^>v>v>>^>^vv>vvv^^>>v^vv>^<v^^<<<v<<>><v<^<v><^^^<v^>><>>v<^^^>>^<v<>^v>vv<>^<v>v^^v<vv<>><>^^vvv>v>><v<>>>^><<^v<v^vv>v^>^<vv>^>v>v>v>v<^v><>^<<>^><v>><^<vvv<<<>^>><^v<<<>vv<^>v^<<^^><v^^><^<<v>>>>>>^<<<<<>vv>^>^v>v^<^vv<>v^<<<v^^<<>vv^<<>v>>vvv><<^^<^<<^<<<v^^<^vv>>^^^^^^<>>^><vv<>>^>^>^vv<>>v<><^<<vv^v><^<^><v^v>>^>^v<<^>v>v^v<^>><^>^vv<<v>><^<^v^>v><^vvv<v<^>^vv<>^>v<<<v<^<v^^^vv^<^v<v^^>>>v^<>v>>>vv<>^v><^vv^>>>^v<>^>v^v<^v<<>>^v^^><vvv^<^v>><<<vv<v><<v^<^^><>^<<vv<>v>^<>><<^v^<v<<^>>^^v<^vv<><<>>><^^<>^<>^^vv<><^><v^<>v<<<^^^><>v^>v<v^v^^v^^vvv<><<>>^^>^^
>v<<^<<>><>>>^v<>^<v<>v<v>><<^^vv<><<<v><<^>vv<vv^v^>^v>vv^><^<v^<^<>><^v>vv^><^>>>>v<<<^><^v>><vv<^>^<>>>^vv<^v>v<^^<<<vv^>>vv^^>v^<v^<^>^<v<^v>v^v>v<v>^>vv<v^^^<v^><v<<v^>>v<<^>^^<><>vv^v<^^<^v<^^vv^v><v>v>>vv<<>>v^^v<v><^v>^^<v>>>^<<>v>>v<<<v>>>v>vv<^v<><v<>v><^v^^<vv<^^vv>><^^v<v^^><v^<<^v^^>v<<vv>><>^vvvv<^v<vvv<^v<<^^^v<^^>^^>><>^^^>vv^<>vvv>^v<<>>^<>^<<>v^>>>>><<<>v<v^vv><<><><<^<>><>><v>vv^v><^>^^>^^^^^v>^<v^><<<^^>v<vv>>v><vv>>^v<vv<><<<^^^>^^<<<^^^^^^<<><<^>^vv<>v^^>>>^v<<^<^v<^^v>^v^v<>>^^>^<>^>>^^v>^<<vvvv<<<>^<<v<>>v><>^v^<^>v>vv^>vv<>vvvv<v^vv>^<v<v>vvv^v><^v^vv<^^<><v^^<^>v<<^<v<<>^v>><^v^<>^<v>^^^>>v>>v<v<<v^>^<<^v<<<^^v><^^^^^<^^^><>><<>vvv<<<><>v^^<v^^<><^<>^>v^^><v>v>v>>^vv<><v<<^<v^v>^^v<<>>^>^^><>v^><><v>^<^>v^<>^v^>^^^vvv^><<vv<>^>^v>^>v^<vv>^^^>^<^><>^<vv<<^<v^^^<^>^<^><><>>><><>^>^<v^v>^vv<>^^><^<^v><^^vv^>>>>>v^^vvvvv<v^^>>><^vv<<>v>vv^^<<>^<^^><^<<>v<v^^v>v^<vv<v^v^^^<^>v>>^<<^vvv^<<<>v<>^^><<v^^v<<>>>>^<v^>>v>><<><vv^>>><v^^>><><v<vvv>^<<^<^^<^^^^>^<v>>v^>^v>
^<v<<v>^<<>^^v^><>^<><v^v<>><v<<^v>v<v<<^>^^<<<>><^vv^^>v^<>v<>vv<<><^v<>>^^v<v^><<vvv^^<vv>v^v^><v^^^^>><vvv^><^<<>^v^^v<^v<>><<<><^<<vv^^^<v<<><>>><v^>^><^^<>v>v^><<^><^<<v>v^v^^<<v<v>><>><^^^^v^<^^^<>vvv<<>^^^v<<v^^>v^<>^>v<^><<>^<vv><v^vv^<^<<>^^^<><^v<<>><<v^v>>><v<><^<v^<v<^>>v>><><>^^^><v^v>^<v^v<^vv<vv>>>v>>^vvv><^<vv>v^<>^><>^v^v<<<v>v>vv^v<^v<>vv>>^<v^v>^v<v>><>vvv><v^<^<^>>^>vvvvv^>>>>vv<v<>>><v^^><>vvv<<<v>v>vvv<v>><><^^v<vv<^^^v>>><v><<>>v^<v<><v^v><<v><><vv<^^<>v^><<<>^>^v<vv^<v^^^<<<^>v^<v<<><>^><^<<>^>v<<vv<<v>^^vv<v><><<v^>>>>vv^<<v>^<<^^^^^<<<^>^>vv>v^>vvv^<v>vvv^v<v><^v<<>^<<v<^^^^v^>v>><^>^<^^^^<><<>vv<><<<<><^^^v<<^<>>><v>v><vv^^<^<><><>v>v><<v<v<vv<v<vv>><>v><v<<v^<vv>>^<v<^v>^>><v<v>>>^^<v<><vv^v>v><v>v<v<vv<^^^v>vv<v<>vvvv<>v^<v>^^<v<<^vv><^>>^>^^^v^>v^<v^vvv^v^<v>v<v<<^^<^<<^<v^<v^>^^^<<>vvv<<>v<vv^>vv>>v<^>v<<^^<>^<<<v^<v<>vvv>><v><><>v>v^>^>v<<>^^v><<v^^v<vv<^<>^^v><v>^<<>^v>^vv>>>^^^>vvv^>>>^>^>^v<^v^<^><v^^v>v<>vv>>v^>><vvvv>>>v>><<^^^v^>v<^v^<<<<>>^<^^<^>^
^<^<><<<>vv<vv<>><<^^>v<vv^<vv^<v<vvv^^<<>^v<>><vv<v>>v^>>><<>v^v^^<^v^^vv><<>>>v<>^<>vv^^<vv^>v<>^><<^<><v><^>><<^v<vvv^v><v>>^>vv^>v<^^^v>^^>^<<^><^<vvvvv^>>^^>^<vv<^>><>^^><^v>><<><>>v<^>><v>^>^><>v>v^v<^>^^<^>^><vvvv>>v<^>^v>^^^^v><<^>><^v>v^<^^^>^<v^>v^v<<^<>>>><v>>>v<<v<v<>vvv><v>^v<<v><<>^^v><^>v^><^<vv<<><<<^^>vv^>><<v<v^<<v^<<^^^<^>><>^>>^>>>>vv^^^vvvv<^<v<<>vv^^^v<^v>^>v<^<v<<^><><>^<^>><<v^<>^><><^<^<vv<^v>^vv^v><>>><><<<<<^^v^v^><^>v^<^^v<>v>>^v^>^v>vv<<>><>vv>>^^^^<>^<<^<vv^>^v<<>^^<<<<><>>v<<v<vv<^^v<^<>><^>>><><<><>>^>v^>v<v^v^^<vv<>>>vvv<><<^><>>^v<v<>^^v^v^>^<>^<<<>vvv<<>^<><^>^^^^^^<^v<>^^>vv<>^v<vv<^><v><>v>^<>^>^<v><v^v>^>>vvv<^v^>^<><>v^><^v^>^^<v<v^^v>^^vv^v>v^<^<vv<^>v>v^vv>v^>^^v<><<v>v^<v>><>>><^>vv^^^v^<^v^>>vv<^>v<v<>>^>>>v^^v<><>^<<v^^>><><^>vv^v><^^^^><v>>^vvvvv>v^<<^<<v^^<^^vv>v>^<^^<>>v>^<>v^^v<^<v^v^<<>v^>>>v<^v><v<^v<v^v><><<<^v<v>^<>^<>>v<><<<<>vv><^<^^^v^^^^<>>>vv^>^<^<<v<<v<<>>v^^><<^vv^^v<^^>^v>>>>>^<<><<^^^^<><>v><v^<>^><>v>^<^>>v^^<><v>>^^>>v^^>vv
>>v<^>v^vv<^^v<v>v^v<^>^vvv<^>v>><v><<><v<^^^^^^<<>^v>v<^>^^v>^^^>v^>v<v^>^<v^v^<<<^>v>>^vv<^v^>^<^v><v^^^^>^>^<>v<^^vv>^<>^v<><>>^v^^^v<v><>>>^v^v>>^>^>^^<vv<>^<vvv^<^<vvv^<^^<vv^>v^><><vv>^<v<<<^^>^^><>^<><vvvv^v>vvv><><^^^><><>^v>v^>v^<v>^>^vv<^<>v<<>^v^^<^>>^^<>><vvv<<vv>^<v^>^<<>>v>v<^>><^^v<<^^<>^<v<^^>>>^^^v>v><v<^<^^><vv<>^>^>^<>>^>^><>^<v<<^>v^<v^v>>vv<v><^v>v^^>^^v^>^<v<v^>>^^^v>^>v<^>>^^v<^>>v^<^<<<>^<<v<><<>v>^^^^<^^v>v^<>>>^^>>vv^><>^^<<^^vv><<<^<<^^>><><^<<>v<>v^^vvv<^>>>^^<^^<<>^<^>>>>><v<v<^>^<<^v^v<v^>><><v<<v<>v>^>><v^^>^v>>v><<v<<>><^>v>><vv<v>^<vvvvv><v>>>^v>^><^v>v>>^^<>><v^<v>>v>^><<<^v>v^><vvvv<<>v^v<<<<>>>^>><<^vv<^>>^^^<^v>>>><vv>v<>><vv><vv^><>><<v<<>><v^>^<v>^<<vv^>v<<^<v><v>><<v^^>>><<<<^>v><<v<vv>>v<^><v><vv>><<><v<>vv>vv^>vv<v>^<>^>^v<>^v<<v^^<<<>^>^vv<<<^<<>v<v><v><>>>^<><v>^v^>^<^vv<v^><^^v^v<<>^v>v^<^^<<v^>>^<><<^vv^<<^v>v^<>>^>>vv<<^<><>v^^>vv<>^><>>>^<v>^<v>>^^^<><v>v<v>vvv<><v<v<v><v^^>v<>>v><^v>><>^vvv<<<^>vvv<<>v>^>^<<^v>v^<>>v><^>>^v^<>v>^^>^>^^^^
v^^vvv>v>><v>>>^<<<^v>^><^<^^<<vv^v<<^v>^<v^vv<<vv^v<><vv<v<<>v>v<v^v^v>^vvv><v^vv^^>^^<>v^^v<^vv^<>><v>>>>^v^^<<<>>><<v<<v^<><v<>vv>vv>>>^>^^v<^^v<<<>^>vv^>^^<vvv<v>v><v<^^><><^>v><<^vv^>>>^<<<>vv<><<^<v<><>^<>^<^v>^<>^>>>v><v^^>>^^^^v^<vv^<v<v<><>v<^<vv<^^^>^vv<v^^v^^<v^^^v>^^^>^^>><><^v<>>>^<>v^^>^vv>><>^<<^v^<^>>>v>><^>>v<^v<<vv>>^<^^^^>^<v^>>>><^<vv><><^<^><><^<^>v<>v<><vvvvvv>^v<^v<>v<^<vvv^^>^>>^vvv^><v<^<>v^>^><^^><<<v<<<<<>><<><<<v^>v<><><<><><^><>vv<v^<^^<<>^<<v>^>^^v^v<^^^>>><><^><>v<^v><<^^><^<v>v>^<^vvvv<^>^<v>^vv>^^^vv>>>>vv^v><^^v>vv^v<<><<^v^<<><>^><<<>>^vv<<<><^>v<<^><^v><vv^v<<^<^>^v^^><<v<<^<v<^vv<<>>>v<^<v><<>v>v><<><<<v><^>v<v><<<<v^v>v>v>^>>v<>v<<<<vv^<<>vvvv>^^^<>v^^<><><>v<>^^^vvvv^^<>^v^><vvvvv<<v<v<>^>>vv^>><v^<^>>v>v>v<^>><<v>^<>^^<^>^vv<v>^^^^^<<>>^>>^^>v^v><<^<<vv<<^^^^v<^v<^<>vv<^^<^<<<^<v>v^>^<^v^^<^v<<>^<^>>><<^vv<<v<v><<>v<v<>^<v^>^^>>^<<vv<>^<<v<^<v>>v^v^^^<<vv<^v^<<<<v^><<^v^v<vv>v^^<^<^v^<^<<><^^>v^v^^>>v^<<><^<<v<v>v<<^>><v<v>^><>><v>^<<v<v>vv^<vvv>
^>v^vv^v>vv<vv^^vv<<<<^v^v^>>v<^<^v^><<>^>v<<<vv><<<>v<v^v^v<<<>>>><v<<vvvv^^^^vv>^v<>^vv><^^^>^>v<^v^v<^<^>^vv^>><^^^<>><><^^v^>^<^><<^<>>>v^^vv<><^><v^>v^^<v<<<<v>^^<>>vv>v<^^^v>vv<>v<v<><v<<v<vv^^v<v^v^<^^>^^v<v>v^^^^v<>^^>>>^>^<<>>v^>^>^vvvv>v<v>^<<v>v>>v^^><<>v<>^v><>^^v^>>v<v<^>^>^^<>v>>>^^>><^^>v<^<v<vv>v<^v<>vvv>>^v^^<v<>v<<v^v^>^<>v>^vvvv><^vv>v<>><<v^<>>v^>vv^^^^^<^v<^v^v<^<v>v>^vv>>>>v<>v<^>^><<v><<^>v>^v^<<v>><^<>^>^^<>^v>>^<v><><v^><^vv><<<<^^>><<^>^vv><v^>vv^<v<^v<v^^^<<>v<>^v<v><<<<v^<>^>><vv<v><>^><<v>^^><^<<v^v<vv^>v^>v<^v<<^><>^<><^<>>vv<vvv^^>><^>><v^<^^><>^v^<><vv^v^>v<^^v>^^v^^<^v^vv^>>^^^>^><v><v^>v^><v><<>^v^^^^<^^^<<^>>^>v<v>v<<>^v>v>vv>>>v^<^<^^<^^>^><v^<<^<v>v><><><^v>>^>>>^>^>>v^^v<^^>>v<>>v^>^v^^v<><v>><vv><><><<^^<><^>^v>^<<vv^>>vvvvv<<><v>><>^>v^>^^<<v>vvv^<^^<>^>^vvv>><^^^>^>vvv>v>vv<v>^^><vv^^>vvvvv^<vv><>><^<>v><>^<<>^v><^v^<v^<v<vv>v<^><>^><><<^v^<>>>^^<^<<^<vv^^v>v><<>^vvv<><^<>v<<>>><>^^v<<^<<><vvv>><>>v^v<<vvvv>v>>vv<>>^^><^>>>^^^>^^<<v>^><<<<<>>>v>
v<^v>v^><<><^^^^<v^^<<><<>^^>>^vv<<>>v<>^v<^><<^<>vv>>^^><>^>^^>vv>^^v><<>^><^<<<^v^v<v^<>^v>^<v<^<^>><<^>v<^>^vv^^v<v^>v^v><<<><^^^<<>>^<>v^><>>v^<vv<^^<<<><>^<v<<>^v<<<^<v>><<<^v^^>vv<<v>>^vv<><^>>v<<v<<v>^vv<v^v<<<<>v^<v>>vv^><^>>v^v<^<^<^^<<><><^v^v<<v<<^>^<<^<>v><^^><v^v^<^^^v<^v<v^^<v>^<v^<^>>^^^^^<<^<<v>^<>><v<>^<<<<^>v<v<v<><vv^>^<>v<<v^<v^^><<^^<^><><><v>>>><^^><<<>v<^<v<><<<^^v<^<<<>^v^^v>vv>>v>v^v^^>v<><v^v>^^<v<<<^^><^^<vv<<^<v^><<>^<<<^^<<v^^<>>^v^<>>v<>>vv<><^>v^v>^v<^<><>^vv><v>vv^^^^>^v>^^<<<^^^^v<vv^<^><^><>vvv^^>^><>vv>>><<^>^>^>v<>v<><>^^^^^v^>v><<^<v^^<vvvv<^<^^^>>^^<>>>v^<><<^>v<v^v<^<^vvv<<vv<v>v^>v^<^v^^^^^<><v^v^vv<^v^v<v^<^v^><^^vv^<v<^^><<<>^<^^<^v<<v^<^vv<^<<>v^vv^v<v<^v<<<<^<<<^<^v^v^<v><v<><<<<>vv<^v<^^^^<>>^>>^<>><vvv<>>^v>><v<vv<<<<<^><^v<^<^><<^^><<>^^<^<<vv^^<><>v>^>v<<<><><^>v>vv^vv<v>v^<>^v<>v>^v^vv<>^>^<v>v<>^<^^v^^<v<^<^>^<^^>v^^><>v^<vv>><^v>>^>v^^^v><<>vv<^vv^^<v>v^<>^vv<^v<vv^>>>>v><>^v<^>>v>^vv^^^^v^>^^>v<<vv^>><>^^<^vv><v>^>v^>>>^><vv<>^v>^v><>
<vv><v^<<^^<<vv<<^^^><^vv><<><v^>^>>v^v<<^>^^>v<<^v<^>^v<<v<>><^vv>^v<<v>vv<>v<<<<>vvv<<^^<><v>vvv<^v<v^v^^>^>>vv^><<>v<>^v><v<>^<<<v>v<vv<vv><^<^<^v^^^^^<><<v><<v<>^v^v><^>^<v>>>v^v>v^<vvv>v<><<^^^>v^^>>><<>vv>^^<^<^^v>>vv<<v><><^<<>v>^<v>vv<<<^^>^<^vv^<<>><v<^^v>vv^^v>v>^<^v^>^>><vv>^v<<^<^^>>>>vvv><v^v<v^v^^<<^<vv<^v^^>><<<><<^^^^>>><>>><vv^^v^<^vv<<>>^v<<<^^^<^v^>^^><v<>^v<>>v<>>^>>v<><<^><<^<v<v^^<^>><vvv^<^>>>>v>vvvv^>>><><<<v>v><<v<vv<><v^<>^<v^<>v^<>v<v<<^<>v>v^v<^vv<^<^<>^><>^v>vvv^<<<>><^>v<^<v<><<^^v^^<>>>v>v>^<^<><<v^v>^^v<v>><v<^v^>vv<v<>>^><<v<>>>>><vv^<^<v^v<>vv^^<<v<v<>^^<v<v>vv><<>^<^v<>v^^^><><^>v><^<<>^^^>^^><<>>vv>^v<^v>>v<^<^><^>><<<^>^v^v^<>>^><<^^<>vv<^>^vvv^^>v^>v><^v^vv<>><<^<><^v^<v><^<^>v<^v<<v<>>^v>vv^>>vv>^^<>^vv>>v<>v<<<>^v<^v>v>>^<>^><v<>v<<^v<vv><><v^>^<>v<^^^v><v<>>v<^>v>v><>v<v<<^^^v<v^^vvv>^^<>v><<>><v^v<><<^vv><<><>v^v>><>><>vvv>v^<v<<^>^<^vv<^^<<^^>vv<^<>>^<^>^^^>><^^<>^<>v<v>^v<<vvv>>v<<>v><vv^<>^<><<^<>><v^<<^^v<^v^^><^v<^v>^^><<>><<<v^v<v>><<><^v
<<>><>><<<>>>v<<>^^<^<<>vvv<^>>v^v^><>>v^^^^v<<<^<><<^v^><<v>v^<^^<<^<v><<^v<v^<<>^v<>^v<>>v>v<>^<^v>>v<<^v^v>^v<<>^v<v^^v<^>^<>>^<>>v>^^^>^v^>v^>^><^>vv><><><^>^<>^<v<<v>>v>v<>^v<<^>>^v<v>v<v><^>>^>^><>>v^<^><>><^^<v<<<<v>^>v^vvv<v<^^^v^^<>v^>v<>><<^>v><>>>>v<<^<^<>^>>><<><v<<<>^<v^^v<^v><>><^^v<^vv><>vv><^<<<v><>>^^<>^^v<<v<vv>>^>^<vv^^>>^^v>^vv^<>>vvv<v<^>^<vv>vvv^><>><^>>^>^>>^^^v<>^>^^v>>v^v>>v<>vv><<^vv<>>^vv<v<>>>><^v<>^><^^<<>^vvvv^^^^>v<^>>><^v^<vv<>><v<>^v><<v>v>>^<>>><<v<^>v<>v>v>>vv^><<v<v><<>^<vv^<<<v<<vv<>><<^>>>><>^^^vv<<<v^v>v><><v<^^>>^v>v<v<>v<vvvv<><<^^^<^<<^v^^vvv>><<^^>^vv^<<<^^>^^^^><^<^^>v>^^<><<<>^<<^<<>><>>v>vv<^^v<>><^>>>>^^^^^^<><>><^>^>v^v>><<>v^v>^^>^<<<<v<^>^^^v^><<^v^>>>v<v><<v>><<<v<<vvv><<>vv>v^^vvv<v<^vv^>>^><^vv>><<v^^^<v>^>>><v^vvvv>v>><<<^^v^^v>^v^^vv^>v><^v>^>^<><v<>^<v<<^vv>v<v^><>>v>>v>vv<^v<^<>>><<>>v>>^v>^v^vv<>><<^^><>v<^<v^<^><^<^>><^^v>>v>>><<v<><v<<v>>><<v^v>v<^<><v^v<<><^^><<<vv>^><>vv<>^<v<<v><^<vv^^<v<vv<^><v><v^>><vv>^v<^<>>vv^><><vv^^<
v^v<^>><>v>>>^^<><><>>>><^v^<^v<^>>v<v<>v>v>>>>^><<v><v>>^v^>><><^<v<>^<v^^<v<vv><^^<><vv^vv<><<v^>>>vvv^^>>v<^><v<>v>^><^v^v<^^^<<<^<>^<>>^^v<^<^>v^^<<^^><vv><v>^v^^>vv^v^vvv^v<>^>^v^<>><<>^^>>v^^v>vv<v>v^>^<vvv^>v^<^><><v<<><v<<v<>>^^><^^<<<v^v^^v<v>^^v>><<<v<^^v<v<><<v><^v>^^v^<<>^v>^v><vv>v^v<^v>>v^^>^><^v^vv>^<<v>>>><<^<v<<>v<^^v>>^>v><vv^<v^vv<^v<^^^<<<vv^>v><<^>v<^>>^>^^>^<v^<v>>^v<^<<<v>^^v^^v<<v<^vvv>^>>vv^^v<><><^v^^>v^v<v^v<^^>>v><<^>>v<>v<>^>^^^v>^<<<v>><<>>>><><>>^v^v><<<v><<v^<>>v<<vv<>vv><<^>^v<<><<^><>vv><v^^<>>^v>>><>v^v>v^<<>^v^>><><v^>>^v<<>>><<><<v^^v<vvvv^^>v^^>v<<<v<v>v><>><>v^v^<<<<^<<^>>^>v^>>^v><^<^v^vv>v><>><<>><<^^>>><v<>vv^^>>><v<>v<^v^<^v<>><^<<v<<<vv>v>><v<<<>^v<^^v>v^v>vv><^v<v>>v^<vv>>^>^^<v>>^>><<>>>><^^<^^v<v<>>>>^v^v<v<<<v^<>>vv>^<v<v^^vv<><><>>^<<>^v<<<<^^^<vvv>v><vv<^<<<<<>^><>>^v<^v>v<>^^<>>v>vv^<v^^^>>^^>v<<>>v>v<<>^>>vv>v^><vvv>><^vvv>>^>><>v<<>>v<^>v<^^><^v>vv^><<^<v^v><^^<<vv^<<<^<v<v>^<<^^<^^^^v^v>v>>^>^<vv>v^<vvv>v<^^v><v^^><^^^v>^^<<<^>v<vv>
^v<<<vvv<v^>v><^v^>v^>>v^>>>^vv>>v><>>v^^^<vv>^v<v^^^<^><v^>^<><v<v<vv>^^<<><<^^>^><^^v<>v<^^^vv^v<v>>v>v<vv^^><vv>><<v<><<<<^^^<>v>><^<v^>>>^v^><>^<<><vv^v>^^v^^v><<^>^<>v>^^>^>>>v<<v<^v^<^<v>^<v>><>>>>>vvvvv<^^v^^<>>><v<<^^<<v^^^><v^v><v<>^<v><>vv^<>v><<v>v<<^^<v^^>><^>^<^^^v<^>>vvv>v><<<^v<<><v^><^v^v<><v<<^^^^<v<>>>v>>v^>>>v<^<^<v<v>^>>^v<>vvv<<>>>^^^<v^<v<>>^><^^^vvv<vv<>^v>>>v><v><<<<^<v^vv>^^^<<<>^^>><vv<vv><>v>^^<>>v^^^^<>>>v<^<vv^<vv<^v<vvvv>>v><<<^>^<>v>v>^v>v^><><<<>vvv><v^^>v^<<>^>^>^<vv<v<>v<v<^<>^^>^^^^^><<v^<^v^><^^<>>v<><>^<>v^^^>><>^>^v><^>><>^>vvv^>>>>^v^>>>v<<v>>>>^^v^<v<<^v>^v^<^<v<v>^<>vv^>^><^<v>v^vvv><<>^v^<v<>^vvv^^<vv>v<^v^>vv^vv^<>^>>^^>v^v<><<v>v<<v^<^v^>vv<vvvv^^vv<><v^v^v><<<v>>^<<><v>>^>v>>>><^>^>>^^<>v>^v><<>v<^>>^^>v^>^v>><<><>v>>>><>vv>>vv>>^<^>^><^^v^^v<<^^<>^v<<>><<<>v<>^v^<>^<>^<<^v<>^^><>^>^<^<>>^^^>vvv<vv>>^^>^><>^^^<v^><<>v><><v^vvv^<><>^v<v^><v>^^<>^v^>>>>^vv<^><v^^v^<v^v<<>><><<><^vv><>v>v^<><v<vv>>>^<v<^^>^><v><^><^^^>>^v^<<^v>^><><<v<^>v<<>v<<
>>^^><<^><^^<^>^^vv^^v<v<^v<>v^>v<<^^^^v^v^>>>><<^v<>>>><<<>>v^<^>^^><<<v>^<v><><<>^<^v^vvv>v^^^v<v><<vv>^vv<^v^vv<^>><>^^v>v>^<>v^<^<^^<>v^^<>^>v^<><^>^^vv<>^v<<v<v^v<>^v><<^^>^<<><<<<<v><<^v<v^^v^^^><v^^<>>v><>^><<^<<^<>>^^<^<<>>^v^v<vv^^^^vv>>^v^<>^^v^>v>>^^^^>>^>><v<vv><<^^v<^<vvv>^>^v^^>vv^<<<v<>^^^<<^>>>>vv^<>>^>><<><<v^><>>>^vv>v^>>>><<^>><v^^<<^<v<<^<>v<>v<^>^v^v^^<v^<>>>^^<><<^v^<<<v^v>^>vv^vv<v^<>>^<vv>v<^^^^^v<^>>v<^v>^^<>vv<v<>v>^^<<^<v^<>>v^<>v>^^><>><<^>^^>^^v<v>v^^<^<^^v><<^^<>^<<>^><v<<v^^<^v>^<<v>^^v^><<vvv>^vv<<^v<>^^><vv^vv^>^<^^^v^<^vvv^v<v<^>v<<>>>><<>^<^^^<<>v^<<vvv>^>^^^><<^^>^v<>>v<^^^^<^^vvv<<<<^v>v^<v>^^<^>v^^<^<<<v<<><^vvv^<>v<v^^^^<><v<vv<v>>^<v^>^>^<vvvv>>vv^<>>v><><<<^v<vvvv<<v<<>^>>^^<>>vv<^v^>vvvvv>>^>v<vv^>>v^><<><<v>>>>vv^v><^<^>v>^>v<^<^v^v^>^^><^^^<>^><^^<<v>>v<>v>v><<v<^<><^^>>>vv^<^^<<v^v>v><<vvv^<v><^v^>>>^vvv<vv<<v^v>>vv<^<<>><^<<>><>^><^^v>^v>vv^v^^^<^<><vv<<<v^>vv><>v>>vv<^v<v>>v^>><^^>^v^>v^<vv<<><^^^^<v<>>>v^v^^^>^>v>><<^<^><><v<>v<>><vvvvv<>
v<^^vvv^^<<>^>v>v>>^^><<v<>^>>^<^vv>^<>>>><><>vvvv>^v<>vv^v>^^><<>v>v^<v^v^^^><>^<<<>>vv<<>>>><<><v<^><v>^>vv>v^^v<^^^><vv<<^v^><>>>>^v<>><^vv^<v>v^>^vv^>v>vv^<<<v<<<<^<^^^v^>>vvvvv>^v^<^><vv><^^>v<><<<<vvv^vv<>v<^v>vvv<v<<v^<v<<^>^v^<v^^><^<>v^^v^<v^<>^<^^>v<>vv><><<><^<>v^vvv^>>v<><v><>>v>^v>>^<v<v>>v<<<v<^^v^^<>v><>^<vv^<v^>v<v^vv<><<<><>^<<v^^>>v^v^v<^<<>vv>>^><v<^<vvv<^^^>^<<v<>><^v^<<^^><v^<><><^^^^<<<v<<>v><<v<v>v>vv^<^>v<><^vv>v^^v>v^>v<v>v>>><^>v<v^<^^>vvv><><v>^>^>><v<vv^^v>^>>^^v<^><><><>>vv<>vv><^v^<^>v^><v<^vv>vv^v^<v><>>^^v><^><v<><>^<>v<<>^>^^>>^>v<^>>v^<^<>^^<^^<<vv>^v<^^^>^^<v<<<>^^^v>><v^v^>^v<^<^^^^v<^>^>^^^vv^>^<<^v^>>><v><><>>^^^><vv^^>^^>>^<v^^<<>^<>>vv^><v><<<^^^>>>v>vv^>vvv^<><<<^>>^^v>>^><>>v>^^^^^<<><><^>vvvv<^<v>>v^^>>^v^>v<^>^^v^<^v^<^<^><<<v<^><><^v^>v>>>><v<<>^>^^vv^>^^>><>>v>>>>vvvv<v><<v<<^>^<<^^>^<<^^v^<v^>^<>v<<v<v>^^>^v><<^^v^vv<^<^<^<>><<>>^<<<<>>^>><<<<v^vv<v><<v<>^<^^^><>^^<vv>v<><<>^v^><^^<>v^>vv<^vv^<>v^>v>^>><>>v><^v<<<^^^<<<^<^^<<>><v>^<^^^><v>
^v<<v^>v>>><^<><^^>^<^<v><^>>v<v^v^>>v>^<<^<>^>><^^>>>v>>^vv<>v<vv^<<v>>>><<<^<^<v^^<>v<v<<^<<>>v^>v^<^v^<^><>^v^v><^v<v>vv>^>v>>v>^vv>^v>v<<^<>^^v>>v^vvvvv><vv><^^><<vv>v><vv^vv>v>^<>v^>^^^<^<<>^>^><<^>^^><^^<^^<<>>v>v<vvv>v^<v<^^^^<v<v^<v<vvvvvv^<v><<<>><<v^<><^v^^v>vv<v^>vv^<<vv<^vv^^^><^v<<^>><><>^<>>>^><^v^^<^^<<^<^>^>v^^>vv><<^>^v^^<>v^>^vv<<^>v^vvv^^>v<><^>v<^v>>>v^<^<v<<v>v^<>>><>^<<^vvv^^<<v>>^>^>>^^<>v^v>^<<>v<v<>vv<<>^><<^<<^>><^>^^vv<^>vvv<><>v^<>^^vvvv>vvv<>^>>v>><^>v<v^<<^^v<^<>^><<^^<>><v<<<vv>v^v<v<vvv^v^^<v^vv^^v<vv<^<>v^v<vv^v>v^<>^^vv<^><vvv<<^vvv<^^><v<^^<<<^>v<vv<<>v>><<^>>>><vv>><v>>>v>v<>>>v><v><<v>v<v<<v<v<v>>v^<v^>^^>^^vv>>vv<v<^<>v><^<v>>>^^^vv<>^<^>^^>v<<vv<v<<>^^^>v>v<>v<>v<>^v<>>^vvv><v<>^>><>>v>>>vv>^<<v^<^<v<<v^^v>>v^v^<>><^v<<>v>^^<^<v^<>^v><>vv<^v>>>vv<v>><<>>v>>^^<^>>>^v>>>v^<>v<>v^v>v>^^vv^^><^^>^^v>vv^>^><>>^<<v^v<vv><><v^^v>v^>>>^^<><^^><<^^^^>v>^>^v^><>vv><^<>>>^^<^>^<<^^^^^<><v><<>^v<<v<v^vv<^<<><>vv^^<>><<>^<<^<><>^v<vv^>>^^<<>>><><<>^^^v>^^>^vv<
^>vv^>>><v^^^^>v<^^<<^v><<<<v^<<v^^>^v<>vv<<v^^vv^^><>v>^v<>>v^<<v<v^v^v>>^>v>vv><vvv<>vv^v>^v^^vv<<<v^<>^vv^^v^v<>v<^<v^v<<^v^<>^<^^<^v>vvv>v<><<vv>>>v<<^<<^<<v^v>>>^>^v<^v^v^^^^>v>><><<>v^><^<>>v>^^>^<<<vv><<>>>v<>>^<^<v>^^<>^^^>^^>^>>vv<<^^^^>^<^>^v><<<v<^<v^<^<^v^<^v<^v^<^>>^><<<>^>>><>><>><v<<<^>><v^><<>>^<^^<v<<vvv^^<<><>v>v<v^v^<v>^<<vv<<>>vv>^>^<v><<>^^<>^v^>^>vvvv^^^^>^>vv<<><v^vv^>^><<^<<^><^v^<>>vv>>>^vv<^>v<^<><<v<>v>^v^^>><v^<v<<^^<>^>>>^>>vvv<^v>v^>v>v>>^>^>^<^><><^<^^<v><v^^^>^^^>><<v<<^<vv^^vv<^vv>>v<<v^>>v^<^><<>^<v^<>v>>^<^vvv>^>v^<>^^^><v<<>>v><<v>v<^v^^<^vv>v><^^><<^<v>v>^^^<^v>>>>v^><^^v>^^>>^vv>>v>>>>v<>>>>v<>><^v<v<v^^>^^<^v^>>>v^<vv><<v>^v><v^^^<v<v<>v<><<<v^vvv^>^v^^<>^>>^>><v<<v><>v><>^v<<v^v>v^vv<<>><^^^<<>v<<^^v>^^^^>>^^^>>>>>^<>>^>^vv<v<^<<v>v<<^v<>^v^^<^<v^><^>^><<<>vv<v<>><v>>>^^<>>^v^^>v>v>vv<^>^<^vvv>v^v<v><>v<vv^^<v>^v>>>^vv>>>^<>>v^>v>^^^v><v>^vvvv<v<>><^^<<>v>^vv>>>>^v^>^<v<vv<>><<>^^<>v>><<v<^><v<>^>><^>v<^<>^<^v>^^>^<vv><<<^<v^v<<v^>><>^><^<>>v^v^^
v^>v<^v^<<<v^<>>>^^>>>v><^v<>>v^>^^<>^v>vvvvvv>^^<<^^><>vvv><<<vvvv>^<>v<v^><<><^^<^^>><>><^^<v>v^^vv>v>>v^v<v><^>^><<^>v<<<<<><^>^><<<vvv^vv<<<>>vv^<vv>v^<>^vv^<>^>>>^^<<v>^v>>^^>><<^>^>v^^^^v^^<v>vv<^>^^^<vv^<^vv<<^^<^^<>^<<^v><^vv<v><<^^<^v^v<<^>v><vv<<vvv<v<v^<^^v^<^><><<^<<v><>v^^>v<^<<<<v<<^>>^v>v<>>^>^^<<v>^>^^>^<<v>>>^>v^<>v<<>>^v<v^<><<v>^v^v>>^<vv<>v>v<><^><v<>^^>>><v^v<>^>>^>^^v>^<>>vvv>^<><<v<^<^^^^v^>^<<>^^^>>^<<<<<^<^^<>v<v<v><^^v>^>v^>vv<<v^<<><<vv><^^^>><>>vv^v^^>><vv><vv^^v<vv<v<<^<<^>v<^<<^^^<<<>>v<<v^>>><vvv<v>^<^<<vv>v<>>v<<^>^vvv>^<v<^>>^^vv<v<<^><<v>>^v<<>>v<<^<^<vvv^^<<^>^vv^^<<>^<v^<v>^v^>^vv>vv<>v<>^v<vv><<^^<>>><v^^v<<^><<v<><v<<>^^v<<v>v><<>>^>^>v<^<v^>v<>^>><v>v^v<^^>v<<v<v<>^<<<><<v^<<><^^><v<><>v<<v><^<^vv>^<v<>v<><v>vvv^><^v>>>^v^vv^^<^><<<^^^>vv^<>>v>^>v<^^^^<>v>><^^^><v>v^v<v<vv>^^^<^v<^v>^<v>>^v>><<>vv>v<v^^v>>^^>^vvv^vvv<v<v^>^<<^<^^^<^v>^<^^<<^>^^>><v^^v>vv<<<>>v>v<>^<^<<^v<^>>>vv<<^v>^^>^vv^>><^<<^><^<>vv^^<<v>><><>^<^<v>>><v>><<^>^><><>>v^v^<^>v<vv`);

it("should pass challenge", () => {
	expect(TimeUtils.log(() => func(challenge))).toBe(1478649);
});

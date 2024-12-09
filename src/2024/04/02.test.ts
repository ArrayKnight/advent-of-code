import { expect, it } from "vitest";
import { GridUtils, TimeUtils } from "../../utils";
import func from "./02";

const example = GridUtils.parse(`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example))).toBe(9);
});

const challenge =
	GridUtils.parse(`MMMMAXASMSXXMMSMXASXMSSMMMAXXMAXAMXSSSMMSMSSSSMMMSXMSSMMSAXMASMMMSAMXSXSMMXMSMMAMAMXXSXSXMAMMMXSSMMSSMMMSSMMSAMXMXMASXMASXXSSMSAMMXMASXMMMXA
AAAMAAXMAMMMSAMMXMAXXAAASMSMSSMMXMXXAAAXAAXAAAAXASASAAAAMMSAMXMAXSASXSAAMSAAAAXXASAMXAAMAMASMMASAXMAMAAAAAAXMASXMXMAXAMXMMXAMXMMSSMSAAXMASXM
SSXXXAMMAMXAMASMMXSAMMXMMAXAMAMMAXMMMMMSXMMMMMSMASMMSMMMSASASAMXMSAMAMXMASMSSSMMMMAMSMMMASMSAMXXMMMAXMMMSSMMSAMXSAMXSXSAAMMMSAMXAAMMASXAAXAS
XMXAXMAMMMMSMSMXAAXAMXSXMMMAMAASASXSMAMXAMSXSAAMXMMAMSMMMMSASXSMMMMMAMXXXXAMAMAMASAMAAAXXSASXMMMSSMXMMAXAAMMMMMMSASASASMXSAMMXSMMSXSAMXMMSMM
SAAMAMSXSAMXMMXMMMXAMAAXSXMXMSXMASAASMMMSMMAMSMSMMMXSAXASXMXMMXMXAMSSSMMSMMMAMSMMSASXSMSXMXMMXSAAMMAASMMMSXMAXAXSAMXSXXXAMASAASXMAAMXSXAAAAA
XAMXAMXASXSASXMXMMSSMXMMXMASXXXMAMXMMXAAMAMXMAXXXXASXMMMXAMSXSAMMXMAAAAAAXXSSMXAXSXMAAAAXSXMXAMMSMMMXXAAXAMSAMMMMXMAXAMMMSMMMMMAAMAMAXMMXSSM
XSXSSSMAMAMASMASXXAMMMSAXMASAMXSAMXMSSMMSSMMMSAMXMSAMAXSSSMAAMAXAAMMSMMASXMXXASMMSAMXMAMSXASMMSAAAXMXMSMMMXMAXSAMAMSSMMAMAMAXMSMMXSMMMMAAMMM
AXAMXAMSMSMASASXMMASAAMMMSSMXMAMAMXXAMXXXXMAAXAMAXXMASXMAMXMASMSSXSAMXXAMAMAMMMXASMMXXMMSMMMXAAXXMXSAMAXXSAMAMSAMAMXAMSXSASMSAAXMAMASXMMMXAM
AMAMSAMAAXMAMXMMMSXMMASAASXMAMSSMMSMMSSMXMXMMSSSXSAXXMAMAMXXXXAAAXMASMMMMSMSXSMMMMMMMSXAXASAMMSSMSAXAMASAXASMMXMSMXMXMAMMXSASMMSMASAMXXSMSSM
MXMMXASMSMMSSSXMMMXMASMMSMAMMSAAMAMAAAAXAAAMXMAAAXAMXMXMXXMSAMXMXMMAMXAAAXMMASMSXAXAAXMMSXMASAAXAMMSMMMSASXMMSAMAMXXSSSSSSMMMAAAMXMMXXSAMAAM
SASMMMMAXMAMAMMXAMAMXMXMAXAMXMXSMAXSMSSMMXMSAMMMMMSMSMASXSSMSXXXXSMSSSSMMMAMAMASAMXMSSXXAMSAMMSMSAXAXSAMAMAAXXAXAMMMMAAAMMAMSMMSAMMMSMMAMSSM
SXSAASMXMMXSAMASMSMMMSAMMXMXSMAMMSXXAMXXSAXSMMAAAXMAAASMMSAAXXSAMXAAAXXAXSAMXMAMASXMAAMSAXMXSAMXXMMMSMAMMMSMMSSMMSAAMMMMMXAMAAXXXAAAAMSAMXAA
SAMMMSAMXAXMAAMAXAAAASMSSSMSMMASAMXMAMMAMXMMMSMSSXMXMXMAXSMMMMSAXMMMMMSXMAMXXMASAMAMMMMMSMXMAXMSMAAMAMXMAMXMAAMASAMSSXSASAASMSMSMMMSXMAMSSXM
MXMASXMAMASXSMMMSSMMMSXAAAXAASXSAMASAMXXXAMAAAXAXASXXXSXMSAXSASMMXSMSASMMSAMXXAMASXMXSAAXXSMASXSASXSMSMSXSAXXMXMMMXMAXSAMXMMMAAAAAMMMXSAXXAS
SAMXSAAMSMMXAAXXMXXSASMMSMMSAMXMASASMXXMSXSASMMMMAMAMMMMXSXAMXSMSAMAMASAAXAXMMSSMMAAXXMMXAXMXSAXAMASAAAMMSASAXAXMXMMMAMAMXSASMSMSMSAAAXSMMSS
XMAMSXMXSAMSSMMSMMXMAMXXMMMXMXASXMASXSAMSAXAMXMSASMSMAAMXMMXMSXMMAMMMMMMMMSAAAXAMSMMXMSMMMMMMMMMAMXMXMSMAMAMXSSSMAAAAXMSMAAAMAXAAAAMMXSASMAS
MASAMMMAMAMAASAAAXAMMMMXMAMSMMAXAMAXAXSMMMMXMMXXAMAASXSMAXAAMXAMSSMXSXMMMAMMMMSAMXSSMMSAMMAXXAASAMAXAXAMXSAAMXMAXMSMXMMMXMMAMXMMMSMMMXSAMMXM
AAMMAAMXXAMMSMSSSSXSAASMSSSMSAASXSMMSSXXAMAMMMMMXMXMXMAXXMXXSSXMAXAAXASMMSSSSXXXXAMSAMSAMSSMMSMSMSASMSAMXSMSMASMAXAASMSSMXMSSXMSAXAMXAMAMXSS
MAMXXSXMSMMXAXXXAMXMXMMAAMMAMMXMAAXAXAMSMSSXAAAMXSXMSSSMMMSAXAMMMSXMSMMAAMAAMMMMMASXXMMSMAAAXMMXXMASMAMXMXMAMXSASMMXSAAXMAMAMAMMMMMMMXSAMAMA
SSSSMAMMASXSSSXMXMASXSMMMMMAMXSMSMMSSMMXXAMXSSSMAMAXAAAAAAMXXAXXASAMXASMMMMMMAMAMMXXAMMASMSMMMMMAMSMMASMXMSASMSAXAMAMMMMMSMMSAMASXXAAXMAXSSS
SXAAMAMXASXAXAXMMSMSAAAXXMSXSAMXMXMXSXASMXSAXXAMAMAMMMMMSXMAXXMXXXAMSMMMMXSASXSASXAMXMXAMMMAAAAMXMXXMASAAXMASAMAMXMASXSAAAAASASAXMXMSMSMMMAX
MMSMMASMAMMSMMXXAMAMXMMMSAAAXMXAMXXAXMMAAAMASXMMSSXXMASXXAMMXSASMSMMMAAMSASASXSASMMXAXMAXAXSSSMSAMMXMASMXMMMMXMMMMMMMAMXXMXXMAMMSMSAAMAMXMAM
SAMXSASMAMAXAXMMSSMXASAXXMASXMSXXMMSSSXMMMSXSAMAMMXSSMSAMMMXXAASAAAASMMMMASXMASAMXXAXMSMSMMAXAMSXXAAMAXXMXSMSASAAXSSMMMXXSSSMXMXAAMSMSMSMMSM
SASAMMSXSMMSMAMAAAXSAMXSAXAXMAAXMMXMAXXXMXMMMAMSSMAXAAMMMASMMMXMMSSMSAAXMAMXMAMMMXXMSAXAAXMXMSMMAXSXMASMXAXASASMSMAXAXSXXMAXASMMMAMMXMXXXMAM
SAMMSAMXMAAXXAMXSSMMAMSMMMMSMSASMAXMMMMMSASAMSMXAMXSMMMASMSAMMMSMMMAMMMMAXMAMAMAMMXMAMMMMMSAMAAMMMAAMMAMMMMMMXMAXAMMSAMXMMAMXXXMSASXAMSSMMSX
MXMASMMMSSMSMXXMAMXMMMAAAASXAMSAMXSMASXAXMXMSAMSXMMMASXXSMMAMXAMAAMXMSMXMAXXMSXMAXAMSSMXAAMMMMMMAAMXXMASAMAXSAMMMXXXMXMAXMASXAMXSASXXXAAAAXS
XAMXSSXAAAXSMSMSAXSSSSSMMMAMXMAXMXSXAMMMSSSSSMXMAMASAMSSMXSMMMSSSMMAMAAASMMSMMASASMXAAMMMSXXASMSXSXMXSMMMSSSSMSMXSSSMMSMXSASMAMAMAMMSMSSMMMS
SSSMXXMMSXMSMMAMMMMAAAMXSXMMSMXMSAMMMSSMAXXXMXXSAMMMMSMSAAXAAMAMXMSASMXMXAMAASAMXAXSMSMSAMAMAAAAAXAMXMXXXAMXMXAXMXAASAAAMMMSXAMASXMAAXAXMSAS
XXAMAXMAMMMSSMXMMAMMMMMASAXAAMAAMASXXAXMMMMMMAMSASXSMAAMMMSMMSMMAMMMSASXSSSMMMXMXMASAAAMASXMMMMSMMAXXMAXMAMSMMMXAMMMASMSMAASMMXXSAMMSSMMAMAS
AXAMMSMAXSAMXXMXSXSAMXMAMXMSSSMSSXMXMASMMAAAMAMMXMASXMMMAXAMXAXMASXXMXMAAAXXXXXXASAMAMMMAMMMXXAAXXXMAMSSSXMASXMASXSMAXMXXSSMSMASMXSSXXAMMMAM
XSAAXXMAMMMXSAMXSXXMMAMXXSAAXXMMAMXXMASASXSMSXSXSMXMASMSSSMAMSMSAXAASMMMMMSXSAXSXMASXMSMSXXXAMSXSASMMMXAAXSAMXXXAAAMAMXAMMAAXMXSAAXMMXXMXMAX
MAMAMSMSSSXAXMMAMAAXSXSXAXMXMSAAMAXMMASAMAMXSAMAXMMAMSAAAMXSXMASASMMMASXSAAAXXMSMSAMAXMAXASMXMAXMAAAAXMMMMSASAMXMSMMAMMSXSMMMMMMMMSAMMAMSSSS
XMMMMAAAMAMASXMASMMMMASMMXSXAXMMXXMAMAMMMSMAMAMSSMMAMMMMSMAMAMMMAAXAXSAAMMMSXMASAMASAMAMSMSAMXMXMASAMMMMAXSAMXMSXAXXASMXXSMMASAAAXSAASXMXAMX
MXAAXMMMSMMAAXSAMMAAMMMASASMSXSXAXSASXSXAMMSSXAAAASXXSAMAMASXSXMSMSXMXMXMXAMXMASXMMMMSAXMASMMAMSXMAMXAXMAMMSMSAMXSXSASASAMASASMSMXMMMMAMMAMX
XMXMXAXAMXMXSMMASXSSSXSAMMXAMASMSXSAMAAMASAAAMMSXMMAXSASXSASAAAMMAMXAMXASXAMXMASAMXAASXSMAMMMAXAAMAXSSMMMMMAXAMAXAXMMMMMASMMASAMMXAAXSAMXAMX
XSAMSMMXMAMMMASXMAAAAAMXSXMXMXMAXAMXMSMSXMMSMMAMAMMXMSAMXMAMXMASAAMSXMMAXMAXAMAMMMSMMSASMMMSSMSSMMMAXMASAXXSXMMSXMASXMXSAMXMAMAMXXMMXMAXSASA
SMMXASXXXAMASXMSMMMMMMMXMAMAMAMSMXMSXMASXMAXXMASMMMMMXMMXSMSSXXXMMMXMSSMMSSSMSMSMAMXXMAMAXAAXXXAAAMXMSAMASMXAXAMASAMXSAMXSMMXSXMSSMSSXMMSSMX
AAMSAMXAASXMXASXXXXMASXXMASMSSMMXAXXAMAMAMASAMASAAAMXAXSXMAAMMMMSMMAAAAAAAAAMXMAMXSMXMASXMMASXMMSXSMXMASAXASMMSXAMASAMXSAMASAMMAAAMSAASAMASM
MSMMAMMMMMASXMASMSXMSSXSMXXMAMAMMMMSXMAXXMXSXMASMSMSSMMSAMMMXSAAAASAMSSMMSSSMMSSSMAMXSASXXXAMAMAAAAXXSXMXXXAMAXMASXMMSSMMSAMASXMSSMMXMMAXMMM
XMAXAXASXMAMXXMASAAMAMMXXMASASXMAXAMASASMMASXMXMMXMAAXAXAMXSASXSMMMXMAXMXAXAAAAAAMAMXMXMXMMXSAMASXMMMMMAXXMXMASMAXXAXMMAAMXSAMAMXMMMXSSSMSAM
SSSSSSSSXMSSMAXXASXMASXSXMASAMASXSMSMMSAAMAMAMXMSMMSSMMSMSAMXMMMXMMAAMMSMSSSMMSSMMMSSMSMSAAASXSXXXXXXAMMMMAAMXXMAMSMMSMXMXAMASXMSAAMMMAMASAS
MAMAAXAXMMAAXXMMMMXSXXAMAMAMAMAMASAAAXMXSXMXAMAMAAMMAMXAMMXMAAAAAMSSMSAMXXAAXAXXMXAAMAAAMMXAMXMASMMSSMSAAXMSSMSMMMSAAMMMSMASXMXAMSMSAMAMASXM
MAMMMSMMAMSSMSASXMASAMXXAMAXMMASAMMMSXMAMXMSSSXMMMMSSSMMSMMSSSMMXXAAAMAMSMMMMXXAMAMXMMMSMSMXSAMAMAAAAXSMXSAAAASXXAMMMSAAAXXMASMSMXXSXSMSXXAX
SASAAAAMXMAAAXMAAMASXXASXSMSXXXMAMSMXAMASAXAAXMMSAAXXXXXMAAAMAXAXMMMMXAMAAXSXSSSMAMXXSXAAAAASAMMSMMSSMSAAXMMMMMAMSSMASMSXMXMXMAAASXMASAMMMSM
SXSMSXXMSSSMAXXXXMXMXAAXMAAAAMMMSMAAXXXASAMMSMMAMASXXAMMSMMXSAMSMXSAMSSMMSMMAXAMXSMMMASMSSMMSAMAMAMMMAMMMXXAXAMXMAAMASAXXMAXMMSMSAXMAMAMMAXA
SAMAXAMXAXAAAMAMXMXXSMSXSMMMASAAXSMMMMAAXAMXAMMMSMMMMSSMAMSMMXSXAAMAMAAMXMAMMMSMAXAMSAXMAMXXSAMAXXXAMSMMMSMXXMSMMSSMAMMMAMAXSAMXMMMMAMXMMMMA
MAMAMMAMMSMMMAAAMSMMMAAAMXMSAXMMXAXMAMAMMAMSXSAMAAAMXAMMAMXAAMMMMMXSMSSMASASXMAMASAMMXMMASAMXMSMSSMAMXAXXAMSSMMXAMXMASXSXMAXMAMAMXMMMXMSSSSX
XAMASMSAAXAAXXMXMASXMAMXMAAMAXMXSMMSMSASXMMMMSASMSMSXMXSMSSMMMAMMSAMXAAMASMMASXMASMMMSXSASASAMSAAXSAMMMMMASMAAMMMSASXMASMMSXSAMXMAMXSAAAAAMX
SAXMMXMMXSSMSSMASASXSMSMSMSXSMSASMAXAMASAMAAASMMMMAXMXAMXXMMASASAMASXMMMAMAXXMAMAXAAAXMMXSAMXAMMMMXMXXSASMXMSMMSASXMMMMMAAMASMMSSMSAXMSMMXMM
AMSSMMSMAMMMAASXMASAXAAMXSXXAAMASMMMXMXMMSSSXXXSAMXMAMSSSMXSASMSASXMMASMASXMSSSMSSSMSSXSAMXMMXMAASXSMXSAXXMAMXAAMSMSASAAMMSXMAAXAMMXXAXXXAXA
MXAAAASAMXAXSMMMSAMXMSMSXMMMMXMSMMXAMMSXXAAMXMSXMMSAMSMAXAAMAXXMXMMMXMMAAAXAXAAAMAMXMAMXSASXSASXXSAAAAMAMSASXMASXSASASXSAXXASXMSAMXMASMMSMMS
XMSSMMSAMSMXMXSXMSMXXMMSAMXXMMMXAMXSXAAMMMSMXSAMSASXXMMSMMMSAMSSSSXMAXXXMMMSMSMMMSMMXMASAXMAXASXAMMMSXMAMXAXMASMXMAMAMAMXAMXMAMXMSXSAMAAAMSM
XAAAXXXXMAXAAAMAAMXXAMASAXXXMASMAMSAMXSMXXMASMXMMASAMXAMAAXMASXAAAASXSMSAXAAAAAAXMAMSXMSMMMMMXMMMXXXAXMASMAMSSXMAMSMSMAXAXMASXXAMXAMXSSSMSAX
MSSMMSMMXSSSMMMMXSASMMASAMMXXMXMMXMASAXXSXMSMMASMAMMAMASXMMSXMMMMMAMAAASXMSSMSSMSMSMSAMXXAAXMMMAXXSXMXXAXXMMMMMSMMAAXMASMSSMMMSMMMSMAXMAXSAS
AAAXASAMAMXMAAXSMXMSAMXSMMASMMMASMSAMXSXSAXMASXSMAMXASMXMAMMAXAMMMSMMMMMAMAXMAXAXAAXMAMSSMSMSAXSMXASXXMMMXMXXAMMMMMSMSXXXAAAXAAAXAMXXMMMMSAA
XSAMMSAMSXASMMMSMAXSAMMSAMSAAASAMAMXXAMMMMMXMMAXXMSMAAMAMMASASXSXAAAAMXMMMAMMAMMMSMSSSMMAAAAXSMAAXMASMAMAMXAMXSAASXXAMXMMSSMMSMSMAXMMXSXMMSM
XMAAASXMMMMMAAXXSXXSXMASAMXMSMMASXSMSMSSSMAASMSMXXAXMAXAMXAXAMMMMXSMMXSXMMSSMXSXAAAAXMASMMMSMXSSSSXMXSAXSXSMSMSMSSMMXMAMAMMMMXAXXSMXAAAAXAMS
XSAMMSXMXAMSSSMMAMASXSXMAMXXMXSMSAXAAAAXMMSXSAAAMSSSMMXSAMSMMMAAAXMAMASAMAMAXMMMSSMSSSMMMSXMAMAMXMAMXMMXXASAAXMXXMAMAXAMXXAAMXMSAMAXSMSSMMSX
MXSXAMASMMMAAXXMASMSXMASAMMXMAXAMAMSMMMSXAXAMXMMMAMMMAAMMXMASXSMSAXAMASAMXSSMSAMXXXMXXXAMAAMMMMMMSMMMAMAMMMSMSSMSXSXSSSSMSSXSAXMAMSMMAAXAXXM
MAMMASXMAXMMMMMSAMXMAMAMAASXMAMMMXAMXSAAMXXAAASMMMSAMMSSXAXAMAXXAMSMMXSMMXXMASMSASMMMXSASMSMXMAAAAXAXAMXSXAXMAMASAMAXAXAMAXMSMSMSMXAXMMMSMAA
MASXMXMMSMMXSAXMAXSASXAMXMAAAMSXAMXXAMASMMSSSMSAAXMASAAMXMMMSXMXMXMXAXMAXXAMXMAMASAAMAXMXXXMASMMSSMXXAMXSMMSMAMMMAMAMMMSMAXXMAXAAAMXMASAMMSM
SXMAXXSAXAXASASXSMMAMSMMXMASMXMASMMMXMAMAAAAAASMMMSAMMXSAMXXAXAXXAAMMSXMSMMMXMXMSMMAMAXSAMXXAXAXXAAXSSMXMAMXMSSSSSMXMSAXMMSAMAMSMSMXSAXXXAAX
SASMMMMMMMMMSAMXAAMAMAXSXMXXAXXAAAAAMMSSXMMSMMMMSXMASXXSMXSASMSMSSSSMAMAXAASXMXMMMMXMAXMAXASMSMMSMSMAAXXSSMXAXAAAAMAAMMMASAMXAAAAXAXMASAMSSS
MAMMASAMASAMMAMSSMMSSXMMMMMAXXMMSMMXXXAAASMXAAXAMMSMMMXMAMAMXAXAAAXMXAMMSSMSAMAMSSSSSSSSXMXMAAMAAAAMXMMMMASMSMMMMMMMSAMXMMAXSXSMSMSMXAAXXAMX
MXMXXMXSASASMMMAAXAXXMSMAXAMMSAMAMSSSMMSMMMMSMMMSAMAAXAMAMMXMSMMMSMMSXSAAMAXMXASXAAAAAMXMMSMSMMSMSMMAXAASMXXXAMMXMXMXMAMSSSMMAMAMAASMSSSMMSS
MSSMMAXMASXMAMMSMMMMXAAMSSMSMXMXAMAAAAAAMXXAAASAMASMMSMSXSXMAXSSXMAXXAMMXSMMMSMSMMMMMMMASXAAAAXMAMMXSMXMSXMMXAMMASAMSMSMAXXAMXMAMSMXMAAXAAAX
SMAAMXXMAMMSAMMXXAAXMMSXMAAAMXSSSSMSMMMSSXMXSSMAMAXAMXASXMXSSMAXAMSMMMMMXSAMXAAXMXSMAXSAMMMSSSMAAXMAMASMMMAAMSMSASASAAAMMMMSMXSAXAMXMMSMSMMS
SSSXMMMMMXAMASAMSSMSMAXASMSMSAMMMAMXMAMXXMMAXXXMMSSMMASXXXAMXMMMXMXASXXMASAASMSMSMASMMMXSAXAAAAMSSMMSMMAASXSXXAMAMXMMSMSSMAXSMMXSMXXMSMAMAAA
MAMXAMSASMSMXMAXXXAAMMSAMAMXMASXMSMASASXAAMXSAAMAMXMASAXMMXSAASAMXSAMAAMASXMAAAAMXAMXAAASMMMSMMMXAMXAAXMXMAMAMXMMXSSXAASAMXMAMSASMSXMAXAMMMS
MAMMXMSASAMXSSXMAMSMSXMAMAMMSXMMSAMASMSMMSAMMMMMASAMXXMAMAASXMXSAXMMMSSMXMAAMSMSXMMSXMMMSASXAXXXMAXSSSMMAMXMAMXMMAMASMXSXSMSAMXAMAAXXASMXSAA
MXSMAXMAMAMAMAMAXAAAAAXXMAMXSAAXXMMXSASMAMAMSAXSASASAXMAMAXXMMMXMMAXAAAMMSSMXXXAXSXSMMAASMMSXMXMSSMAAMMSASAMAMSXMASMXSAMAXAMXSMMMMMSMASMAMXS
XXAXXMMXSXMMSAASXSMSMXXASXSASMMMSXMXMAMMXSXMSAXMASAMAXSASMMXAASMSSSMMXSMMAAXAXMSMMASXMMXSAMMSMAXAXMMMMMSSSXSAMXASXSXAMMMSMXMAMAMXXAAMMMMAMAA
MSAMMXSXXXAMMMMMAAAMAMSMMMMXSXAAXXXAMSMXMXMXMSMMAMAMAMMXXAASMMSAAXAAAMXXMSSMSSMAAMAMAMMXSAMAAMMSAXSXXMASAMXSXSAMXMMMSMMXXAAMSSSMASMXSAAMASXS
XAAXMASAMSMMAMMMSMMMAMSAAXMAMXMSMMMSSMMMMSXXAAXMXSAMXSAMMMMMSAMMMSSMMSMAXXXAXAMSXMASAMAASMMSSSXAMMSXMMXXAMMMAXAMAMXAMAMAXSAMXAAMAXMASMMSASAM
MXAMXAMAMMASASAAMMXSXASXMXXMSSMXXAAXXMXAMMMMSMSXASASASXMAXXAMXMAMMAMMAMMMSXMXMMMMSMSMMMAMXXXAMMSMAXASXMSSSMMMMMSASAMXAMXMMASMSMMXSXMXAMXAMXM
ASXAMMMAMXMMAXMXSMMMMXMAMSMXMAAXMMMSAMSXXAAMAMXMASAMXSAASMMSMMSSXMAXSXMASASMXSAMXSXMASAMXSSMSMAAMXSMMAXAAAMXMAMSMSASMMXSMSXMAXAXAAAXSSMSSMMM
XAMMSXSASAAMMMSSXXAXSSMAMAAASMMMMXMSAMAXSSXSAXAMXSXMMXMMMAAMAXAMMSSMSASMSAMXAMASMMSMAMASAMAAXMSSSXMASXMMSMMMMMXXAMAMXAASASXMASAMXSSMMAAAXAAM
AMSAAAAAMMSMMAMAMSXMSASMSMSMSXMAXMAMAMMXAMASAMSMMMASXMSAXMSSXMASAXAASAMXMMMMXMAXAMXMASAMASMMMMXMAMSAMAXXXAXSASMSXMMMMMMSAMAMXMXMXXMASMMMSXMX
MXMMSSMSMMMXMASAXSMMSAMXAAMASXMMMSASMMXMASXXMAMAASAMXXSASXMAXXAMMAMMMAMASXSXSMMSAMXSASAXXMAAXAAXSAMASMMSSMMSAMAMMXMASMXMAMXMASAMXASAMASASMSX
XAXAXAAAAAMMSMXMMXAXMASMMSMAMXSAASASXSAMMMMMXSMSMSMMMMMMMAAMMMSSMXXSXSSXSAMAMAMAXMMMXMASXXMMMMXXMAMASXSAMXASMMSMMASASXMMAMXSXSASMAMMSXMASASM
SMSMMMSMSMMMASXMMSAMXSMXXMMAMAAMMMAMASASAMAMAXAMXXAAXAAAXXMXAXMAMXAAAASMMMMAMAMSSSXSXMAXMASMSMSXSAMAXXXXAXASAAXAMXSAMAMSMSAXAMXMXAXMAMMXMMMX
XMAAAAAXXMXSAMMAAMAMXXAMXMXSMXSSSMSMXMAMMMSXMMMXASMMSSSMSAASMSSXMSAMXMMXAMXXSXXMAXASMMMSMSMAAASASXMMSMMXMMASMMSSMMSAMAMAXXMMSMMMMMXMMAMASXMA
SXMMMSSSSSXMMMSMMSSSMMAAASAMXMMAMAAAXMXMSAMASAXMMMSAAAAASMMAAMXXAXMXSSSMSSMXAMXMAMXMAAXMXMMSSMMAMXSAAAAMXSMMXMAXMASASXSXSSXMMSXAASXSMASASASX
XAXSAXMMXMAAXAAAAAAAXSMSXMASMMMAMSMSMASXMASAMMASAAMMMSMXMASXMASMMMSAMXAAAAXMMAAMAMSSSMMSAMMXMAMXMASXSMMAMMAMSMMMMMMAMMSAXMASAMMMMSAASXMASAMA
SSMAXSMSASMMMSSSMMMMMAAMMSSSMSSXXXMAAMMASXMMXXXSMSSMAAXASAMAMXXAMAMAMSSMMSMMSSSXXSAAASXSAXXAMAMAMXSAMAXSMSAMSAMSMXMXMASMMSAMXSAAXMXMMMMXMMMM
XAMMXMAMXXXXXMAMMXMSXXMSAXAXAAAMSAXXXAMAMXAXMMMSMAAMSSSMMSSXMMSAXSSSMXXAMXMAAMAXSXMMMMMSAMMMSASXSAMMMXMXAMMMSXMAAASMMASAAXSMXSMSMSAXAAMXSXAA
MSXXAMAMSSXSAMXMMSAMAMXMXMXMMMSAMAMSSMXSAXSMMAAMMMSXXAAXAMMASAAXXXAAMSMSMAMMXMAXMAMMMSXMXSAASASAMXSXMMAMSMSASMSMSMMAMXSMMSMMAMAXXSMSXSMAMSMS
MAMXSMXSAAXXAAXXAMXXAMAMSMSMMMMMMMMXAAAAXMXAXMMMSXMMMSSMXSAMXSMSMMSMMSAMMSMSMMXXMAMAXMASAAMXMAMXMAMASXAAAAMMXAAAAXMSAMXXMMMMASXMASXSAMMAMXMX
SMMAMXXMMXMSMSSMXSXMASASMASAAAAAMASMMMMSXMSAMASAMMXAAXAAAXMSXXXAXAAXXMAMAAASASXSSMSMMXAMMSXXMMMAMMSAMSMSMSMXMSMMMXXXAMASXMAXXMAMMXMMAMSXSSMS
AXMASMSMSXAMSAXXMAMXXMXXMMMSSSSMMMMASXMXAMASMAMASASMSSMMMSSMAMSMASMSMMSMMMSMAMAMSASASMSSMAXXAASXXMMAMAMMMMMSAAASXSMSSMASXMSMMXSMMASXSMMXAAAM
MXMXXAAAAMMMMMSSMAMXSMMXSAAXXMAXMXSASAMXAAAXMSSMMXAAMAAMAXAMXMAMAAXAXAAXSSXXMMAMMMMAMAMAMAMXXMMSMSSMSMMSAMAMSMXMAAAAXMAMXXXAAAMASASMAAMSSMMM
XSXXMSMSXMAAAXAAMAMAAAMASMSSXMAMSAMASXMXMMMSAAXMSAMMSSMMSSSSMSXSSMSAMXSAMXXMMSXSXMMSMXSAMASXMSAAMAAXXMASAMXMASMMMMMMMMASMASAMXSAMASMMMMAAMMS
SAMXMXAMASXSSMSASASXMMMASMMMXMASMAMAMAMAASXMAMASAMXAAAAXMAAAXAMXAMSAMXXAXXXAXAAXAXAMXASMXMMAAXSXSSXMXSASMMXXAMXXSSMXXSMXAXSAXAMMMAMXXAMSXMAA
XMSAAMAMAMMAXAMXMAXXAAMXMAAAAMXXXXMASASMSMAMXMSAMXMMSSMMMMMSMXXXAMMSAASMMAMSMXSXMMSSMXSAXSMMMMXMAXAXMAXMASAMXMMAAAXMASASMXSAMSXMMSMXSXMXSMXS
XXMMXXAMAXXSASAXMAMSSMSSSXMSSSSMMXSXMASXAMMMAMXMXAXXAAXMAMAAXXMXAMXXMXMXAAMAMAXAMAMAMAMXASASXMASMSSMAMASXMSSXASASMMMAMAMSAMXMMAMAMMAAXAXXXAM
MMSMMSSSSSMXAXMMSAMXAAXAAMXAMMMAAMMSMMMMMSMMXXMASXSXSXMXAMSSSXSASASMSMXMSMSAMXSXMXSMMXSAMSAMASAMXAAXSXAMAAAXMAMAAMASAMMMMXMAXSAMASMXMMMXAMAS
AAAAXAMXAAMMMMMAXAXSXMMMMXMAMAMMMMAMXASXXAASMAMAXMAMXAAMXMAAXXAAXAMAAAXMAAMMSXMMMMMMAAXMXMXMMMSMMSMMXMASASMSMSMMMSXSXSAAAXXXXSAMASXXXAMSSMSA
MSSXMASMSMMMSAXXMSMSSSXXXXSXMXSXXMAMXAMXSSSMMAMMSSMMSMMMSMXSXMMMMAMSMSMSASMXMAMAAAAMMMSXMXSXMAMXXAXMMSAMXXAAMAAXXMAXASXSSMMMMMMSAMMMSXMAXMXM
XAAAXAMXMASAMSMSSMAMAXXMMMAASAMXMSMSASMMAXMAXXSAAAAAXMAXAAAXMSAXXXXMMXAMAMMXMMSSSSMXAAXAXAAAMSMMXSAXAMASMMSMSSSMMMMMMMXMAASAAAXMASAAAMMSSMAX
XMMSMASXSAMXSAMMAMXMMMXAAMAAMASAAMAMAXMAXMSSMMMMSSMMSSSSMSMXAXASXSAAMMSMXSXMXXAXMMXSASMMMXSMMAAXAXXMXSAMAXMAMAAAAAXMXMMMXMMMXSSSMMMMSSMXAMXS
AXAAMXMAMXSMMAXSAMXMXMMSXSAXSMMMXSAMXMMSXMAMAAAMAMXAMAMXXAMMSMXMASMMXMXSAMAMSMAMSAAMXXAMAMXAXSXMMMSAMMAXSAMXMMMSSMMMASASASXXXAMMAMMMXXXXXASX
SMSSSXXMMAXASAMSAMXXAXMAXXMASXSAASMMXAMMAMXSSMSMSSMXMAMXSXSAASXMXMXXSXAMXXAMSAAAMMSSMSMMSSSSMXAASAMMXMAMMASAXMAXXAASASASASAXSASXXMAMSMXMXMAX
XAMXMMXAMMSXMXXMXMSSMSAMMXMXMAMMMMAXXXAMMMMXAXXAXAAXSMSMSAXXXXMASXMASMMMSSMMSMMSMAAMMXAXMAAXASXMMASASMSMSAMMSMSSMXXMAMAMAMAMSAMAMMAXAAASAXMS
XMSAAASXSAAMXMXSASAAXXAMAMSAMAMXSSMMMMSXMSMSSMMMSMMMSSMAMMMSMXMASAMAXAMAMAMASXMAMMMSASMMSMMMXSMASAMXMAMXMAXXSXMAAMSMSMSMSMSMMXMASXMMMXMSAMXX
SSXMSXMAXXAMXAMAXAMXMXMMSASXSMSAAASXAAXAXAMAAMMAAAAAXAMMMXAAAXMAXXMMSSMXMXMAXASMSAMMMMAASXAXXMXAMASXMAMMXSMXMASAMXSAAAAAAAXAMXMAXXMASXMXXMXX
MASAMAMXMASXSSMSMMMSASXXMAMAXXMASAMXMMXMMMMMSMMXSSMSSMMASMSSSMMSXMXMXMASMXMMSMMSSMMAMXMMMMXXAMMXSMMMSSXSAXAASAMXMXMSMSMSMMMAXXMXSASMSAXAXMXM
MXAMSXMXXAXXMASXAXAAAAMXMAMXMXMXMMSMMMXAAXXAMASXAXAMAMSMSAMXXMAXMSAMAXMASAAXXAMXSAXXXASMSMSSMXXAXXAXXMAMASMMSAMMXMAMXMXXAMXAXMAMSAMAMMMSXSAA
SMMXAXMMMASASMMSSMXSMMAXSSMMMSMXMAXMAAXSMSMXMAMMMMMSAMXAMAMXXMAMAMAMAXMAMXSMSMMASMMSXMSAAAAXMASMMSMSMMAMXMAXMAMXAXMSAMASAMSXMXSMXSMAMXXMAMSX
AAXSMAMASMMXMAMAMAMMMXXAMAMSAAMSMSSMMSMMASASMSMMAAXSMSMSMXMAMMSMSSSMAMMASAXAAAMMXXXMASMXMMMXSMAAAAAAAXXXAMXMXSAXAXAMXMASXMAAXAXMAXMXSXAMSMXM
MSAXMAMXMMMMMMMXMAXAXMAXSAMMMMSAAMAXAXAXAMSASAAXMSMMXSAAXXXSAXXXAAAMAMSAMXSXSMMAMMASXMAAMASAMXSMSSSSMMSMSMAMXMAMSMSXSAAXMXXSMSAMSSMXMASAMASM
XMASXSSSMSXSASASMXSMMMAAMMSAMMSMSMMMASXMMXXXSMSMMAASAMMMMSAMAMSMMMMMSXXASASMAXMASXAXXMSMSAMASAXMXMXMXAXAAAMMAMAMXAAAXMAXXSAXAMXAAAMASAMAMAMX
XMSXAXXMAAAXAMAMSASAAMXXMXSASAMXXAXXXAMXSAMXXMXAMSSMASXSAAAMAASXSASMMMSAMAXMAMSAMXAMMMAMMXSSMMXSXMASMSMSMSASASXMMMMSMXSAAMMMXMMMSMMMAASXMXSX
XSMMXMAMMMSMMMMMMSMMMSAASAXASASASAMXXAAAXASAXSXSMXXXXMASAMXSXXSAMASAAMMXMXMMXXAMXXXAXSASAXMAMSAXAMXSAAMAAMAXMMMMXXXXAAMMSMXAXXXMAMSXMAMAMAMX
XXXAAMXAAAMXXMAXMMSXAMXMMASXSAMMSASMSMMMSXMMSMAMXMASXMXMAXAAXSMAMASMMSAMMMSAMXSMSSSMXSMMMSSSMMXSAMMMMMSMSMMMMAAAMMSMMSSXMAMXMSXSXXXAMASASAAS
MSMSXSAMXMMMMMSMAAXMAMAMSXMXMAMASAMXXAAMSAMXAMMMAMSMMAAMXMSMMXXXMAMAXMASAAMXMSAAAMMMXMSAAXAMXAASMMXAAXAMXAAAXSMMAAXAMAMXMMXMASAMASMXMAMASASA
SAAXMMXXAAAMAAXSMMMXAMMMMASXSAMXMSMSSSSSSMMSMSXSSXAXMXMSXAXXAMMMMXSXMSAMMSMAMAMMMSAMXASMXSSXMMXXSMMMSSMSSSMSXXAXSAASAMXSMSMMAMAMAMAAMMSAMXMM
MMSMAAMSMSSSMSXSXMASXSMMSAMASAMMMAXMAAXAMXAAMAMMMMMXMAAXMXMXXXMAAAAXMMSMAXMXSAXMMXXMXXMMMSXXXXAAMXSAMAAXAMSMXSAMAMAMAMAMMAAMMSMMMSSXMMAMSSMX
MXXXMMXAAXAXAXASXXXAXAAMASMMMMMSSMMSMMMMSMMASASAXXMAXSMMMSMSMMSMMSAMXAMXAXAASXXSASMSMXAXXMAMXMMSMAMASMMMMXAMMMXMMASMMMAMXSSMXAAXAAXAMXASAAMS
XSAMSMMMSMAMXMAMMMMSMSMMAMXSAMMAAXMASXXMXAMXSMSASAMMMXAAAXAAXAAXMAMSMSSXSMMMSMMMMSAAMSSMSXXMAAAMMSSMMAAMXMMSSMAAXXMAXMAMMAMMSMXMMXMXSSMMMSMS
MMAXAAMAXMMMXMSMAAAXAMXMXMAMASMSSMSMSMXSMMMAXAXXXXSXAMSMSMXMSSXSASMMAAMAXMSAXAASXMMMMXMAMMAXXSAXAXAASXMMAMXAAMXSXMXSMMAXMAMXXSAAXASMMAAAAXMX
XSMMSSMAXXASMMXSSSSMAMSSSMXMSMMXAAMXMMMSXAMAMMMMSXMMSMXAMAAMAMXSMMSMMAMMAMMMMSMXAXXMSAMAMMMXAMXMMSAMXSXMASMSSMXXAXAMXMAMMAMMASMMMMAASXMMSXSX
XMSMAAMMMSMSAAMAXXXXXXAXMXSXMASXMMMAAAASXSMSMAAXMASAMXMXMSMMAMMXAAXXSXAMSSSMXMSSMMSMSXXMSAMXSAAAMMAASAMSAMXAXMASXMAXAXSMSMSXAXMASXSXMASXMASA
MAAXMMASMMMSMMSMSMMXMMMSMAMASMXMASMXXMXSAMAMSXMMSAMXSMMSAMMSSMSSMMSXASXXXAAXXMASMAMAMAMSMXSAMXXXASXMAAXMAMMSSMASXASMSMXAASAMXSSXSAXMSAMAMAMX
XSASXSAXAXAXAMXXSXAAMAAAMASXXMAXAMXAMXMMAMAMMMSXMASMSAXXAXMAMXAAAAAMMSMMMSMMXMAMMMMAMAMAAAMMSMSMMASXMAMXMMAMAMAMXSAAXAMSMMSSMXMAMAMAMXSXMASX
XAAAAMXSMMMSMMSAMXSSXMSMSXXAASXMMSSMMMASXMASAAXASXMASXXMXMMSSMSSMMSAXSASXAAXMMAXAAXMSMSMSMMXAAXXSAMXSXSAAMXSAMAXSAMSMSMASMAXAAMXMAMXMAAASAMM
SMMMXMMAMAXAAASMXXAXXMAMMASXMMXSAAAAXSAMAXAMMSSMMXMAMAMXMSMAMMMXAXXMMSAMXSXMMSSSMXMAAAMMAMXMMSMMSASXMAMMXMAXMSSMMAMAAXMASMMMSSSMSSSMMSSMMMSS
MASXMASASMSSMASMMMAXSMMSMAMMAXAMMSMMMMASMMSSXMAXAXMMSSMAMAXAXXSMMMSAMMAMXXAXAAAAAAMSMMMAMMSAAMAASAMAMSMMSMMSMSAXSAXMXMMXSAXAAXAXXAXXAXAXAXAX
SAMXXMSXSMAAMASAXMAXXAASMMMSXMXSAAAAAAXAXAXAAMSSMSAXMAXSSSSMSMMAMXSMMSMMMSMMMSSMMMXMAAMAMAMMXMXXMSMXAAAAXSXAXSAMXXSSMXMSMAMSXSMMMMMMMSMMMMSS
MASMSAMXXMSMMASAXMMMMMMMAXAMXSMMXSSMSMMMMSMSMMAAMSASXSMXAAAAAMSAMMMAAAAAXAAAXMAXASXXXMSAMASXSXMSAXMASMMMSMSMMMXMMSAXMASAXAMXMAXAXAAXMAMAAAXS
AAAXSAMXMMAMMMSASAMMAAMSMMASASAAXMAAAXAMAMAAMMMXMSAAAMSMMMMSMXSXSAMMMSSMMXMMSXMASMMSXMSMSMSMSAMMAMMAXAMSAXAXMAMAXMASXXSMSXSAMASXSSSXXASMSMMS
MMSMMASMASAXXXMMXAXSMMXAASAMXSSMSSMSMSASAMSMSXXAAMXMAMXXXSAMXXMASMMSAAAMSSXSXMAXXXAAAXMXAAXXMAMXAMMSSMMSMSSSSSSSXMXMXMMXXMSMMAMAXMXMSXMAMXAM
XAAAMAMXMMAMSASAMSMSAXSAMMASMMAXXAAMAMMMAMXXXASXSMAXMMMMMMMSMMSXSAAMXSMAAASMAXSMSMMSXMXMSSMASXMSSSXMAMAXXXAXAAAMXMAXAAMXMAXAMSSMXSAMXAMMMASM
MSSSMASXAMAAXAMXSAASXMAAMSXAXSAMMMAMXMAMXMMAMMMXAMXMXAAAAAXAXASMMMMSMXMMSMMXAMXAAAMMXMAXAAMXMAMXMXXSAMMSSXMMMMMMMSSSSMSAAXSXMMAMXMAMMAMXAXMA
MAAXMXSMXMMSMXMXSXMMMSSSMXAAAXASXXASMSSSSSMXMASXMMAMXSSSSSSXMASAAXXXAXMAXMSMSSMSMMAXAXMAMSMSSMMAMAAMASMAMAXAAAMSMMAAMASXSMAXMSAMMMAMXMMASXSX
MMSMSXMASXAAMAXXMMMSAMAMAXSMMSMMMSXSAMAAAAMAMMXAASASAMXXAAMAMSMXMMMMSAMXSAAAXXAAXXMSXSASAAXXAXSAMSSMMMMAMXXMSMSAAMAMMAMXXAMMMMMMSSXSAMXAMMXA
MAAAXASXMMMSAMXXMASASMAMAMXAXXAAXMAMMMMMMMSASXMMMXASXMXSSSMXMMASXXSAMSSSMMMSMMMXSAMAAXAMMMXMAMXAXXAAAMXASXSXAMSMSMSSXXXXMSMSMMSAMXASMMXAMXMX
SSMSMMMAASAMASXMAMSAMXMMAMSAMXMXSMSMMMSAAXSXXXAASMMMMAMXAMMSMMMMMXMASAMAAAXMAMSASXMXSMXMXMAMXMSMMXSMMSMASAAMXMSXXAAAMSSXAAAAAXMASMXMAXXXMAXM
AAMXASXXMMASAMAAMXMMMASMSXSAMXAAXAAAAASXSXXAXXSASAMAASAMXMASAXSASASMMMSMMMXSAMAAXMMMXMAXMSAMAMAAMAMAAAMAMMMMSMSXMAMMSMMASXSSSMSMMMXMAXMAMXSA
MMMSAMXMXMAMXMMXXMAASXMAXASASXMMSSSSMMSAMMMASAMMSAMXSMSXAMASAMSASASMAXXMASXMASMXMXMASMXSASASXSSSMASMMSMASXASAASASXXXAAAAMXAXXAASAMXMAMSAXAAA
XXMMAMXXXMASMXMASMSMSMMAMMMXXXMMAMXXMASAMXSMAMSAMXXXXMMSXSXMXMMXMXMXAMSSSSXMASXSXMMMSAAMXMMMXAMMMMSXMAXMSMSSMSMXMASXSSMXSMAMMSMSXSXMAMSAMXSM`);

it("should pass challenge", () => {
	expect(TimeUtils.log(() => func(challenge))).toBe(1796);
});

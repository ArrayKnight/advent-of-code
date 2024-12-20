import { expect, it } from "bun:test";
import { GridUtils, TimeUtils } from "../../utils";
import func from "./02";

const example1 = GridUtils.parse(
	`AAAA
BBCD
BBCC
EEEC`,
);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example1))).toBe(80);
});

const example2 = GridUtils.parse(
	`OOOOO
OXOXO
OOOOO
OXOXO
OOOOO`,
);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example2))).toBe(436);
});

const example3 = GridUtils.parse(
	`EEEEE
EXXXX
EEEEE
EXXXX
EEEEE`,
);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example3))).toBe(236);
});

const example4 = GridUtils.parse(
	`AAAAAA
AAABBA
AAABBA
ABBAAA
ABBAAA
AAAAAA`,
);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example4))).toBe(368);
});

const challenge = GridUtils.parse(
	`KKKKKKCVCCCCCCEEEEEEJJJJJJJJLLLLLLLLYYJJJJJJJJTGJJGGGWWWZZZZZZGGGGGGGJJZZZZZZTTTTTTTAAAAAAAAAUUUUGGGZZZZZZZSSSSSSSSSHHHHHHHHHPPPRRRRGGGGGGGG
KKKCCCCCCCCCCCEEEEEEEJJJJJJLLLLLLLLLYYYJKJJTTTTGGGGGGWWWGZZZZZZZGGGGCZZZZZZZZZTTTTTTAAAAAAAAAUUUUUUUZZZZZZSSSSSSHSSSHHHHHHHHHPPPRRRRRGGGGGGG
KKKCCCCCCCCCCCCEEEEEEJJJJJJLLLLLLLLLLLLKKJJTTTTGGGGGWWGGGGZZZZZGGGGGCZZZZZZZZZTTTTTAAAAAAAAAUUUUUUUUXZZZZZSSSSSSHHHHHHHHHHOOHHPRRRRRRGGGGGGG
KCKCCCXCCCCCCCCCCEEEEJJJJJJLLLLLLLLLLLLTTTTTTTTGGGGGGGGGGZZZZRZRGGJGCZMMMMZZZTTTTTTAAAAVAVVAAUUUUDUUZZZZZKBBBSHHHHHHHHHHHHOOOPPRRRRRRGGGGGGG
KCCCCCCCCCCCCCCCCEEEEEJJJJLLLLLLLLLLLLLTTTTTTTTTGGGGGGGGGZZZRRRRRGRRZZMMMMZZZTTTTTTTAAAVVVVUUUUUUUUUUZZZZZPBVBBBPHHHHHHHHHOOOPPRRRRRRRRGGGSG
KKQQQQCCCCCCCCCCCEEEEJJJJLLLLLLLLLLLLRLTTTTTTTTTMGGGGGGNGZZZRRRRRRRRMMMMMMMMMTTTTTTTAAAAVVVUUUUUUUXZZZZBZZZBBBBPPHHHHHHHHHHHOOHHRMRRRRRGGGGG
KKQQQQCCCCCCCCCCEEEEEECCZZZLLLLLLLLLRRTTTTTTTTTTMMMMGGNNZZZZRRRRRRRRMMMMMMMMMTTTTTAAAAAAVVVHHHHUUZZZZZZBBBBBBBGGGMHHHHHHHHHHOOHHMMMRMRRGGGRR
KQQQQQCCCCCCCCCEEEEEEEEEZZZLLLLLLLLLMTTKTTTMMBTTTMYYIGNNNNZZRRRRRRRRMMMMMMMMMTTTTTTMMAHAVVVHHHHUUUZZZZZBBBBBBGGGGGHHHHHHHHHHHOHSMMMMMMRRRRRR
QQQQQQQCCCCCCAAEELEEEZZZZZZLLLLLLLMMMMTTTTMMMTTTMMYYYYYYNNYZZRRRRRRRRRMMMMMMMTTTTMMMMHHVVVVVHHHHHZZZZBBBBBGBBGGGGGHHHHHHHHHHHHHMMMMMMRRRRRRR
XQQQQQQQCCNCCADDDDEEEZZZZZZLLLLEEMMMMMMTTTMMMTTTMMYYYYYYYNYYDYGRRRRRRRMMMMMMMMTTTTMMMHHHHHHVHHHHHZHZZZBBBBGGGGGGGGHHHHHHHHHLHHHMMMMMMRRRRRRR
XQQQQQQQQCCCCAADFFFFFZZZZZLLLLLEMMMMMMMMMMMMMTTTMYYYYYYYYYYYYYYRRRUUUUUUUUUMMMMTTMMMMHHHHHHHHHHHHZHHZZBYGGGGGGGGGHHHHHHHLLLLLLHKMMMMMRRRRRRR
QQQQQQQQQQCCAADDDFDFFZZZZLLLOMMMMMMMMMMMMMMMTTIMYYYYYYYYYYYYYYYRRRUUUUUUUUUMMMMMMMMMMMHHHHHHHHHHHHHHYYYYYYGGGGGGGGHLLLLLLLLLLIMKMMMMRRRRRRRR
QQQQQQQQQQDDDDDDDDDFFDDDNNNNOOMMMMMMMMMMMMMMMMMMMYYYYYYYYYYYYYRRRRUUUUUUUUUMMMMMMMMMMMHHHHHHHHHHHHHHYYYYYYGGGGGGGGGLLLLLLLLLLIMMMMMMRRRRRRRR
QQQQQQQQQQAADDDDDDDFFDDDNOOOOOMTTMMMMMMMMMMMMMMMMYYYYYYYYYYYUUUUUUUUUUUUUUUMMMMMMMMMMMHHHHHHHHHHHHHHYYYYYYGGGGGGGGGGLLLLLLLLOIMMMMMMRRRRRRRR
QQQQQQQQQQADDDDDDDDDDDDDNOOOOOOOTTYYMYMMMMMMMMMMYYYYYYYYYYYYUUUUUUUUUURIUMMMMMMMMMMMMMMHHHHHHHHHHHHYYYYYYYYGGGGGGGGGGLLLLOOOOIIMRRRRRRRRRRRR
QQQQQQQQQQDDDDDDDDDDDDDDDDOOOYYOYYYYYYMMMMMMMMMMMYYYYYYYYYYYUUUUUUUUUUUIUUUMUMUMMMMMMMMHHHHHUHHHHHHHYYYYYGGGGGGGGGGGGWLLOOOOOOMMMRRRRRIIRRRR
QQQQQQQQQBBDRDDDDDDDDDDDEEEEEYYKKYYYYYMMMMMMMMMMBYYYYYYYYYYYUUUUUUUUUUIIUUUUUUUMMMMMMMMHHHUUUUUUUHHHGGGGGGGGGGGGGGGGGWLOOOOOOOMMMRRIRIIRRIII
QQQQQQQWWBBDDDDDDDDDDDDDDDDEYYYYYYYYYYMMMMMMMMMBBBYYYYYYYYYYUUUUUUUUUUUUUUUUUUUMMMMMMMHHHHUUUUUUUUUUUGGGGGGGGGGGGGWGGOOOOOOOOOIMRRIIIIIIIIIC
QQQQQQWWWWBDDDDDDDDDDDDDEEEEYYYYYYYYYYYMMMMMMMBBBBBYYYYYYYYUUUUUUUUUUUUUUUUUUUUMMMMMMMHHHHUUUUUUUUUUUUGGGGGGGGGGGGWGGWWWOOOOOORRRIIIIIIIIICC
QQQQQQQWWWBBDDDDDDDDDDDDDEEYYYYYYYYYYYYMMMMMMMBBBBBBBYBYYYYUUUUUUUUUUUUUUUUUUUUMMMMMMMHHHHUUUUUUUUUVUUGGGGGGGGWWWWWWWWWWWWWOORRRRRRIIIIIIIIC
FFFQQQQWWWBBDDBBBDDWDPDWDEEEYYYYYYYYYYYMMMMBBBBBBBBBBBBBBYYUUUUUUUUUUUUUUUUUUUUMMMMMMMHHHHAAUUUUUUIUGGGGGGGGGGGGWWWWWWWWWWWOYYRRRRMIIIITIRRC
FFFQQQQWWWBBDDBBEEDWWWWWWWYYYYYYYYYYYYBMMMBBBBBBBBBBBZBPPPPPPPPPUUUUUUUUUUUUUUUPMSMMNMHHHHHHUUUUUUUUGGGGGGGGGGGGGGWWWWWWWWWOOYYYYRMIIIITRRRC
FFFQLQQQWWBBBBBBEEWWWWWWWWYYYYYYYYYYYYBBBBBBBBBBBBBZZZZZPPPPPPPPUUUUUUUUUUUUUUUMMMMMPPHHHHHUUUUUSUUUGGGGGGGGGGGGGGWWWWWWWWWYYYYYRRRIIIIRRRUR
FFFFFFFWWWWBBBEBEEEWWWWWYYYYYYYYYYYYYYBBBBBBBBBBBBBZZZZZPPPPPPPPUUUUUUUUUUUUUUUPPPPPPPPEHHUUUUUHUUUUJGGGGGGGGGGGGGWWWWWWWWWYYYYYRRRIRRRRRRRR
OOOOOOOOWWWBBEEEEEWWWWWWWWWYYYYYYYYYYBBBBBBBBBPPPPZZZZZZZPPPPPPPUUUUUUUUUUUUPPPPPPPPPPPEHHUGUUHHHHUUGGGGGGGGGGGGGWWWWWWWWWWYYRRRRRRRRRRRRRRR
OOOOOOOOBBBBBEEEEEEWWWWWWWWWWMYYYYYYYGBWWWWBBBPZZZZZZZZZZPPPPPPPUUUUUUUUPUUUPPPPPPPPPPPHHHUUUUUUHHUHGGGGGGGGGGGGGGWWWWWWWWWWRRRRRRRRRRRRRRRR
OOOOOOOOOOOOOTEEEEEWWWWWWWWWWWYYZYYYYYYWWWWWBBPZZZZZZZZZZZZPPPPPUUUUUUUUUUUUUUUUUPPPPXPPHUUUUUUHHHHHGGGGGGGGGGGIWWWWWMMWWWWCCRRRRRRRRRRRRRRR
OOOOOOOOOOOOOOOMEEEWWWWWWWWWWWWWWWEYYYYWVWWWWWPZZZZZZZZZZZZPPPPPUUUSUUUUUUUUUUUUUPPPPPPPNUUUUUUHHHHHHGGGGGGGGGIIIWWWWWMMMWWRRRRRRRRRRRRRRRRR
OOOOOOOOOOOOOOOOEEEEWWWWWWWWWWWWWWEYYYWWVVWWWWPZZZZZZZZZZZZPPPPPUUSSSSUUUUUUUUUUUPPPPPPNNUUUUUUHHHHHHGGGGGGGGGIIWWWWWWMMMMMRRRRRRRRRRRBRRRRR
OOOOOOOOOOOOOGOEEEEEWEEWWWWWWWWWWWWZYYYVPPPPPPPZZZZZZZZZZZZPPPPPDUSSSSSSUUUUPPPPPPPPPPPNNNNUUUUHHHHHHGGGGGGGGGIIWWWWMMMMMMMRRRRRRBBRRBBBRRBB
OOOOOOOOOOOOOOEEEEEEEEEZWWWWWWWWWWWWWYMVPPPPPPPZZZZZZZZZZZZUUUUUDDDSSSSSSUUUPPPPGPPPPPNNNNNUUHHHHHHHHGDDDDGGGZZZZWWMMMMMMMMRRRROROBBBBBBBBBB
OOOOOOOOOOOOOEEEEEEEEZVVVVVVVVVWWVVVVVVVPPPPPPPZZZZZZZZZZBBBBBUUDDDDSSSSSUUUPPPPGIIIIIIHNNUUHHHHHHHHGGDDDDGGGZZZZWWMMMMMMMMMMMOOOOOBBBBBBBBB
OOOOOOOOOOOOOEEEEEEEZZVVVVVVVVVWWVVVVVVVPPPPPPPZZZZZZZZZZBBBBWDUDDDDDSSSSUUUPPGGGIIIIIIHNNNUUHHHHHHHDDDDDDDGGZZZZMMMMMMMMMMMMMMOOOOBBBBBBBBB
BBBBOOOOOOOOOOOOZZZZZZVVVVVVVVVWWWVVVVVVPPPPPPPPPPBBBBBBBBBBBDDDDDDDSSSSSUUUCAGGGIIIIIIHHHHHHHHHHHDDDLDZZDDGZZZZZMMMMMMMMMMOMOOOOBBBBBBBUBBB
BBBBOOOOOOOOOOOOUZZZZZVVVVVVVVVWWWWVVVVVPPPPPPPPPPBBBBBBBBBBBDDDDDDDSSSSAUUUAAGGGGIIIIIHHHHHHHHHHHDDDDIZZZZGZZZZZZZZMMOMMMMOOOOOEELBBBBMUUBB
BBBBOOOOOOOOOOOOZZZZZZVVVVVVVVVWWWWVVVVVPPPPPPPPPPBBBBBBBBBBBDDDDDDDDDDSAUUUAAGGGGIIIIIHHHHHHDDDHHDDDDDZZZZZZZZZZZZZGGOOOOLOOOOOOELLLBDUUUBU
BBBBOOOOOOOOOOOOZZZZZZVVVVVVVVVWWWWWVVVVPPPPPPPPPPBBBBBBBBBBBDDQDDDDDDTAAUUUAAAGGGIIIIIHHHHHHDDDDDDDDLLLZZZZZZZZZZZGGOOOOOOOOOOOEELELLUUUUUU
BBBBOOOOOOOOOOOOZZZZZZVVVVVVVVVWWWVVVTVVVVVVVVVLLLLBBBBBBBBBBBBBTTTTTTTLLAAAGGGGGGIIIIIVDDDDDDDDDDDDDLLLZZZZZZZZZZZOOOOOOOOOOOOOEELELLLUUUUU
BBBBOOOOOOOOOOOOZZZZZZZZZZZWWWWWWWVVVTTVVVVLLLLLLLLBBBBBBBBBBBNNTTTTTTLLAAAAAGGGFFIIIIIDDDDDDDDDDDDDDLLLNZZZZZZZZUUOOOOOOOOOLLLOEEEEELLLLUUU
BBBBOOOOOOEEEZZZZZZZZZZZZZZWWWWWWWBWTTTVVVVLYLLLLLBBBBBBBBBBBBNTTTTTTTTLLLAAAGGGFFIIIIIFDDDDDDDDDDDDDDDDNZNZZNZZZZUUUUOOOOOOOZLEEEEEEELLLULU
BBBBOOOOOOEEEVZZZZZZZZZZZZNWWWWWWWWWTTTTVVVLYYYYYLBBBBBBBBBBBBTTTTTTTTTLLLLLAGGFFFFFFFFFDDDDDDDDDDDDDDDNNNNNNNZZRZUUOOOOOOOOOLLREEEEELLLLLLU
BBBBBBVOVVVNNVKZZZZZZZZZZZNNWWWWWWWWWTTTTYVVYYYYYLBBBBBBBBBBBBBTTTTTTTTLLLLLLTTTFFFFFFFFDDDDDDDDDDDDDDDDNNNNEEEZZUUUOOOOOOOLLLLLEEEEEEELLLLU
BBBBBVVOVVVVVVZZZZZZZZZZZZZNWWWWWWWWTTTTTYYYYYYYYLLLLWWWBBBBBBMMTMTTTTTLLLLLLTTTFFFFFFFFDDDDDDDDDDDDDDDNNNNNEEEEEUUUOGOLLLOLLLLLHEEEEEELLLLU
BBBBBVVVFVVVVVVVZZZZZZZZRRZNWWWWWWWWWTTTYYYYYYYYYLLLLWWWWWBBBMMMMMMTTTTLLLLLTTTTFFWWFFEFDDDDDDDDDDDDDDNNNNNEEEEEEEUEOOOLLLLLLLLLEEEEEEELLULU
CCBBBBVVVVVVVVVVVKKCZZZRRRVVVVWVVWWWWKTTTTTYYYYYYLLLWWWWWWWWWWWMMMMWWLTLLLLTTTTTTUTWWWEEEEDDDVDDDDDDEETTNNEEEEEEEEEEESLLSLLLLLLEEEEEEEEEEEEU
CCCCBUUUVVVVVVVVVKKCZZRRRCVVVVVVWWWWEKKTTTYKYYYYYWWWWWWWWWWWWWWWWWWWWLLLLLLTTTTTTTTWWWEEEEEDEEDSSDDDETTTEEEEEEEEEEEEESSSSSLLLLLLLEEEEEEEUUUU
CCCCCVVVVVVVVVCPCCCCCZCCCCCVVVVVWWVEEKKKKTYYYYYYYYWWWWWWWWWWWWWWWWWWWWLLLLTTTTTTTTTWWWWEEEEEEESSDDDDDTZTEOEEEEEEEEEEEEEEVSLLLLLLLLEEEEEEUUUU
CCCCCCCVVVVVVVCPCCCCCCCCCCHCVVVVVVVKKKKKTTYYYYYYYYYYWWWWWWUUWWWWWWWWWUQLLQQJTTTWWTTTWWWEEEEEEEESSSSSDTTTTEEEEEEEEEEEEEEEVVLLLLLLLLEEEEUUUUUU
CCICCCCVVVVVVVCCCCCCCCCCCCCCCVVVVVVKKKKKKEYYYYYYYWWWWWWSSSSUWWWWWWWWGQQQQQQQQTTWWTWWWWEEEEEEEEESSSTTTTTTTIIEEEEEEEEEEAEVVVVNLLLLEEEEUUUUUUUU
CCICCCCVVVVVVVCCCCCCCCCCCCCCCVVVVVVVVKKKEEEYYYYYYYYWWWSSSSSUWWWWWWWWWWQQQQQQTTTTWWWWWWWEEEEESSSSSSTTTTTTIIIIEEEEEEEEEVVVVPNNLLLLLUUUUUUUUUUU
IIIICCCCVVVVVCCCCCCCCCCCCCHHVVVVVVVVKKKKEEEEYYYYYYYYSASSSSSSWWWWWWWWQQQQQQQQQQQQQWWWWWWEEEESSSSSSSSTTTTIOIIIIEEEEEEEEEVVVPPNLLULUUUUUURRRRRR
IIIIIICVVVVVCCCCCCCCCCCCCCCVVVVVVVVVVKKEEEEEYYYYYYYZSSSSSSSSSWWWWWWWQWQQQQQQQQQQQQWWWWWEESSSSSSSSSTTTDIIIIIIIEIEEEEDELPVPPPRRUUUUUUUUUURRRRR
IIIIIIVVVVFOCCCCCCCCCCCCCCVVVVVVVVVVVNEEEEEEYYYYYYYSSSSSSSSSSTWWWWWWWWWWQQQQQQQQQQWWWWWWESSSSSTSSSSTDDDRIIIIIIIIEEEEELPPPPPRRRRUUUUUUURRRRRR
IIIIIVVVVFFFCCCCCCCCCCCCNBHVVVVVVVVVVNEEEECCYCRRYRRSSSSSSSSSBSWWWWWWWWWWWMQQQQQQQQQRRRRRESSSSSTTSSSSIDDDIIIIIIIEEEEEEEPPPPRRRRRUUFFUFFRRRRRR
IIIIIVVVVTFFCFCCCCCCCCCNNBHHHHVVVVVVNNNNNNCLCCRRRRRRSSSSSHHHHHHWWWWWWWWWMMMQQQQQQQRRRRRRSSTTTSTTSSSSIDLDIIIIIIIIEEEEPEPPRRRRRRRUUFFFFRRRRRRR
IIIIIIFVVVLFFFFCCCCCCCCNBBBBVVVVVVVVNNNNCNCCCCCCRRRSSSSSSHHHHHHJWWWMWWWMMMMQQQTQQQRRRRSSSSTTTTTTTSSSIDDDIIIIIIIIIEEEPPPPPRRRRRRRRFFFFFRRRRRR
IIIIIIFFVFFFFFFCCFCCCVVBBBBBBBVVHVVNNNCCCCCCCCCCRRRSSSHHHHHHHHHJWWWMSWWMMMMMQQTQRRRRRRSSSSTTTTTTSSIIIIIIIIIIIIIPPPPPPPPPPRRRRRRRFFFFFFRRRRRR
IIIIIFFFFFFFFFFFFFCCCCBBBBBBBBBBBBBBCCCCCCCCCCCCRRRSSSHHHHHHHHHJWWWMMMMMMMMTTTTIITRRRRRRTTTTTTTTIIIIIIIIIIIIIIIPPPPPPPPPPRRRRRRRRFFFFFRRRRRR
IIIIIIFFFFFFFFFFFFCCCYYYBBBBBBBBBBBBCCCCCCCCCCCCRSRSSSHHHHHHHHHJWWWMMMMMMMTTTTTTTTTRRRDDTZTTTTTKCIIIIIIIIIIIIIIPPPPPPPPPRRRRRRRRFFFFRRRRRRRR
IIIFFFFFFFFFFFFFFFFCCYYYBBBBBBBBBBBCCCCCCCCCCCCCSSSSSSHHHHHHHHHOOMMMMMMMMMMMTTTTTTVVRMDZZZZTKKKKKIIIIIIIIIIIIIIPPPPPPPPPRRRRRRRRFWFRRRRRRRRR
NIISSFFFFFFFFFFFFFFCCYYYBBBBBBBBBBCCCCCCCCCCCCSSSSSSSSHHHHHHHHHOOOMMMMMMMMMMMJJJJJJJJMDZZZZZZKYKKIIKKIIIIIIIIIIPPPPPPPPRRRRRRRRRFFFRRRRRRRRR
NTTTSFFFFFFFFFFFFFCCCYYYBBBBBBBBBBBCCCCCCCCCCCSSSNSNSSHHHHHHHHHOOOMMNMMMMMMMMJJJJJJJJMMZZZZZZZKKKIIKKKIIIIIIIIIIPPPPPPPPRRRRRRRRRRRRRRRNNRRR
TTTTSFFFFFFFFFFFFFFCYYYYYBBBBBBBBBBBCCCCCCCCCCCCNNNNNNHHHHHHHHHOOONNNMMMMMMMMJJJJJJJJMMMMMZZZKKKKKKKKKKIIIIIIIPPPPPPPPPRRRRRRRRRRRRRRNNNNNRR
TTTTSTTVVFFFFFFFFFFYYYYYBBBBBBBBBBBBCCCICCCCCNNNNNNNNSHHHHHHHHHONNNNNNNNNMMMJJJJJJJJJMMMZZZZKKKKKKKKKKKIIIMMPPPPPPPPPPPPRRRRUURRRRRRRNNNNNNJ
TTTTTTFVVFFFFFFFFFFYYYBBBBBBBBBBBBBBBBIICCCCCNNXXXNNNNHHHHHHHHHOONNNNNNNNMMMMMMVMMMMMMMMZZZZZZZKKKKZKKKIIMMMMPPPPPPPPPRRRRRRUURRRRHRNNNNNNNN
GTTTTTTVVFFFFFFFFFFFWWWUBVBBBBBBBBBBIIIIICCCCCNXXXNXNNHHHHHHHHHOOXNNNNNNNNMMMEMVMMMMMMMMMZZZZZZKZKKZKKKIIMMMMMPPPPPPPPRRRRRUUURRRRNNNNNNNNNB
GTTTTVVVVFFFFAAAWWWWWWWWWVBBBBBBBBIIIIIIITCCCXXXXXXXXNNHHHNNNOOONXNNNNNNNMMMEEMMMMMMMMMMMZZZZZZZZZZZKZZZMMMMMMPPPPPPPPPZZRZZUUUUVRNNNNNNNNNN
TTTTTTVVVVBBFAAAAAAWWWWWWBBBBBBOZZZIZIIIITQCCCXXXXXXXNNNNNNNNOOONNNNNNNNNNEEEMMMMMMMMMMMMMZZZZZZZZZZZZZZMMMMMMMMPPPPPPPPZZZUUUUUVVNNNNNNNNNN
TTTTTVVVVVBBFFAAAAAAAWWWWAABBBZZZZZZZIIIITTEEEXXXXXNNNNNNNNNNNNNNNNNNNNNNEEEEEEMMMMMMDMDMMZZZZZZZZZZZZZZMMMMMMMMUUUPPPPPZZZUUUUUUVVNNNNNNNNN
TTTTVVVVVBBEEEAAAAAAWWWWWAAZBBZZZZZZZIIIITIIEUUXXXXNNNNNNNNNNNNNNNNNNNNNNEEEEEEEMMMMDDDDDZZZZZZZZZZZZZZZMMMMLMMMUUUUPPPPUZZUUUUUUUNNNNNNNNNN
TTETVVVVVBBBEEEEEAAAAAWAAAAZZZZZZZZZZIIIIIIEEEUXXXXENENNNNNNNNNNNNNNNNNNNEEEEEEEMMDDDDDDZZZZZZZZZZZZZFFFLLLLLMMMUUUUPPPUUZZCUUUUUUNNNNNNNNNN
TPVVVVVVVBEEEEEEAAAAAAAAAAAZZZZZZHHHHZYYYIIEEEEOXXEEEENNNNNNNUUJNNNNNNNNNNNEEEEEEDDDDDDDDDZZZZZZZZZZZFFFFLLLLMMUUUUUUUUUUZZCUUUUUUUNNNNNNNNN
PPVVVVVVVVEEEEEEAAAAAAAAAAAAZZZHHHHHHHYYYIUEEEEXXXXEEENNEENNUUUUUUNVVNNENNNEEEEEEEEDDDDDDDZZZZZZZZZZFFFFFFLLLLMMUUUUUUUUCCZCUUUUUUUUUNNNNNNN
LPPVVVVVVLLLHHEEAAAAHHHHAAHZZZZHHHHHHHYYYYUUEEEEXXXEEEEEEENUUUUUUUNNNNEEEEEEEEEEEEENDDDDDDSZZZZZZZZZFFFFLLLLLLMUUUUUUUCUCCCCCCUUUUUCNNNNNNNN
LLPVLVVLLLLLLLQYAAAHHHHHHAHZDZHHHHHHHHMYUUUEEEEEEEEEEEEEEEUUUUUUUUUUUEEEEEEEEEEEEEENNDDDDDZZZZZZZZZZZFFFLLLLLLLUUUUUUUCCCCCCCCUUUUUUUUNNNNNN
LLNNLLLLLLLLLLYYYYHHHHHHHHHHZZHHHHHHHHMMUUUUUUUUEEEEEEEEEUUUUUUUUUUUUUEEEEEEEEEEEENNNNDDDDZDDZZZZZZZFFFFLLLLLLUUUUUURULCCCCCCCCUUUUUUUUNNNNN
LLNNNLLLLLLLLYYYYYYHHHHHHHHHZZHHHHHHHHUUUUUUUUYUEEEEEEEEEEUUUUUUUUUUUUEEEEEEEEEEOENNNNNNDDDDDZZZZZZFFFLLLLLLLFFSUUULUUCCCCCCCCCCUUUUUUUNNNNN
LLNZZLLLLLLLLYYYYYYYHHHHHHHHHHHHHHHHHHUUUUUUUUUUEEEEEEEZEEUUUUUUUUUUDDEEEEAAAOOOOENDDDNDDDDZZZZZZZFFFLLLLLLLLFFSULLLLUCCCCCCCYYCUUUUUULNMNNN
LLLLLLLLLLLLLLLYYYYYYHHHHHHHHHHHHHHHHHUUUUUUUUEEEEEEFFUUUUUUUUUUUUUUDDDEEEAAAOOOODDDDDDDDDDZZYZZZZZFFLLLLLLLLFFFFLLLLLCCCCCCCCYYYUUUUUUNNNFN
LLLLLHLLLLLLLLLYYYYYYHHHHHHHHHHHHHHHHHUUUUUUUUEUQEEEUUUUUUUDDDUUUUDDDDDEEEAAAOOOODDDDDDDDDDZZYZZZFFFFFFLLLLLFFFFFFLFLLLCWUCCCYYYYUUUUFNNNFFF
LLLLLHLLLLLLLLYYYYYYYYYHHHHHHGGGGGGGGGUUUUUUUUUUUEEUUUUUUUUDDDUUDDDDDDEEEEAAAOOOODDDDDDDDDDDWWWHWFFWWWWLLLHLLLFFFFFFFFLCWWWZCYYYUUUUFFFFFFFF
LLLLLNLLLLLLLLYYYYYYYYYYHHHHHGGGGGGGGGUUUUUUUUUUUUZUUUUUUUDDDDDDDDAAAAAAAAAAAOOOODDDDDDDDDDDDDWWWWFWWWVVHHHHLLHFFFFFFFLLWWWWWWYYUUUUFFFFFFFF
LZLNNNLLLLLLZZZYYYYYYYYYYYYHHGGGGGGGGGGGGUUUUUUUUZZUZUUUUUUDDDDDDDAAAAAAAAAOOOOOODDDDDDDDDDDDWWWWWWWWWVHWHHHHLHFFFFFFFLWWWWYYYYFFFFFFFFFFFFF
LZZZNZZLLLLLZZZYYYYYYYYYYHHHHGGGGGGGGGGGGGUUNUUUZZZZZUUUUZZDDDDDDDAAAAAAAAAOOOOOOOODDDDDDDDDDWWWWWWWWHHHHHHHHHHHFFHHHHWWWWWWWWWWWWFTTTTFFFFF
ZZZZZZZZLLLLZYYYYYYYYYYYHHHHHGGGGGGGGGGGGGUNNNUUUZZZZZZZZZZDDDDDDDDDDDDDOOOOOOOOOOODDDDDDDDDDWWWWWWWHHHHHHHHHHHHHHHHHHHHWWWWWWWWWWWWTTTFFFFF
ZZZZZFZZZZZZZZYYYYYYYYYYSSHHHGGGGGGGGGGGGGNNNNUUUUZZZZZZZDDDDDDDDDDDDDDDDOOOOOOOOOODDDDDDDDDDWWWWWWWWHHHHHHHHHHHHHHHHHHWWWWWWWWWWWWWTTTTFFFF
DFFFFFFZZZZZZZYYYYYYYYYSSHHHHGGGGGGGGGGGGGNNNNUUUZZZZZZZZZZDDDDDDDDDDDNDLLOOOOOOOOODDDDDDDDDDDWWWWWWWWWHHHHHHHHHHHHHHHTIWWWWWWWWWWWWWTPFFFFF
DDDFFFFZZZZMMZZMMYYYYYYYSSSHHGGGGGGGGGGGGGNNNNNNUZZZZZVVVVVVVVVDDDDDDDDDLLLLOOOOPOODDDDDDDDDDDDWWWWWWWWHHHHHHHHHHHHHHHTTTTTWWWWWWWWGFFFFFFFF
DDDFFZFZMMMMMMMMMMMYYYYYSSSSSGGGGGGGGGGGGGNNNNNNUZZZZZVVVVVVVVVVVVDDDDDLLLLLLLLLLDDDDDDDDDDDDKDWWWWWWWHHHHHHHHHHHHHHHHTTTTTTWWWWWWWWFFFFFFFF
DDDFFZZZMMMMMMMMMMMYYYYTLLLLLGGGGGGGGGGGGGNNNNNNNVVVVVVVVVVVVVVVVVDDDDDLLLLLLLLLLLLDDDDDDDDDKKDWWWWWWWHHHHHHHHHHHHHHHHTTTTTTWTWWWWWWFFTFFFFF
DDDDFZZZMMMMMMMMMMMMYTTLLLLLLLLLGGGGGGGGGGNNNNNNNVVVVVVVVVVVVVVVVVDLDLLLLLLLLLLGGGGDDDKKKKKKKKDDWWWWWZZHHHHHBHHHHHHHTHTTTTTTTTTWWWWWWFTFFFFF
DDDDZZZMMMMMMMMMMMTTTTTLLLLLLLLLGGGGGGGGGGGGGGNNNVVVVVVVVVVVVVVVVVDLLLLLLLLLLGGGGGGGDGMMKKKKKKKKKWWWZZWZHHHZBHHHHHHJTTTTTTTTTBTWSSSSWTTFFFFF
DDDZZMMMMMMMMMMTTTTTTTLLLLLLLLLLGGGGGGGGGGGGGGNNNVVVVVVVVVVVVVVVVVLLLLLLLLLLGGGGGGGGGGGGLLKKKKKKKWWWZZZZZZZZZHBBHJJJTTTTTTTTTTTSSSSSSTTFFFFF
DDDDDDMMMMMMMMYYYTTTTTLLLLLLLLLLLLGGGGGGGGGGGGNNNVVVVVVVVVVVVVVVVVLLLLWLLLLLLGGGGGGGGGGGLLKKKKKKKKYZZZZZZZZZZZBJJJJJTTTTTTTTTTTTRSSTSTFFFFFX
DDDDDDDYMHMMYMYYTTTTTTLLLLLLLLLLLLGGGGGGGGGGGGNNNVVVVVVLLLZZLLLLLLLLLLWWWLLLLLGGGGGGGGGLLKKKKKKKKKYYZZZZZZZZZZBJJJJTTTTTTTTTTTTTTSSSSSSFFFFD
DDDYYYYYMMMYYYYYYTTTTTTLLCCCLLLLLLGGGGGGGGGGGGNNNVVVVVVLLLLLLLLLLLWLLLWWOLLLLLGGGGGGGGGLLKKKKKKKKKYYYMZZZZZZZVJJJJJTTTTTTTTTTTTTTSSSSSSSSSBD
DDYYYYYYMYYYYYMMYTTMTTTTTCCICCLLLLGGGGGGGGGGGGNNNVVVVVVLLLLLLLLLLLWLWLWWOLWLLLGGGGGGGGLLLLMRKKKKKYYYYYZZZZZZZZJJJJJTTJTTTTTTTTTTTOSSSSNNSDDD
DDDYYYYYYYYYYYMMMMTMTTTTCCCCCCCCVVVVVVVVGGGGGGNNNVVVVVVLLLLLLLLLWWWWWWWWOLWWGGGGGGGGGGGGGMMRXKKYYYYYYYYYZZZZZZJJJJJJJTTTTTTTTTTOOOSSSSNDDDDD
DDDYYYYYYYYYYYMMMMMMMTTTCCCCCCCCVVVVVVVYYOOOONNNNNNNNNNLLLLLLLLLWWWWWWWWWWWWGGGGGGGGGGGGMMMRXXXXXXYYYYYZZZZJJJJJJJJJJJTTTTTTOTOOOOOOSSDDDDDD
DDYYYYYYYYYYYYMMMMTTTTTCCCCCCCCCCCCVVVVYYOOONNNNNNNNNNNLLLLLLLLLIWWWWWWWWWWWGGGGGGGGGGGMMMMRXXXXXYYYYYYYYZZZBJJBJJJJJJJTTTTTOOOOOOOOOODDDDDD
DDDYYYYYYYYYYYMMMMMTTTTTTCCCCCCCCCCVVVVVYOONNNUNNNNNNLLLLLLLLLLLIWWWWWWWWWWWNGGGGGGGGGGGMCCXXXXXYYXYYYYYYYZBBJJBBJJJJJJJJQQTOOOOOOOODODDDDDD
DDDDDFYYYYYYYYYYYYMTTTTTTTTCCCCCCCVVVVVVYYYRRNUUUUNNNNBLLBLLLLLLLWWWWWWWWWVVVGGGGGGGGGGGCCCGXXXXXXXXYYYYYYZBBJJBJJJJJJJZLLQTTOOXOOOODDDDDDDD
XDXXDFYYYYYYYYYYIYYTTTTTTTTCCCCCCMVVVVVVYYYRRNRUNNNNNNBBLBLLLLNNNNWWWWWWWWVVVVGGGGGGGGCCCCCGGGCXXXXXXYYYYYBBBBBBJJJJJLLLLLQQQXXXXOOOODDDDDDD
XXXXFFFYYYYYYYYYYTTTTTTTTTCCCCCCCMCVVVVVVVRRRRNUNNNNNNBBBBLLLLNNNNWWWWWWVVVVVVGGGGGGGGGGCCCGCGCXXXXXXYYYYYBXBBBBBJJWLLLLLLLLXXXXOOOODDDDDDDD
XXQFFFFFYYYYYYYYFTTTTTTTTTCCCCCCCCCCVVVVVVRRRRNNNNNNNNRRRRLLLLUUUWWWUUUWWVVVVVVGGCCCGGCCCCCCCCCXXXXXVYYYYYYXXBBBBBLLLLLLLLLLXXXKKKKODDDDDDDD
XXXXXFFFYYBYYYYYYTTTTTTTTCCCCCCCCCCCLLVVMRRRRKQNNQNNQNRRRRLLDUUUTUUUUUUUVVVVVVVGCCCCCCCCCCCCCCCXXCCCVYYYYYYXXBBBLLLLLLLLLLLLLXXKKKOOODDDDDDD
XXXXXFFFFYBYBBBNYTTTTTTTTCCWWWCCCCCCLLLORRRBBQQQQQQQQQQQRRLLDDUUUUUUUUUUUUVVVCCCCCCCCCCCCCCCCCCCCCCVVYLYYYXXXXBBBBLLLLLLLLLLUXXKKKOOODDDDDDD
XXXFXFFFFBBBBBBNTTGGGTTTTCWWWWCJJJCLLLLLRRLBLLQQQQQQQQQQRRRLDDUUUUUUUUUUUUVUVVVCCCCCCCCCCCCCCCCCCCCCCCLYLYXXXXXBLLLLLLLLQHHHHXXKKKKKDDDDDDDD
XXXFFFFFFFBBBBBBYTGGGTTTTTZZWWWJJJCTLLLQQLLLLLLQQQQQQQRRRRRRDDUUUUUUUUUUUUUUVVVVVCCCWLWWCCCCCCCCCCCCCCLYLXXXXXBBLLLLLLLLLHHHHXHEKKKKKDYYKDDD
XXFFFFFFFFBBBBBBBTGGGTTTZTZZZZWWJJLLLLLLLLLLLLLQQQQQQQQRRRRRUUUUUUUUUUUUUUVVVVVVCCCNWWWWWWCCCCCCCCCCCCLLLXXXXXXBBBLLLLLLLHHHHHHKKKKKKNKKKDDD
XXFFFFFFFFBIBBBBBIITTTTTZZZZZZPWLLLLLLLLLLLLLLLQQQQQQRRRRRRRRUUUUUUUUUUUUUUVVVVVCVWNNWWWWCCCCWCCECCCRMRRLXXXXXXBBLLLLLLLLHHHHHOOKKKKKKKOODDD
XFFFFFFFFFBBBBBBBIIIITFTTEZZZZPLGLLLLLLLLLLLLLLLLQQBBRRRRRRRRRRUUOUUUUUUUHVVVVVVVVWWWWWWWCWWCWCCCCRRRRRLLXXXXXXBBLLLLLLLHHHHHHHKKKKKKKOOODYY
FFFFFFFFFFBBBBBBBBIIILZZZZZZZZLLLLLLLLLLLLLZZZLBBBBRRRRGGGGRBBBUPOUUUUUUHHVVVVVVVVWWWWWWWWWWWWWCCRRRRRRRRXXXXXXBBBLLLLLLHHHHHHHLKKKVKVTTTTYT
FFFFFFFFFFBBBBBBBIIIIZZRZZZZZZZLLLLLLLLLLLLZZZBBBBBRRRRGGGGGGGGPPOUUUUUUUVVVVVVVVVWWWWWWWWWWWRRRRRRRRRRRRXXXXXXBBBBLLLBLHHHHHHHHHVVVKVTTTTTT
FFFFFFFFFFBBBBBBBBIIZZZZZZZZZZZLLLLLLLLLLLLLLLBBBBRRRRRGGGGGGGGPPPUUUDDUUVVVBVWBVVVWWWWWWWWWWWRRWRRRRRERQQXXXXXBBBBLLLLLHJHHHHHHHVVVVVVVTTTT
FFFFFFFFFFBBBBBBIIIIIJZZZZZZZZZLLLLLLLLLLLLLBBBBBBRRRRRGGGGGGGPPPPUUDDDUBVBBBVWBVVVWWWWWWWWWWWWWWRRRRREEJJXXXJBBBBBBLLJJJJHHHHHVVVVVVVEVTTTT
FFFFFFFFFSBBBBBBIIIIIZZZZZZZZZZLLLQLLLLLULBBBBBBBRRRRRRGHGGHHGPPPPPPPPPBBBBBBBBBFWWWWWWWWWWWWWWWWRRRRRRJJJJXXJJBBBBBJJJJJJHJHVVVVVVVVVETTTTT
FFFFFFFFFSFIIIBBIIIIZZZZZZZMZZZZLLLHLLLLLBBBBBBBBRRRRRRRHHHHHHHHHPPPPPBBBBBBBBBBBPWWWWWWWWWWWWWWWRRRRZZZJJXXXJJJBBBBJJJJJJHJJJVVVVVVVVEETTTT
FFFFFFFFFFFIIIBIIIIIIIIIZZMMZZZLLLLLLLEELBBBBBBBBRRRRRRRRHHHHHHHHPPPPBBBBBBBBBBBBWWWWWWWWWWWWWWWWRRYRRRJJJJJJJBBBBBBJJJJJJJJJJVVVZZZZEEEEETI
FFFFFFFFFFFFFIIIIIIIIIIPZHHMMZLLLLLLLLLLLBBBBBBBBBBRRRRRHHHHHHHHPPPPPPBBBBBBBBBBBWWWWWWWWWWWWWWWWRRRJRJJJJJJJJBBBBBJJJJJJJJJJJVVVZZZZEEEEEII
FFFFFFFFFFFIIIIIIIIIIIIPPFHFMZLLLLLLLLLLLLBBBBBBBHHHUURHHHHHHHHPPPPPPPBBBBBBBBBBBWWBGGWWWWWWWWWWJJRJJJJJJJJJJBBBBBBJJJJJJJJJJJVVVVZZZZEEEYYY
EFTTFFFFFFIIIIIIIIIIIIIIIFFFMLLLLLLLLLLLLLBBBBBBBBBHHHHHHHHHHHHHHPPBBBBBBBBBBBBBBBBBGSSRSWWWWWWWJJJJJJJJJJRJJBBBBBBBJJJJJJJJJJJVVVZZZGEYYYYY
EEFFFFFFFFFFFIIIIIIIIIFFFFFHFLLLLLLLLLLLLLBBBBBBBBBHHHHHHHHHHHHHHHHBBBBBBBBBBBBBBBBBSSSSSSWWWWWWJJJJJJJJJJJJBBBBBBBBBIIRJJJJJJJWVVVVYYXXYYYY
EEFFFFFFFFFFFIIIIIIIIFFFFFFFFFLLLLLLLLLLLLBBBDBBBBBBHHHHHHHHHHHHHHHBBBBBBBBBBBSBBBBBBBSSSSSWWWWWWJJJJJJJJJBBBBBBBIBBIIIIIIJWWWWWWWWVYYYYYYYY
EEFFFFFFFFFFIIFIIIIIWFFFFFFFFLLLLLLLLLLLLLLDDDBDBBDBHHHHHHHHHHHHHHHBBBBBBBBBBBSBBBBBBBSSSSSSSWWWWJJJJJJJJJJJBBBIIIBBIIIIIIIOWWWWWWYYYYYYYYYY
EFFFFFFFFFFFFFFIIIIIWTFFFFFFFLLLLLLLLLLLLYYYYDDDDDDBHHHHHHHHHHHHHHHHHBBBBBBBBBBBBBBBBBSSWSSSSWWWWWWJJJZJXXXJBBBIIIIIIIIIIIZWWWWWWYYYYYYYYYYY
EEZFFFFFFFFFFFFIIIIWWTFFFFFFFLLLLLLLYYYYYYYYYDDDDGHHHHHAHHHHHHHHHHHHLBBBBBYBBBYBBBBBBBWWWSSSSWWWWEEJEJJXXXQRBBBIIIIIIIIIIIIIWWWWWWYYYYYYYYYY
ZZZBFFFFFFFFFFFIIIIIWFFFFFFFFLLLLLLLLYYYYYYYDDDDDDPPHHAAAAHHHHHHHHHHLBYBYYYYYYYYBBBBBWWWWSSWSWWWWEEEEQQQQQQRBBFNNRIIIIIIIIIICWWWWYYYYYYYYYYY
ZZZBFFFFFFFFFIIIIGIIWWFFFFFCFULLLLLMLYYYYYYYYDDDDDEPPPAAAAAHHHHHHHHHHHYYYYYYYYYBBBBBBWWWWWSWSWWEEEEEEQQQQQQRRBBNNRRIIIIIIIICCWWWWWYYYYYYYYYY
ZZZZZZFFFFFFFIIIIIIWWFFFFFFFWWLLLLLLYYYYYYYYYYEDEEEPAAAAAAKKKHHHHHHHHHHHYYYYYYBBBBBBBZWWWWWWWWWEEEEEEQQQQQQQRBBNNNIIIIIIICCCCCTTWTYYYYYYYYYY
ZZZZZZZFFFUFFIIIIIIWWWWFFFFFWWWLLLYLYRYYYYYYYYEEEEEAAAAAAAKHHHHHHHHHHHHHYYYYYYYBBBBBBZWWWWWWWWEEEEEEEQQQQQQRRQQQNNIIIIIIICCCCTTTTTTYYYYYYYYY
ZZZZZFFFFFFFFFFIIIIIWWWWFFWWWWWLWWYYYRYRYYYYYYEEEEEAAAAAAAAHHLLWHHHHHHHHHYYYYYYYBBBBBZWWWWWWWWWWEEVEEQQQQQQQQQQQNNNIICCCCCCCCTTTTTTTYYYYYYYY
ZZZZZVVVVFFFFVVIIIIWWWWWFWWWWWWWWWWRRRRRRYYYYYEEEEEEAAAAAALLLLLWHHHHHHHYYYYYYYYYYZZZZZZZZWWWWWWWWEVVQNQQQQQQQQQNNNNNICCCCCCCCCCTTTTTTTYYYYYY
ZZZZZZVVVVVFFVVIWWWWWWWWWWWWWWWWRRRRRRRRRRIYIIIEEEEEAEEEALLLLLLHHHHHHHYYYYYYYYZZZZEZZZZZZWWWVWWWVWVQQQQQQQQQQQQQNNNNCCCCCCCCCTTTTTTTTTYYYYYY
VVVZZVVVVVVVVVVVVWWVWWWWWWWWWWWWRRRRRRRRRRIYIIIEEEEEEEEEEELLLLLHHHHDHYYYYYZZZZZZZZZZZZZZWWWVVVVWVVVVVQBQQQQQQQNNNNNNNNCCCCCCCTTTTTTTTTYYYYYY
VVVZVVVVVVVVVVVVVVVVWWWWWWWWWWWWRRRRRRRRRRIIIEEEEEEEEEEEELLLLLLLLLLLYYYYRYZZZZZZZZZZZZZZWWWWVVVVVVVVQQQQQQQQQNNNNNNNNCCCCCCCCTTTTTTTTYYYYYYY
VVVVVVVVVVVVVVVVVVVVWWWWWWWWWWWWBRRRRRRRIIIIIEEEEEEEEEEEEELLLLLLLLLYYYYRRRKKZZZZZZZZZZZZZZVVVVVVVVVVVQQQQQQQNNNNNNNNNCCCCCCCCTTTTTTTTTTYYYYY
VVVVVVVVVVVVVVVVVVVVVWWWWWWWWWWWRRRRRRRRIIIIIEEEEEEEEEEEELLLLLLLLLLLYYYRRRRKZZZZZZZZZZZZZZVVVVVVVVVVVVQQNQQNNNNNNNNNNCCCCCCCCTTTTTTTTTYYYYYY
VVVVVVVVVVVVVVVVVVVVWWWWWWWWWWWWWRRRRRRRRIEEEEEEEEEEEEEELLLLLLLLLLLLLYRRRRRZZZZZZZZZZZZZZZWVVVVVVVVVVVNNNNNNNNNNNNNNNNNCCCCTTTTTTTTTTTYYYYYT
VVVVVVVVVVVVVVVVVWWWWWWWWWWWWWWWWRRRRRRRRREEEEEEEEEEEEEEELLLLLLLLLLEERRRRRZZZZZZZZZZZZZZZZZVVVVVVVVVVVNNNNNNNNNNNNNNNCCCCDCTTTTTTTTTTTYYYYTT`,
);

it("should pass challenge", () => {
	expect(TimeUtils.log(() => func(challenge))).toBe(899196);
});

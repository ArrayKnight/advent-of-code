import { expect, it } from "bun:test";
import { TimeUtils } from "../../utils";
import func from "./02";

function process(input: string) {
	const [inputs, outputs] = input.split("\n\n");

	return {
		inputs: inputs.split("\n").map((line) => {
			const [key, value] = line.split(": ");

			return [key, Number(value)] as [string, number];
		}),
		outputs: outputs.split("\n").map((line) => {
			const [condition, output] = line.split(" -> ");
			const [aId, operand, bId] = condition.split(" ");

			return {
				condition: [aId, operand, bId] as [string, string, string],
				output,
			};
		}),
	};
}

const example = process(`x00: 0
x01: 1
x02: 0
x03: 1
x04: 0
x05: 1
y00: 0
y01: 0
y02: 1
y03: 1
y04: 0
y05: 1

x00 AND y00 -> z05
x01 AND y01 -> z02
x02 AND y02 -> z01
x03 AND y03 -> z03
x04 AND y04 -> z04
x05 AND y05 -> z00`);

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example))).toBe("z00,z01,z02,z05");
});

const challenge = process(`x00: 1
x01: 1
x02: 1
x03: 1
x04: 1
x05: 0
x06: 0
x07: 0
x08: 0
x09: 0
x10: 1
x11: 0
x12: 0
x13: 1
x14: 1
x15: 1
x16: 1
x17: 0
x18: 1
x19: 1
x20: 0
x21: 1
x22: 1
x23: 0
x24: 0
x25: 1
x26: 1
x27: 0
x28: 1
x29: 1
x30: 0
x31: 1
x32: 1
x33: 1
x34: 1
x35: 0
x36: 0
x37: 1
x38: 1
x39: 0
x40: 1
x41: 0
x42: 0
x43: 1
x44: 1
y00: 1
y01: 0
y02: 0
y03: 1
y04: 1
y05: 1
y06: 0
y07: 0
y08: 1
y09: 1
y10: 0
y11: 1
y12: 0
y13: 0
y14: 0
y15: 0
y16: 0
y17: 1
y18: 1
y19: 0
y20: 0
y21: 1
y22: 0
y23: 1
y24: 1
y25: 0
y26: 0
y27: 0
y28: 0
y29: 0
y30: 1
y31: 0
y32: 1
y33: 1
y34: 1
y35: 1
y36: 0
y37: 0
y38: 1
y39: 1
y40: 0
y41: 0
y42: 1
y43: 1
y44: 1

rdf XOR nck -> z21
y12 AND x12 -> stn
twb XOR jgm -> z41
cpj OR tgr -> cmt
y17 XOR x17 -> jws
cpg XOR tdr -> z14
x42 AND y42 -> dkt
jmq OR bjv -> dck
wkt AND jgp -> cwk
fmk OR wqh -> pqr
jws AND rmd -> rsd
y32 AND x32 -> rns
twb AND jgm -> kvg
nrq XOR wcd -> z09
btc OR rns -> dtb
ctq XOR gjs -> z20
dqd XOR hhm -> z18
hfh AND jdt -> nhs
rsd OR rgp -> hhm
x19 AND y19 -> kmw
dck XOR ctg -> z15
pqr AND hhv -> trm
y08 AND x08 -> trg
x31 AND y31 -> z31
x14 AND y14 -> bjv
y26 XOR x26 -> sbn
pgj XOR fnn -> z30
hwb AND rgq -> cqf
ctq AND gjs -> fcj
thp OR qdg -> rgq
y03 AND x03 -> mhg
sbt XOR ndc -> z05
nrr OR hfv -> dvh
x07 AND y07 -> djc
dtb AND mpb -> hvw
pwm OR cqf -> cjs
dkt OR wdw -> fpv
x24 AND y24 -> djv
vsq OR gkt -> cfp
x17 AND y17 -> rgp
rvf OR vph -> nhg
x44 XOR y44 -> bbf
cjs XOR gnb -> z29
y30 XOR x30 -> pgj
y27 XOR x27 -> sjb
fpp AND bbf -> dps
ggc OR ptt -> fpp
x18 XOR y18 -> dqd
y19 XOR x19 -> jgp
wkt XOR jgp -> z19
jcs XOR ngk -> z04
y21 XOR x21 -> rdf
spp OR fkm -> wkt
x16 XOR y16 -> vsd
y14 XOR x14 -> cpg
mbk OR qwg -> rmd
y10 AND x10 -> nrr
x05 XOR y05 -> sbt
y13 XOR x13 -> fvp
gdf OR tnw -> srm
x09 AND y09 -> gdf
nvc OR rpv -> jdt
kmw OR cwk -> ctq
vsd AND wmb -> qwg
x44 AND y44 -> mfg
y27 AND x27 -> qdg
jbg OR jqp -> ndc
x04 XOR y04 -> ngk
hfh XOR jdt -> z12
ctg AND dck -> sqh
jww XOR djk -> z23
dtf XOR vjq -> z32
ngd AND sbf -> ksc
mfg OR dps -> z45
x01 XOR y01 -> rtg
tdr AND cpg -> jmq
y28 AND x28 -> pwm
y41 AND x41 -> hhf
qqp OR hfd -> fgs
wmb XOR vsd -> z16
pgj AND fnn -> hfd
dmf XOR nwb -> z40
rfs AND pcb -> ktf
y05 AND x05 -> rtp
vjq AND dtf -> btc
fvp AND hjm -> qrk
mpb XOR dtb -> z33
y12 XOR x12 -> hfh
cmt AND cbv -> jcd
tkf AND frw -> nrt
wcd AND nrq -> tnw
hwk AND cbc -> btk
hhv XOR pqr -> dvq
rfq OR bbk -> nwb
nhf OR fcj -> nck
rww XOR kbg -> z42
x11 XOR y11 -> hnn
fgs XOR ctw -> dmh
y36 XOR x36 -> rbf
y01 AND x01 -> vph
fjg XOR fpv -> z43
x06 XOR y06 -> pcb
x33 AND y33 -> spv
y00 XOR x00 -> z00
x23 XOR y23 -> djk
x22 AND y22 -> mjp
wbm AND hrv -> dwv
hwb XOR rgq -> z28
x03 XOR y03 -> wbm
x00 AND y00 -> drq
x23 AND y23 -> dnp
wmk OR kfq -> fnn
x33 XOR y33 -> mpb
y43 XOR x43 -> fjg
y02 XOR x02 -> btp
hnn XOR dvh -> rpv
cpf XOR btf -> z24
y42 XOR x42 -> rww
gps AND ggb -> qvj
sbn AND cmn -> ntc
x36 AND y36 -> gkt
y39 XOR x39 -> vnt
dnp OR nsp -> btf
rtp OR qms -> rfs
y29 AND x29 -> wmk
x24 XOR y24 -> cpf
rtg AND drq -> rvf
sjb AND dbd -> thp
bbf XOR fpp -> z44
x32 XOR y32 -> vjq
vnt AND dvq -> rfq
btf AND cpf -> stf
hjm XOR fvp -> z13
rmd XOR jws -> z17
rfs XOR pcb -> z06
fgs AND ctw -> bmm
vnt XOR dvq -> z39
dvv AND cfp -> wqh
mfj OR vgr -> jgm
y25 AND x25 -> qds
qds OR btk -> cmn
kvh AND srm -> hfv
y09 XOR x09 -> wcd
y10 XOR x10 -> kvh
dwv OR mhg -> jcs
y16 AND x16 -> mbk
y43 AND x43 -> ggc
x34 AND y34 -> krw
x29 XOR y29 -> gnb
y02 AND x02 -> mgr
fgk AND sqm -> mbg
y40 XOR x40 -> dmf
y08 XOR x08 -> frw
dvh AND hnn -> z11
y35 AND x35 -> qvt
qvj OR qvt -> fps
x30 AND y30 -> qqp
nwb AND dmf -> vgr
x31 XOR y31 -> ctw
kvg OR hhf -> kbg
sbf XOR ngd -> z34
mjp OR jcd -> jww
srm XOR kvh -> z10
y15 AND x15 -> ctg
y34 XOR x34 -> ngd
bvk OR trm -> z38
dmh OR bmm -> dtf
x20 XOR y20 -> gjs
y26 AND x26 -> dsw
y04 AND x04 -> jqp
cjs AND gnb -> kfq
rtg XOR drq -> z01
ngk AND jcs -> jbg
ktf OR vpn -> sqm
nhs OR stn -> hjm
y37 AND x37 -> fmk
y13 AND x13 -> rmq
dsw OR ntc -> dbd
hwk XOR cbc -> z25
fgk XOR sqm -> z07
y28 XOR x28 -> hwb
x11 AND y11 -> nvc
mst OR mgr -> hrv
wbm XOR hrv -> z03
gps XOR ggb -> z35
mbg OR djc -> tkf
y20 AND x20 -> nhf
rdf AND nck -> tgr
fps XOR rbf -> z36
x15 XOR y15 -> rpb
sqh OR rpb -> wmb
spv OR hvw -> sbf
y18 AND x18 -> spp
rww AND kbg -> wdw
fpv AND fjg -> ptt
x40 AND y40 -> mfj
y07 XOR x07 -> fgk
y06 AND x06 -> vpn
x22 XOR y22 -> cbv
stf OR djv -> cbc
x38 XOR y38 -> hhv
hhm AND dqd -> fkm
frw XOR tkf -> z08
x37 XOR y37 -> dvv
qrk OR rmq -> tdr
x35 XOR y35 -> ggb
sbt AND ndc -> qms
x21 AND y21 -> cpj
cbv XOR cmt -> z22
nrt OR trg -> nrq
btp AND nhg -> mst
ksc OR krw -> gps
x25 XOR y25 -> hwk
fps AND rbf -> vsq
x39 AND y39 -> bbk
btp XOR nhg -> z02
x41 XOR y41 -> twb
sjb XOR dbd -> z27
sbn XOR cmn -> z26
cfp XOR dvv -> z37
djk AND jww -> nsp
x38 AND y38 -> bvk`);

it("should pass challenge", () => {
	expect(TimeUtils.log(() => func(challenge))).toBe(
		"ctg,dmh,dvq,rpb,rpv,z11,z31,z38",
	);
});

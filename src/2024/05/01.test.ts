import { expect, it } from "vitest";
import { GridUtils, TimeUtils } from "../../utils";
import func from "./01";

const options = { separator: /[|,]/, callback: Number };

const example = {
	rules: GridUtils.parse(
		`47|53
    97|13
    97|61
    97|47
    75|29
    61|13
    75|53
    29|13
    97|29
    53|29
    61|53
    97|53
    61|29
    47|13
    75|47
    97|75
    47|61
    75|61
    47|29
    75|13
    53|13`,
		options,
	),
	updates: GridUtils.parse(
		`75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`,
		options,
	),
};

it("should pass example", () => {
	expect(TimeUtils.log(() => func(example.rules, example.updates))).toBe(143);
});

const challenge = {
	rules: GridUtils.parse(
		`98|43
91|38
91|97
11|56
11|72
11|55
36|34
36|73
36|66
36|49
22|69
22|37
22|98
22|36
22|45
69|97
69|85
69|75
69|42
69|45
69|39
38|19
38|33
38|63
38|94
38|69
38|41
38|93
82|22
82|91
82|24
82|76
82|87
82|94
82|45
82|39
96|73
96|37
96|35
96|85
96|45
96|39
96|69
96|62
96|57
23|68
23|86
23|91
23|98
23|47
23|45
23|97
23|89
23|42
23|37
75|39
75|97
75|62
75|42
75|99
75|33
75|29
75|68
75|86
75|53
75|38
66|68
66|85
66|77
66|38
66|94
66|72
66|49
66|86
66|99
66|22
66|29
66|82
56|19
56|69
56|76
56|37
56|24
56|77
56|93
56|94
56|23
56|72
56|55
56|47
56|22
85|67
85|59
85|19
85|99
85|94
85|93
85|43
85|77
85|22
85|63
85|49
85|72
85|34
85|76
43|59
43|33
43|93
43|76
43|96
43|63
43|53
43|69
43|82
43|31
43|22
43|49
43|23
43|77
43|72
63|35
63|89
63|14
63|45
63|47
63|57
63|37
63|19
63|24
63|62
63|98
63|97
63|11
63|69
63|36
63|75
19|75
19|57
19|87
19|45
19|73
19|23
19|47
19|24
19|89
19|97
19|66
19|62
19|69
19|91
19|96
19|39
19|35
49|82
49|33
49|19
49|22
49|67
49|87
49|45
49|96
49|47
49|72
49|53
49|63
49|76
49|98
49|41
49|55
49|23
49|93
53|19
53|82
53|67
53|22
53|69
53|31
53|72
53|87
53|55
53|96
53|77
53|47
53|23
53|45
53|93
53|98
53|76
53|56
53|59
89|77
89|33
89|34
89|97
89|43
89|41
89|29
89|42
89|53
89|86
89|66
89|62
89|59
89|93
89|85
89|14
89|56
89|38
89|68
89|31
55|72
55|75
55|96
55|37
55|93
55|82
55|47
55|24
55|91
55|77
55|23
55|35
55|94
55|22
55|41
55|19
55|45
55|98
55|69
55|59
55|63
86|68
86|49
86|67
86|34
86|59
86|77
86|55
86|72
86|38
86|82
86|63
86|99
86|43
86|22
86|94
86|33
86|85
86|53
86|76
86|29
86|41
86|93
94|24
94|14
94|97
94|42
94|96
94|62
94|23
94|47
94|75
94|36
94|87
94|63
94|35
94|76
94|39
94|91
94|37
94|98
94|73
94|69
94|89
94|19
94|45
59|36
59|94
59|35
59|67
59|69
59|76
59|24
59|72
59|23
59|93
59|41
59|22
59|75
59|63
59|96
59|91
59|45
59|87
59|47
59|98
59|77
59|19
59|37
59|82
57|34
57|59
57|56
57|31
57|85
57|99
57|66
57|97
57|49
57|14
57|55
57|33
57|41
57|62
57|73
57|43
57|42
57|86
57|89
57|53
57|68
57|38
57|11
57|29
76|98
76|23
76|96
76|57
76|89
76|19
76|39
76|42
76|97
76|87
76|24
76|91
76|62
76|73
76|14
76|69
76|75
76|37
76|35
76|47
76|45
76|63
76|36
76|11
87|89
87|47
87|66
87|57
87|91
87|37
87|69
87|73
87|98
87|86
87|35
87|68
87|14
87|39
87|42
87|75
87|11
87|85
87|45
87|34
87|36
87|97
87|24
87|62
35|62
35|86
35|33
35|42
35|36
35|89
35|73
35|39
35|56
35|14
35|99
35|43
35|68
35|31
35|85
35|29
35|34
35|53
35|38
35|66
35|57
35|11
35|97
35|49
41|24
41|72
41|75
41|37
41|35
41|96
41|63
41|87
41|22
41|19
41|23
41|94
41|82
41|67
41|69
41|77
41|91
41|45
41|98
41|47
41|39
41|36
41|93
41|76
14|49
14|56
14|55
14|41
14|31
14|22
14|67
14|38
14|33
14|59
14|29
14|53
14|86
14|85
14|43
14|66
14|82
14|11
14|99
14|62
14|68
14|93
14|77
14|34
39|49
39|38
39|31
39|53
39|33
39|34
39|97
39|62
39|57
39|85
39|42
39|99
39|68
39|66
39|56
39|43
39|14
39|89
39|29
39|59
39|55
39|11
39|73
39|86
72|76
72|98
72|42
72|35
72|87
72|73
72|96
72|45
72|97
72|75
72|39
72|47
72|91
72|24
72|37
72|19
72|69
72|57
72|89
72|36
72|94
72|63
72|14
72|23
29|96
29|23
29|56
29|31
29|98
29|63
29|59
29|19
29|53
29|55
29|77
29|76
29|82
29|45
29|69
29|22
29|93
29|94
29|67
29|87
29|41
29|33
29|72
29|49
67|73
67|63
67|96
67|23
67|57
67|36
67|35
67|91
67|45
67|82
67|24
67|47
67|19
67|39
67|87
67|72
67|37
67|69
67|76
67|75
67|89
67|98
67|22
67|94
42|67
42|55
42|11
42|62
42|97
42|34
42|77
42|14
42|43
42|53
42|68
42|29
42|31
42|38
42|56
42|66
42|59
42|41
42|33
42|86
42|99
42|93
42|49
42|85
77|72
77|69
77|94
77|24
77|93
77|57
77|67
77|82
77|47
77|35
77|39
77|91
77|63
77|23
77|45
77|36
77|76
77|98
77|96
77|22
77|75
77|37
77|87
77|19
62|49
62|33
62|59
62|38
62|99
62|93
62|82
62|72
62|66
62|34
62|77
62|11
62|68
62|55
62|85
62|86
62|67
62|31
62|29
62|41
62|53
62|56
62|43
62|22
24|66
24|85
24|99
24|43
24|36
24|57
24|97
24|38
24|75
24|53
24|14
24|11
24|89
24|42
24|34
24|35
24|39
24|68
24|73
24|29
24|62
24|49
24|86
24|91
37|35
37|43
37|36
37|24
37|62
37|73
37|97
37|38
37|57
37|91
37|11
37|86
37|66
37|29
37|39
37|49
37|89
37|99
37|68
37|14
37|34
37|85
37|42
37|75
68|34
68|67
68|72
68|77
68|53
68|59
68|38
68|96
68|49
68|82
68|63
68|94
68|55
68|43
68|31
68|93
68|22
68|33
68|56
68|41
68|19
68|76
68|99
68|29
73|68
73|99
73|43
73|77
73|53
73|59
73|49
73|31
73|85
73|97
73|55
73|14
73|38
73|89
73|86
73|29
73|33
73|62
73|42
73|66
73|34
73|41
73|11
73|56
47|66
47|11
47|39
47|37
47|42
47|89
47|14
47|62
47|91
47|85
47|35
47|24
47|99
47|86
47|36
47|68
47|29
47|73
47|75
47|34
47|38
47|43
47|57
47|97
97|67
97|99
97|68
97|14
97|59
97|31
97|55
97|56
97|77
97|38
97|86
97|85
97|11
97|82
97|62
97|33
97|53
97|49
97|29
97|66
97|43
97|41
97|34
97|93
31|45
31|72
31|24
31|96
31|69
31|98
31|77
31|67
31|41
31|94
31|93
31|82
31|63
31|23
31|22
31|59
31|37
31|47
31|55
31|91
31|76
31|19
31|87
31|75
33|55
33|76
33|47
33|87
33|31
33|98
33|19
33|24
33|96
33|63
33|94
33|72
33|45
33|37
33|69
33|59
33|41
33|23
33|91
33|93
33|22
33|77
33|67
33|82
99|19
99|93
99|87
99|43
99|33
99|29
99|63
99|55
99|67
99|77
99|96
99|31
99|76
99|22
99|41
99|72
99|23
99|59
99|38
99|94
99|49
99|53
99|56
99|82
93|69
93|36
93|23
93|91
93|72
93|73
93|37
93|45
93|75
93|96
93|35
93|87
93|82
93|94
93|57
93|39
93|63
93|22
93|67
93|19
93|47
93|24
93|98
93|76
45|47
45|39
45|89
45|57
45|97
45|86
45|85
45|14
45|73
45|98
45|35
45|62
45|75
45|66
45|99
45|68
45|24
45|91
45|34
45|36
45|42
45|11
45|37
45|38
34|67
34|82
34|76
34|38
34|31
34|96
34|43
34|53
34|19
34|63
34|22
34|72
34|23
34|56
34|49
34|29
34|77
34|41
34|93
34|94
34|55
34|59
34|33
34|99
98|99
98|91
98|24
98|97
98|39
98|62
98|35
98|85
98|34
98|66
98|89
98|11
98|38
98|37
98|57
98|36
98|75
98|47
98|86
98|14
98|42
98|73
98|68
91|39
91|56
91|14
91|99
91|36
91|35
91|66
91|11
91|43
91|42
91|73
91|75
91|49
91|57
91|86
91|62
91|34
91|89
91|29
91|68
91|85
91|53
11|77
11|34
11|31
11|41
11|94
11|67
11|99
11|93
11|38
11|49
11|82
11|33
11|43
11|85
11|59
11|66
11|22
11|86
11|53
11|29
11|68
36|31
36|33
36|99
36|62
36|11
36|38
36|97
36|85
36|89
36|39
36|57
36|14
36|68
36|43
36|56
36|86
36|42
36|55
36|53
36|29
22|35
22|96
22|91
22|42
22|94
22|19
22|72
22|75
22|63
22|97
22|39
22|76
22|89
22|87
22|24
22|73
22|47
22|57
22|23
69|47
69|34
69|89
69|62
69|14
69|37
69|36
69|99
69|66
69|24
69|91
69|68
69|11
69|35
69|73
69|86
69|98
69|57
38|72
38|23
38|22
38|56
38|53
38|87
38|55
38|82
38|49
38|59
38|43
38|67
38|29
38|76
38|77
38|31
38|96
82|57
82|96
82|42
82|75
82|73
82|37
82|19
82|47
82|23
82|89
82|63
82|72
82|69
82|36
82|98
82|35
96|97
96|14
96|47
96|89
96|86
96|75
96|11
96|24
96|42
96|36
96|66
96|23
96|87
96|98
96|91
23|36
23|62
23|75
23|14
23|66
23|57
23|87
23|85
23|69
23|73
23|24
23|11
23|39
23|35
75|73
75|11
75|56
75|66
75|85
75|89
75|57
75|35
75|43
75|34
75|36
75|49
75|14
66|33
66|31
66|55
66|43
66|53
66|56
66|41
66|93
66|34
66|76
66|67
66|59
56|98
56|87
56|31
56|41
56|33
56|96
56|67
56|59
56|63
56|82
56|45
85|41
85|82
85|55
85|29
85|53
85|38
85|68
85|33
85|31
85|56
43|67
43|55
43|94
43|87
43|56
43|45
43|19
43|41
43|29
63|42
63|39
63|73
63|87
63|91
63|66
63|23
63|96
19|11
19|42
19|36
19|37
19|14
19|86
19|98
49|31
49|77
49|69
49|94
49|59
49|56
53|94
53|33
53|41
53|63
53|37
89|49
89|99
89|11
89|55
55|67
55|87
55|76
86|56
86|31
94|57`,
		options,
	),
	updates: GridUtils.parse(
		`98,37,47,35,22,73,76,36,67,39,69,82,45
72,94,76,96,23,87,69,37,24,91,75,36,57,73,89,42,97
35,36,57,66,86,38,43,49,53,56,33
94,63,19,87,98,75,39
37,98,86,23,42,91,96
99,38,43,29,49,53,56,33,31,55,59,41,77,67,82,22,72,94,76,63,19,96,23
34,29,77,33,89,55,97,62,11
86,38,29,49,33
98,37,24,35,39,57,89,97,14,62,86,85,38
93,59,98,94,55,37,82,47,19,33,22,24,96,72,67,77,23
23,35,63,37,69,98,47,36,96,82,19,91,57,39,89,45,24,22,94
49,53,56,33,31,55,93,67,82,72,96
39,97,66,68,43,53,55
33,55,59,77,93,67,82,72,76,63,19,96,23,69,45,98,47,37,24
72,35,93,87,47,96,82,41,37,45,23,76,98,24,67,63,59,75,19,94,69,22,77
87,72,91,67,24,76,47,57,75,22,73,35,19
36,75,98,73,24,47,87,76,89,45,96,94,35,39,63,69,57,42,22,72,23
98,47,37,91,35,57,89,97,11,66,86,68,38
49,86,75,29,68,39,35,43,91,73,38,14,57,97,34,66,11,62,42,53,85,36,89
76,37,47,94,93,19,45,91,22,36,77,69,98,87,82,75,41
86,85,68,34,99,38,43,29,49,53,56,33,31,55,59,41,77,93,82,22,72,94,76
37,94,98,45,19,87,35,93,72,39,77,22,63,47,23,24,91,69,75,96,36
69,45,91,75,35,36,57,89,14,62,66,86,85,68,34
41,93,82,94,31,22,96,72,59,38,76,77,67,56,33,19,63,99,29
24,75,35,39,57,86,38,29,49
31,55,59,77,82,72,76,63,23,45,98,47,37,24,91
34,43,49,56,77,67,76
69,96,91,45,87,22,72,55,67,23,94,59,76,77,24,47,75,93,82,41,98,19,37
73,42,14,62,11,86,34,99,43,29,49,53,56,33,55,59,41
85,86,38,56,29,82,76,43,31,72,93,99,33,53,94
55,85,66,43,49,42,53,77,86,56,89
97,72,63,19,57,23,89,24,47
87,69,98,47,75,35,36,39,89,97,14,62,11,85,68
45,98,93,37,94,57,82,69,35,36,22,63,24,19,39
49,82,53,63,59,96,72,22,87,29,69,45,23,56,67,76,93,41,94
33,31,55,77,93,82,22,72,76,19,96,23,87,69,45,37,24
49,66,68,75,89,36,97,38,57,34,73,86,91,99,29,62,53,11,39
69,14,86,57,68,34,75,42,62
14,62,66,85,43,53,56,59,41,77,82
63,96,23,45,24,75,35,36,89,42,97,14,11
82,22,76,19,96,98,37,24,75,39,89
43,53,56,33,59,67,82,22,72,76,19,87,69
77,76,94,59,41,29,87,63,67,96,72,82,23,33,55,56,69,49,19,43,31
87,69,91,59,82,45,63,96,67,76,94,23,55,98,37,77,47,75,93
14,62,11,68,38,43,29,56,55,59,67
93,67,82,22,72,76,63,19,96,23,87,69,45,47,37,91,75,35,36,39,57
36,39,89,97,14,62,11,66,86,85,68,38,43,29,49,53,56,33,31
94,41,37,93,55,76,82,72,77,67,45,96,98,56,87,31,33
94,53,72,96,82,43,55
38,43,49,56,33,31,55,41,93,67,22,72,94,76,63,19,96,23,87
45,98,33,77,47,69,59,87,19,67,23,31,94
35,24,98,45,91,57,87,37,11,36,89,63,39,75,42,96,23,47,19,73,69
98,47,37,24,91,35,36,39,57,73,89,42,97,14,62,11,66,86,85,68,34,99,38
99,22,53,56,82,59,72,33,31,85,63,68,76,34,77,93,43,94,29
62,49,68,93,56,59,77,85,41,66,86,22,11,82,38
14,53,97,41,42,66,33,11,85
45,19,98,73,69,91,82,22,23,96,47,36,75,63,94,72,57,67,24
63,69,94,45,47,87,72,97,39
36,66,91,37,29,38,39
68,56,66,41,62,99,97,67,31,86,49,33,77,29,85,43,34,11,38,55,53
43,49,31,55,77,93,82,23,69
39,11,66,68,38
68,99,38,43,29,49,53,33,59,41,77,93,67,82,22,72,94,76,63
24,91,75,35,36,57,73,89,42,97,14,62,11,66,86,85,68,34,99,38,43,29,49
14,29,36,42,37,43,73,34,85,62,99,38,39,11,68,24,91,35,57
68,39,55,53,31,11,33,86,56,14,62,49,42,97,43
98,47,36,89,42,14,62,86,68,99,38
38,56,77,33,53,86,41,22,76
82,87,72,22,63,75,69,76,24,35,23,73,39,57,47,36,91,89,96,94,45,98,19
37,75,35,36,57,42,85,68,99,38,29
91,35,57,73,89,14,11,86,99,49,53
14,97,45,87,35,73,23,85,66
75,36,69,91,39,42,68,11,34
24,91,35,39,89,42,86,85,68,99,38,43,29
73,89,42,97,14,62,11,66,85,34,99,29,49,53,31,55,59
34,99,43,53,56,63,96
35,39,57,62,86,85,99,29,49,53,33
42,11,68,34,99,38,43,29,53,56,33,31,55,59,41,77,93
59,22,33,41,77,49,68,38,63,99,29,67,72,94,31,19,56
77,93,82,94,76,63,19,45,37
47,14,39,87,75,45,97,36,73,86,42
38,82,34,59,68,56,67,22,31,55,76,77,41,29,53,99,85,94,43,93,63
22,69,47,24,75,36,57,89,42
98,45,37,63,72,94,73,69,47,91,97,42,75
97,14,62,11,66,86,85,68,99,38,43,29,49,53,56,55,59,41,77,93,67
67,82,22,72,94,76,63,19,96,23,87,69,45,98,91,75,35,57,73
53,33,55,59,41,77,67,22,94,69,45,98,47
35,39,57,73,14,66,34,38,53,56,33
89,14,66,86,68,34,29,59,77
19,96,23,69,45,47,91,75,35,73,89,42,97,62,66
69,24,75,93,22,45,96,39,77
57,73,42,97,14,62,11,66,86,85,68,34,99,38,43,29,49,53,56,33,31,55,59
47,91,63,69,35,11,97,73,96
19,47,37,36,57,89,42,11,66
56,98,76,82,47,53,59,96,67,41,69,72,55,87,23
39,91,73,23,35,36,42,98,22,47,94,45,63,89,37,76,75,24,69
36,39,57,89,42,97,14,62,11,66,86,85,68,34,99,38,43,29,49,53,56,33,31
72,77,45,94,41,49,82,22,19,29,63,31,96,87,93,53,33,55,59,76,23,69,56
56,33,31,55,59,41,77,67,82,22,72,94,76,63,96,23,87,69,45,98,37
87,69,47,75,35,39,57,86,68
29,49,53,56,33,31,55,59,41,77,93,67,82,22,72,94,76,63,19,96,87,69,45
66,82,77,85,31,86,34,29,99,94,59,22,33,93,68
73,35,39,91,68
93,39,98,72,23,22,82,57,69,45,87
11,85,34,99,38,29,53,56,31,55,59,41,77,93,82
47,37,91,36,89,42,97,62,86,85,68,34,43
72,49,76,38,31,55,93
75,45,39,36,62,11,98,24,37,73,66,35,97,23,85,42,87,47,86,69,57
33,59,93,63,19,96,98
77,99,53,31,38,29,11,62,59,66,85,93,82,67,68,49,56,86,41,43,34
38,96,31,94,22,19,34,93,63,76,59,53,67
35,11,97,33,34,29,66
24,35,36,62,11,85,49
93,67,22,72,94,76,63,19,96,23,87,69,45,98,47,37,24,91,75,35,36,39,57
97,86,11,34,36,39,14,35,53,43,49
19,96,87,69,98,47,24,57,73,89,42,97,62,11,66
73,38,35,49,86,91,14,34,43,85,53,89,62,75,36,42,29
69,98,24,37,14,36,68,97,89,39,73,47,87,86,85,75,11,35,62
23,87,19,98,24,76,57,63,45,47,73,37,14,75,39,97,36,42,91,96,89
55,93,96,87,47,37,75
73,11,49,29,53,41,86,62,31
34,38,43,49,53,56,33,31,59,41,77,93,67,82,22,76,63,19,96
85,34,53,31,59,93,67,94,63
42,57,53,36,31,34,11,89,68,73,49
67,53,72,31,43,38,86,93,41,11,22,56,77,68,99,85,49,59,82,29,33
77,93,82,76,87,69,98,47,37,24,35,36,39
29,68,85,11,53,89,38,66,73,62,42,43,55,86,31,56,33,41,59,14,97,49,99
53,94,87,55,69,23,59,43,63,29,67,41,56,22,96,31,33,77,72,76,93
37,91,35,36,39,57,73,89,14,62,66,86,85,68,34,38,29
29,49,53,56,33,31,55,77,93,67,82,22,63,19,96,23,87,69,45
77,76,98,47,67,53,41,96,63,31,55
56,86,85,53,41,93,33,55,77,29,99,66,38,43,68,34,94
37,24,75,36,39,42,97,14,62,11,66,85,34,38,43
35,73,14,11,43,53,33
31,62,99,85,66,34,97,29,59,33,57,43,86,42,55,38,11
69,98,47,24,35,36,39,89,42,97,14,62,66,86,85,68,34
99,14,31,93,86,62,38,11,42
63,37,24,39,97,62,11
59,41,22,94,96,24,35
98,37,91,75,35,36,39,57,73,89,42,97,14,62,11,66,86,85,68,34,99
11,33,68,14,86,43,89,49,66,62,73,56,42,31,55,39,53
36,57,75,66,37,99,35,45,47,86,39,68,89
69,45,98,47,91,75,35,36,57,73,89,42,97,14,62,11,66,86,85,68,34
38,43,77,82,22,94,19,96,87
76,63,23,87,47,37,24,91,75,57,73,42,62
35,42,97,66,68
36,57,89,42,62,11,66,86,85,68,34,99,38,43,49,33,31
49,41,38,67,34,77,55,72,56,43,11,85,99,33,93,31,53,59,29,82,68,22,66
33,99,43,31,38,89,34,86,97,36,11,14,39
97,66,85,57,42,24,73,89,39
11,39,14,66,62,97,91,99,34,75,37,86,38,57,36,85,73,89,24,35,68
86,42,73,85,43,49,89,31,38,34,62,56,39,99,68,55,97,29,33
66,73,91,14,89,24,62,35,97,37,29,36,39,38,42,34,86
53,41,33,55,31,94,59,77,22,98,49
87,33,43,93,29,53,22,59,94,41,82,76,72,69,49,56,23,31,63,55,77,19,96
72,76,19,69,45,91,75,35,73
87,31,33,63,29,94,67,93,53
98,41,47,67,36,76,91,72,69,87,24,77,96,63,93,35,75
23,87,69,45,98,47,37,24,91,75,35,36,39,57,73,89,42,97,14,62,11,86,85
94,76,63,19,96,23,87,45,98,37,24,91,75,35,36,39,73,89,42
85,57,45,24,75,89,99,14,86,36,62,37,47,34,35,91,98,11,66
19,75,63,89,73,98,97,24,94,45,23,35,37,36,69,57,14,91,42,87,96,39,47
56,33,31,55,59,41,77,93,82,76,96,45,98,47,37
89,42,97,14,62,11,66,86,85,68,34,99,38,43,29,49,53,56,33,31,59,41,77
94,45,91,96,97,87,76,47,89,39,37,24,35,42,72,19,57,73,36,75,98,69,63
33,87,93,72,94,77,55,82,23,53,76,49,22,98,63
34,49,56,33,31,55,59,41,77,93,22,72,94,76,63,19,96
23,87,37,93,94,96,77,75,19,35,59
55,59,41,77,93,67,82,22,72,94,76,63,19,96,23,87,69,45,98,47,37,91,75
19,96,23,69,45,91,35,36,39,57,73,89,97,14,62,11,66
22,72,19,23,37,24,36,39,73,89,42
75,39,57,73,89,14,62,11,66,68,34,43,29,53,56
91,31,47,24,98,67,37,82,23,45,69,87,94,77,55,19,63,93,96,41,59,76,72
55,93,34,56,99,22,85,49,59,29,66,41,86
35,36,39,73,42,97,62,11,66,86,68,34,99,38,43,29,49,53,33
24,36,73,39,98,82,19,94,63,69,76,22,96,75,23,72,37,89,45
29,62,39,57,99,97,66,85,53,91,11,35,86,34,68,42,75
53,33,55,67,82,76,63,19,96,23,87,45,47
38,53,11,59,34,73,33,62,66,99,42,97,29,43,68,89,56,31,86,49,57,14,55
24,47,76,45,37,72,23,63,89,82,69,19,57,73,87
24,47,87,89,98,19,66,97,75,57,36,73,11,62,39,96,91
49,53,56,31,55,41,77,93,82,94,76,19,96,23,87,69,98
19,72,87,96,63,94,45,39,57,37,82,91,98,67,36,23,93,47,35
38,66,14,29,62,59,53,97,56,57,43,73,33
43,29,49,53,56,33,31,55,59,41,77,93,67,82,72,94,76,63,19,96,23,87,69
45,62,23,14,98,76,24
49,77,59,53,38,55,89
23,55,96,24,59,76,69,31,22,67,33,98,19
37,77,33,45,59,24,96
45,19,94,23,98,55,93,96,67,37,76,72,33,31,22,47,24,59,82,69,41
87,47,93,56,59,82,19,76,23,45,31,72,63
67,49,31,53,66,43,99,14,55,11,77,38,86,41,62
68,11,75,89,42,49,62,86,24`,
		options,
	),
};

it("should pass challenge", () => {
	expect(TimeUtils.log(() => func(challenge.rules, challenge.updates))).toBe(
		5329,
	);
});

let input_test1_raw = `16
10
15
5
1
11
7
19
6
12
4`;
let input_test2_raw = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;
let input_raw = `95
43
114
118
2
124
120
127
140
21
66
103
102
132
136
93
59
131
32
9
20
141
94
109
143
142
65
73
27
83
133
104
60
110
89
29
78
49
76
16
34
17
105
98
15
106
4
57
1
67
71
14
92
39
68
125
113
115
26
33
61
45
46
11
99
7
25
130
42
3
10
54
44
139
50
8
58
86
64
77
35
79
72
36
80
126
28
123
119
51
22`;

function clean(input) {
  input = input.split('\n').map(Number);
  input.push(0);
  input.sort((x, y) => {
    return x - y;
  });
  input.push(input[input.length - 1] + 3);
  return input;
}

function rozdilVPočtu(input_og, a, b) {
  let input = Array.from(clean(input_og));
  let na = 0,
    nb = 0;
  for (let i = 0; i < input.length - 1; i++) {
    switch (input[i + 1] - input[i]) {
      case a:
        na++;
        break;
      case b:
        nb++;
        break;
    }
  }

  return na * nb;
}

function createChunks(input_og) {
  let input = clean(input_og);
  let aw = [];
  let tmp = [];
  for (let i = 0; i < input.length; i++) {
    tmp.push(input[i]);
    if (input[i + 1] - input[i] == 3 || i == input.length - 1) {
      aw.push(tmp);
      tmp = [];
    }
  }
  let answer = 1;
  for (let i = 0; i < aw.length; i++) {
    answer = answer * solveChunk(aw[i]);
  }
  return answer;
}

function solveChunk(input, a) {
  a = a == undefined ? 0 : a;
  let sum = 0;
  for (let i = a + 1; i < input.length; i++) {
    if (input[i] - input[a] <= 3) {
      sum += solveChunk(input, i);
    }
  }
  if (a == input.length - 1) sum = 1;
  return sum;
}

console.log(createChunks(input_raw));

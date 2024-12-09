const input = `Time:        46     85     75     82
Distance:   208   1412   1257   1410`;

const races = [
  {time: 46857582, max: 208141212571410},
];

console.log(races.reduce((acc, {time, max}) => {
  let ways = 0;

  for (let i = 1; i < time; i++) {
    const speed = i;
    const distance = (time - i) * speed;

    if (distance > max) {
      ways++;
    }
  }

  return acc * ways;
}, 1));

// Answer: 36919753

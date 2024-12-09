const input = `Time:        46     85     75     82
Distance:   208   1412   1257   1410`;

const races = [
  {time: 46, max: 208},
  {time: 85, max: 1412},
  {time: 75, max: 1257},
  {time: 82, max: 1410}
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

// Answer: 1108800

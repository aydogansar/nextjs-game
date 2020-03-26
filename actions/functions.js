export function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

export const mode = array => {
  const map = new Map();
  let maxFreq = 0;
  let mode;

  for (const item of array) {
    let freq = map.has(item) ? map.get(item) : 0;
    freq++;

    if (freq > maxFreq) {
      maxFreq = freq;
      mode = item;
    }

    map.set(item, freq);
  }

  return map;
};

#! deno run

export function randomColor() {
  const r = toRandom(256);
  const g = toRandom(256);
  const b = toRandom(256);
  const a = Math.random().toFixed(2);
  return `rgb(${r},${g},${b},${a})`;
}

function toRandom(max: number) {
  const range = Math.random() * max;
  return Math.floor(range);
}

export function randomColorPlus() {
  const random = Math.random().toString(16).substring(2, 8);
  return `#${random}`;
}

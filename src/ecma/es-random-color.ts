#! pnpm tsx

export function randomColor() {
  const r = toRandom(256);
  const g = toRandom(256);
  const b = toRandom(256);
  return `rgb(${r},${g},${b})`;
}

function toRandom(max: number) {
  const range = Math.random() * max;
  return Math.floor(range);
}

function randomColorPlus() {
  const random = Math.random().toString(16).substring(2, 8);
  return `#${random}`;
}

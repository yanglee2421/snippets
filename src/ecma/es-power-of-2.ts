#! pnpm tsx

export function toIsPowerOf2(x: number) {
  return (x & (x - 1)) === 0;
}

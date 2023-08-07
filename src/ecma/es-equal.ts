#! pnpm tsx

export function esEqual() {
  const symbol = Symbol();
  const object = {
    [symbol]: 0,
    valueOf() {
      return ++this[symbol];
    },
    toString() {
      return this[symbol]++;
    },
  };

  // @ts-ignore
  console.log(object == 1, object == 2);
}
esEqual();
console.log(void 0 == null);

/**
 * 1. Special: undefined, null, ,NaN, symbol
 * 2. Same Type: then compare the value
 * 3. Both Are Primitive: convert to number
 * 4. Primitive & Object: convert to primitive by valueOf, toString
 */

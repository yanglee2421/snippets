export function toDeduplicate(items: unknown[], ops: Partial<Ops> = {}) {
  const { override = false, uniqueKey = "id" } = ops;

  const map = new Map();

  items.forEach((item) => {
    // Item must be an object
    if (typeof item !== "object") return;
    if (!item) return;

    // Get Key
    const key = Reflect.get(item, uniqueKey);
    if (!key) return;

    // Valid key-value pairs
    if (override) return map.set(key, item);
    map.get(key) ?? map.set(key, item);
  });

  return [...map.values()];
}

interface Ops {
  uniqueKey: string | symbol;
  override: boolean;
}

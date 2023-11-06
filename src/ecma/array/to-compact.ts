export function toCompact<TData>(list: TData[]) {
  return list.filter(Boolean);
}

export function toIsWithoutFalsy(list: unknown[]) {
  return list.every(Boolean);
}

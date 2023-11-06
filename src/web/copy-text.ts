export async function copyText(params: string) {
  await navigator.clipboard.writeText(params);
}

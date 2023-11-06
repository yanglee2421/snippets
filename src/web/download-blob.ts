// Binary Large Object
export function downloadBlob(blob: Blob) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "filename";
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
}

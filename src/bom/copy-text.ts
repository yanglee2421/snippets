export async function copyText(
  params: string,
  options: Partial<CopyTextOptions> = {}
) {
  try {
    await navigator.clipboard.writeText(params);
    options.success?.("Copied successlly!");
  } catch (error) {
    console.error(error);
    options.error?.("Copied fail!");
  }
}

interface CopyTextOptions {
  success(msg: string): void;
  error(msg: string): void;
}

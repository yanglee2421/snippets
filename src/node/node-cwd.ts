#! pnpm tsx

// NodeJs Imports
import { resolve } from "node:path";

export function nodeCwd() {
  console.log("cwd", process.cwd());
  console.log("cwd", resolve());
  console.log("resolve", resolve("./index.mjs"));
}

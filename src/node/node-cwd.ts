#! pnpm tsx

// NodeJs Imports
import { resolve } from "node:path";

export function nodeCwd() {
  console.log("current working directory: \n", process.cwd(), "\n");
  console.log("resolve without arguments: \n", resolve(), "\n");
  console.log("resolve with arguments: \n", resolve("./index.mjs"), "\n");
}

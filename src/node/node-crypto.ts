#! pnpm tsx
import { randomUUID } from "node:crypto";

nodeCrypto();
export function nodeCrypto() {
  console.log(randomUUID());
}

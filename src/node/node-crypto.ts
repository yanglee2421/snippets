#! pnpm tsx
import { randomUUID } from "node:crypto";

export function nodeCrypto() {
  console.log(randomUUID());
}

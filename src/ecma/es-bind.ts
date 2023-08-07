#! pnpm tsx
export function testBind(first: unknown, ...args: unknown[]) {
  console.log(this);
  console.log(first);
  console.log(args);
}

const fun = testBind.bind(null, 1);
fun(4, 5, 6);

#! pnpm tsx

export function myProperty() {
  const object = {
    b: "b",
    c: "c",
    a: "a",
    3: 3,
    4: 4,
    1: 1,
    2: 2,
  };
  const keys = Object.keys(object).join();
  console.log("keys", keys);
  const values = Object.values(object).join();
  console.log("values", values);

  const kList: string[] = [];
  for (const k in object) {
    kList.push(k);
  }
  console.log("kList", kList.join());

  const vList: string[] = [];
  for (const v in object) {
    vList.push(v);
  }
  console.log("vList", vList.join());
}

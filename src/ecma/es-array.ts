#! pnpm tsx

export class List {
  length = 0;
  [Symbol.iterator] = function* () {
    for (let idx = 0; idx < this.length; idx++) {
      yield Reflect.get(this, idx);
    }
  };
}

const list = new Proxy(new List(), {
  get(target, prop, receiver) {
    // console.log(receiver);
    void receiver;
    return Reflect.get(target, prop);
  },
  set(target, prop, receiver) {
    // console.log(receiver);
    Reflect.set(target, prop, receiver);
    Reflect.set(target, "length", target.length + 1);
    return true;
  },
});

list[0] = "first";
list[1] = "second";
const arr = [...list];
console.log(list);
console.log(arr);

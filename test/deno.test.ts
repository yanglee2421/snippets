#! deno run
import loadsh from "lodash";

const list = loadsh.compact([
  true && {
    age: 18,
  },
]);

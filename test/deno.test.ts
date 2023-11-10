#! deno run

const event = "$pageview";

const list = [
  event === "$pageview" && {
    key: "$current_url",
    value: "vsr_click",
    operator: "icontains",
    type: "event",
  },
].filter(Boolean);

console.log(list);

export {};

#! deno run

const resolveURL = import.meta.resolve("../src");
console.log("resolveURL", resolveURL);

const url = new URL("../test", import.meta.url);
console.log("url.href", url.href);

export { resolveURL, url };

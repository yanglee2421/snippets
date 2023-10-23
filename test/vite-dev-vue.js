void ((port = 5173) => {
  const viteTag = document.createElement("script");
  viteTag.type = "module";
  viteTag.src = `http://localhost:${port}/@vite/client`;
  const mainTag = document.createElement("script");
  mainTag.type = "module";
  mainTag.src = `http://localhost:${port}/src/main.ts`;

  document.body.append(viteTag, mainTag);
})(port);

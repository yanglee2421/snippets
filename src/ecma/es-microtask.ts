export function microTask(fn: () => void) {
  if (typeof Function === "function") {
    queueMicrotask(fn);
    return;
  }

  if (typeof Promise === "function") {
    Promise.resolve().then(fn);
  }

  if (typeof MutationObserver === "function") {
    const text = document.createTextNode("");
    const observer = new MutationObserver(fn);
    observer.observe(text, { characterData: true });
    text.data = "1";
  }

  const nextTick = Reflect.get(Object(process), "nextTick");
  if (typeof nextTick === "function") {
    nextTick(fn);
    return;
  }

  if (typeof setImmediate === "function") {
    setImmediate(fn);
    return;
  }

  // Fallback
  setTimeout(fn, 0);
}

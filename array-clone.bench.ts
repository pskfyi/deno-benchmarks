const aMillionNumbers = [...Array(1_000_000).keys()];

Deno.bench("slice", { group: "Array clone" }, () => {
  const _arr = aMillionNumbers.slice();
});

Deno.bench("spread", { group: "Array clone" }, () => {
  const _arr = [...aMillionNumbers];
});

Deno.bench("for loop", { group: "Array clone" }, () => {
  const _arr = [];
  for (let i = 0; i < aMillionNumbers.length; i++) {
    _arr[i] = aMillionNumbers[i];
  }
});

Deno.bench("concat", { group: "Array clone" }, () => {
  const _arr = aMillionNumbers.concat();
});

Deno.bench("map", { group: "Array clone" }, () => {
  const _arr = aMillionNumbers.map((n) => n);
});

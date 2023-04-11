// deno-lint-ignore-file no-var no-inner-declarations prefer-const

function foo(i: number) {
  return 10 * 7 + i;
}

const arr = [...Array(1000000).keys()];

Deno.bench("C-style for var", { group: "loop" }, () => {
  for (var i = 0; i < 1000000; i++) {
    foo(i);
  }
});

Deno.bench("C-style for let", { group: "loop" }, () => {
  for (let i = 0; i < 1000000; i++) {
    foo(i);
  }
});

// Cannot do C-style for const

Deno.bench("for var of", { group: "loop" }, () => {
  for (var i of arr) {
    foo(i);
  }
});

Deno.bench("for let of", { group: "loop" }, () => {
  for (let i of arr) {
    foo(i);
  }
});

Deno.bench("for const of", { group: "loop" }, () => {
  for (const i of arr) {
    foo(i);
  }
});

Deno.bench("forEach", { group: "loop" }, () => {
  arr.forEach((i) => foo(i));
});

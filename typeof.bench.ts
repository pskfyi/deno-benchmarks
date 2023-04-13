const OBJECT = "object";
const FUNCTION = "function";

Deno.bench("typeof w/ new string", { group: "typeof" }, () => {
  typeof globalThis === "object" && typeof globalThis.setTimeout === "function";
});

Deno.bench("typeof w/ const string", { group: "typeof" }, () => {
  typeof globalThis === OBJECT && typeof globalThis.setTimeout === FUNCTION;
});

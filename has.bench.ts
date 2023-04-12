const halfAMillionNumbers = [...Array(500_000).keys()];
const numberSet = new Set(halfAMillionNumbers);
const numberMap = new Map(halfAMillionNumbers.map((n) => [n, n]));

const aMillionNumbers = [...Array(1_000_000).keys()];

Deno.bench("Set add without has", { group: "Set.has" }, () => {
  for (const number of aMillionNumbers) {
    numberSet.add(number);
  }
});

Deno.bench("Set has then add w/ if", { group: "Set.has" }, () => {
  for (const number of aMillionNumbers) {
    if (numberSet.has(number)) numberSet.add(number);
  }
});

Deno.bench("Set has then add w/ or", { group: "Set.has" }, () => {
  for (const number of aMillionNumbers) {
    numberSet.has(number) || numberSet.add(number);
  }
});

Deno.bench("Set has then add w/ not and", { group: "Set.has" }, () => {
  for (const number of aMillionNumbers) {
    !numberSet.has(number) && numberSet.add(number);
  }
});

Deno.bench("Map set without has", { group: "Map.has" }, () => {
  for (const number of aMillionNumbers) {
    numberMap.set(number, number);
  }
});

Deno.bench("Map has then set w/ if", { group: "Map.has" }, () => {
  for (const number of aMillionNumbers) {
    if (numberMap.has(number)) numberMap.set(number, number);
  }
});

Deno.bench("Map has then set w/ or", { group: "Map.has" }, () => {
  for (const number of aMillionNumbers) {
    numberMap.has(number) || numberMap.set(number, number);
  }
});

Deno.bench("Map has then set w/ not and", { group: "Map.has" }, () => {
  for (const number of aMillionNumbers) {
    !numberMap.has(number) && numberMap.set(number, number);
  }
});

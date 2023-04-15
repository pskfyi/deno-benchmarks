function splitAndJoin(str: string) {
  const [first, ...rest] = str.split(" ");
  return [first, rest.join(" ")];
}

function regex(str: string) {
  const match = str.match(/^(\S+)\s*(.*)$/);
  if (match === null) return [str, ""];
  return [match[1], match[2]];
}

function indexOf(str: string) {
  const firstSpace = str.indexOf(" ");
  if (firstSpace === -1) return [str, ""];
  return [str.slice(0, firstSpace), str.slice(firstSpace + 1)];
}

const string = "hello world";
const sentence = "The quick brown fox jumps over the lazy dog.";

// 100 words 696 characters
const paragraph =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ex sem. Nullam nec blandit tellus. Donec venenatis lobortis metus nec lobortis. Donec ultrices a ipsum ut volutpat. Nullam eget diam et lacus finibus posuere in sed nisl. Suspendisse potenti. Nullam tincidunt dolor vitae sodales porttitor. Suspendisse cursus pellentesque enim at dignissim. Suspendisse ultricies, dui quis auctor euismod, neque enim molestie magna, placerat rhoncus urna diam convallis justo. Maecenas bibendum risus cursus lacus tempus tempor. Curabitur imperdiet ante sed ex congue, ut egestas mi lobortis. In laoreet accumsan rhoncus. Proin nec ex volutpat, semper odio in, dapibus nibh. Mauris rutrum...`;

const chapter = paragraph.repeat(50);
const novel = paragraph.repeat(500);

const groups = Object.entries({ string, sentence, paragraph, chapter, novel });

for (const [group, text] of groups) {
  Deno.bench("split and join", { group }, () => void splitAndJoin(text));
  Deno.bench("regex", { group }, () => void regex(text));
  Deno.bench("indexOf", { group }, () => void indexOf(text));
}

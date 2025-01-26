// @link

const {createInterface} = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

// delete before submit!
console.info("Write your input for <anagram.group>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  return [Number(input[0]), input[1].split(" ")];
}

/*
 *  @link https://contest.yandex.ru/contest/23991/problems/I/
 */
function solve(args) {
  const [n, words] = args;

  const group = {};

  for (let i = 0; i < n; i++) {
    const word = words[i].split("").sort((a, b) => a.localeCompare(b));

    if (word in group) {
      group[word] = [...group[word], i];
    } else {
      group[word] = [i];
    }
  }

  return Object.values(group)
    .map((grouAnagrams) => grouAnagrams.join(" "))
    .join("\n");
}

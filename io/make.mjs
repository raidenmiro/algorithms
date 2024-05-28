import fs from "node:fs/promises";
import path from "node:path";
import {createInterface} from "node:readline/promises";

import prettier from "prettier";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const __dirname = import.meta.dirname;

async function main() {
  const signal = AbortSignal.timeout(10_000);
  const root = path.join(__dirname, "solution");

  signal.addEventListener("abort", () => {
    console.log("Timeout. Please run command again.");
  });

  const name = await readline.question("Write name of file for solution: ", {
    signal,
  });

  const SOLUTION_PATH = path.join(root, `${name}.mjs`);

  const isExistRoot = await checkFileExists(root);
  const isExistFile = await checkFileExists(SOLUTION_PATH);

  if (!isExistRoot) {
    await fs.mkdir(root, {recursive: true});
  }

  if (isExistFile) {
    console.error(
      "File with this name already exists. Please choose another name."
    );
  }

  const template = prettier.format(makeTemplate(name));

  fs.writeFile(SOLUTION_PATH, template).then(
    () => {
      console.log(
        `File for your solution was created, happy hacking: ${SOLUTION_PATH}`
      );

      process.exit(1);
    },
    (error) => {
      console.error("Not possible to create file %s. Please try again.", error);
      process.exit(1);
    }
  );
}

main()
  .then(() => {
    console.log("Happy hacking!");
  })
  .catch((error) => {
    console.error(error);
  });

function checkFileExists(filename) {
  return fs
    .access(filename)
    .then(() => true)
    .catch(() => false);
}

function makeTemplate(filename) {
  return `import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info('Write your input for <${filename}>:');

rl
  .on("line", (line) => INPUT_FROM_IO.push(line))
  .on("close", () => {
    const parsedInput = processData(INPUT_FROM_IO);
    const solution = main(parsedInput);

    console.log(solution);
});

function processData(input) {
  // Your code here for processing input
}

/*
*  @link ...
*/
function main(args) {
  // Your code here for solving problem
  process.exit(0);
  return 0;
}
`;
}

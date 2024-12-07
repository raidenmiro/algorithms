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
  const signal = AbortSignal.timeout(20_000);
  const root = path.join(__dirname, "solution");

  signal.addEventListener("abort", () => {
    console.log("Timeout. Please run command again.");
  });

  const useClasses = await readline
    .question("Does the solution utilize classes? (yes/no) ")
    .then((answer) => answer.includes("yes"));

  const useComplexity = await readline
    .question("Should contain a description of the complexity? (yes/no) ")
    .then((answer) => answer.includes("yes"));

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

  const template = prettier.format(
    makeTemplate(name, {useClasses, useComplexity})
  );

  fs.writeFile(SOLUTION_PATH, template).then(
    () => {
      console.log(`File for your solution was created: ${SOLUTION_PATH}`);

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

const remoteJungle = `
  if (process.env.REMOTE_JUDGE !== 'true') {
      class Node {
        constructor(value = null, next = null) {
          this.value = value;
          this.next = next;
        }
      }
  }
`;

const complexityTemplate = `
/**
 * -- ПРИНЦИП РАБОТЫ --
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 */
`;

function makeTemplate(filename, options = {}) {
  return `
// @link

${options.useComplexity ? complexityTemplate : ""}
import { createInterface } from "node:readline";

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
    const solution = solve(parsedInput);

    console.log(solution);
});

${options.useClasses ? remoteJungle : ""}

function processData(input) {
  // Your code here for processing input
}

/*
*  @link
*/
function solve(args) {
  // Your code here for solving problem
}
`;
}

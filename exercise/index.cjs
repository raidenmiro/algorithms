const fs = require("node:fs");
const {createInterface} = require("node:readline");
const sade = require("sade");
const {print} = require("./utils.cjs");

const prog = sade("cli-yandex-training");

const templates = {
  output: (number) => `./exercise/${number}/output.txt`,
  input: (number) => `./exercise/${number}/input.txt`,
};

prog
  .command("exec <number>")
  .option("-c, --console", "Read from console and print to console")
  .option(
    "-f, --file",
    "Read from file <input.txt>, and output to <output.txt>"
  )
  .example("exec 1")
  .action((number, opts) => {
    const input = [];
    const entry = require(`./${number}/index.cjs`);

    if (!opts.file) {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.on("line", (line) => input.push(line));
      rl.on("close", () => {
        entry.module(input);
      });
    } else {
      const inputFile = templates.input(number);
      const outputFile = templates.output(number);

      fs.readFile(inputFile, "utf8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        const result = entry.module(data.split("\n"));

        if (typeof result !== "string") {
          throw new Error(`[exercise of ${number}] must be return string`);
        }

        fs.writeFile(outputFile, result, (err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("[done] check output file!");
        });
      });
    }
  });

prog
  .command("new solution for <lecture> <decision-name>")
  .example("new 5.0 max-range")
  .option("-c, --console", "use read from console and print to console")
  .option(
    "-f, --file",
    "Use read from file <input.txt>, and output to <output.txt>"
  )
  .action((number, decisionName, opts) => {
    const dir = `./exercise/yandex.${number}/${decisionName}`;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {recursive: true});
    } else {
      return print("directory is exist!");
    }

    const template = `'use strict'

exports.module = (input) => {}`;

    fs.writeFile(`${dir}/index.cjs`, template, (err) => {
      if (err) print(err);
      else print("The file was saved!");
    });

    if (opts.file) {
      const input = templates.input(number);
      const output = templates.output(number);

      if (!fs.existsSync(input)) {
        fs.appendFile(input, "unreachable!", (err) => {
          if (err) throw err;
          console.log("Created input file!");
        });
      }

      if (!fs.existsSync(output)) {
        fs.appendFile(output, "not completed!", (err) => {
          if (err) throw err;
          console.log("Created output file!");
        });
      }
    }
  });

prog.parse(process.argv);

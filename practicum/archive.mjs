import {execSync} from "node:child_process";
import {createInterface} from "node:readline/promises";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});


const ARCHIVE_FILENAME = "__submit_solution__";

async function main() {
  const numberOfSprint = await readline.question("Write sprint number: ");
  const sprintDirectory = `${numberOfSprint}.sprint`;

  console.info('Creating or updating output directory...');
  execSync(`mkdir -p ${ARCHIVE_FILENAME}`);

  const filenames = await readline.question(
    "Write your solutions name, like: 'binary.search deque': "
  );

  const arrifyFilenames = filenames.split(" ").map((filename) => {
    return `practicum/solution/${sprintDirectory}/${filename}.mjs`;
  });

  if (arrifyFilenames.length === 0) {
    console.error("No files found");
    return;
  }

  console.info('Archiving...');
  execSync(`zip -j ${ARCHIVE_FILENAME}/${sprintDirectory}.zip ${arrifyFilenames.join(" ")} -x "*.DS_Store"`);
  console.log('\x1b[36m%s\x1b[0m', 'Done for sending!!'); 

  process.exit(0);
}

main();

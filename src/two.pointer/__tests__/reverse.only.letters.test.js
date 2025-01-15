import assert from "node:assert";
import {describe, test} from "node:test";
import reverseOnlyLetters from "../reverse.only.letters.mjs";

describe("reverse only letters", () => {
  [
    {
      describe: "first-case",
      input: "ab-cd",
      output: "dc-ba",
    },
    {
      describe: "second-case",
      input: "a-bC-dEf-ghIj",
      output: "j-Ih-gfE-dCba",
    },
    {
      describe: "symbols-case",
      input: "Test1ng-Leet=code-Q!",
      output: "Qedo1ct-eeLg=ntse-T!",
    },
    {
      describe: "edge-case",
      input: "b!",
      output: "b!",
    },
  ].forEach(({describe, input, output}) =>
    test(describe, () => {
      assert.deepEqual(reverseOnlyLetters(input), output);
    })
  );
});

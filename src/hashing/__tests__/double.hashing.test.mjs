import assert from "node:assert";
import {describe, test} from "node:test";
import {DoubleHasing} from "../double.hashing.mjs";

describe("DoubleHasing", () => {
  test("DoubleHasing.get()", () => {
    const hash = new DoubleHasing();

    hash.add("key", 3);

    assert.equal(hash.get("key"), 3);
  });

  test("DoubleHasing.remove()", () => {
    const hash = new DoubleHasing();

    hash.add("delete-key", 10);
    assert.equal(hash.get("delete-key"), 10);

    hash.remove("delete-key");
    assert.equal(hash.get("delete-key"), undefined);
  });

  test("DoubleHasing.get() -> identical key hash", () => {
    const hash = new DoubleHasing();

    hash.add("fao", 10);
    assert.equal(hash.get("fao"), 10);

    hash.add("lhb", 100);
    assert.equal(hash.get("lhb"), 100);
  });

  test("DoubleHasing.remove() -> identical key hash", () => {
    const hash = new DoubleHasing();

    hash.add("fao", 10);
    assert.equal(hash.get("fao"), 10);

    hash.add("lhb", 100);
    assert.equal(hash.get("lhb"), 100);

    hash.remove("lhb");
    assert.equal(hash.get("lhb"), null);

    assert.equal(hash.get("fao"), 10);
  });

  test("DoubleHasing.add() -> Update 1", () => {
    const hash = new DoubleHasing();

    hash.add("fao", 10);
    assert.equal(hash.get("fao"), 10);

    assert.equal(hash.get("fao"), 10);
  });

  test("DoubleHasing.add() -> Update 2", () => {
    const hash = new DoubleHasing();

    hash.add("fao", 10);
    assert.equal(hash.get("fao"), 10);
    hash.add("fao", 100);

    assert.equal(hash.get("fao"), 100);
  });
});

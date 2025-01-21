import assert from "node:assert";
import {describe, test} from "node:test";
import {HashMap} from "../closed.addressing.mjs";

describe("HashMap", () => {
  test("HashMap.get()", () => {
    const hash = new HashMap();

    hash.add("key", 3);

    assert.equal(hash.get("key"), 3);
  });

  test("HashMap.remove()", () => {
    const hash = new HashMap();

    hash.add("delete-key", 10);
    assert.equal(hash.get("delete-key"), 10);

    hash.remove("delete-key");
    assert.equal(hash.get("delete-key"), undefined);
  });

  test("HashMap.get() -> identical key hash", () => {
    const hash = new HashMap();

    hash.add("fao", 10);
    assert.equal(hash.get("fao"), 10);

    hash.add("lhb", 100);
    assert.equal(hash.get("lhb"), 100);
  });

  test("HashMap.remove() -> identical key hash", () => {
    const hash = new HashMap();

    hash.add("fao", 10);
    assert.equal(hash.get("fao"), 10);

    hash.add("lhb", 100);
    assert.equal(hash.get("lhb"), 100);

    hash.remove("lhb");
    assert.equal(hash.get("lhb"), null);

    assert.equal(hash.get("fao"), 10);
  });

  test("HashMap.add() -> Update 1", () => {
    const hash = new HashMap();

    hash.add("fao", 10);
    assert.equal(hash.get("fao"), 10);

    assert.equal(hash.get("fao"), 10);
  });

  test("HashMap.add() -> Update 2", () => {
    const hash = new HashMap();

    hash.add("fao", 10);
    assert.equal(hash.get("fao"), 10);
    hash.add("fao", 100);

    assert.equal(hash.get("fao"), 100);
  });
});

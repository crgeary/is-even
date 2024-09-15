import { test } from "node:test";
import assert from "node:assert/strict";

import { isEven } from "..";

test("numbers between 0 - 1,000,000 return correct boolean", (t) => {
  for (let i = 0; i <= 1_000_000; i++) {
    assert.strictEqual(isEven(i), i % 2 === 0);
  }
});

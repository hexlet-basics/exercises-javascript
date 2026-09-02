// @ts-check

import { expect, test } from "vitest";
import isNotPalindrome, { isPalindrome } from "./index.js";

test("logical negation", () => {
  expect(isPalindrome("wow")).toBe(true);
  expect(isPalindrome("hexlet")).toBe(false);
  expect(isPalindrome("Wow")).toBe(true);

  expect(isNotPalindrome("wow")).toBe(false);
  expect(isNotPalindrome("hexlet")).toBe(true);
  expect(isNotPalindrome("asdffdsa")).toBe(false);
  expect(isNotPalindrome("Wow")).toBe(false);
});

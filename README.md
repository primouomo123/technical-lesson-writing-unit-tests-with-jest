# Technical Lesson: Writing Unit Tests with Jest

## Learning Goals

- Follow a test-driven development process for writing code.
- Write and execute unit tests using Jest.

---

## Introduction

In this lesson, you'll learn how to write unit tests for a function using Jest, a powerful JavaScript testing framework. We'll follow a test-driven development (TDD) workflow, which involves writing tests first, implementing the code to pass the tests, and refining the solution. By the end of this lesson, you'll understand the importance of unit testing and how it ensures robust, reliable code.

Tests will be written in `src/__tests__/utils.test.js`, and the application logic will be implemented in `src/utils.js`.

---

## Process Overview

We'll follow these steps in a test-driven development approach:

1. **Understand the feature**: Clearly define the functionality to be built.
2. **Write a test specification**: Draft test cases to define the expected behavior.
3. **Implement code**: Write the minimum code needed to pass the test.
4. **Refactor**: Improve the implementation while maintaining passing tests.
5. **Repeat**: Continue testing and refining for additional scenarios and edge cases.

---

## Feature Request

Our task is to build a word puzzle game. The scoring rules are as follows:

- **1 point for each vowel** (a, e, i, o, u)
- **2 points for each consonant**

For example:
- The word `"test"` scores **7 points**:
  ```
  t   e   s   t
  2 + 1 + 2 + 2 = 7
  ```

Our goal is to implement a function `pointsForWord` that calculates the score for any given word.

---

## Setting Up the Environment

1. **Fork and clone this repository**:
   ```bash
   git clone https://github.com/learn-co-curriculum/technical-lesson-writing-unit-tests-with-jest
   ```
2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Run Jest in watch mode**:
   ```bash
   npm test
   ```

---

## Writing the Test

We begin by writing a test case for our feature:
> Calling `pointsForWord("test")` should return `7`.

In `src/__tests__/utils.test.js`, write the following:

```js
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";

    const points = pointsForWord(word);

    expect(points).toBe(7);
  });
});
```

Run the tests with:
```bash
npm test
```

At this point, the test will fail because the function `pointsForWord` is not yet implemented. This is the "red" stage of the "red-green-refactor" TDD process.

---

## Writing the Code

To pass the test, implement the `pointsForWord` function in `src/utils.js`:

```js
export function pointsForWord(word) {
  let points = 0;
  for (const char of word) {
    points += /[aeiou]/.test(char) ? 1 : 2;
  }
  return points;
}
```

Run the tests again to ensure they pass:
```bash
npm test
```

---

## Refactoring the Code

Once the basic functionality is working, refactor the implementation for readability and efficiency. Here's a more concise version:

```js
export function pointsForWord(word) {
  return [...word].reduce((points, char) => {
    return points + (/[aeiou]/i.test(char) ? 1 : 2);
  }, 0);
}
```

Run the tests again to verify they still pass.

---

## Handling Edge Cases

It's important to account for unexpected or edge cases. Consider the following scenarios:

1. **Mixed case**: `"TeSt"` should score `7`.
2. **Empty string**: `""` should score `0`.
3. **Non-alphanumeric characters**: `"hello!"` should score `8`.

Write additional tests for these cases in `src/__tests__/utils.test.js`:

```js
it("handles uppercase and lowercase input", () => {
  const word = "TeSt";

  const points = pointsForWord(word);

  expect(points).toBe(7);
});

it("returns 0 for an empty string", () => {
  const word = "";

  const points = pointsForWord(word);

  expect(points).toBe(0);
});

it("ignores non-alphanumeric characters", () => {
  const word = "hello!";

  const points = pointsForWord(word);

  expect(points).toBe(8);
});
```

Update the implementation if needed to handle these scenarios.

---

## Iterative Development

Continue testing and refining your function by considering additional scenarios and constraints. For example:

- Strings with numbers or symbols.
- Invalid inputs (e.g., `null` or `undefined`).

---

## Conclusion

This lesson demonstrated the TDD process of writing tests, implementing code, and refining the solution. Unit testing ensures your code works as intended and is resilient to future changes.

Use this approach to write more reliable code and gain confidence in your implementations!

---

## Resources

- [Jest Documentation](https://jestjs.io/)
- [Using Matchers in Jest](https://jestjs.io/docs/using-matchers)
- [Expect API in Jest](https://jestjs.io/docs/expect)

import { describe, it, expect } from "vitest";
import { formatName, toKebabCase, deepClone, debounce } from "./index";

describe("formatName", () => {
  it("should format names to title case", () => {
    expect(formatName("john doe")).toBe("John Doe");
    expect(formatName("JANE SMITH")).toBe("Jane Smith");
  });
});

describe("toKebabCase", () => {
  it("should convert strings to kebab-case", () => {
    expect(toKebabCase("HelloWorld")).toBe("hello-world");
    expect(toKebabCase("hello world")).toBe("hello-world");
    expect(toKebabCase("hello_world")).toBe("hello-world");
  });
});

describe("deepClone", () => {
  it("should deep clone objects", () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
  });
});

describe("debounce", () => {
  it("should debounce function calls", async () => {
    let counter = 0;
    const increment = () => counter++;
    const debouncedIncrement = debounce(increment, 100);

    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();

    expect(counter).toBe(0);

    await new Promise((resolve) => setTimeout(resolve, 150));
    expect(counter).toBe(1);
  });
});

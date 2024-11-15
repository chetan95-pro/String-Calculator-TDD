const StringCalculator = require("./StringCalculator");
const calculator = new StringCalculator();

describe("StringCalculator", () => {
  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number itself when only one number is provided", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("should return the sum of two numbers separated by a comma", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("should return the sum of multiple numbers", () => {
    expect(calculator.add("1,2,3")).toBe(6);
  });

  test("should handle new lines as delimiters", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("should handle custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
    expect(calculator.add("//|\n1|2|3")).toBe(6);
  });

  test("should throw an exception for negative numbers", () => {
    expect(() => calculator.add("1,-2,3")).toThrow(
      "negative numbers not allowed: -2"
    );
  });

  test("should show all negative numbers in exception message", () => {
    expect(() => calculator.add("-1,-2,3")).toThrow(
      "negative numbers not allowed: -1, -2"
    );
  });
});

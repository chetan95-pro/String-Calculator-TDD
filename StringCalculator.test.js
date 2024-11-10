const StringCalculator = require("./StringCalculator"); // Import using CommonJS
const calculator = new StringCalculator();

describe("StringCalculator", () => {
  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number itself when only one number is provided", () => {
    expect(calculator.add("1")).toBe(1);
  });
});

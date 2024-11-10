const StringCalculator = require("./StringCalculator"); // Import using CommonJS
const calculator = new StringCalculator();

describe("StringCalculator", () => {
  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });
});

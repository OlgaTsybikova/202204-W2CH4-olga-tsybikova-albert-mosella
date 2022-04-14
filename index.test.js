class SkylabArray {
  constructor(
    firstNumber,
    secondNumber,
    thirdNumber,
    forthNumber,
    fifthNumber
  ) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.thirdNumber = thirdNumber;
    this.forthNumber = forthNumber;
    this.fifthNumber = fifthNumber;
  }
}

const getLength = (text) => {
  let textRange = 0;
  for (let i = 0; i !== undefined; i++) {
    if (text[i] !== undefined) {
      textRange++;
    }
    if (text[i] === undefined) {
      return textRange;
    }
  }
  return textRange;
};

describe("Given the function getLength", () => {
  describe("When it receives 'Albert'", () => {
    test("Then it should return 5", () => {
      const text = { 0: "Maria", 1: "Albert", 2: "Alex", 3: "Leia", 4: "Max" };
      const expectedResult = 3;

      const result = getLength(text);

      expect(result).toBe(expectedResult);
    });
  });
});

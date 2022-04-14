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
    test("Then it should return 6", () => {
      const text = "Albert";
      const expectedResult = 6;

      const result = getLength(text);

      expect(result).toBe(expectedResult);
    });
  });
});

class SkylabArray {
  0;
  1;
  2;
  3;

  constructor(length, height, width) {
    this[0] = length;
    this[1] = height;
    this[2] = width;
  }
}
// function sum (...numbers) {
// numbers[5, 6, 7]
// }

const getLength = (text) => {
  let longitud = 0;
  for (let i = 0; i !== "undefined"; i++) {
    if (text[i] !== "undefined") {
      longitud++;
    }
    if (text[i] === "undefined") {
      return longitud;
    }
  }
  return longitud;
};

const numbers = new SkylabArray(0, 5, 18);
numbers.length = getLength(numbers);

describe("Given the function getLength", () => {
  describe("When it receives numbers 0, 5, 18", () => {
    test("Then it should return 5", () => {
      const text = { 0: 0, 1: 5, 2: 18 };
      const expectedResult = 4;

      const result = getLength(text);

      expect(result).toBe(expectedResult);
    });
  });
});

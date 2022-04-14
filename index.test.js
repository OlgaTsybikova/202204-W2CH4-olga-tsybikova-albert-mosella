class SkylabArray {
  0;
  1;
  2;
  3;

  constructor(long, height, width) {
    this[0] = long;
    this[0] = height;
    this[0] = width;
  }
}

const getLength = (text) => {
  let longitud = 0;
  for (let i = 0; i !== undefined; i++) {
    if (text[i] !== undefined) {
      longitud++;
    }
    if (text[i] === undefined) {
      return longitud;
    }
  }
  return longitud;
};

const names = new SkylabArray(0, 5, 18);
names.long = getLength(names);

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

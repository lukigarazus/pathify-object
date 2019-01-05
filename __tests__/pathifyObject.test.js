import pathifyObj from "../src";

describe("pathifyObj(obj,path)", () => {
  [
    [
      "Nested objects work",
      { a: { b: {} }, c: 2 },
      {
        a: { b: { path: ["a", "b"] }, path: ["a"] },
        path: [],
        c: 2
      }
    ],
    [
      "Nested arrays work",
      { a: { b: [1, 2, 3, [1, 2, {}]] } },
      {
        a: { b: [1, 2, 3, [1, 2, { path: ["a", "b", 3, 2] }]], path: ["a"] },
        path: []
      }
    ]
  ].forEach(test => {
    it(test[0], () => {
      expect(pathifyObj(test[1])).toEqual(test[2]);
    });
  });
});

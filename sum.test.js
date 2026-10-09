import sum from "./sum.js";

describe("test for sum fnx", () => {
test("adds 2 + 2 equal to 4", () => {
    expect(sum(2,2)).toBe(4);
});

test("adds 2 + -9 equal to -7", () => {
    expect(sum(2,-9)).toBe(-7);
});
})
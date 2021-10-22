import analyze from "./array-analysis";

const obj = analyze([1, 2, 3, 4]);
it("should calculate the average of an array of numbers", () => {
    expect(obj.average).toBeCloseTo(2.5);
})

it("should contain the length of the array", () => {
    expect(obj.length).toBe(4);
})
it("should contain the min value of the array", () => {
    expect(obj.min).toBe(1);
})

it("should contain the max value of the array", () => {
    expect(obj.max).toBe(4);
})

it("should work with an empty array", () => {
    const emptyObj = analyze([]);
    expect(emptyObj).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 0
    })
})

it("should work with one element", () => {
    const oneObj = analyze([6]);
    expect(oneObj).toEqual({
        average: 6,
        min: 6,
        max: 6,
        length: 1
    });
})
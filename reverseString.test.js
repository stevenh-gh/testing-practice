import reverseString from "./reverseString";

it("should return an empty string if given an empty string", () => {
    expect(reverseString("")).toBe("");
})

it("should return the string if length is 1", () => {
    expect(reverseString("a")).toBe("a");
})

it("should return a string in reverse order", () => {
    expect(reverseString("ab")).toBe("ba");
})

it("should return a string in reverse order", () => {
    expect(reverseString("Hello")).toBe("olleH");
})

it("should return a string in reverse order", () => {
    expect(reverseString("This is a bottle cap")).toBe("pac elttob a si sihT");
})
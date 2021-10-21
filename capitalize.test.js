import capitalize from "./capitalize";

it("should return a capital letter", () => {
    expect(capitalize("a")).toBe("A");
})

it("should return an empty string if it receives an empty string", () => {
    expect(capitalize("")).toBe("");
})

it("should return a string with the first letter capitalized", () => {
    expect(capitalize("hello, world")).toBe("Hello, world");
})


it("should return a string with the first letter capitalized", () => {
    expect(capitalize("this is a bottle cap.")).toBe("This is a bottle cap.");
})
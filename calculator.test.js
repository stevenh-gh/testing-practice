import Calculator from "./calculator";

const calc = new Calculator();
it("should exist", () => {
    expect(calc).toBeDefined();
})

it("add should return the sum of two numbers", () => {
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.add(-2, 3)).toBe(1);
})

it("add should return input if only 1 input is given", () => {
    expect(calc.add(5)).toBe(5);
})

it("sub should return the difference of two numbers", () => {
    expect(calc.sub(5, 2)).toBe(3);
    expect(calc.sub(-5, -2)).toBe(-3);
})

it("sub should return input if only 1 input is given", () => {
    expect(calc.sub(5)).toBe(5);
})

it("multiply should return the product of two numbers", () => {
    expect(calc.mult(7, 7)).toBe(49);
})

it("multiply should return float when inputs are floats", () => {
    expect(calc.mult(1.6, 5.4)).toBeCloseTo(8.64);
    expect(calc.mult(50.44, 10)).toBeCloseTo(504.4);
    expect(calc.mult(3.00000000043, 5.33333333)).toBeCloseTo(16.0);
})

it("divide should return the quotient of two numbers", () => {
    expect(calc.div(30, 3)).toBe(10);
})

it("divide should throw error when dividing by zero", () => {
    expect(() => calc.div(6, 0)).toThrow(Error);
})

it("should return floats when inputs does not divide evently", () => {
    expect(calc.div(10, 7)).toBeCloseTo(1.43);
    expect(calc.div(4, 3)).toBeCloseTo(1.33);
    expect(calc.div(99, 43)).toBeCloseTo(2.30);
})
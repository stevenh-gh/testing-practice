import caesarCipher from "./caesar-cipher";

it("should return a character with specified shift", () => {
    expect(caesarCipher("a", 1)).toBe("b");
})

it("should loop back from z to a", () => {
    expect(caesarCipher("z", 1)).toBe("a");
    expect(caesarCipher("z", 2)).toBe("b");
    expect(caesarCipher("y", 3)).toBe("b");
    expect(caesarCipher("z", 5)).toBe("e");
})

it("should work with and keep capitalization", () => {
    expect(caesarCipher("Z", 1)).toBe("A");
    expect(caesarCipher("Z", 2)).toBe("B");
    expect(caesarCipher("Y", 3)).toBe("B");
    expect(caesarCipher("Z", 5)).toBe("E");
    expect(caesarCipher("T", 5)).toBe("Y");
})

it("should work with full sentences", () => {
    expect(caesarCipher("The quick brown fox jumps over the lazy dog", 5)).toBe("Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl");
})
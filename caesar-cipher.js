// generate alphabet
let alphabet = [];
for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
}

function checkUppercase(char) {
    return char === char.toUpperCase();
}

function shiftChar(char, shift) {
    if (char === " ") { return char }
    let c = alphabet[(alphabet.indexOf(char.toLowerCase()) + shift) % 26];
    return checkUppercase(char) ? c.toUpperCase() : c;
}

export default function caesarCipher(str, shift) {
    let cipher = "";
    for (let i = 0; i < str.length; ++i) {
        cipher += shiftChar(str[i], shift);
    }
    return cipher;
}
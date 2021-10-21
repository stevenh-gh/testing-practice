export default function reverseString(string) {
    if (string.length > 1) {
        let str = "";
        for (let i = 0; i < string.length; ++i) {
            str = string[i] + str;
        }
        return str;
    }
    return string;
}
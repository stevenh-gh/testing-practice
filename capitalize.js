export default function capitalize(string) {
    if (string) {
        return string[0].toUpperCase() + string.substr(1, string.length);
    }
    return string;
}
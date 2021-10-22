export default class Calculator {
    add(num1, num2 = 0) {
        return num1 + num2;
    }
    sub(num1, num2 = 0) {
        return num1 - num2;
    }
    mult(num1, num2) {
        return parseFloat((num1 * num2).toFixed(2));
    }
    div(num1, num2) {
        if (num2 === 0) {
            throw new Error("unable to divide by zero");
        } else {
            return parseFloat((num1 / num2).toFixed(2));
        }
    }
}
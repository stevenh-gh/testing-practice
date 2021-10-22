function sum(arr) {
    if (arr.length > 0) {
        let sum = arr.reduce((prev, curr) => {
            return prev + curr;
        });
        return sum / (arr.length);
    }
    return 0;
}

export default function analyze(arr) {
    return {
        average: sum(arr),
        min: arr.length > 0 ? Math.min(...arr) : 0,
        max: arr.length > 0 ? Math.max(...arr) : 0,
        length: arr.length
    }
}
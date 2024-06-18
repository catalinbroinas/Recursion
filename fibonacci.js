function fibs(n) {
    if (!Number.isInteger(n) || n < 0) {
        return false;
    }

    const arr = [];

    if (n === 0) {
        return arr;
    }
    else if (n === 1) {
        arr.push(0);
    } else if (n === 2) {
        arr.push(0, 1);
    } else {
        let num1 = 0;
        let num2 = 1;
        arr.push(num1, num2);
        for (let i = 2; i < n; i++) {
            let num3 = num1 + num2;
            arr.push(num3);
            num1 = num2;
            num2 = num3;
        }
    }

    return arr;
}

function fibsRec(n) {
    if (!Number.isInteger(n) || n < 0) {
        return false;
    }

    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const arr = fibs(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}

console.log("Iterative:");
console.log(fibs(0)); // []
console.log(fibs(1)); // [0]
console.log(fibs(5)); // [0, 1, 1, 2, 3]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log("Recursive");
console.log(fibsRec(0)); // []
console.log(fibsRec(1)); // [0]
console.log(fibsRec(5)); // [0, 1, 1, 2, 3]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
function merge(left, right) {
    // Initialize an empty array to store the merged result
    const result = [];

    // Initialize indices for left and right sub-arrays
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge elements from left and right arrays until one of them is exhausted
    while (leftIndex < left.length && rightIndex < right.length) {
        // Compare the current elements of both arrays
        if (left[leftIndex] < right[rightIndex]) {
            // If the element from the left array is smaller, add it to the result
            result.push(left[leftIndex]);

            // Move to the next element in the left array
            leftIndex++;
        } else {
            // If the element from the right array is smaller or equal, add it to the result
            result.push(right[rightIndex]);

            // Move to the next element in the right array
            rightIndex++;
        }
    }

    // Concatenate any remaining elements from the left and right arrays
    // This is necessary because one of the arrays might still have elements left
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Calculate the middle index of the array
    const middle = Math.floor(arr.length / 2);

    // Split the array into left and right sub-arrays
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort the left and right sub-arrays and merge them
    return merge(mergeSort(left), mergeSort(right));
}

const myArr = [34, 7, 23, 32, 5, 62];
const myArr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const myArr2 = [105, 79, 100, 110];

console.log(mergeSort(myArr)); // [5, 7, 23, 32, 34, 62]
console.log(mergeSort(myArr1)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort(myArr2)); // [79, 100, 105, 110]
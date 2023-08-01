const array = [23, 3, 42, 1, 78, 9, 35, 73, 13, 5, 23, 24, 98, 56, 43];

let numberOfIterations = 0;

const quickSort = array => {
    if (array.length <= 1) {
        return array;
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let more = [];

    for (let i = 0; i < array.length; i++) {
        numberOfIterations++;

        if (i === pivotIndex) {
            continue;
        }

        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            more.push(array[i]);
        }
    }

    return [...quickSort(less), pivot, ...quickSort(more)];
};

console.log(quickSort(array));
console.log('Number of iterations = ' + numberOfIterations);
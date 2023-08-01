const array = [23, 3, 42, 1, 78, 9, 35, 73, 13, 5, 23, 24, 98, 56, 43];

let numberOfIterations = 0;

const bubbleSort = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            numberOfIterations++;

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    return array;
};

console.log(bubbleSort(array));
console.log('Number of iterations = ' + numberOfIterations);
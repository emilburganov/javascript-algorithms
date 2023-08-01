const array = [23, 3, 42, 1, 78, 9, 35, 73, 13, 5, 23, 24, 98, 56, 43];

let numberOfIterations = 0;

const selectionSort = array => {
    for (let i = 0; i < array.length; i++) {
        numberOfIterations++

        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) minIndex = j;
        }

        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }

    return array;
};

console.log(selectionSort(array));
console.log('Number of iterations = ' + numberOfIterations);
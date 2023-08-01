const array = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let numberOfIterations = 0;

const binarySearch = (array, item, startIndex = 0, endIndex = array.length) => {
    numberOfIterations++;

    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (item === array[middleIndex]) {
        return middleIndex;
    }

    if (item < array[middleIndex]) {
        return binarySearch(array, item, 0, middleIndex--);
    } else {
        return binarySearch(array, item, middleIndex++, endIndex);
    }
};


console.log(binarySearch(array, 5));
console.log('Number of iterations = ' + numberOfIterations);
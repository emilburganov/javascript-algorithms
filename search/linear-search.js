const array = [3, 35, 30, 10, 27, 26, 1, 10, 38, 34];

let numberOfIterations = 0;

const linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        numberOfIterations++;

        if (array[i] === item) {
            return item;
        }
    }

    return null;
};

console.log(linearSearch(array, 1));
console.log('Number of iterations = ' + numberOfIterations);
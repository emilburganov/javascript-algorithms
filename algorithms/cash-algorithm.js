let numberOfIterations = 0;

const cashFunction = func => {
    const cash = {};

    return function (number) {
        if (cash[number]) {
            console.log('Fetched from cache');

            return cash[number];
        }

        let result = func(number);
        cash[number] = result;

        console.log('Retrieved from function');

        return result;
    };
};

const factorial = number => {
    if (number <= 1) {
        return 1;
    }

    return number * factorial(number - 1);
};

const cashFactorial = cashFunction(factorial);

cashFactorial(4);
cashFactorial(3);
cashFactorial(4);
cashFactorial(5);
cashFactorial(3);
cashFactorial(2);

console.log(factorial(6));
console.log('Number of iterations = ' + numberOfIterations);
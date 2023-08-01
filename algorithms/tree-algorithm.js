const tree = [
    {
        v: 2,
        c: [
            {
                v: 13,
                c: [
                    {
                        v: 11,
                    },
                ],
            },
            {
                v: 8,
                c: [
                    {
                        v: 3,
                        c: [
                            {
                                v: 1,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        v: 5,
        c: [
            {
                v: 12,
            },
            {
                v: 5,
            },
        ],
    },
];

let numberOfIterations = 0;

const recursiveSum = tree => {
    let sum = 0;

    tree.forEach(node => {
        numberOfIterations++;

        sum += node.v;

        if (node.c) {
            sum += recursiveSum(node.c);
        }
    });

    return sum;
};

const iterationSum = tree => {
    if (!tree.length) {
        return 0;
    }

    let sum = 0;
    let stack = [];

    tree.forEach(node => {
        numberOfIterations++;

        stack.push(node);
    });

    while (stack.length) {
        numberOfIterations++;

        const node = stack.pop();

        sum += node.v;

        if (node.c) {
            node.c.forEach(child => stack.push(child));
        }
    }

    return sum;
};

console.log(recursiveSum(tree));
console.log('Number of iterations = ' + numberOfIterations);

numberOfIterations = 0;

console.log(iterationSum(tree));
console.log('Number of iterations = ' + numberOfIterations);
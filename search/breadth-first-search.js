const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

let numberOfIterations = 0;

const breadthFirstSearch = (graph, startIndex, endIndex) => {
    let queue = [];
    queue.push(startIndex);

    while (queue.length > 0) {
        const current = queue.shift();

        if (!graph[current]) {
            graph[current] = [];
        }

        if (graph[current].includes(endIndex)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]];
        }
    }

    return false;
};

console.log(breadthFirstSearch(graph, 'a', 'f'));
console.log('Number of iterations = ' + numberOfIterations);
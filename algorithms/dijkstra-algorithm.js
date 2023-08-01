const graph = {};
graph.a = {'b': 2, 'c': 1};
graph.b = {'f': 7};
graph.c = {'d': 5, 'e': 2};
graph.d = {'f': 2};
graph.e = {'f': 1};
graph.f = {'g': 1};
graph.g = {};

let numberOfIterations = 0;

const findLowestCostPoint = (costs, processed) => {
    let lowestCost = Infinity;
    let lowestPoint;

    Object.keys(costs).forEach(point => {
        let cost = costs[point];

        if (cost < lowestCost && !processed.includes(point)) {
            lowestCost = cost;
            lowestPoint = point;
        }
    });

    return lowestPoint;
};

const shortPath = (graph, startPoint, endPoint) => {
    const costs = {};
    let processed = [];
    let neighbors = {};

    Object.keys(graph).forEach(point => {
        if (point !== startPoint) {
            let value = graph[startPoint][point];
            costs[point] = value || Infinity;
        }
    });

    let point = findLowestCostPoint(costs, processed);

    while (point) {
        console.log(point);
        const cost = costs[point];

        neighbors = graph[point];

        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor];

            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
            }
        });

        processed.push(point);

        point = findLowestCostPoint(costs, processed);
    }

    return costs[endPoint];
};

console.log(shortPath(graph, 'a', 'g'));
console.log('Number of iterations = ' + numberOfIterations);
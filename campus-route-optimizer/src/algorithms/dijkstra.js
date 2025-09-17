function findShortestPath(startNode, endNode, graph) {
    let distances = {};
    let previousNodes = {};
    let unvisitedNodes = new Set(Object.keys(graph));

    for (let node of unvisitedNodes) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    while (unvisitedNodes.size > 0) {
        let currentNode = Array.from(unvisitedNodes).reduce((minNode, node) => {
            return distances[node] < distances[minNode] ? node : minNode;
        });

        if (currentNode === endNode) {
            let path = [];
            while (previousNodes[currentNode]) {
                path.push(currentNode);
                currentNode = previousNodes[currentNode];
            }
            path.push(startNode);
            return {
                path: path.reverse(),
                distance: distances[endNode]
            };
        }

        unvisitedNodes.delete(currentNode);

        for (let neighbor in graph[currentNode]) {
            let newDistance = distances[currentNode] + graph[currentNode][neighbor];
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                previousNodes[neighbor] = currentNode;
            }
        }
    }

    return {
        path: [],
        distance: Infinity
    };
}

export { findShortestPath };
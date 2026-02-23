// undirectedPath using DFS which uses Recursion

// const undirectedPath = (edges, nodeA, nodeB) => {
//     const graph = buildGraph(edges);
//     return hasPath(graph, nodeA, nodeB, new Set());
// }

// const buildGraph = (edges) => {
//     const graph = {};

//     for (let edge of edges) {
//         const [a, b] = edge;
//         if (!(a in graph)) graph[a] = [];
//         if (!(b in graph)) graph[b] = [];

//         graph[a].push(b);
//         graph[b].push(a);
//     }
//     return graph;
// }

// const hasPath = (graph, src, dst, visited) =>{
//     if (src = dst) return true;
//     if (visited.has(src)) return false;
//     visited.add(src);

//     for(let neighbour of graph[src]){
//         if(hasPath(graph, neighbour, dst, visited) === true){
//             return true;
//         }
//     }
//     return false;
// }


// undirectedPath using BFS

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
}

const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const hasPath = (graph, src, dst) => {
    const queue = [src];
    const visited = new Set([src]);

    while (queue.length > 0) {
        const node = queue.shift();
        if (node === dst) {
            return true;
        }

        for(let neighbour of graph[node]){
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                queue.push(neighbour);
            }
        }
    }
    return false
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

console.log(undirectedPath(edges, 'j', 'm')); // -> true

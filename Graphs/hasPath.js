// BFS

const hasPath = (graph, src, dst) => {
    const queue = [ src ];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dst) {
            return true;
        }

        for(let neighbour of graph[current]){
           queue.push(neighbour)
        }
    }
    return false
}


// DFS recursively

// const hasPath = (graph, src, dst) => {
//     if (src === dst) {
//         return true
//     }

//     for(let neighbour of graph[src]){
//         if(hasPath(graph, neighbour, dst)){
//             return true
//         }
//     }
//     return false;
// }

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};

console.log(hasPath(graph, 'a', 'f'));  // true
console.log(hasPath(graph, 'a', 'e'));  // true
console.log(hasPath(graph, 'c', 'f'));  // false
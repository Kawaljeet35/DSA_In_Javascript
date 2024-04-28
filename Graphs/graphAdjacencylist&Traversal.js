//Class to create new graph objects
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    //Method to add a new vertex (node)
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        } 
    }

    //Method to add a new edge
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    //Method to remove an edge
    removeEdge(v1, v2) {
        const index1 = this.adjacencyList[v1].indexOf(v2);
        if (index1 !== -1) {
            this.adjacencyList[v1].splice(index1, 1);
        }
        const index2 = this.adjacencyList[v2].indexOf(v1);
        if (index2 !== -1) {
            this.adjacencyList[v2].splice(index2, 1);
        }
    }

    //Method to remove a vertex
    removeVertex(vertex){
        const adjacentVertices = [...this.adjacencyList[vertex]]; 
        for (const adjacentVertex of adjacentVertices) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    
    //Method to traverse graph recursively by DFS
    dfs_recursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        dfs(start);
        function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            for(let vert of adjacencyList[vertex]){
                if(!visited[vert]){
                    dfs(vert);
                }
            }
        }
        return result;
    }

    //Method to traverse graph iteratively by DFS
    dfs_iterative(start) {
        const result = [];
        const visited = {};
        const stack = [start]; 
        const adjacencyList = this.adjacencyList;
    
        while (stack.length) {
            const vertex = stack.pop();
    
            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
    
                for (let i = adjacencyList[vertex].length - 1; i >= 0; i--) {
                    const adjacentVertex = adjacencyList[vertex][i];
                    if (!visited[adjacentVertex]) {
                        stack.push(adjacentVertex);
                    }
                }
            }
        }
        return result;
    }
    
    //Method to traverse graph by BFS
    bfs(start){
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        const adjacencyList = this.adjacencyList
        let currentVertex;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            for(let neighbour of adjacencyList[currentVertex]){
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            }
        }
        return result;
    }

}

var g = new Graph;
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");
console.log(g);
console.log(g.dfs_recursive("A"));
console.log(g.dfs_iterative("A"));
console.log(g.bfs("A"));




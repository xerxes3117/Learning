class Graph {
    constructor() {
        //Representing adjacencyList as a HashMap of Arrays
        this.adjacencyList = {}
    }

    printGraph() {
        for(let key in this.adjacencyList){
            let adjacentNodes = ""
            for(let i = 0; i < this.adjacencyList[key].length; i++){
                adjacentNodes += ", " + this.adjacencyList[key][i];
            }
            adjacentNodes = adjacentNodes.slice(1)
            console.log('|' + key + '| => [' + adjacentNodes.trim() + ']') 
        }
        return true
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        if(!this.adjacencyList[v1].indexOf(v2) != -1) this.adjacencyList[v1].push(v2)
    }

    removeEdge(v1, v2) {
        if(this.adjacencyList[v1].indexOf(v2) != -1){
            this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1)
        }
    }

    removeVertex(vertex) {
        //Delete any edges to vertex
        for(let key in this.adjacencyList){
            this.removeEdge(key, vertex)
        }
        //Delete the vertex
        delete this.adjacencyList[vertex];
    }

    depthFirstSearchRecursive(startVertex){
        //Visited array to keep track of visited vertices
        let visited = []
        visited.push(startVertex)
        this.dfsRecursiveHelper(startVertex, visited)
        console.log("DFS(recursive) traversal from vertex " + startVertex + " : ", visited)
    }

    dfsRecursiveHelper(vertex, visited) {
        //Fetch the adjacent nodes array
        let adjacentNodes = this.adjacencyList[vertex];

        //For each adjacent node that is not already visited call dfsHelper recursively
        for(let i = 0; i < adjacentNodes.length; i++){
            if(visited.indexOf(adjacentNodes[i]) == -1){
                visited.push(adjacentNodes[i])
                this.dfsRecursiveHelper(adjacentNodes[i], visited);
            }
        }
    }

    depthFirstSearchIterative(startVertex){
        let dfsStack = [startVertex]
        let visited = []

        //Update visited and dfsStack array until dfsStack is empty
        while(dfsStack.length > 0){
            //Pop value from top of stack
            let head = dfsStack.pop()
            if(visited.indexOf(head) === -1) visited.push(head)

            let adjacentNodes = this.adjacencyList[head]

            //Push adjacent nodes to top of stack
            for(let i = adjacentNodes.length -1; i >= 0; i--) {
                if(dfsStack.indexOf(adjacentNodes[i]) == -1){
                    dfsStack.push(adjacentNodes[i])
                }
            }
        }

        console.log("DFS(Iterative) traversal from vertex " + startVertex + " : ", visited)
    }

    breadthFirstSearch(startVertex){}
}

let g1 = new Graph();

//Testing addVertex
console.log('\nTesting addVertex ..........................................................')
g1.addVertex('A')
g1.addVertex('B')
console.log(g1.printGraph())

//Testing addEdge
console.log('\nTesting addEdge ..........................................................')
g1.addEdge('A', 'B')
console.log(g1.printGraph())

//Creating a sample graph 
g1.addVertex('B')
g1.addVertex('C')
g1.addVertex('D')
g1.addVertex('E')
g1.addEdge('A', 'D')
g1.addEdge('B', 'C')
g1.addEdge('B', 'E')
g1.addEdge('D', 'E')
g1.addEdge('D', 'B')
g1.addVertex('F')
g1.addEdge('C', 'F')
g1.addEdge('F', 'E')
console.log(g1.printGraph())

//Testing removeEdge
// console.log('\nTesting removeEdge ..........................................................')
// g1.removeEdge('B', 'C')
// g1.removeEdge('A', 'D')
// console.log(g1.printGraph())

//Testing removeVertex
// console.log('\nTesting removeVertex .......................................................')
// g1.removeVertex('B')
// console.log(g1.printGraph())

//Testing depthFirstSearchRecursive
console.log('\nTesting depthFirstSearchRecursive ...............................................')
g1.depthFirstSearchRecursive('A')
g1.depthFirstSearchRecursive('B')

//Testing depthFirstSearchIterative
console.log('\nTesting depthFirstSearchIterative ...............................................')
g1.depthFirstSearchIterative('A')
g1.depthFirstSearchIterative('B')


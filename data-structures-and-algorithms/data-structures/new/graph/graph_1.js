/**
 * @todo add jsDoc comments
 */

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
        let visited = {}
        let resultArr = [startVertex]
        visited[startVertex] = true;

        this.dfsRecursiveHelper(startVertex, visited, resultArr)

        let result = '';
        resultArr.forEach(el => result += ' -> ' + el)
        console.log("DFS(recursive) traversal from vertex " + startVertex + " : ", result.slice(4))
    }

    dfsRecursiveHelper(vertex, visited, resultArr) {
        //Fetch the adjacent nodes array
        let adjacentNodes = this.adjacencyList[vertex];

        //For each adjacent node that is not already visited call dfsHelper recursively
        for(let i = 0; i < adjacentNodes.length; i++){
            let neighbor = adjacentNodes[i];
            if(!visited[neighbor]){
                visited[neighbor] = true;
                resultArr.push(neighbor);
                
                this.dfsRecursiveHelper(neighbor, visited, resultArr);
            }
        }
    }

    depthFirstSearchIterative(startVertex){
        let stack = [startVertex]
        let visited = {}
        let result = ''

        //Update visited and stack array until stack is empty
        while(stack.length > 0){
            //Pop value from top of stack
            let head = stack.pop()
            result += ' -> ' + head

            let adjacentNodes = this.adjacencyList[head]

            //Push adjacent nodes to top of stack
            for(let i = adjacentNodes.length -1; i >= 0; i--) {
                let neighbor = adjacentNodes[i]
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            }
        }

        console.log("DFS(Iterative) traversal from vertex " + startVertex + " : ", result.slice(4))
    }

    breadthFirstSearch(startVertex){
        let queue = [startVertex]
        let visited = {}
        let result = ''

        //Update visited and queue array until queue is empty
        while(queue.length > 0){
            //Pop value from top of queue
            let head = queue.shift()
            result += ' -> ' + head

            let adjacentNodes = this.adjacencyList[head]

            //Push adjacent nodes to top of queue
            for(let i = 0; i < adjacentNodes.length; i++) {
                let neighbor = adjacentNodes[i]
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            }
        }

        console.log("DFS(Iterative) traversal from vertex " + startVertex + " : ", result.slice(4))
    }

    detectCycle(){
        //For each vertex recursively traverse the graph 
        //In recursion base case would be if starting vertex === current vertex
    }
}

let g1 = new Graph();

//Testing addVertex
// console.log('\nTesting addVertex ..........................................................')
// g1.addVertex('A')
// g1.addVertex('B')
// console.log(g1.printGraph())

//Testing addEdge
// console.log('\nTesting addEdge ..........................................................')
// g1.addEdge('A', 'B')
// console.log(g1.printGraph())

//Creating a sample graphs

//Sample 1
// g1.addVertex('A')
// g1.addVertex('B')
// g1.addVertex('C')
// g1.addVertex('D')
// g1.addVertex('E')
// g1.addEdge('A', 'B')
// g1.addEdge('A', 'D')
// g1.addEdge('B', 'C')
// g1.addEdge('B', 'E')
// g1.addEdge('D', 'E')
// g1.addEdge('D', 'B')
// g1.addVertex('F')
// g1.addEdge('C', 'F')
// g1.addEdge('F', 'E')
// console.log(g1.printGraph())

//Sample 2
// g1.addVertex('A')
// g1.addVertex('B')
// g1.addVertex('C')
// g1.addVertex('D')
// g1.addVertex('E')
// g1.addVertex('F')
// g1.addVertex('G')
// g1.addVertex('H')
// g1.addVertex('I')
// g1.addEdge('A', 'B')
// g1.addEdge('A', 'C')
// g1.addEdge('B', 'D')
// g1.addEdge('B', 'E')
// g1.addEdge('C', 'G')
// g1.addEdge('C', 'H')
// g1.addEdge('E', 'F')
// g1.addEdge('G', 'I')
// console.log(g1.printGraph())

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
// console.log('\nTesting depthFirstSearchRecursive ...............................................')
// g1.depthFirstSearchRecursive('A')
// g1.depthFirstSearchRecursive('B')

//Testing depthFirstSearchIterative
// console.log('\nTesting depthFirstSearchIterative ...............................................')
// g1.depthFirstSearchIterative('A')
// g1.depthFirstSearchIterative('B')

//Testing breadthFirstSearch
// console.log('\nTesting breadthFirstSearch ...............................................')
// g1.breadthFirstSearch('A')
// g1.breadthFirstSearch('B')

//Testing detectCycle
console.log('\nTesting detectCycle .......................................................')



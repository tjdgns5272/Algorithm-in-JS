class GraphWithAdjacencyList {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        this.vertices[vertex] =  this.vertices[vertex] || [];
    }

    contains(vertex) {
        return !!this.vertices[vertex]
    }

    addEdge(fromVertex, toVertex) {
        if (!this.contains(fromVertex) || !this.contains(toVertex)) {
            return;
        }
        if (!this.hasEdge(fromVertex, toVertex)) {
            this.vertices[fromVertex].push(toVertex)
        }

        if (!this.hasEdge(toVertex, fromVertex)) {
            this.vertices[toVertex].push(fromVertex)
        }
    }

    hasEdge(fromVertex, toVertex) {
        if (!this.contains(fromVertex)) {
            return false;
        }
        return !!this.vertices[fromVertex].includes(toVertex);
    }

    removeEdge(fromVertex, toVertex) {

        if (!this.contains(fromVertex) || !this.contains(toVertex)) {
            return;
        }
        if (this.hasEdge(fromVertex, toVertex)) {
            const index = this.vertices[fromVertex].indexOf(toVertex);
            this.vertices[fromVertex].splice(index, 1);
        }
        if (this.hasEdge(toVertex, fromVertex)) {
            const index = this.vertices[toVertex].indexOf(fromVertex);
            this.vertices[toVertex].splice(index, 1);
        }
    }

    removeVertex(vertex) {
        if (this.contains(vertex)) {
            for (let i=0; i<this.vertices[vertex].length ; i++) {
                const tempToVertex = this.vertices[vertex][i]
                this.removeEdge(vertex, tempToVertex)
                i--
            }
            delete this.vertices[vertex]
        }
    }
}
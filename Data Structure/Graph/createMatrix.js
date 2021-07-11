function createMatrix(edges) {



    const arr = edges.map(edge => edge.slice(0,2)).flat()
    const length = Math.max(...arr)

    /*for (let i=0; i<length; i++) { // vertex matrix 미리 생성
        matrix = [...matrix, new Array(length).fill(0)]
    }*/
    let matrix = new Array(length+1).fill(0).map((row) => new Array(length+1).fill(0))
    console.log(matrix);
    for (let ele of edges) {
        const fromVertex = ele[0]
        const toVertex = ele[1]
        const direction = ele[2]

        if (direction === 'undirected') {
            matrix[toVertex][fromVertex] = 1;
        }
        matrix[fromVertex][toVertex] = 1;

    }
    return matrix
}
createMatrix([
    [0, 3, "directed"],
    [0, 2, "directed"],
    [1, 3, "directed"],
    [2, 1, "directed"],
])
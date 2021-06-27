function createMatrix(edges) {
    let length = 0;

    for (let ele of edges) { // 최대 길이값 구하기
        const curMax = ele.slice(0, 2).reduce((acc, cur) => acc > cur ? acc : cur) + 1
        length < curMax ? length = curMax : null;
    }

    /*for (let i=0; i<length; i++) { // vertex matrix 미리 생성
        matrix = [...matrix, new Array(length).fill(0)]
    }*/
    let matrix = new Array(length).fill(0).map((row) => new Array(length).fill(0))

    for (let ele of edges) {
        const fromVertex = ele[0]
        const toVertex = ele[1]
        const direction = ele[2]

        if (direction === 'undirected') {
            matrix[fromVertex][toVertex] = 1;
            matrix[toVertex][fromVertex] = 1;
        }
        if (direction === 'directed') {
            matrix[fromVertex][toVertex] = 1;
        }
    }
    console.log(matrix)
    return matrix
}

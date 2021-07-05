function connectedVertices2(edges) {
    let queue = []
    let max = Math.max(...edges.flat());
    let matrix = new Array(max + 1).fill(0).map(el => new Array(max + 1).fill(0));

    edges.forEach((el) => {
        matrix[el[0]][el[1]] = 1;
    })
    const recursive = () => {
        for (let i = 0; i < max.length; i++) {
            for (let j = i; j < max.length; j++) {
                if (matrix[i][j] === 1) {
                    queue.push(matrix[i][j])
                }
            }
        }
    }
}

function connectedVertices(edges) {

    let count = 0; //연결된 정점의 컴포넌트
    const maxVertex = Math.max(...edges.flat())

    const matrix = new Array(maxVertex + 1).fill(0).map(el => {  // 최대값 기준으로 matrix생성
        return new Array(maxVertex + 1).fill(0)
    })
    edges.forEach(el => {
        matrix[el[0]][el[1]] = 1;
        matrix[el[1]][el[0]] = 1;
    })


    const flag = new Array(maxVertex + 1).fill(false) // 방문 여부 체크 [f,f,f,f,f]

    for (let from = 0; from < matrix.length; from++) {
        if (!flag[from]) {
            bfs(matrix, flag, from)
            count++
        }
    }
    return count
}

function bfs(matrix, flag, from) {
    let queue = [from]
    const enqueue = (el) => queue.push(el)
   const dequeue = () => queue.shift()

    while (queue.length > 0) {
        const now = dequeue()
        for (let next = 0; next < matrix.length; next++) {
            if (matrix[now][next] && !flag[next]) {
                flag[next] = true
                enqueue(next)
            }
        }
    }
}
const vertices = connectedVertices([
    [0, 1],
    [2, 3],
    [3, 4],
    [3, 5],
])

console.log(vertices);




















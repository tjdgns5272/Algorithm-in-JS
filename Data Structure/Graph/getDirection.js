function getDirections2(matrix, from, to) {
    if (matrix[from][to] === 1) {
        return true
    }
    if (from < to) {   // 3 1   => 3,2 => 2,1
        while (from < to) {
            if (matrix[from][from + 1] === 0) {
                return false
            }
            from++
        }
    } else {
        while (from > to) {  // 3 0  3,2 => 2,1 => 1,0
            if (matrix[from][from - 1] === 0) {
                return false
            }
            from--;
        }
    }
    return true
}

// 가는 길이 꼭 순서대로일필요 없고 돌아서라도 도착하면 인정임
// 첫번째 코드는 다이렉트 최단경로로 이어져 있을때만 고려해서 돌아가는 케이스는 통과 안됨

//TODO: 돌아가더라도 최종 목적지에 도착하는 경로 찾기!
function getDirections(matrix, from, to) {  // DFS 0,2

    if (matrix[from][to] === 1) return true   // 직접적으로 이어져있는 경로가 있으면 바로 true 리턴

    let flag = new Array(matrix.length).fill(false) // 각 자리를 방문했던 곳인지 확인하는 배열

    const getDirec = (from, to) => {
        let result = false

        for (let i = 0; i < matrix.length; i++) {
            if (matrix[from][to] === 1) {    // 최종목적지에 도달했으면 true 리턴
                return true
            }
            if (matrix[from][i] === 1 && !flag[i]) { // 방문한적이 없고, 길이 있을때
                flag[i] = true
                result = getDirec(i, to)    // recursive case
            }
        }
        return result
    }
    return getDirec(from, to)
}

function getDirections3(matrix, from, to) {
    let flag = new Array(matrix.length).fill(false);

    let queue = [from]   // [0]
    const enqueue = (el) => queue.push(el)
    const dequeue = () => queue.shift()

    flag[from] = true;
    // [t,f,f,f]
    while (queue.length > 0) {
        const now = dequeue()  // [2]

        if (now === to) {
            return true
        }
        for (let next = 0; next < matrix.length; next++) {
            if (matrix[now][next] === 1 && !flag[next]) {
                flag[next] = true
                enqueue(next)
            }
        }
    }
    return false
}


function getDirection3(matrix, from, to) {
    let result = false;

    const isVisited = new Array(matrix.length).fill(false) // 각 자리를 방문했던 곳인지 확인하는 배열
    //[false,false,false,false]
    // [t,f,f,f]
    // [t,t,f,f]
    //[t,t,f,t]

    const checkRoute = (from, to) => {  // 0,2 -> 1,2

        isVisited[from] = true  // 방문한 곳 true
        console.log(isVisited);

        if (matrix[from][to]) return true        // 최종목적지에 도달했으면 true 리턴

        for (let i = 0; i < matrix.length; i++) {
            if (matrix[from][i]&& !isVisited[i]) {  // 방문한적이 없고, 길이 있을때
                result = checkRoute(i, to)         // recursive case
            }
        }
        return result
    }
    return checkRoute(from, to)  // 0 -> 1 -> x  , 0 -> 3  -> 2
}

const m = [
    [0, 1, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0]
]
console.log(m);
// 0->1 -> 2 -> 3
const result = getDirection3(
    m,
    0,
    2
);
console.log(result); // tru
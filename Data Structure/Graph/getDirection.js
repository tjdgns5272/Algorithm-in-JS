function getDirections2(matrix, from, to) {
    if(matrix[from][to] === 1) {
        return true
    }
    if(from <to) {   // 3 1   => 3,2 => 2,1
        while (from < to) {
            if (matrix[from][from + 1] === 0) {
                return false
            }
            from++
        }
    } else {
        while (from > to) {  // 3 0  3,2 => 2,1 => 1,0
            if (matrix[from][from-1] === 0) {
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
function getDirections (matrix, from, to) {

    if(matrix[from][to] === 1) return true   // 직접적으로 이어져있는 경로가 있으면 바로 true 리턴

    let flag = new Array(matrix.length).fill(false) // 각 자리를 방문했던 곳인지 확인하는 배열

    const getDirec = (from, to) => {
        let result = false

        for(let i=0; i<matrix.length ; i++){
            if(from === i) continue         // 자기자신은 제외
            if(matrix[from][to] === 1) {    // 최종목적지에 도달했으면 result를 true로 변경하고 break
                result = true; break;
            }
            if(matrix[from][i] === 1 && flag[i] === false) { //
                flag[i] = true
                result =  getDirec(i,to)
            }
        }
        return result
    }
    return getDirec(from,to)
}
const m = [
    [0, 1, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0]
];   // 0,3 :  (0,1) -> (1,2) -> (2,3)
const result = getDirections(
    m,
    0,
    2
);


console.log(result); // tru

const largestProductOfThree2 = function (arr) {
    //배열내에서 최대값을 찾는 함수
    const findMax = (arr) => {
        return arr.reduce((acc, cur) => {
            return Math.abs(acc) > Math.abs(cur) ? acc : cur
        })
    }

    const first = findMax(arr) // 첫번째 최댓값
    const firstIdx = arr.indexOf(first) // 첫번째 최댓값의 인덱스
    arr.splice(firstIdx, 1) // 첫번째 최댓값을 배열에서 제거

    const second = findMax(arr) // 두번째 최댓값
    const secondIdx = arr.indexOf(second) // 두번째 최대값의 인덱스
    arr.splice(secondIdx, 1) // 두번째 최대값을 배열에서 제거

    const third = findMax(arr) // 세번째 최대값

    return first * second * third

};

const largestProductOfThree = (arr) => {
    arr.sort((a,b) => a-b)
    
    const result1 = arr[0]*arr[1]*arr[arr.length-1]
    const result2 = arr[arr.length-1]*arr[arr.length-2]*arr[arr.length-3]

    return result1>result2 ? result1 : result2
}
largestProductOfThree( [-5, -4, -3, -1, 999, 10000])
// 숫자 세개중 음수가 아예 없거나 두개 일 경우에는 테스트 케이스가 통과가 되지만,
// 음수가 1개 혹은 3개일경우에는 오답!
// 음수 배열과 양수 배열을 따로 분리


// [-5,-4,-3,-2,-1] and [1 2 3]

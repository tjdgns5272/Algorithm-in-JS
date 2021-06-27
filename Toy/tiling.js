let tiling = function (n) {
    // TODO: 여기에 코드를 작성합니다.
    // n의 짝수 홀수 여부를 검사한다
    // n=4일때 2+3C2
    // n=5, 1+ 4C1 + 3C2
    // n=6, 2+ 5C1+ 4C2
    // 직접 일일히 계산해보니 피보나치 수열이 나오는것같음

    let data = [0,1,2]
    if(n===1){
        return 1
    }
    if(n===2) {
        return 2
    }
    if(!data[n]) {
        data[n] = tiling(n-1)+ tiling(n-2)
        return data[n]
    }
    return data[n-1] + data[n - 2];
};


console.log(tiling(30));

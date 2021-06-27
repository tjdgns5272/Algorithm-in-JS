function orderOfPresentation (N, K) {
    const factorial = (num) => {
        if(num <= 1) {
            return 1
        }
        return num*factorial(num-1)
    }
    let answer = 0;
    let tempArr = [...K].sort((a,b) => a - b)

    for (let i=0; i<K.length ; i++) {
        const temp = tempArr.filter(n => n < K[i]).length
        if(temp !== 0) {
            answer += factorial(N-1-i)*temp
            console.log(answer)
        }
        const curIdx = tempArr.indexOf(K[i])
        tempArr.splice(curIdx,1)
    }
    return answer
}

function orderOfPresentation2(N, K) {
    const factorial = (num) => {
        if (num <= 1) {
            return 1
        }
        return num * factorial(num - 1)
    }
    let answer = 0;
    let tempArr = [...K].sort((a, b) => a - b)

    for (let i = 0; i < K.length; i++) {
        const temp = tempArr.filter(n => n < K[i]).length
        if (temp !== 0) {
            answer += factorial(N - 1 - i) * temp
            console.log(answer)
            console.log(answer)
        }
        const curIdx = tempArr.indexOf(K[i])
        tempArr.splice(curIdx, 1)
    }
    return answer
}



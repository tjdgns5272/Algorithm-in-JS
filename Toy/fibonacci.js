function fibonacci(n) {
    /*let fib = Array(n+1).fill(0)
    fib[1] = 1
    fib[2] = 1

    if(fib[n] !== 0) {
        return fib[n]
    } else {
        fib[n] = fibonacci(n-2) + fibonacci(n-1)
        return fib[n]
    }
    */

}

let fibonacci2 = function (n) {
    const memo = [0, 1];
    const aux = (n) => {
        // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
        if (memo[n] !== undefined) return memo[n];
        // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
        memo[n] = aux(n - 1) + aux(n - 2);
        return memo[n];
    };
    return aux(n);
}

function fib(n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    }
    return fib(n - 2) + fib(n - 2)
}

function fib2(n) {
    let arr = [0, 1]
    if (n < 2) {
        return arr[n]
    } else {
        arr[n] = fib2(n - 2) + fib2(n - 1)
    }
    return arr[n]
}

const fibArr = [0, 1]

function fib3(n) {
    if (n <= 1 || fibArr[n]) {
        return fibArr[n]
    } else {
        fibArr[n] = fib3(n - 2) + fib3(n - 1)
    }
    return fibArr[n]
}

const fib4 = (n) => {
    const memo = [0, 1]
    const func = (n) => {
        if (memo[n] !== undefined) {
            return memo[n]
        } else {
            memo[n] = func(n - 2) + func(n - 1)
            return memo[n]
        }
    }
    return func(n)
}

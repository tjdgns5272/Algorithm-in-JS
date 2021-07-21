function divideChocolateStick(M, N) {

  const GCD = (a, b) => b === 0 ? a : GCD(b, a % b) // 최대공약수 수하는 함수
  
  //gcd의 약수들로 동일하게 분배가 가능함!
  // 최대공약수 i로 나눴을때 나머지값이 0이 되는 i를 배열에 추가!
  const findDivisor = (num) => {
    const divisors = []
    const root = Math.sqrt(num)
    for (let i = 1; i <= root; i++) {
      if(num%i===0) {
        divisors.push(i)
        if(i !== num/i){
          divisors.push(num/i)
        }
      }
    }
    return divisors.sort((a,b)=>a-b)
  }

  const result = []
  const gcd = GCD(M, N)  // M과 N의 최대공약수
  const divisors = findDivisor(gcd) // 최대 공약수의 약수
  
  console.log(divisors);
  
  divisors.forEach(num => {
    result.push([num, M/num,N/num])
  })
  console.log(result);
  return result
}

let M = 4;
let N = 8;
let output = divideChocolateStick(M, N);
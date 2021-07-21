function boringBlackjack(cards) {
  // 소수인지 아닌지를 판별하는 함수 isPrimeNumber
  //  입력받은 숫자 중에서 3개를 골라 더해서 나온 경우의 수
  // 3가지를 뽑아서 더한값을 배열에 넣어줌
  // isPrimeNumber로 filtering 한 후에 배열 길이값을 리턴

  const combinations = [] // 조합이 담기는 배열
  const cardSet = (arr, setSoFar) => {

    if(setSoFar.length === 3 ) { // 재귀 탈출조건 : 재귀를 돌다가 누적배열의 길이가 3일때
      const sum = setSoFar.reduce((acc,cur)=> acc+cur) // 뽑은 조합의 합
      combinations.push(setSoFar);
      return
    }
    arr.forEach((num,idx,origin) => {
      // 중복 허용 순열과는 달리, 현재값을 제외 한 나머지 배열을 재귀함수에 전달해줘야함
      const temp = [...origin.slice(idx+1)]
      cardSet(temp,setSoFar.concat(num))
    })
  }
  cardSet(cards,[]) // 재귀 최초실행
  console.log(combinations);

  const isPrimeNumber = (num) => { // 소수판별
    const root = Math.sqrt(num)
    if(num === 2 || num === 3 || num === 5 || num ===7) return true
    for(let i=2; i<= root ; i++) {
      if(num % i === 0) return false
    }
    return true
  }

  const onlyPrime = combinations.filter(num => isPrimeNumber(num)) // 소수만 있는 배열

  return onlyPrime.length
}
console.log(boringBlackjack( [1,2,3]))

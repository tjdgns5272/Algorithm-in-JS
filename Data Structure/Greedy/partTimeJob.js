function partTimeJob(k) {
  // 1원, 5원, 10원, 50원, 100원, 500원
  // 입력받은 K를 큰 숫잘로 나눴을때 몫을 동전개수에 더하고
  // 나머지를 그다음 큰숫자로 나눴을때 몫
  const coin = [500,100,50,10,5,1]
  let count = 0
  while(k>0) {
    const mok = parseInt(k/coin[0]) // 몫
    count += mok
    const rest = k%coin.shift()
    if (rest === 0) {
      break;
    } else {
      k = rest
    }
  }
  return count
}

















const partTimeJob2 = (k) => {
  const coins = [500,100,50,10,5,1]
  let answer = 0
  while (k > 0) {
    const curCoin = coins.shift()
    answer += parseInt(k/curCoin)
    k %= curCoin
  }
  return answer
}

const output2 = partTimeJob2(4972);
console.log(output2); // --> 18
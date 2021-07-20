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
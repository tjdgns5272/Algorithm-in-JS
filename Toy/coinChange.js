const coinChange = function (total, coins) {
  const coinChangeCount = new Array(total+1).fill(0)

  coins.forEach(coin=> {
    console.log(coinChangeCount);
    coinChangeCount[coin] += 1
    for(let i=coin+1; i<=total; i++) {
      coinChangeCount[i] += coinChangeCount[coin-i]
    }
  })
  return coinChangeCount[total]
};

let total = 10;
let coins = [1, 5];
let output = coinChange(total, coins);
console.log(output); // --> 3
const LPS = function (str) {
  const mid = Math.floor(str.length / 2)
  let result = 0
  for (let i = 1; i <= mid; i++) {
    console.log(str.slice(0, i), ' vs ', str.slice(-i));
    if (str.slice(0, i) === str.slice(-i)) {
      result = str.slice(0, i).length
    }
  }
  return result
}
console.log(LPS('abcanabc'))
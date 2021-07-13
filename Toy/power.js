function power(base, exponent) {
  if (exponent === 0) return 1;

  const half = Math.floor(exponent / 2);
  console.log(half);
  const temp = power(base, half);
  const result = (temp * temp) % 94906249;

  if (exponent % 2 === 1) return (base * result) % 94906249;
  else return result;
}

let output = power(3, 40);
console.log(output); // --> 19334827
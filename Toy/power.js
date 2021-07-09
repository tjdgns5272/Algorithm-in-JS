function power(base, exponent) {
    let result = base;
    if(exponent%2===0) {
    }
}

console.log(power(2, 4));


function power2(base, exponent) {
    if (exponent === 0) return 1;

    const half = parseInt(exponent / 2);
    const temp = power(base, half);
    const result = (temp * temp) % 94906249;

    if (exponent % 2 === 1) return (base * result) % 94906249;
    else return result;
}
function power(base, exponent) {
    let result = base;
    if(exponent !== 0) {
        return 1
    } else
    while (exponent > 1) {
        result *= base
        exponent--;
    }
    result %= 94906249
    return result
}

console.log(power(2, 4));
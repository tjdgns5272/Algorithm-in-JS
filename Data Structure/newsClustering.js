function solution(str1, str2) {
  // parseInt((교집합 수 / 합집합 수) * 65536 )
  // 둘다 공집합이면 1
  // 중복 허용
  // 2개씩 조합
  const isAlphabet = (el) => {
    const ascii = el.charCodeAt(0)
    return (65<= ascii && ascii <=90) || (97 <= ascii && ascii <= 122)
  }
  const arr1 = str1.toLowerCase().split('')
  const arr2 = str2.toLowerCase().split('')
  const filteredArr1 = arr1.filter(el => isAlphabet(el))
  const filteredArr2 = arr2.filter(el => isAlphabet(el))

  const combination = (arr) => {
    const bucket = []
    for(let i =0; i < arr.length-1 ; i++) {
      bucket.push(arr.slice(i,i+2).join(''))
    }
    return bucket
  }
  const subset1 = combination(filteredArr1).sort()
  const subset2 = combination(filteredArr2).sort()
  console.log(subset1);
  console.log(subset2);
  const n = subset1.filter(el => {
    return subset2.includes(el)
  })
  console.log('n: ',n.length);
  console.log(subset2.concat(subset1).length);
  let u = [...subset1.concat(subset2)]
  n.forEach(el => {
    const indexU = u.indexOf(el)
    u = [...u.slice(0,indexU),...u.slice(indexU+1)]
    console.log(u.length);
  })
  
  console.log(n.length,u.length);


  return parseInt((n.length / u.length) * 65536 )

}

console.log(solution('aa1+aa2','AAAA12'))
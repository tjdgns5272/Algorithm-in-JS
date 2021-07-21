function newChickenRecipe(stuffArr, choiceNum) {

  const filteredStuffArr = stuffArr.filter(el=> {
    let count = 0
    el.toString().split('').forEach(num=> {
      if (num === '0') count++
    })
    return count < 3
  })
  const result = []
  const permutation = (arr, bucket = []) => {

    if(bucket.length === choiceNum) {
      result.push(bucket)
      return
    }
    arr.forEach((value,idx,origin) => {
      // 순열과는 달리, 순서에 상관없이 한번 선택됬으면 그걸로 끝이므로, 뒤에 있는 배열을 전달해준다.
      const curVal = value
      const rest = [...origin.slice(0,idx),...origin.slice(idx+1)]
      permutation(rest,bucket.concat(curVal))
    })
  }
  permutation(filteredStuffArr,[])
  console.log(result);
  return result
}

newChickenRecipe([1,2,3],3)
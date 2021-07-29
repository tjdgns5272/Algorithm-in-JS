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
const powerSet = function (str) {
  // 입력받은 문자열 내에서 중복된 문자가 있는지 검사하고, 있으면 중복제거
  let array = str.split('')
  array.forEach((el, idx, origin) => {
    const temp = [...origin]
    temp.splice(idx, 1)
    if (temp.includes(el)) {
      array.splice(idx, 1)
    }
  })

  let flag = new Array(array.length).fill(false); //[false,false,false,false]
  const subSets = [];
  array.sort()

  const subSet = function DFS(depth) {
    if (depth === flag.length) {  // depth끝까지 탐색했으면 재귀 종료 조건에 충족

      const combination = array.filter((el, idx) => flag[idx]).join('')
      //let combination = ''  // flag내에서 true인 값

      /*flag.forEach((el,idx)=> {
          if(flag[idx]) {
              combination += array[idx]
          }
      })*/
      subSets.push(combination)
      return subSets
    }
    flag[depth] = true
    subSet(depth + 1)

    flag[depth] = false
    subSet(depth + 1)
  }

  subSet(0); // depth 0 부터 시작
  subSets.sort()
  return subSets;
}
const getCombinations = function (str, selectNumber) {
  const results = [];

  const arr = str.split('').sort()
  arr.forEach((el, idx, origin) => {
    const temp = [...origin]
    temp.splice(idx, 1)
    if (temp.includes(el)) {
      arr.splice(idx, 1)
    }
  })
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1).join(''); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]).join(''); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

const powerSet2 = function (str) {
  const filteredArr = []
  const lettersArr = str.split('')


  lettersArr.forEach((value,index) => {
    if(!filteredArr.includes(value)) {
      filteredArr.push(value)
    }
  })
  console.log(filteredArr);
  filteredArr.sort()
  const flag = new Array(filteredArr.length).fill(false)
  let result = []

  const subSetDFS = (depth) => {
    if(depth === filteredArr.length) {
      const combination = filteredArr.filter((el,idx) => flag[idx] )
      const word = combination.join('')
      result.push(word)
      return
    }
    flag[depth] = true
    subSetDFS(depth +1)
    flag[depth] = false
    subSetDFS(depth+1)
  }
  subSetDFS(0)
  result.sort();

  return result
}

const output2 = powerSet2('jjumpFucker');
console.log(output2)
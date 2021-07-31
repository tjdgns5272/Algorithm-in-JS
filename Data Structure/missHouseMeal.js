function missHouseMeal(arr) {

  arr.sort()

  const flag = new Array(arr.length).fill(false)

  const subSets = []
  const DFS = (depth) => {
    if(depth === flag.length) { // sideDishes = [a,b,c]
      const comb = arr.filter((food,idx) => flag[idx])
      subSets.push(comb)
      return
    }
    flag[depth] = true;
    DFS(depth+1)

    flag[depth] = false;
    DFS(depth + 1);
  }

  DFS(0);
  subSets.sort()
  return subSets
}
console.log([1,2]+[3]);

function missHouseMeal2(sideDishes) {
  // TODO: 여기에 코드를 작성합니다.
  // 최종 리턴할 배열 변수 생성 -> 공집합 포함
  let result = [[]];
  sideDishes.sort();

  // 재귀 함수
  let recursive = (result, target) => {
    // result 복사
    result.sort();
    let copiedResult = [...result];

    // 복사본 탐색
    for(let i=0; i<copiedResult.length; i++) {
      // target이랑 합친다.
      // copiedResult[i] += target;
      // [copiedResult[i], target];
      // let str = copiedResult[i] + ',' + target;
      result.push(copiedResult[i])

      // result.push(str);
    }
    return result;
  }
  // arr 탐색
  for(let i=0; i<sideDishes.length; i++) {
    // 중복이 없는 경우
    if(!result.includes(sideDishes[i])) {
      // 재귀
      recursive(result, sideDishes[i]);
    }
  }
  // 정렬 후 리턴
  return result.sort();
}
console.log(missHouseMeal2(['a','b','c']));
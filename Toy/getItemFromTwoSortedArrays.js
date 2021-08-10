const getItemFromTwoSortedArrays = function (arr1, arr2, k) {

  const result = [];
  while (arr1.length !== 0 && arr2.length !== 0) {
    arr1[0] <= arr2[0] ? result.push(arr1.shift()) : result.push(arr2.shift());
  }

  const sortedArr = [...result, ...arr1, ...arr2]; // 아래 세줄과 같은 역할을 하는 코드
  console.log(sortedArr);
  return sortedArr[k - 1]

  // while (startIndex <= endIndex) {
  //   const midIndex = Math.floor((startIndex + endIndex) / 2)
  //   if (sortedArr[k] === sortedArr[midIndex]) {
  //
  //   }
  // }
};
const getItemFromTwoSortedArrays2 = function (arr1, arr2, k) {
  let leftIdx = 0,
    rightIdx = 0;

  while (k > 0) {
    // 이진 탐색을 위해 각 배열에서 k를 절반으로 쪼개서 카운트 한다.
    let step = Math.ceil(k / 2);

    // 엣지 케이스
    // 카운트가 남았음에도 배열의 끝에 도달하면 k를 나머지 배열쪽으로 넘긴다.
    if (leftIdx === arr1.length) {
      rightIdx += k;
      break;
    }
    if (rightIdx === arr2.length) {
      leftIdx += k;
      break;
    }
    // 엣지 케이스
    // 현재 카운트가 남아있는 후보 요소들보다 많을 경우, step(현재 할당량)을 남아있는 요소들의 개수로 바꾼다.
    if (step > arr1.length - leftIdx) step = arr1.length - leftIdx;
    if (step > arr2.length - rightIdx) step = arr2.length - rightIdx;

    // 두 배열의 현재 검사 요소 위치를 비교해서, 그 값이 작은 배열은 비교한 위치 앞에 있는 요소들을 모두 후보군에서 제외시킨다.
    const value1 = arr1[leftIdx + step - 1]
    const value2 = arr2[rightIdx + step - 1]
    if (value1 < value2) {
      leftIdx += step;
      // 처리가 끝나면 k값을 절반으로 떨어뜨린다.
      k -= step;
    } else {
      rightIdx += step;
      k -= step;
    }
  }

  leftMax = arr1[leftIdx - 1] || -1;
  rightMax = arr2[rightIdx - 1] || -1;

  return Math.max(leftMax, rightMax);
};

console.log(getItemFromTwoSortedArrays2([1, 20], [2, 13, 14, 16, 19], 7));
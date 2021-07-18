const rotatedArraySearch = function (rotated, target) {

  let midValue;
  let midIndex;
  let left;
  let right;

  // 가운데 기준점을 찾는다
  for (let i = 0; i < rotated.length - 1; i++) {
    if (rotated[i] > rotated[i + 1]) { // 가운데 값을 찾으면 값과 인덱스 값 저장후 반복문 종료
      midValue = rotated[i];
      midIndex = i
      break;
    }
  }

  // target 이 어느 쪽에 속해있는지 판별
  if (rotated[0] <= target && target <= midValue) { // 왼쪽 배열 범위 안에 들때
    left = 0
    right = midIndex
  } else {                                          // 그 이외에 나머지
    left = midIndex + 1
    right = rotated.length - 1
  }

  while (left < right) {  // 이진탐색
    midIndex = Math.floor((left + right) / 2)
    if (target === rotated[midIndex]) {
      return midIndex
    }
    if (target > rotated[midIndex]) {
      left = midIndex + 1
    } else {
      right = midIndex - 1
    }
  }
  return -1
};
const rotatedArraySearch = function (rotated, target) {

  let midValue;
  let midIndex;
  let left = 0;
  let right = rotated.length - 1;

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

  while (left <= right) {  // 이진탐색

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

const  rotatedArraySearch2 = (rotated, target) => {
  let left = 0
  let right = rotated.length - 1

  while(left<=right) {
    let mid = parseInt((left+right)/2)

    if(rotated[mid] === target) return mid // mid value이 target이랑 같을때

    if(rotated[left] < rotated[mid]){ // mid 기준으로 왼쪽이 오름차순으로 정렬
      if(rotated[left]<=target && target <= rotated[mid]){  // target이 left와 mid 사이에 있을때
        right = mid - 1
      } else {
        // target이 left~mid 밖에 있을때
        // ex) [5,6,7,8,9,1,2]  left:5, right:2 mid:8, target:9일때
        left = mid + 1
      }
    } else {                          // mid 기준으로 오른쪽이 오름차순으로 정렬
      if(rotated[mid]<= target && target <= rotated[right]) { // target이 mid~right에 있을때
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}
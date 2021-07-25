const LSCS1 = function (arr) { // O(n^2)
  let max = -100000;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (sum > max) max = sum;
    for (let j = i + 1; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum > max) max = sum;
    }
  }
  return max;

};

const LSCS2 = function (arr) { // O(n) --> DP
  let arrSum = arr[0]
  let max = arr[0]

  // 쭉 더해서 음수인 부분은 굳이 더할 필요가 없다.
  arr.forEach((num,idx) => {
    if(idx>0){
      // subArrSum는 바로 직전의 요소까지 검토했을 때 가장 연속합
      // 연속합에 추가로 검토하는 요소, 즉 arr[i]를 더하는 것보다
      // arr[i] 하나의 값이 더 큰 경우 (subArrSum가 음수일 경우)
      // subArrSum를 버리는 게 좋다.
      arrSum = Math.max(num, num+arrSum);

      max = Math.max(max, arrSum)
    }
  })
  return max
}


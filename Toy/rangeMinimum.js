const rangeMinimum1 = function (arr, ranges) {
  // TODO: 여기에 코드를 작성합니다.
  const result = []
  ranges.forEach(range => { // 여기까지는 O(N)
    const temp = [...arr.slice(range[0],range[1]+1)]
    //배열을 효율적으로 정렬해서 min값을 찾아내면 될듯함
    // 시간복잡도 log(N)을 구현해야 최종적으로 N*log(N) 이 나온다
    const min = Math.min(...temp)
    result.push(min)
  })
  return result
};

const rangeMinimum = function (arr, ranges) {
  // ts: tree start, te: tree end
  const createMinTree = (arr,ts,te) => {
    if(ts===te) {   // base case
      return {value: arr[ts]};
    }

    const mid = Math.floor((ts+te)/2);
    const left = createMinTree(arr,ts,mid);
    const right = createMinTree(arr,mid+1,te);

    return {
      value : Math.min(left.value, right.value),
      left,
      right,
    };
  };
  const tree= createMinTree(arr,0,arr.length-1);
  console.log(tree);
};
rangeMinimum([1,2,3,4,5])

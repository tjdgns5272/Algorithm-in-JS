const insertionSort1 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > key) {
        arr[i] = arr[j]
        arr[j] = key
      }
    }
  }
  return arr
};
const insertionSort = function (arr,cb) {

  for (let index = 1; index < arr.length; index++) {
    if(cb) { // 콜백함수가 있으면 함수에 넣은 값 끼리 비교하고 원래 있던 함수를 정렬
      while (arr[index] !== undefined && cb(arr[index - 1]) > cb(arr[index])) {
        let temp = arr[index - 1];
        arr[index - 1] = arr[index];
        arr[index] = temp;
        index--;
      }
    }else {
      while (arr[index] !== undefined && arr[index - 1] > arr[index]) {
        let temp = arr[index - 1];
        arr[index -  1] = arr[index];
        arr[index] = temp;
        index--;
      }
    }
  }
  return arr
};

let output = insertionSort([8, 5, 6, 2, 4]);
console.log(output); // --> [1, 3, 21]
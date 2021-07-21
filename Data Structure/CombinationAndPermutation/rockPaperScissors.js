function rockPaperScissors ( round ) {
  round = round || 3

  let type = ['rock', 'paper', 'scissors'];

  let result = [];

  const permutation = (arr,playInsert) => {

    if(playInsert.length === round) {
      result.push(playInsert);
      return
    }
    arr.forEach(type => {
      // 중복 허용 순열에서는 arr는 변함없이 계속 넣어준다
      permutation(arr,playInsert.concat(type))
    })
  }
  permutation(type, []); // 재귀 시작
  return result;
}

console.log(rockPaperScissors());

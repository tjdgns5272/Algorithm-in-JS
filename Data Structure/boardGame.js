function boardGame(board, operation) {
  // TODO: 여기에 코드를 작성하세요.
  // (0,0) 부터 시작
  // board[i][j]
  // let i = 0 , let j = 0
  // UDLR 에 각각 조건에 맞게 i +- 1 , ~~
  // 한단계씩 수행했을때 그 보드에 숫자가 1이면 점수에 더해주고
  // 만약에 n*n 범위를 벗어나면 return out;
  // 최종적으로 끝마쳤으면 점수 리턴!

  let i = 0
  let j = 0
  const range = board.length - 1
  let score = board[0][0]
  for (let direction of operation) {
    switch (direction) {
      case 'U' :
        i--;
        break;
      case 'D' :
        i++;
        break;
      case 'L' :
        j--;
        break;
      case 'R' :
        j++;
        break;
    }
    if (j < 0 || j > range || i < 0 || i > range) return 'OUT'
    if (board[i][j]) {
      score++
    }
  }
  return score
}

function boardGame2(board, operation) { // lookup table

  const LEN = board.length
  const DIR = {   // 방향을 각각 설정
    'U': [-1, 0],
    'D': [1, 0],
    'L': [0, -1],
    'R': [0, 1]
  }
  const isValid = (x, y) => 0 <= x && x < LEN && 0 <= y && y < LEN
  let score = 0;
  let x = 0;
  let y = 0;
  for (let direction of operation) {
    const [dx, dy] = DIR[direction]
    x += dx
    y += dy

    if (isValid(x, y)) {
      if(board[x][y]){
        score++
      }
    } else {
      return 'OUT'
    }
  }
  return score
}

const board3 =
  [
    [0, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0],
  ];
console.log(boardGame2(board3, 'RRDLLD'))
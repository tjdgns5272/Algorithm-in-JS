const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  const matrix = createMatrix(village)
  console.log(matrix);
  //출발지 기준으로부터 상하좌우가 '1'이면 queue에 넣는다.

  // queue의 길이가 0이 될때까지 너비우선 탐색 (BFS)
  // while문이 한번 실행 될때마다 day + 1
  // 좌표 기준 상하좌우가 '1'인이 검사하는 함수를 만든다.
  // 그 함수의 리턴값은
  const isValid = (M,N) => 0<= M && M < matrix.length && 0 <= N && N < matrix[0].length // 범위 안에 드는지 검사
  const findNextDoor = (village,row,col) => {
    const nextDoors = []
    if(isValid(row-1,col) && village[row-1][col]==='1') nextDoors.push([row-1,col]) // 윗집
    if(isValid(row+1,col) && village[row+1][col] === '1') nextDoors.push([row+1,col]) // 아랫집
    if(isValid(row,col+1) && village[row][col+1] === '1') nextDoors.push([row,col+1]) // 오른옆집
    if(isValid(row,col-1) && village[row][col-1] === '1') nextDoors.push([row,col-1]) // 왼옆집
    return nextDoors
  }
  const queue = [[row,col]]
  const enqueue = (house) => queue.push(house) // '1'인 집을 queue에 추가
  const dequeue = () => queue.shift()
  let day = 0;
  
  while(queue.length > 0 ) {
    console.log(queue);
    const [curRow,curCol] = dequeue()
    matrix[curRow][curCol] = 'x'
    if(isValid(curRow,curCol)) {
      const nextDoors = findNextDoor(matrix,curRow,curCol)
      queue.push(...nextDoors)
    }
    console.log(matrix);
  }
  console.log(day);
  return day
};

let village = [
  '0101', // 첫 번째 줄
  '0111',
  '0110',
  '0100',
];
let row = 1;
let col = 2;
let output = gossipProtocol(village, row, col);
console.log(output); // --> 3

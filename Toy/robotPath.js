const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.

  const M = room.length // 세로 길이
  const N = room[0].length // 가로 길이
  const isValid = (x, y) => {   // 범위안에 있는지 검사하는 함수
    return 0 <= x && x < M && 0 <= y && y < N
  }
  const aux = (candi, count) => {
    const [x, y] = candi
    if (!isValid(x, y)) return

    if (room[x][y] === 0 || room[x][y] > count) {
      room[x][y] = count
    } else {
      return
    }

    aux([x - 1, y], count + 1);
    aux([x + 1, y], count + 1);
    aux([x, y - 1], count + 1);
    aux([x, y + 1], count + 1);
  };
  aux(src, 1);

  const [r, c] = dst;
  return room[r][c] - 1;

  //출발지점 부터 시작해서 인접행렬 (상하좌우)가 0인 경
};
const robotPath2 = function (room, src, dst) {

  const rowLen = room[0].length
  const colLen = room.length
  room[src[0]][src[1]] = 1;   // 시작점을 1로 만들어준다

  let curPoint = [src];
  const DIR = [
    [-1, 0], // up
    [1, 0], // down
    [0, 1], // right
    [0, -1] // left
  ]
  //범위 안에 드는지 검사하는 함수
  const isValid = (M, N) => (0 <= M  && M < colLen) && (0 <= N && N < rowLen)

  const movePoint = function (point) {
    const [pointCol, pointRow] = point;
    for (let i = 0; i < 4; i++) {
      let [dy, dx] = DIR[i]
      dy += pointCol // 이동 후 dy 좌표
      dx += pointRow // 이동 후 dx 좌표
      if (isValid(dy, dx) && room[dy][dx]===0) { // 범위 안에 들면서 방문한적이 없는 경우
        curPoint.push([dy, dx])  // 큐 안에 넣어준다
        room[dy][dx] = room[pointCol][pointRow] + 1; // 이동 전 숫자에 1을 더한 값을 할당해준다
      }
    }
  }

  while (curPoint.length > 0) {  // 큐의 길이가 0이 될때 까지 반복
    let point = curPoint.shift();
    movePoint(point);
  }

  return room[dst[0]][dst[1]]-1;  // 출발지점을 1로 지정해줘서 맨 마지막에는 -1을 해줌
};
const room = [
  [1, 1, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
];
const src = [1, 0];
const dst = [1, 2];
console.log(robotPath2(room, src, dst))


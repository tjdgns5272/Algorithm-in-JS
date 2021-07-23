const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.
  const DIR = {
    'U': [-1, 0],
    'D': [1, 0],
    'L': [0, -1],
    'R': [0, 1]
  }
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

const room = [
  [1, 1, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
];
const src = [1, 0];
const dst = [1, 2];
console.log(robotPath(room, src, dst))


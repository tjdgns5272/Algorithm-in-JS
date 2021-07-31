const robotPath2 = function (room, src, sDir, dst, dDir) {
  const DIR = {
    1: [-1, 0],
    2: [1, 0],
    3: [0, -1],
    4: [0, 1]
  }
  const M = room.length // 세로 길이
  const N = room[0].length // 가로 길이
  const isValid = (x, y) => {   // 범위안에 있는지 검사하는 함수
    return 0 <= x && x < M && 0 <= y && y < N
  }
  const aux = (candi, count) => {
    const [x, y] = candi
    if (!isValid(x, y)) return

   while(room[x][y] === 0 || room[x][y] > count) {
      room[x][y] = count
    }
    return

    aux([x - 1, y], count + 1);
    aux([x + 1, y], count + 1);
    aux([x, y - 1], count + 1);
    aux([x, y + 1], count + 1);
  };
  aux(src,1)
  const [r, c] = dst;
  return room[r][c] - 1;
};
let room = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 1],
];
let src = [3, 0];
let sDir = 3;
let dst = [2, 2];
let dDir = 2;
let output = robotPath2(room, src, sDir, dst, dDir);
console.log(output); // --> 11


room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
src = [4, 2];
sDir = 1;
dst = [2, 2];
dDir = 3;
output = robotPath2(room, src, sDir, dst, dDir);
console.log(output); // --> 7
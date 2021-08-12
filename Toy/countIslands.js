const countIslands = function (grid) {
  // 출발지점을 찾아야함
  // 1이 처음으로 등장하는 좌표를 검색
  //
  const rowLen = grid[0].length
  const colLen = grid.length
  const startPoint = []
  for (let i=0 ; i<colLen ; i++) {
    for (let j=0; j<rowLen; j++) {
      if (gird[j][i] === '1') {
        startPoint.push(j)
        startPoint.push(i)
        break;
      }
    }
  }

  let curPoint = [startPoint];
  const DIR = [
    [-1, 0], // up
    [1, 0], // down
    [0, 1], // right
    [0, -1] // left
  ]
  const isValid = (M, N) => (0 <= M  && M < colLen) && (0 <= N && N < rowLen)

  const movePoint = function (point) {
    const [pointCol, pointRow] = point;
    for (let i = 0; i < 4; i++) {
      let [dy, dx] = DIR[i]
      dy += pointCol
      dx += pointRow
      if (isValid(dy, dx) && grid[dy][dx]===0) {
        curPoint.push([dy, dx])
        grid[dy][dx] = grid[pointCol][pointRow] + 1;
      }
    }
  }

  while (curPoint.length > 0) {
    let point = curPoint.shift();
    movePoint(point);
  }
  return grid[dst[0]][dst[1]]-1;
};


const countIslandsRef = function (grid) {
  // dfs solution
  const HEIGHT = grid.length;
  const WIDTH = HEIGHT && grid[0].length;
  let count = 0;

  for (let row = 0; row < HEIGHT; row++) {
    for (let col = 0; col < WIDTH; col++) {
      if (grid[row][col] === '0') continue;
      count++;
      searchIsland(row, col);
    }
  }

  function searchIsland(row, col) {
    if (row < 0 || col < 0 || row >= HEIGHT || col >= WIDTH) return;
    if (grid[row][col] === '0') return;

    grid[row][col] = '0';
    searchIsland(row - 1, col);
    searchIsland(row + 1, col);
    searchIsland(row, col - 1);
    searchIsland(row, col + 1);
  }

  return count;
};

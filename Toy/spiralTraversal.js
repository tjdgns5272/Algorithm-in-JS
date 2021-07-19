const spiralTraversal = function (matrix) {
  /*let x = 0
  let y = 0
  let direction = 1
  let answer = ''
  let max = matrix.length

  const flag = new Array(matrix.length).fill(0).map(el=> new Array(matrix.length).fill(false))
  
  for(let i=0; i < max ; i++) {
    answer += matrix[x][y]
    flag[x][y] = true
    y += direction
  }
  if(flag[x][y] !== undefined && !flag[x][y]) {
    console.log(x,y);
  }

  const east = () => {
    while((flag[x][y] !== undefined && !flag[x][y])) {
      answer += matrix[x][y]
      flag[x][y] = true
      y += direction
    }
    y -= direction
    x += direction
  }
  const south = () => {
    while((flag[x][y] !== undefined && !flag[x][y])) {
      answer += matrix[x][y]
      flag[x][y] = true
      x += direction
    }
    x -= direction
    y -= direction
    direction *= -1
  }
  const west = () => {
    while((flag[x][y] !== undefined && !flag[x][y])) {
      answer += matrix[x][y]
      flag[x][y] = true
      y += direction
    }
    y -= direction
    x += direction
  }
  console.log(y);
  
  console.log(flag, answer);*/
  let answer = ''
  const rotateOnce = (m) => {
    let output = []
    for (let i = m[0].length - 1; i >= 0; i--) {
      let temp = []
      for (let j = 0; j < m.length; j++) {
        temp.push(m[j][i])
      }
      output.push(temp)
    }
    return output
  }
  while (matrix.length >0) {
    answer += matrix.shift().join('')
    matrix = rotateOnce(matrix)
    console.log(answer);
    if(matrix.length === 1) {
      answer += matrix[0].join('')
      break;
    }
  }
  return answer
};



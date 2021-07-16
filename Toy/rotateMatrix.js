const rotateMatrix = function (matrix, rotation) {

  if(matrix.length < 2) return matrix

  const rotateOnce = (m) => {
    let mat = []
    for(let i=0; i<m[0].length; i++){
      let row = []
      for(let j=m.length-1; j>=0; j--) {
        row.push(m[j][i])
      }
      mat.push(row)
    }
    return mat
  }
  let result = rotateOnce(matrix)
  for (let count = 1; count < rotation; count++) {
    result = rotateOnce(result)
  }
  return result





};

let m = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(rotateMatrix(m,4));
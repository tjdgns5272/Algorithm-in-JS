function getDirections(matrix, from, to) {
    if(from <to) {
        while (from < to) {
            if (matrix[from][from + 1] === 0) {
                return false
            }
            from++
        }
    } else {
        while (from > to) {  // 3 0

            if (matrix[from][from-1] === 0) {
                return false
            }
            from--;

        }
    }
}
const m = [
    [0, 1, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0]
]
const result = getDirections(
    m,
    0,
    3
);


console.log(getDirections(m,0,2)); // tru

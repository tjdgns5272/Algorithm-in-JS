const quickSort = function (arr) {
    let pivot = arr[0]
    let left = []
    let right = []
    if(arr.length < 2) {
        return arr
    }
    arr.forEach(el => {
        if(el>pivot) {
            right.push(el)
        }else if(el < pivot) {
            left.push(el)
        }
    })
    left = quickSort(left)
    right = quickSort(right)
    return [left,pivot,right].flat()
};

console.log(quickSort([5,3,8,4,9,1,6    ,2,7]));
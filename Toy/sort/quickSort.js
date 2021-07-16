const quickSort = function (arr,cb =(item)=>item) {
    let pivot = arr[0]
    let left = []
    let right = []
    if(arr.length < 2) {
        return arr
    }
    arr.slice(1).forEach(el => {
        if(cb(el)>=cb(pivot)) {
            right.push(el)
        }else {
            left.push(el)
        }
    })
    left = quickSort(left)
    right = quickSort(right)
    return [left,pivot,right].flat()
};

console.log(quickSort([5,3,8,5]));
function sorting(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}
const bubbleSort = function (arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let count = 0;
        for (let j = 0; j < arr.length - 1-i; j++) {
            if (arr[j] > arr[j + 1]) {
                sorting(j, j + 1, arr);
                count++;
            }
        }
        if(count===0) {
            break;
        }
    }
    return arr
};

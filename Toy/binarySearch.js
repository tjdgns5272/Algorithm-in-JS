

const binarySearch = (arr, target) => {
    let startIndex = 0
    let endIndex = arr.length-1

    while(startIndex <= endIndex) {
        let midIndex = Math.floor((startIndex+endIndex)/2)

        if(target === arr[midIndex]) return midIndex

        if(target > arr[midIndex]) {
            startIndex = midIndex + 1
        } else {
            endIndex = midIndex -1
        }
    }
    return -1

};

console.log(binarySearch([4, 6, 8, 9, 10, 11, 15], 10));

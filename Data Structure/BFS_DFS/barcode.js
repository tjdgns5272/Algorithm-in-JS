function barcode(len) {


    let result = '12'
    for(let i=1; i<len ; i++) {
        const flag = [false, false, false]

        const lastNum = result[result.length-1]
        flag[lastNum-1] = true
        console.log(flag);
    }
    const isInclude = (arr) => {

    }
}

barcode(3)
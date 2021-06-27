function browserStack(actions, start) {
    let prev = []
    let next = []
    let currentPage = start

    for(let ele of actions) {
        if(typeof ele === 'string'){ //새로운 페이지 접속
            next = [];
            prev.push(currentPage);
            currentPage = ele
        }
        else if(typeof ele === 'number'){
            if(ele === 1 && next.length !== 0) {      // 앞으로가기
                const popNext = next.pop() // 주소값이 공유되지 않게 독립적으로 변수를 하나 생성해준뒤 복사를 해둠
                prev.push(currentPage)
                currentPage = popNext
            } else if (ele === -1 && prev.length !== 0) { // 뒤로가기
                const popPrev = prev.pop()
                next.push(currentPage)
                currentPage = popPrev
            }
        }
    }


    return [prev, currentPage, next]
}

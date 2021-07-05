function queuePrinter(bufferSize, capacities, documents) { // 1차시도
    let buffer = new Array(bufferSize).fill(0);
    let sec = 1;

    while (buffer.length !== 0) {


        let curSum = buffer.reduce((a, b) => a + b);

        if (curSum + documents[0] <= capacities) {
            buffer.push(documents[0]);
            documents.shift();

        }
        if (curSum + documents[0] > capacities && buffer[0] !== 0) {
            buffer.push(0)
        }
        buffer.shift();
        sec++;
    }
    console.log(sec);
    return sec
}


function queuePrinter2(bufferSize, capacities, documents) { // 2차시도 (before algorithm study)
    let buffer = new Array(bufferSize).fill(0);  // [0,0]
    let sec = 0;

    const enqueue = (el) => buffer.push(el);
    const dequeue = (arr) => arr.shift();
    if (buffer.length === 1) return sec + documents.length
    while (documents.length !== 0) {
        console.log(sec, buffer, documents);

        let curSize = buffer.slice(1).reduce((a, b) => a + b); // 현재 용량

        if (curSize + documents[0] <= capacities) { // 현재 용량 + 들어올 문서 합이 한도보다 작을때
            enqueue(documents[0]);
            dequeue(documents);
        } else {                                        // 클때
            enqueue(0)
        }

        dequeue(buffer)

        sec++;
    }
    console.log(sec);
    return sec
}

function queuePrinter3(bufferSize, capacities, documents) { // reference
    let count = 0;
    let queue = [];
    let totalBufferVolume = 0;

    for (let i = 0; i < bufferSize; i++) {
        queue.push(0);
    }

    let currentDocument = documents.shift();

    queue.unshift(currentDocument);
    queue.pop();

    totalBufferVolume += currentDocument; // 7

    count++;
    while (totalBufferVolume) {

        totalBufferVolume = totalBufferVolume - queue.pop();

        currentDocument = documents.shift();

        if (currentDocument + totalBufferVolume <= capacities) {

            queue.unshift(currentDocument);
            totalBufferVolume = totalBufferVolume + currentDocument;

        } else {

            documents.unshift(currentDocument);
            queue.unshift(0);
        }
        count++;
    }
    return count;
}

function queuePrinter4(bufferSize, capacities, documents) {
    let sec = 0;         // 4, 10, [7,4,7,4]
    let buffer = new Array(bufferSize).fill(0)
    let curSize = 0;

    let curDoc = documents.shift() // 현재 처리할 문서

    buffer.push(curDoc)   // [0,0,0,0,7]
    buffer.shift() // [0,0,0,7]
    curSize += curDoc  //  현재 용량 업데이트
    sec++
    console.log(sec, buffer, documents);

    while (curSize) {
        curDoc = documents.shift() // 현재 처리할 문서
        curSize -= buffer.shift() // 현재 사이즈에서 빠질 내용은 빼줌

        if (curSize + curDoc <= capacities) {  // 현재 사이즈 + 처리할 문서 합 <= 최대사이즈
            buffer.push(curDoc) // 버퍼 배열에 추가해주고
            curSize += curDoc   // 현재 사이즈에 처리문서를 더해줌
        } else {
            documents.unshift(curDoc)
            buffer.push(0)
        }
        sec++
    }
    return sec
}

function queuePrinter5(bufferSize, capacities, documents) {
    const buffer = new Array(bufferSize).fill(0) // 버퍼 크기만큼 빈 배열 만들어줌

    let sec = 0;

    while (documents.length > 0) { // 처리할 문서가 더이상 남지 않으면 반복문을 멈춘다!
        //현재 용량은 어차피 빠질 문서 (buffer[0]) 제외하고 합을 구한다
        console.log(sec, buffer, documents);
        const curSize = buffer.reduce((a, b) => a + b) - buffer[0]
        // 👇🏻👇🏻왜냐하면 이런 상황때문임👇🏻👇🏻
        /* 4, 10, [7,4,7,4] 일때
           [7,0,0,0] [4,7,4]
           이거 다음 단계가 [0,0,0,4] [7,4] 가 되야하는데
           curSize를 전체 합으로 구해줄 경우에는 7이 되고 7+4는 10을 초과하기때문에
           buffer에 4가 아니라 0을 추가해주게됨
            [0,0,0,0] [4,7,4] 이 경우가 쓸데 없이 추가됨
        */
        const curDoc = documents.shift()  // 현재 처리할 문서
        if (curDoc + curSize <= capacities) { // 용량 OK
            buffer.push(curDoc)  // 처리할 문서를 넣어준다.
        } else {                         // 용량 초과
            documents.unshift(curDoc)  // 뽑았던 문서를 다시 제자리로 돌려놓음 (documents 맨앞에 넣어줌)
            buffer.push(0)             // 그대신 0을 buffer에 넣어준다.
        }
        buffer.shift()   // 어찌됬건 1초에 한칸씩은 이동해야되니깐 buffer 맨 앞을 뽑아줌
        sec++
    }
    return sec + bufferSize
    /* ex) 4,10,[7,4,7,4]
       마지막 스텝은 [7,0,0,0] [4]
                 [0,0,0,4] []  이렇게 되니깐, 반복문 종료하고
    */
}

console.log(queuePrinter5(4, 10, [7, 4, 7, 4]))

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

    totalBufferVolume = totalBufferVolume + currentDocument;

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

console.log(queuePrinter4(4, 10, [7, 4, 7, 4]))

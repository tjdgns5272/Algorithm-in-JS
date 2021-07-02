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
    if(buffer.length === 1) return sec+documents.length
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

queuePrinter2(1, 10, [5, 5, 5, 5])


function queuePrinter3(bufferSize, capacities, documents) { // reference
    let count = 0;
    let queue = [];
    let totalBufferVolume = 0;

      for(let i = 0; i < bufferSize; i++){
        queue.push(0);
    }

    let currentDocument = documents.shift();

    queue.unshift(currentDocument);
    queue.pop();

    totalBufferVolume = totalBufferVolume + currentDocument;

    count++;
    while(totalBufferVolume){

        totalBufferVolume = totalBufferVolume - queue.pop();

        currentDocument = documents.shift();

        if(currentDocument + totalBufferVolume <= capacities){

            queue.unshift(currentDocument);
            totalBufferVolume = totalBufferVolume + currentDocument;

        }else{

            documents.unshift(currentDocument);
            queue.unshift(0);
        }
        count++;
    }
    return count;
}

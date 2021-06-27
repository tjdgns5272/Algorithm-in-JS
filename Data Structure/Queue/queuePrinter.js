function queuePrinter(bufferSize, capacities, documents) {
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
queuePrinter(3, 10, [7, 4, 7])

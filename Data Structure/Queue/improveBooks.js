function improveBook(books, speeds) {
    const arr = []
    for (let i = 0; i < books.length; i++) {
        const days = Math.ceil((100 - books[i]) / speeds[i])
        arr[i] = days;
    }

    let answer = []
    while (arr.length > 0) {
        let deployIndex = arr.findIndex(fn => arr[0] < fn);
        if (deployIndex === -1) {
            // 만약 찾지 못했다면 answer에 workDay 배열의 길이를 넣은 후, workDay 내부의 요소를 전부 삭제합니다.
            answer.push(arr.length);
            arr.splice(0, arr.length);

        } else {
            // 만약 찾았다면, 해당 인덱스를 answer에 넣고, workDay에서 그만큼 제외합니다.
            answer.push(deployIndex);
            arr.splice(0, deployIndex);
        }
    }
    console.log(answer)
}

let books = [95, 90, 99, 99, 80, 99];
let speeds = [1, 1, 1, 1, 1, 1];
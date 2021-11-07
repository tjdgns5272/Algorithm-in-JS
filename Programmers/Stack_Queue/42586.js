function solution(progresses, speeds) {
  const answer = [];
  // (100 - progress) / speed
  // [7, 2.x, 9]
  const queue = progresses.map((progress, i) => {
    return Math.ceil((100 - progress)/speeds[i])
  })
  console.log(queue)
  while (queue.length > 0) {
    const cur = queue[0]
    const count = queue.findIndex(idx => idx > cur)
    if(count === -1 ) {
      // 현재값보다 큰 값이 없는 경우엔 남아있는 배열 길이를 측정
      answer.push(queue.length)
      break;
    } else {
      queue.splice(0,count)

    }
    answer.push(count)
  }
  return answer
}
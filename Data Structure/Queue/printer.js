function solution(priorities, location) {
  const queue = priorities
  const enqueue = (el) => queue.push(el)
  const dequeue = () => queue.shift()

  // 먼저 뽑고 중요도 높으면 맨뒤로
  // 타겟 위치를 저장해야됨
  //
  let count = 0;
  let targetIndex = location
  while(queue.length > 0) {

    const curDoc = dequeue() // 맨 앞대가리 뺌
    targetIndex--
    const bigger = queue.filter(num => num>curDoc) // 현재 문서보다 큰거 있는지

    // 타겟인덱스 차례때 자기보다 큰게 있으면 인덱스크기는 큐 길이로 리셋

    if(bigger.length > 0) {
      enqueue(curDoc);
      if(targetIndex === -1) {
        targetIndex = queue.length-1
      }
      continue;
    } else {
      count++

    }

    if(targetIndex === -1) {
      break
    }
  }
  return count
}
solution([1,1,9,1,1,1], 0)
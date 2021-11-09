const primePassword = (curPwd, newPwd) => {
  // 현재비밀번호와 새 비밀번호 각 자릿수 별로 조합을 쭉 나열함
  // 자릿수 별로 2가지씩 총 4자리이므로 최대 16가지 조합
  // 오름차순으로 나열
  // 프라임넘버가 아니면 배열에서 필터링
  // 최종적으로 배열의 길이에서 -1 리턴
  const curNum = curPwd.toString().split('')
  const newNum = newPwd.toString().split('')
  const arr = curNum.map((el, idx) => [el, newNum[idx]])
  console.log(arr);
  const flag = [true, false]
  const queue = [arr[0][0]]
  const enqueue = (el) => queue.push(el)
  const dequeue = () => queue.shift()

  while (queue.length > 0) {
    const now = dequeue()
    for(let i=0; i < 2 ; i++) {
      if(!flag[i]) {

        enqueue(arr[now][i])
      }
    }
  console.log();
  }
};

primePassword(1234, 5678)

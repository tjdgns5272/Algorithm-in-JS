function ocean(target, type) {

  let bag = [1];

  for (let i = 1; i <= target; i++)
    bag[i] = 0;

  // 돈의 종류가 담겨있는 배열을 순차적으로 탐색
  type.forEach(ele => {

    bag[ele] += 1 // 자기 자신으로 만들수 있는경우의수
    for (let i = ele + 1; i <= target; i++) {
      // bag의 인덱스가 type 보다 큰 구간만
      // (작은 구간은 type[i]로 만들 수 없는 금액이기 때문에 탐색할 필요없기 때문!)
      // 기존 경우의 수에 type[i]를 뺀 금액을 만들 수 있는 경우의수를 더해준다
      bag[i] += bag[i - ele];
    }
  })

  // bag 의 target 인덱스에 target 금액을 훔칠 수 있는 경우의 수가 쌓이므로 (누적)
  // 해당 값을 리턴해 준다
  console.log(bag);
  return bag[target];
}

let output = ocean(5, [2, 3, 5]);
console.log(output);
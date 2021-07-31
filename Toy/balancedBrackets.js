const balancedBrackets = function (str) {
  if (str.length === 0 ) return true;
  if (str.length === 1) return false

  let stack = []
  const BRACKETS = {
    '(':')',
    '{':'}',
    '[':']',
    '<':'>'
  }
  //괄호가 열리는 동안에 스택에 쌓기
  // 닫히는 순간부터 스택 top과 비교해서 쌍이 맞는지 확인 후 일치하면 pop
  // 스택이 비워지기 전에 열린괄호가 나오면 false 리턴
  // 정상적으로 반복문 마치면 true 리턴
  
  for (let bracket of str) {
    console.log(stack);
    if (bracket === '(' || bracket === '{' || bracket === '['|| bracket === '<') {
      stack.push(bracket)
    } else {
      const top = stack.pop()
      if(BRACKETS[top] !== bracket) {
        return false
      }
    }
  }
  return true
};

console.log(balancedBrackets('()))'));
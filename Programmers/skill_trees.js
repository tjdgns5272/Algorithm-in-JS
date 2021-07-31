function solution(skill, skill_trees) {
  const skillOrder = skill.split('')
  // 스킬 순서대로 하나씩 trees에서 있는지 확인한다
  // 있으면 그 앞에 문자는 자르고 그 뒤로 검사

  const filtered = skill_trees.filter(skill => {
    let temp = skill
    let result = true;
    skillOrder.forEach(el => {
      const curIndex = temp.indexOf(el)
      if (curIndex === -1 && temp.length !== skill.length) { // 포함하지 않으면 바로 false
        result = false
      } else {
        temp = temp.slice(curIndex + 1)
      }
    })
    return result
  })
  return filtered.length
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA", "AQWER"]));
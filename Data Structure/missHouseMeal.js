function missHouseMeal(sideDishes) {

  sideDishes.sort()

  const flag = new Array(sideDishes.length).fill(false)

  const subSets = []
  const DFS = (depth) => {
    if(depth === flag.length) { // sideDishes = [a,b,c]
      const comb = sideDishes.filter((food,idx) => flag[idx])
      subSets.push(comb)
      return
    }
    flag[depth] = true;
    DFS(depth+1)

    flag[depth] = false;
    DFS(depth + 1);
  }

  DFS(0);
  subSets.sort()
  return subSets
}
console.log([1,2]+[3]);
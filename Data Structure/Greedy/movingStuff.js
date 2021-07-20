function movingStuff(stuff, limit) {
  stuff.sort((a,b) => b-a);

  // let acc = stuff[0] + stuff[stuff.length -1];
  let count = 0;
  while(stuff.length > 0){
    let first = stuff[0]
    let last = stuff[stuff.length-1]
    let acc = first + last;

    if(acc > limit) {
      stuff.shift();
      count++;
    } else {
      stuff.shift();
      stuff.pop();
      count++
    }
  }

  return count;
}
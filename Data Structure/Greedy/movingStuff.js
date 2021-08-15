function movingStuff(stuff, limit) {
  stuff.sort((a, b) => b - a);

  // let acc = stuff[0] + stuff[stuff.length -1];
  let count = 0;
  while (stuff.length > 0) {
    let first = stuff[0]
    let last = stuff[stuff.length - 1]
    let acc = first + last;

    if (acc > limit) {
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

function movingStuff2(stuff, limit) {

  stuff.sort((a, b) => b - a)
  let count = 0;
  while (stuff.length > 0) {
    console.log(stuff);
    const biggest = stuff.shift()
    const smallest = stuff.pop()

    if(biggest+smallest > limit) {
      stuff.push(smallest)
    }
    count++
  }
  return count
}

let output = movingStuff2([60, 73, 80, 87, 103, 109, 119, 123, 128, 129, 136, 146, 153, 168, 182], 200);
console.log(output); // 4
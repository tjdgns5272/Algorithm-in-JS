function unpackGiftbox(giftBox, wish) {

    for (let gift of giftBox) {
        if(gift === wish) return true
        if(Array.isArray(gift)) {
            const temp = unpackGiftbox(gift,wish)
            if(temp) return true
        }

    }
    return false
}

// console.log(unpackGiftbox([
//     'macbook',
//     'mugcup',
//     ['eyephone', 'postcard'],
//     'money'
// ],'postcard'));


function findMatryoshka(matryoshka, size) {
    if(matryoshka.size === size) return true

    if(matryoshka.matryoshka) {
        return findMatryoshka(matryoshka.matryoshka, size)
    }
    return false
}
const matryoshka = {
    size: 10,
    matryoshka: {
        size: 9,
        matryoshka: null,
    },
};

let output = findMatryoshka(matryoshka, 9);
console.log(output); // --> true
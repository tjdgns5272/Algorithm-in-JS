const isSubsetOf = function (base, sample) {
    for (let num of sample) {
        if (!(base.includes(num))) {
            return false
        }
    }
    return true4
};
const isSubsetOf2 = function (base, sample) {
    if (sample.length === 0) {
        return true
    }
    const head = sample[0]
    const tail = sample.slice(1)

    if ((base.includes(head))) {
        return isSubsetOf(base, tail)
    }
    return false
};
const isSubsetOf3 = function (base, sample) {
    base.sort((a, b) => a - b)
    sample.sort((a, b) => a - b)
    for (let i = 0; i < sample.length; i++) {
        if (base.includes(sample[i])) {
            base.splice(i, 1);
            sample.splice(i, 1);
            i--
        } else {
            return false
        }
    }
    return true
};
const isSubsetOf4 = function (base, sample) {
    base.sort((a, b) => a - b)
    sample.sort((a, b) => a - b)
    let result = false;

    for (let i = 0; i < sample.length; i++) {
        for (let j = i; j < base.length; j++) {
            if (sample[i] === base[j]) {
                result = true;
                break
            } else {
                result = false
            }
        }
    }
    return result
}
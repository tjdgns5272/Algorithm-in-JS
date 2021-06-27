let participant = ["a", "b", "a", "c", "a"];
let completion = ["b", "a", "c", "a"];

function solution1(participant, completion) { //완주하지 못한 선수
    let len = participant.length;
    participant.sort();
    completion.sort();

    for (let i = 0; i < len; i++) {
        if (i === len - 1) return participant[i];

        if (completion[i] !== participant[i]) {
            return participant[i];
        }
    }
}

let b = [2, 1, 2, 3, 2, 4, 2, 5];
let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
let aws = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
let result = [];

let count_a = 0,
    count_b = 0,
    count_c = 0;

function solution2(answer) { // 모의고사
    answer.forEach((ans, i) => {
        if (ans === a[i % 5]) count_a++;
        if (ans === b[i % 8]) count_b++;
        if (ans === c[i % 10]) count_c++;
    })
    console.log(count_a, count_b, count_c);

    if (count_a > count_b) {
        if (count_a > count_c) result.push(1);
        else if (count_a < count_c) result.push(3);
        else result.push(1, 3)
    } else if (count_a < count_b) {
        if (count_b > count_c) result.push(2);
        else if (count_b < count_c) result.push(3);
        else result.push(2, 3);
    } else {
        if (count_a > count_c) result.push(1, 2);
        else if (count_a < count_c) result.push(3);
        else result.push(1, 2, 3);
    }
    console.log(result)
}

let arr = [4, 4, 4, 3, 3];

function solution3(array) { //같은숫자는 싫어
    const filtered = array.filter((num, i) => num !== array[i + 1]);
    console.log(filtered)
}

const s = 'abcdefgh'

function solution4(s) { //가운데 글자 가져오
    let answer = '';
    const len = s.length;
    const mok = parseInt(len / 2)
    if (len % 2 === 1) answer = s[mok];
    else answer = s[mok - 1] + s[mok];
}

const numbers = [3, 30, 911, 96, 34, 622, 90, 856, 546, 9];

function solution5(nums) { //가장 큰 수

    nums = nums.map(num => num
        .toString())
        .sort((a, b) => {
            return (b + a) - (a + b)
        }).join('')
    console.log(nums)
    return nums[0] === '0' ? '0' : nums;
    /*
        nums.forEach((number) => {
            answer += number
        })
        console.log(parseInt(answer).toString());
    */
}

const getCombinations = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);
    console.log('arr : ', arr)
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);// 해당하는 fixed를 제외한 나머지 뒤
        console.log('rest : ', rest)
        const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        console.log('combination : ', combinations)
        const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        console.log('attached : ', attached)
        results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}

function solution6(numbers) {
    let answer = 0;
    let primeNumber = [];
    const numbersArr = numbers.split('');
    console.log(numbersArr)
    const mergeNumbers = (num, str) => {
        if (num.length > 0) {
            for (let i = 0; i < num.length; i++) {
                const temp = [...numbersArr];
                temp.splice(i, 1);
                console.log(`temp : ${temp}`)
            }
        }
    }
    mergeNumbers(numbersArr, "")
}

const array = [4, 3, 6, 1, 5, 2, 6, 4]

function line(arr) {
    let left_index, default_index = -1;
    let answer = [];
    const len = arr.length
    for (let i = 0; i < len; i++) {
        answer.push(default_index)
        console.log(answer[i])
        if (i === 0) {
            for (let j = 1; j < len; j++) {
                if (arr[j] > arr[i]) {
                    answer[i] = j;
                    break;
                }
            }
        } else if (i === len - 1) {
            for (let j = len - 1; j >= 0; j--) {
                if (arr[j] > arr[i]) {
                    answer[i] = j;
                    break;
                }
            }
        } else {
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] > arr[i]) {
                    left_index = j;
                    break;
                }
            }
            for (let j = i + 1; j < left_index ? 2 * i - left_index : len; j++) {
                if ((arr[j] > arr[i])) {
                    answer[i] = j;
                    break;
                } else answer[i] = left_index
            }
        }
    }
    console.log(answer)
}

function test3(num) {
    let result = num
    while (result < 10) {
        const arr = String(num).split('')
        result = arr.reduce((acc, cur) => acc * (Number(cur)), Number(arr[0]))
    }
    return result
}

const citations = [4, 0, 6, 1, 5]

function isZero(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] !== 0) return false;
    }
    return true;
}

function hindex(arr) {
    const len = arr.length;
    let h = 0;
    if (len === 1 || isZero(arr)) return h;
    while (true) {
        h++;
        let counts = 0;
        for (let i = 0; i < len; i++) {
            if (arr[i] >= h) counts++;
            if (counts >= h) break;
        }
        if (h > counts) {
            console.log(h - 1);
            return;
        }
    }
}

function followingDay(day) {
    // TODO: 여기에 코드를 작성합니다.
    const days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
    let output;
    for (let i = 0; i < days.length; i++) {
        if (day === days[6]) output = days[0];
        else if (day === days[i]) output = days[i + 1];
    }
    return output ? ouput : '올바른 요일이 아닙니다'
}

function isEitherEvenAndLessThan9(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.
    return (num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9);
}

function convertScoreToGradeWithPlusAndMinus(score) {
    // TODO: 여기에 코드를 작성합니다.
    let output = ''
    if (score < 0 || score > 100) return 'INVALID SCORE'

    else if (90 <= score) output = 'A'
    else if (80 <= score) output = 'B'
    else if (70 <= score) output = 'C'
    else if (60 <= score) output = 'D'
    else return 'F'

    if (score % 10 >= 8 || score === 100) {
        output = output + '+'
    } else output = output + '-'
    return output
}

function listPrimes(num) {
    // TODO: 여기에 코드를 작성합니다.
    let answer = '2';
    let isPrime = true
    if (num === 3) {
        answer += `-3`;
    }
    for (let i = 3; i <= num; i += 2) { // num = 5 , answer = '2-3'

        const root = Math.sqrt(i);
        for (let j = 3; j <= root; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            } else {
                isPrime = true
            }
        }
        if (isPrime) {
            answer += `-${i}`
        }
    }
    console.log(answer);
}

function test1(str) {
    const words = str.split(' ')
    const result = {}

    for (let i = 0; i < words.length; i++) {
        result[words[i]] = words[i].length
    }
    return result
}

function takeLetters(num, str) {
    // TODO: 여기에 코드를 작성합니다.R
    console.log(str.substring(0, num))
}

function test3(num) {
    let result = num
    let arr
    while (result > 10) {
        arr = String(result).split('')
        result = arr.reduce((acc, cur) => acc * cur)
    }

    console.log(result)
}

let peopleList = [
    {
        firstName: 'Potter',
        lastName: 'Harry',
        age: 15,
        role: 'student'
    },
    {
        firstName: 'Dumbledore',
        lastName: 'Albus',
        age: 92,
        role: 'principal'
    }
]

function printRole(user) {
    // Joe Blow를 클릭하면 clerk 이
    // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
    // 이 함수는 수정하지 마십시오.
    console.log(user.role);
}

function test4(array) {
    const container = document.querySelector('#container');


    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        const aTag = document.createElement('a');
        const divTag = document.createElement('div');

        aTag.classList.add('name')
        divTag.classList.add('age')
        aTag.textContent = `${array[i].firstName} ${array[i].lastName}`
        divTag.textContent = `${array[i].age}`
        li.appendChild(aTag);
        li.appendChild(divTag)
        container.appendChild(li)
    }
    console.log(container)
    const nameClass = document.querySelectorAll('.name');
    for (const user of nameClass) {
        user.addEventListener('click',
            (e) => {
                const selectedName = e.target.textContent
                const fullName = selectedName.split(' ')
                const selectedUser = array.filter(user => user.firstName === fullName[0])
                printRole(selectedUser[0])
            });
    }
}

function test10(str) {
    const words = str.toLowerCase().split(' ').filter(el => el !== '')
    const result = {}

    for (let word of words) {
        const hasKey = Object.keys(result).includes(word);
        result[word] = hasKey ? result[word] + 1 : 1
    }
    return result
}

function readVertically(arr) {
    const maxStr = arr.reduce((acc, cur) => acc.length < cur.length ? cur : acc)
    const longest = maxStr.length
    let result = '';

    for (let i = 0; i < longest; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j][i] === undefined) {
                continue;
            }
            result += arr[j][i];
        }
    }
    return result

    const longestValue = arr.reduce((acc, cur) => acc.length < cur.length ? cur : acc)
    console.log(longestValue)
    const index = arr.indexOf(longestValue)
    while (true) {
        for (let i = 0; i < arr.length; i++) {
            if (arr) {
                const letter = arr[i][0]
                result += letter
                arr -= arr[i]
            }
        }
        if (arr[index].length === 0) {
            break
        }
    }
}

function flattenArr(arr) {
    /*    if(arr.length === 0) {
            return []
          }
        let result = []

        for(let num of arr) {
          if(Array.isArray(num)) {
            const numArr = flattenArr(num)
            result.push(...numArr)
          } else {
            result.push(num)
          }
        }
        return result*/
    if (arr.length === 0) {
        return []
    }
    const head = arr[0]
    const tail = arr.slice(1)
    if (Array.isArray(head)) {
        return flattenArr([...head, ...tail])
    } else {
        return [head].concat(flattenArr(tail))
    }
}

function orderOfPresentation(N, K) {
    // 조의 개수 N, 발표 순서 K

    const factorial = (n) => {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    };
    let order = 0;
    const isUsed = Array(N + 1).fill(false);

    for (let i = 0; i < K.length; i++) {
        const num = K[i];
        isUsed[num] = true;
        const candidates = isUsed.slice(1, num);
        const validCnt = candidates.filter((el) => el === false).length;
        const formerCnt = validCnt * factorial(N - i - 1);
        order = order + formerCnt;

    }
    return order;
}



function sorting(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}


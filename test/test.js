// const getBinary = n =>
//     [...n.toString(2)].reduce((acc, cur) => (cur === '1' ? ++acc : acc), 0)

// let n = 100

// let answer = n + 1
// while (getBinary(n) !== getBinary(answer)) answer++

// console.log(getBinary(n))
// console.log(getBinary(answer))
// console.log(answer)

const signal = (arr, i) => {
    if (i === 0) return 0
    for (let j = i; j >= 0; j--) {
        if (arr[j] - arr[i] > 0) {
            return j + 1
        }
    }
    return 0
}

// 수신가능한 탑을 구하는 문제
// 레이저는 왼쪽으로만 쏘며 나보다 높은 탑만 레이저를 수신 할 수 있음
let heights = [6, 9, 5, 7, 4]

const solution = heights =>
    heights.reduce((acc, _, i) => {
        acc.push(signal(heights, i))
        return acc
    }, [])

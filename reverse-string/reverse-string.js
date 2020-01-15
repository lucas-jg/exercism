export const reverseString = v => {
    let result = ''
    for (let i = 0; i < v.length; i++) {
        result += v[v.length - (i + 1)]
    }
    return result
}

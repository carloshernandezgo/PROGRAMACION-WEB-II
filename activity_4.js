function validator(array) {
    let count = 0
    array.forEach(n => {
        if (n % 2 === 0) count++
    })

    return count
}

console.log(validator([20, 19, 17, 18, 30, 68, 1]))

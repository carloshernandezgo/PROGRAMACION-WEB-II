function fibonacci(n) {
    const arrFib = [0, 1];

    for (let i = 2; i <= n; i++) {
        arrFib.push(arrFib[i - 1] + arrFib[i - 2])
    }
    return arrFib
}

fibonacci(5)
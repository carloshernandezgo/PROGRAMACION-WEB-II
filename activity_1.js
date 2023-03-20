const array = [1, 2, 1, 2, 2, 2, 3, 3, 3];

let duplicate = {}

array.forEach((item) => {
    if (!duplicate[item]) duplicate[item] = 1;
    else duplicate[item] += 1;
})


Object.entries(duplicate).sort((a, b) => b[1] - a[1]).forEach((element) => {
    console.log(`${element[0]}: ${"*".repeat(element[1])}`)
})
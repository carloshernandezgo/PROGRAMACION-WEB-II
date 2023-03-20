const array = [1, 2, 1, 2, 2, 2, 3, 3, 3];

const result = {};

array.forEach((element) => {
    if (!result[element]) {
        result[element] = 1;
    } else {
        result[element] += 1;
    }
});


let data = Object.entries(result).reduce((max, current) => {
    return current > max ? current : max
})


console.log("Longest:", data[0])
console.log("Number:", data[1])
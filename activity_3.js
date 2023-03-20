const myArray = [1, 1, 2, 2, 3, 1, 2, 3, 7]

let array = []

for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray.length; j++) {
        if (myArray[i] + myArray[j] === 10) {
            array.push([myArray[i], myArray[j]])
        }
    }
}

array.forEach(item => console.log(item))

const students = [
    {
        "name": "Roberto",
        "average": 3.5,
        "sex": "M",
    },
    {
        "name": "Carlos",
        "average": 4,
        "sex": "M",
    },
    {
        "name": "Carolina",
        "average": 4.8,
        "sex": "F",
    },
    {
        "name": "Carla",
        "average": 2.5,
        "sex": "F",
    },
    {
        "name": "Pedro",
        "average": 3,
        "sex": "M",
    }
];

const average = {
    average_sex: {
        "F": 0,
        "M": 0
    },
    FP: 0,
    PP: 0,
    N: 0,
    D: 0,
    maximum: -Infinity,
    minimum: Infinity,
};

let students_male = 0
let students_female = 0
students.forEach((student) => {
    if (student.sex === 'F') students_female += 1;
    else students_male += 1

    average.average_sex[student.sex] += student.average;
    if (student.average < 3) average.FP += 1;
    else if (student.average <= 3.25) average.PP += 1;
    else if (student.average < 4) average.N += 1;
    else average.D += 1;

    if (student.average > average.maximum) average.maximum = student.average;
    if (student.average < average.minimum) average.minimum = student.average;
});

average.average_sex.F /= students_female
average.average_sex.M /= students_male
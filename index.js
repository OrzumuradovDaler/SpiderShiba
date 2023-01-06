let students = [
    {
        name: "Shakhboz",
        age: 18,
        gender: "m"
    },
    {
        name: "Alexandr",
        age: 32,
        gender: "m"
    },
    {
        name: "Daler",
        age: 15,
        gender: "m"
    },
    {
        name: "Muzaffar",
        age: 19,
        gender: "m"
    },
    {
        name: "Eldor",
        age: 16,
        gender: "m"
    },
    {
        name: "Ibragim",
        age: 14,
        gender: "w"
    },
    {
        name: "Ravshan",
        age: 18,
        gender: "m"
    },
    {
        name: "Timur",
        age: 19,
        gender: "w"
    },
    {
        name: "Aziz",
        age: 15,
        gender: "w"
    },
    {
        name: "Darya",
        age: 26,
        gender: "w"
    },
    {
        name: "Mukhlisa",
        age: 16,
        gender: "w"
    }
]

let teenagers = []
let others = []

for(let item of students) {
    if(item.age < 18) {
        others.push(item.name)
     
    } else {
        teenagers.push(item.name)
    }
}
console.log(teenagers)
console.log(others)


// for(let i = 0; i <= students.length - 1; i++) {
//     if(students[i].age < 18) {
//         others.push(students[i].name)
//     } else {
//         teenagers.push(students[i].name)
//     }
// }
// console.log(teenagers)
// console.log(others)



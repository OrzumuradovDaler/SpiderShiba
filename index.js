let arr = [
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
let names = prompt('any name')
if(names == arr[0].name){
    console.log(
        arr[0]
    )

        let ask = confirm("Вы точно хотите удалить этого пользователя")
        if(ask == true){
            arr.splice(0,1)
            console.log(
                arr
            )
        }
}else if(names == arr[1].name){
    console.log(
        arr[1]
    )
        let ask = confirm("Вы точно хотите удалить этого пользователя")
        if(ask == true){
            arr.splice(1,1)
            console.log(
                arr
            )
        } else{
            console.log(arr)
        }
}
else if(names == arr[2].name){
    console.log(
        arr[2]
    )
        let ask = confirm("Вы точно хотите удалить этого пользователя")
        if(ask == true){
            arr.splice(2,2)
            console.log(
                arr
            )
        } else{
            console.log(arr)
        }
}
else if(names == arr[3].name){
    console.log(
        arr[3]
    )
        let ask = confirm("Вы точно хотите удалить этого пользователя")
        if(ask == true){
            arr.splice(3,3)
            console.log(
                arr
            )
        } else{
            console.log(arr)
        }
}
else if(names == arr[4].name){
    console.log(
        arr[4]
    )
        let ask = confirm("Вы точно хотите удалить этого пользователя")
        if(ask == true){
            arr.splice(4,4)
            console.log(
                arr
            )
        } else{
            console.log(arr)
        }
}
else if(names == arr[5].name){
    console.log(
        arr[5]
    )
        let ask = confirm("Вы точно хотите удалить этого пользователя")
        if(ask == true){
            arr.splice(5,5)
            console.log(
                arr
            )
        } else{
            console.log(arr)
        }
}
else if(names == arr[6].name){
    console.log(
        arr[6]
    )
        let ask = confirm("Вы точно хотите удалить этого пользователя")
        if(ask == true){
            arr.splice(6,6)
            console.log(
                arr
            )
        } else{
            console.log(arr)
        }
}
else if(names == arr[7].name){
    console.log(
        arr[7]
    )
        let ask = confirm("Вы точно хотите удалить этого пользователя")
        if(ask == true){
            arr.splice(7,7)
            console.log(
                arr
            )
        } else{
            console.log(arr)
        }
}
else if(names == arr[8].name){
    console.log(
        arr[8]
    )
        let ask = confirm("Вы точно хотите удалить этого пользователя")
        if(ask == true){
            arr.splice(8,8)
            console.log(
                arr
            )
        } else{
            console.log(arr)
        }
}
else if(names == arr[9].name){
    console.log(
        arr[9]
    )
        let ask = confirm("Вы точно хотите удалить этого пользователя")
        if(ask == true){
            arr.splice(9,9)
            console.log(
                arr
            )
        } else{
            console.log(arr)
        }
}
else if(names == arr[10].name){
    console.log(
        arr[10]
    )
        let ask = confirm("Вы точно хотите удалить этого пользователя")
        if(ask == true){
            arr.splice(10,10)
            console.log(
                arr
            )
        } else{
            console.log(arr)
        }
}
else{
    console.log("Пользователь не найден")
}
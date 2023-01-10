// Напишите функцию которая заполняет массив нужными данными 


// let arr = ['a', 'a', 'a', 'a' , 'b', 'c', 'c', 'b', 'c']
// let total = arr.reduce(function(item, index) {
//     item[index] = (item[index] || 0) + 1
//     return item
//   },{})
//   console.log(total)


// compact
// Убрать все не желательные элементы 


// let arr = ['hello', 1, null,  true,2, false,  undefined,3, '', NaN, ]
// let total = arr.filter(e => e != null && e != 0)
// console.log(total)


// unique
// Оставить в массиве только оригинал


// let arr = ['a', 'b', true, 'a', false, 'b', true]
// let unique = Array.from(new Set(arr))
// console.log(unique)


// Проверить массив на схожесть

// let arr = [1,2,3,4,5]
// let arr2 = [1,2,3,4,5,]


// arr.filter((item, i) =>{
// console.log(arr[item[i]] == arr2[item[i]])
// })

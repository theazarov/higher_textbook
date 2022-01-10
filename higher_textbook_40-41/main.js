'use strict';

//Перебор коллекций Set циклом:

let set = new Set

set.add(1)
set.add(2)
set.add(3)

for(let elem of set){
    console.log(elem)
}

set.clear

set.add(12)
set.add(3)
set.add(88)

let result = new Number

for(let elem of set){
    result += elem
}

console.log(result)

//Преобразование коллекций Set:

let arr = [...set]
console.log(arr)
console.log(set)

arr = Array.from(set)
console.log(arr)

arr = ['one', 2, 3];

set = new Set(arr)
console.log(set)

/*Задача 2js.Sp.Cl.StCn

Дан массив. Преобразуйте его в коллекцию.*/

let myArr = ['one', '2', 3, '2', 2, 2]

let mySet = new Set(myArr)

console.log(mySet)

result = new Number()

for(let elem of mySet){
    if(typeof elem == "number"){
        result+= elem
    }
}
console.log(result)
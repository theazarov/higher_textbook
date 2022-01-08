'use strict';

let elems = document.querySelectorAll('p')
console.log(elems)
console.log(Array.isArray(elems))

let arr = []
console.log(Array.isArray(arr))

//Преобразование псевдомассивов в JavaScript:

for(let elem of elems){
    arr.push(elem)
}
console.log(Array.isArray(arr))

arr = Array.from(elems)
console.log(Array.isArray(arr))

/*Задача 1js.Sp.Cl.PaCn

Каким-нибудь способом получите псевдомассив элементов. Преобразуйте его в массив тремя описанными способами.*/

elems = document.querySelectorAll('h1')
arr = []

for(let elem of elems){
    arr.push(elem)
}
console.log(Array.isArray(arr))

arr = [...elems]
console.log(arr)
console.log(Array.isArray(arr))

arr = Array.from(elems)
console.log(arr)
console.log(Array.isArray(arr))
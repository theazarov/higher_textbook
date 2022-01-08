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

/*Задача 2js.Sp.Cl.PaCn

Даны абзацы:

let elems = document.querySelectorAll('p');
С помощью метода slice получите все абзацы, кроме первого и последнего.*/

elems = document.querySelectorAll('p');
arr = [...elems]
arr = arr.slice(1, arr.length-1)
console.log(arr)
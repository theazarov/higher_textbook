'use strict';

//Коллекции Map в JavaScript:

let obj = {a: 1, b: 2, c: 3};

let map = new Map

let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, 'one')
map.set(arr2, 'two')
console.log(map.get(arr1))

/*Задача 1js.Sp.Cl.MpIn

Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки.*/

arr1 = [1, 2];
arr2 = [3, 4];
let arr3 = [5, 6]

map = new Map

map.set(arr1, 'one')
map.set(arr2, 'two')
map.set(arr3, 'three')

console.log(map.get(arr1))
console.log(map.get(arr2))
console.log(map.get(arr3))

/*Задача 2js.Sp.Cl.MpIn

Пусть даны 3 объекта и 3 массива. Создайте коллекцию Map, сделайте ключами коллекции объекты, а значениями - соответствующие массивы.*/

let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {a: 1, b: 2, c: 3};
let obj3 = {a: 1, b: 2, c: 3};

arr1 = ['one']
arr2 = ['two']
arr3 = ['three']

map = new Map

map.set(obj1, arr1)
map.set(obj2, arr2)
map.set(obj3, arr3)

console.log(map.get(obj1))
console.log(map.get(obj2))
console.log(map.get(obj3))

//Полезные свойства и методы коллекций Map:

console.log(map.size)
console.log(map.has(obj))

map.delete(obj3)
console.log(map.has(obj3))

map.clear()
console.log(map.get(obj1))
console.log(map.size)

//Перебор коллекций Map циклом:

arr1 = [1, 2];
arr2 = [3, 4];

map.set(arr1, 'one')
map.set(arr2, 'two')

for(let elem of map){
    console.log(elem, elem[0], elem[1])
}

for(let [key, elem] of map){
    console.log(key)
    console.log(elem)
}
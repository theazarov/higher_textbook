"use strict";

let div = document.querySelector("div");
let elems1 = document.querySelectorAll("p");
let elems2 = document.getElementsByTagName("p");

let p = document.createElement("p");
div.append(p);
console.log(elems1);
console.log(elems2);

let elemsOne = div.childNodes;
console.log(elemsOne);

let elemsTwo = div.children;
console.log(elemsTwo);

//Коллекции Map в JavaScript:

let obj = { a: 1, b: 2, c: 3 };
let map = new Map();

let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, "data1");
map.set(arr2, "data2");

console.log(map.get(arr1));
console.log(map.get(arr2));

/*Задача 1js.Sp.Cl.MpIn

Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки.*/

arr1 = [1, 1];
arr2 = [2, 2];
let arr3 = [3, 3];

map = new Map();

map.set(arr1, "one");
map.set(arr2, "two");
map.set(arr3, "three");

console.log(map.get(arr2));
console.log(map.get(arr3));
console.log(map.get(arr1));

/*Задача 2js.Sp.Cl.MpIn

Пусть даны 3 объекта и 3 массива. Создайте коллекцию Map, сделайте ключами коллекции объекты, а значениями - соответствующие массивы.*/

arr1 = [1, 1];
arr2 = [2, 2];
arr3 = [3, 3];

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { a: 1, b: 2, c: 3 };
let obj3 = { a: 1, b: 2, c: 3 };

let myMap = new Map();

myMap.set(obj1, arr1);
myMap.set(obj2, arr2);
myMap.set(obj3, arr3);

console.log(myMap.get(obj1));
console.log(myMap.get(obj2));
console.log(myMap.get(obj3));
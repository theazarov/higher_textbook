"use strict";

//Отделение ключей и значений в коллекциях Map:

let arr1 = [1, 2];
let arr2 = [3, 4];

let map = new Map();

map.set(arr1, "one");
map.set(arr2, "two");

let values = map.values();
console.log(values);

let keys = map.keys();
console.log(keys);

let entries = map.entries();
console.log(entries);

/*Задача 1js.Sp.Cl.MpKV

Пусть дана коллекция Map. Получите массив ее ключей и переберите их циклом for-of.*/

arr1 = [1, 2];
arr2 = [3, 4];

map.clear();

map.set(arr1, "one");
map.set(arr2, "two");

keys = map.keys();

for (let key of keys) {
  console.log(key);
}

/*Задача 2js.Sp.Cl.MpKV

Пусть дана коллекция Map. Получите массив ее элементов и переберите их циклом for-of.*/

arr1 = [1, 2];
arr2 = [3, 4];

map.clear();

map.set(arr1, "one");
map.set(arr2, "two");

values = map.values();

for (let elem of values) {
  console.log(elem);
}

//Применение коллекций Map:

let elems = document.querySelectorAll("p");

map.clear();

let i = 1;

for (let elem of elems) {
  map.set(elem, i++);
}

console.log(map.size);

for (let elem of elems) {
  elem.addEventListener("click", function () {
    this.textContent = this.textContent + " " + map.get(this);
  });
}

/*Задача 1js.Sp.Cl.MpAp

Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map, ключами в которой будут инпуты, а значением - их порядковый номер на странице. Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер.*/

/*
let inputs  = document.querySelectorAll('input')

map.clear()
i = 0

for(let input of inputs){
    map.set(input, ++i)
}

console.log(map.size)

for(let input of inputs){
    input.addEventListener('click', function(){
        this.value = map.get(this)
    })
}
*/

/*Задача 2js.Sp.Cl.MpAp

Даны инпуты. В каждый инпут можно ввести число. Пусть по нажатию на Enter инпут запоминает введенное число. Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился массив всех введенных ранее в инпут чисел.*/

let inputs = document.querySelectorAll("input");

map.clear();

for (let input of inputs) {
  let arr = [];

  input.addEventListener("keydown", function (event) {
    if (event.keyCode == 13 && input.value === "cmd") {
      input.value = "";
      arr = [];
      map.delete(input);
    }
    if (event.keyCode == 13 && input.value != "cmd") {
      arr.push(input.value);
      map.set(input, arr);
      input.value = "";
    }
  });

  input.addEventListener("blur", function () {
    console.log(map.get(input));
  });
}
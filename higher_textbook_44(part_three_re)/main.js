'use strict';

/*Задача :

Дана коллекция DOM элементов. Преобразуйте ее в массив.*/

let one = document.querySelectorAll('.one')
console.log([...one])

/*Задача :

Дан объект. Сделайте так, чтобы к нему можно было применить оператор spread и при этом возвращались значения объекта.*/

let obj = {a:1, b:2, c:3}

obj[Symbol.iterator] = function *(){
    for(let key in this){
        yield this[key]
    }
}

console.log([...obj])

/*Задача :

Дан объект. Сделайте так, чтобы к нему можно было применить оператор spread и при этом возвращались ключи объекта.*/

obj = {a:1, b:2, c:3}

obj[Symbol.iterator] = function *(){
    for(let key in this){
        yield key
    }
}

console.log([...obj])

//Оператор spread и строки:

/*Задача :

Сделайте функцию, которая параметром будет принимать строку, а возвращать массив ее символов.*/

function toString(str){
    return [...str]
}

console.log(toString('abc'))

/*Задача :

Сделайте функцию, которая параметром будет принимать строку и выполнять переворот этой строки так, чтобы символы шли в обратном порядке.*/

function stringReverse(str){
    return [...str].reverse()
}

console.log(stringReverse('abcd'))

/*Задача :

Дано число. Найдите сумму цифр этого числа.*/

let num = 43244534
let sum = new Number()

let arr = [...String(num)]

for(let digit of arr){
    sum += Number(digit)
}

console.log(sum)

//Применение итераторов, деструктуризации и for-of для получение порядкового номера DOM элемента:

/*Задача :

Даны абзацы и кнопка. Сделайте так, чтобы по нажатию на кнопку в конец каждого абзаца добавился его порядковый номер.*/

let two = document.querySelectorAll('.two')
let button = document.getElementById('button')

button.addEventListener('click', function(){
    let entries = two.entries()

    for(let [key, elem] of entries){
        elem.innerHTML += key
    }
})
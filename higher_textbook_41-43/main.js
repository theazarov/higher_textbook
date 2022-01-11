'use strict';

//Преобразование коллекций Set RE:

let set = new Set([1,2,3])
let arr = [...set]
console.log(arr)

arr = Array.from(set)
console.log(arr)

/*Задача 1js.Sp.Cl.StCn

Дана коллекция Set. Преобразуйте ее в массив двумя описанными способами.*/

set.clear()
set.add(1)
set.add('one')
console.log(set)

arr = [...set]
console.log(arr)

arr = Array.from(set)
console.log(set)

arr = [1,2,3]
set.clear()
set = new Set(arr)
console.log(set)

/*Задача 2js.Sp.Cl.StCn

Дан массив. Преобразуйте его в коллекцию.*/

arr = ['one', 'two']
set.clear()
set = new Set(arr)
console.log(set)

//Удаление дублей с помощью коллекций Set:

arr = [1, 2, 3, 1, 3, 4];
console.log(arr)
set.clear()
set = new Set(arr)
arr = [...set]
console.log(arr)

/*Задача 1js.Sp.Cl.StRD

Напишите функцию, которая параметром будет принимать массив и возвращать этот массив без дублей.*/

arr = [1, 2, 3, 1, 3, 4];

function clearArr(arr){
    let set = new Set(arr)
    arr = [...set]
    return arr
}
console.log(clearArr(arr))

//Получение дом элементов без дублей:

let elemsOne = document.querySelectorAll('.one')
let clickOne = document.getElementById('clickOne')

set = new Set

for(let elem of elemsOne){
    elem.addEventListener('click', function(){
        set.add(this)
    })
}

clickOne.addEventListener('click', function(){
    for(let elem of set){
        elem.textContent = elem.textContent + '!'
    }
})

/*Задача 2js.Sp.Cl.StRD

Даны абзацы и кнопка. Пользователь кликает на эти абзацы в произвольном порядке. Сделайте так, чтобы по нажатию на кнопку в конец каждого абзаца, на который был совершен клик, был добавлен восклицательный знак.*/

set.clear()

let elemsTwo = document.querySelectorAll('.two')
let clickTwo = document.getElementById('clickTwo')

for(let elem of elemsTwo){
    elem.addEventListener('click', function(){
        set.add(elem)
    })
}

clickTwo.addEventListener('click', function(){
    for(let elem of set){
        elem.textContent = elem.textContent + ' sos'
    }
})

//Массивы ArrayBuffer в JavaScript:

let buffer = new ArrayBuffer(10)
console.log(buffer)

/*Задача 1js.Sp.Cl.Bfr

Создайте буфер размером в 32 байта. Выведите его в консоль.*/

buffer = new ArrayBuffer(32)
console.log(buffer)
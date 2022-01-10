'use strict';

//Применение коллекций Map RE:

let elems = document.querySelectorAll('p')
let map = new Map
let i = 0
for(let elem of elems){
    map.set(elem, i++)
    elem.addEventListener('click', function(){
        elem.textContent = elem.textContent + ' ' + map.get(elem)
    })
}

/*Задача 1js.Sp.Cl.MpAp

Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map, ключами в которой будут инпуты, а значением - их порядковый номер на странице. Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер.*/

let one = document.querySelectorAll('.one')
map.clear()
i = 0

for(let input of one){
    map.set(input, i++)
    input.addEventListener('click', function(){
        input.value = map.get(input)
    })
}

/*Задача 2js.Sp.Cl.MpAp

Даны инпуты. В каждый инпут можно ввести число. Пусть по нажатию на Enter инпут запоминает введенное число. Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился массив всех введенных ранее в инпут чисел.*/

let two = document.querySelectorAll('.two')
map.clear()

for(let input of two){
    let arr = []

    input.addEventListener('keydown', function(event){
        if(event.keyCode == 13){
            arr.push(input.value)
            map.set(input, arr)
            input.value = ''
        }
    })
    input.addEventListener('blur', function(){
        console.log(map.get(input))
    })
}

//Коллекции Set в JavaScript:

let set = new Set([1, 4, '4', 2, 3, 3, 4, 4, 5])
console.log(set)

set.add(10)
set.add(9)

/*Задача 1js.Sp.Cl.StIn

Дан массив с числами:

let arr = [1, 2, 3, 1, 3, 4];
С помощью этого массива создаейте коллекцию Set.*/

let arr = [1, 2, 3, 1, 3, 4];
let setOne = new Set(arr)
console.log(setOne)

/*Задача 2js.Sp.Cl.StIn

Создайте пустую коллекцию Set. С помощью метода add добавьте в нее элементы со значениями 1, 2 и 3.*/

let setTwo = new Set
setTwo.add(1)
setTwo.add(1)
setTwo.add(2)
setTwo.add(3)
console.log(setTwo)

/*Задача 3js.Sp.Cl.StIn

Создайте коллекцию Set с начальными значениями 1, 2 и 3. С помощью метода add добавьте в коллекцию еще одно число 2. Выведите содержимое коллекции в консоль, убедитесь, что число 2 не добавилось второй раз.*/

setTwo.add(1)
setTwo.add(2)
console.log(set)

//Полезные свойства и методы коллекций Set:

console.log(setTwo.size)
console.log(setTwo.has(9))
console.log(set.has(9))

console.log(set.delete(9))
console.log(set.has(9))
set.clear()

/*Задача 1js.Sp.Cl.StMP

Создайте коллекцию Set с начальными значениями 1, 2 и 3. Выведите на экран количество элементов в коллекции.*/

set.add(1)
set.add(3)
set.add(2)

console.log(set.size)

/*Задача 2js.Sp.Cl.StMP

Создайте коллекцию Set с начальными значениями 1, 2 и 3. Проверьте наличие в коллекции элемента со значением 3, а затем элемента со значением 4.*/

console.log(set.has(3))
console.log(set.has(4))
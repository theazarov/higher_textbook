"use strict";

/*Задача :

Дан массив. Переберите его элементы через for-of, выведите их на экран.*/

// let obj = {1:'one', 2:'two', 3:'three'}

// obj[Symbol.iterator] = function *(){
//     for(let elem in this){
//         yield elem
//     }
// }

// for(let elem of obj){
//     console.log(elem)
// }

// console.log(obj[Symbol.iterator])

/*Задача :

Даны абзацы. Получите их через querySelectorAll, переберите через цикл for-of, добавьте каждому абзацу в конец текста восклицательный знак.*/

// let one = document.querySelectorAll('.one')
// console.log(one)

// for(let elem of one){
//     elem.innerHTML += '!'
// }

/*Задача :

Дан массив. Обратитесь к его элементу с ключом Symbol.iterator и выведите результат в консоль.*/

// let arr = [1, 2, 3]
// console.log(arr[Symbol.iterator])

//Введение в функции-генераторы ES6:

/*Задача :

Сделайте функцию-генератор, которая будет возвращать итератор. Первый вызов метода next итератора должен вернуть 1, второй вызов - 2, третий вызов - 3.*/

// let iterator = createIterator()

// function *createIterator(){
//     yield 1
//     yield 2
//     yield 3
// }

// console.log(iterator.next())
// console.log(iterator.next())
//console.log(iterator.next())
//console.log(iterator.next())

/*Задача :

Переберите итератор, полученный в предыдущей задаче через цикл for-of.*/

// for(let elem of iterator){
//     console.log(elem)
// }

/*Задача :

Дан массив. С помощью функции-генератора создайте итератор, перебирающий элементы массива по одному.*/

// arr = ['one', 'two', 'three']
// iterator = createIterator(arr)

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

/*Задача :

Дан массив. С помощью функции-генератора создайте итератор, перебирающий элементы массива с конца.*/

// let arr = ['one', 'two', 'three']

// function *createIterator(arr){
//     for(let i = arr.length-1; i >= 0; i--){
//         yield  arr[i]
//     }
// }

// let iterator = createIterator(arr)

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

/*Задача :

Дан массив. С помощью функции-генератора создайте итератор, каждый вызов которого будет возвращать по два элемента массива (сначала первые два, потом вторые два и так далее). Элементы должны возвращаться в виде массива из двух элементов.*/

// let arr = [1,2,3,4,5,6,7,8,9,0]

// function *createIterator(arr){
//     for(let i = 0; i <= arr.length+2; i++){
//         yield arr.splice(0, 2)
//     }
// }

// let iterator = createIterator(arr)

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

/*Задача :

Дан массив с числами. С помощью функции-генератора создайте итератор, каждый вызов которого будет возвращать следующий элемент массива, являющийся четным числом.*/

// let arr = [1,32,5,67,7,8,9,0,99,76]

// let iterator = createIterator(arr)

// function *createIterator(arr){
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] % 2 == 0){
//                 yield arr[i]
//             }
//         }
//     }
// console.log(arr[3])

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

/*Задача :

Дан массив с числами. С помощью функции-генератора создайте итератор, каждый вызов которого будет возвращать следующее число Фибоначчи.*/

// let iterator = createIterator(100);

// function* createIterator(num) {
//   let one = 0;
//   let two = 1;
//   let result = Number();

//   for (let i = 0; i < num; i++) {
//     result = one + two;
//     two = one;
//     one = result;
//     yield result;
//   }
// }

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//Создаем итератор объекта с помощью генератора ES6:

/**Задача :

Дан объект. С помощью функции-генератора создайте его итератор, переберите элементы этого объекта с помощью цикла for-of.*/

// let obj = {1:'one', 2:'two'}

// function *createIterator(obj){
//     for(let key in obj){
//         yield obj[key]
//     }
// }

// let iterator = createIterator(obj)

// for(let elem of iterator){
//     console.log(elem)
// }

/*Задача :

Дан объект. Сделайте так, чтобы его элементы можно было перебрать с помощью цикла for-of.*/

// let obj = {
//     a:'one',
//     b:'two',
//     c:'three',
//     [Symbol.iterator]: function *(){
//         for(let key in this){
//             yield this[key]
//         }
//     }
// }

// for(let elem of obj){
//     console.log(elem)
// }

//Встроенные итераторы коллекций values, keys и entries:

/*Задача :

Дан массив. Переберите элементы этого массива через цикл for-of так, чтобы в каждой итерации в переменную elem записывался элемент массива, а в переменную key - ключ.*/

// let arr = ['a','b','c']
// let iterator = arr.entries()

// for(let [key, elem] of iterator){
//     console.log(key + ' : ', elem)
// }

/*Задача :

Дан массив. Получите массив ключей этого массива. Найдите сумму элементов этого нового полученного массива.*/

// let arr = ['a','b','c']
// let iterator = arr.keys()

// let result = Number()

// for(let key of iterator){
//     result += Number(key)
// }

// console.log(result)

/*Задача :

Дана коллекция Map. Получите массив ее ключей.*/

// let map = new Map()

// map.set('a', 1)
// map.set('b', 2)
// map.set('c', 3)

// let iterator = map.keys()

// let result = new Array()

// for(let key of iterator){
//     result.push(key)
// }

// console.log(result)

/*Задача :

Дана коллекция Map. Получите массив ее значений.*/

// let map = new Map()

// map.set(1, 'a')
// map.set(2, 'b')
// map.set(3, 'c')

// let iterator = map.values()

// for(let value of iterator){
//     console.log(value)
// }
"use strict";

/*
let iterator = createIterator({a:1, b:2, c:3})

function *createIterator(obj){
    for(let key in obj){
        yield obj[key]
    }
}

for(let elem of iterator){
    console.log(elem)
}
*/

/*Задача :

Дан массив. Обратитесь к его элементу с ключом Symbol.iterator и выведите результат в консоль.*/

/*
let arr = [1, 2, 3, 4]

console.log(arr[Symbol.iterator])
*/

//Введение в функции-генераторы ES6:

/*Задача :

Сделайте функцию-генератор, которая будет возвращать итератор. Первый вызов метода next итератора должен вернуть 1, второй вызов - 2, третий вызов - 3.*/

/*
iterator = createIterator([1, 2, 3])

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
*/

/*
let iterator = createIterator([1, 2, 3, 4])

function *createIterator(arr){
    for(let elem in arr){
        yield arr[elem]
    }
}
*/

//console.log(iterator.next())

/*Задача :

Переберите итератор, полученный в предыдущей задаче через цикл for-of.*/
/*
for(let elem of iterator){
    console.log(elem)
}
*/

/*Дан массив. С помощью функции-генератора создайте итератор, перебирающий элементы массива по одному.*/

/*
let arr = ['hi', 'sos', 'by']
let iterator = createIterator(arr)

function *createIterator(arr){
    for(let elem of arr){
        yield elem
    }
}

console.log(iterator.next().value)
*/

/*Задача :

Дан массив. С помощью функции-генератора создайте итератор, перебирающий элементы массива с конца.*/

/*
let arr = ['hi', 'sos', 'by']
let iterator = createIterator(arr)

function *createIterator(arr){
    for(let i = arr.length; i >= 0; i--){
        yield arr[i] + '!'
    }
}

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
*/

/*Задача :

Дан массив. С помощью функции-генератора создайте итератор, каждый вызов которого будет возвращать по два элемента массива (сначала первые два, потом вторые два и так далее). Элементы должны возвращаться в виде массива из двух элементов.*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let iterator = createIterator(arr);

function *createIterator(arr){
    for(let i = 0; i < arr.length; i+2){
        yield arr.splice(0, 2)
    }
}

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next())
*/

/*Задача :

Дан массив с числами. С помощью функции-генератора создайте итератор, каждый вызов которого будет возвращать следующий элемент массива, являющийся четным числом.*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let iterator = createIterator(arr)

function *createIterator(arr){
    for(let i = 0; i < arr.length; i++){

        if(i % 2 == 0){
            yield arr[i]
        }
    }
}

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next())
*/

/*Задача :

Дан массив с числами. С помощью функции-генератора создайте итератор, каждый вызов которого будет возвращать следующее число Фибоначчи.*/

/*
let arr = function (num) {
  let result = new Array();
  let i = 1;

  while (i < num) {
    result.push(i);
    i++;
  }
  return result;
};

let iterator = createIterator(arr(10));

function* createIterator(arr) {
  let one = 0;
  let two = 1;

  for (let i = 0; i < arr.length; i++) {
    let result = one + two;
    two = one;
    one = result;

    yield result
  }
}

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
*/

/*
let one = 0
let two = 1

for(let i = 0; i < 20; i++){

    let result = one + two
    two = one
    one = result
}
*/

//Создаем итератор объекта с помощью генератора ES6:

/*Задача :

Дан объект. С помощью функции-генератора создайте его итератор, переберите элементы этого объекта с помощью цикла for-of.*/

/*
let obj = {a:1, b:2, c:3}

let iterator = createIterator(obj)

function *createIterator(obj){
    
    for(let key in obj){
        yield [key, obj[key]]
    }
    
}

for(let elem of iterator){
    console.log(elem)
}
console.log(iterator.next())
*/

//Создание итерируемых объектов на ES6:

/*Задача :

Дан объект. Сделайте так, чтобы его элементы можно было перебрать с помощью цикла for-of.*/

/*
let obj = {
    a:'1',
    b:2,
    c:'three',
    [Symbol.iterator]: function *(){
        for(let key in obj){
            yield obj[key]
        }
    }
}

for(let elem of obj){
    console.log(elem)
}

obj = {
    a:'odin',
    b:'sos',
    [Symbol.iterator]: function *(){
        for(let key in this){
            yield this[key]
        }
    }
}

for(let elem of obj){
    console.log(elem)
}
*/

//Встроенные итераторы коллекций values, keys и entries:

/*Задача :

Дан массив. Переберите элементы этого массива через цикл for-of так, чтобы в каждой итерации в переменную elem записывался элемент массива, а в переменную key - ключ.*/

/*
let arr = ['one', 'two', 'three']

let iterator = arr.entries()

for(let [key, value] of iterator){
    console.log(key, value)
}
*/

/*Задача :

Дан массив. Получите массив ключей этого массива. Найдите сумму элементов этого нового полученного массива.*/

/*
arr = ['a', 'e', 'd', 't', 'y']

iterator = arr.keys()

let result = new Array()
let sum = Symbol.for('sum')

for(let num of iterator){
    result.push(num)
}

result[sum] = function (){
    let sum = new Number()

    for(let elem of this){
        sum += elem
        
    }
    return sum
}

console.log(result[sum]())
*/

/*Задача :

Дана коллекция Map. Получите массив ее значений.*/

/*
let map = new Map

map.set('1', 'one')
map.set('2', 'two')
map.set('3', 'three')

map.get([Symbol.iterator], function *(){
    for(let key in this){
        yield key
    }

})

for(let elem of map){
    console.log(elem)
}

console.log(map.get('2'))

let iterator = map.keys()

for(let [key, value] of iterator){
    console.log(value)
}
*/

/*Задача :

Дана коллекция Map. Получите массив ее ключей.*/

let map = new Map

map.set(1, 'one')
map.set(2, 'two')

let iterator = map.entries()

for(let [key, value] of iterator){
    console.log(key)
    console.log(value)
}
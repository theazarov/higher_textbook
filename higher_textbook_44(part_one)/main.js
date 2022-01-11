"use strict";

let obj = { 1: "ONE", 2: "TWO", 3: "-" };

console.log(obj[3]);

obj[3] = function () {
  console.log("it's work!");
};

console.log(obj);
console.log(obj[3]);

let one = document.getElementById("one");
one.addEventListener("click", obj[3]);

let symOne = Symbol("hi");

obj[symOne] = "Я здесь";

console.log(obj);
console.log(obj[symOne]);
//console.log(obj['Symbol(hi)'])

for (let elem in obj) {
  console.log(elem);
}

/*Задача :

Пусть дан объект. Создайте символ и добавьте в объект еще один элемент, ключом которого будет созданный символ, а значением - какая-нибудь строка. Переберите объект через цикл for-in, убедитесь в том, что новый элемент не появляется при переборе.*/

obj = { 1: "one", 2: "two", 3: "three" };
let symTwo = Symbol();

obj[symTwo] = "какая нибудь строка...";
console.log(obj);
console.log(obj[symTwo]);

for (let elem in obj) {
  console.log(elem);
}

/*Задача :

Пусть дан объект. Добавьте в него еще один элемент, значением которого будет функция, выводящая на экран '!', а ключом - созданный вами символ.*/

let symThree = Symbol();

obj[symThree] = function () {
  console.log("hi");
};
console.log(obj[symThree]);

obj = {
	a: 1,
	b: 2,
	c: 3,
    func: function(){
        console.log('hi')
        console.log(this)

        for(let key in this){
            console.log(key)
        }
    }
}
obj['func']()

/*Задача :

Пусть дан объект, ключами которого являются какие-то строки, а значением - числа. Добавьте в наш объект функцию, которая будучи вызванной будет возвращать сумму элементов нашего объекта.*/

obj = {'one':3, 'two':54, 'three':12, 'four':0}
let symFour = Symbol()

obj[symThree] = function(){
    let result = Number()
    for(let num in this){
        result += obj[num]
    }
    return result
}

console.log(obj[symThree]())

//Символы и массивы:

let arr = [1, 2, 3]
let symFive = Symbol()

arr[symFive] = function(){
    for(let elem of this){
        console.log(elem)
    }
}
console.log(arr)
arr[symFive]()

/*Задача :

Пусть дан массив с числами. Добавьте в этот массив функцию, которая будет возвращать сумму элементов этого массива. Сделайте так, чтобы наша функция имела символьный ключ.*/

arr = [1, 2, 3, 55, 99]
let symSix = Symbol()

arr[symSix] = function(){
    let result = Number()

    for(let num of this){
        result += num
    }
    return result
}

console.log(arr[symSix]())

//Symbol.for:

/*Задача :

Переделайте предыдущую задачу так, чтобы ключ-символ для функции задавался через Symbol.for.*/

arr = [1, 2, 3, 55, 99]

let num = Symbol.for('num')

arr[num] = 'five'
console.log(arr)

for(let elem of arr){
    console.log(elem)
}
console.log(arr[num])

let myFunc = Symbol.for('func')

arr[myFunc] = function (){
    console.log('hi')
}
arr[myFunc]()

/*Задача :

Пусть у нас есть скрипт. В этом скрипте есть функция, которая возвращает массив, заполненный случайными числами от 1 до 10. В этом скрипте также есть функция, которая параметром принимает два массива с числами и возвращает массив элементов, которые есть в обоих массивах.

Сделайте так, чтобы массивы, возвращаемые любой из функций нашего скрипта, содержали функцию, возвращающую сумму чисел этого массива. Ключ этой функции должен быть одинаковым для всех массивов, то есть созданным через Symbol.for.*/

let sum = Symbol.for('sum')

function getRundom(){
    let arr = new Array()

    for(let i = 0; i < 10; i++){
        arr.push(Math.floor(Math.random() * (10 - 0) + 0))
    }

    let sum = Symbol.for('sum')

    arr[sum] = function(){
        let result = new Number()
        for(let num of this){
            result += num
        }
        return result
    }

    console.log(arr[sum]())

    return arr
}

function clearArr(arrOne, arrTwo){

    let sum = Symbol.for('sum')
    console.log(arrOne[sum]())
    console.log(arrTwo[sum]())

    for(let elem of arrTwo){
        arrOne.push(elem)
    }

    let set = new Set(arrOne)
    arrOne = [...set]

    return arrOne, arrOne[sum](), arrTwo[sum]()
}
console.log(clearArr(getRundom(), getRundom()))
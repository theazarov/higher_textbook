'use strict';

//Выбрасывание исключительных ситуаций в JavaScript:

function div(one, two){
    if(one !== 0){
        return one / two
    } else{
        throw new Error('ошибка деления на ноль')
    }
}

try {
    console.log(div(0,3))
} catch (error) {
    console.log('вы пытаетесь делить на 0, что запрещено')
}

/*Задача 1js.Sp.Exc.Thr

В JavaScript попытка извлечь корень из отрицательного числа не приводит к выбрасыванию исключения:

let result = Math.sqrt(-1);
console.log(result); // выведет NaN
Напишите свою функцию, которая будет извлекать корень из числа и при этом выбрасывать исключение, если корень извлекается из отрицательного числа.*/

function getSqrt(num){
    if(num >= 0){
        return Math.sqrt(num)
    } else{
        throw new Error('число отрицательное')
    }
}

try {
    console.log(getSqrt(-2))
} catch (error) {
    console.log(error.message)
}

/*Задача 2js.Sp.Exc.Thr

Выбросите исключение с типом TypeError.*/

try {
    throw new TypeError('текст исключения')
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}

/*Задача 3js.Sp.Exc.Thr

Выбросите исключение с типом SyntaxError и RangeError. Поймайте эти исключения с помощью одного блока try. В блоке catch выведите разные сообщения об ошибке для исключений разных типов.*/

function min_max(num, min, max){
    if(num < min || num > max){
        throw new RangeError('число не в том диапазоне')
    } else{
        return num, min, max
    }
}

try {
    console.log(min_max(3, 4, 99))
} catch (error) {
    console.log(error.message)
}

function getArr(json){
    let arr = JSON.parse(json)
    return arr
}

try {
    console.log(getArr('[1,2,3,]'))
} catch (error) {
    console.log(error.message)
    console.log(error.name)
}

let arr = [1,2,'three',4]

function getSum(arr){
    let sum = new Number()

    for(let elem of arr){
        if(typeof elem !== 'number'){
            throw new SyntaxError('в массиве есть не только числа')
        } else{
            sum += elem
        }
    }
    return sum
}

try {
    console.log(getSum(arr))
} catch (error) {
    console.log(error.message)
}

//Свои типы исключений:

try {
    throw {name:'myERR', message:'ошибочка'}
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}

/*Задача 4js.Sp.Exc.Thr

Выше я мы сделали функцию, выбрасывающую исключение при делении на ноль:

function div(a, b) {
	if (b !== 0) {
		return a / b;
	} else {
		throw new Error('ошибка деления на ноль');
	}
}
Переделайте эту функцию так, чтобы она выбрасывала исключение с каким-нибудь придуманными нами типом, например, DivisionByZeroError.*/

function DivisionByZero(one, two){
    if(two != 0){
        return one / two
    } else{
        throw {name:'DivisionByZeroError', message:'не дели на ноль'}
    }
}

try {
    console.log(DivisionByZero(3,0))
} catch (error) {
    console.log(error.message)
    console.log(error.name)
}

/*Задача 5js.Sp.Exc.Thr

Выше вы делали функцию, выбрасывающую исключение при попытке извлечь корень из отрицательного числа. Переделайте вашу функцию так, чтобы она выбрасывала исключение с придуманным вами типом. Хорошо подумайте над названием исключения, чтобы это название было удачным.*/

function sqrtNum(num){
    if(num >= 0){
        return Math.sqrt(num)
    } else {
        throw {name:'negativeNumber', message:'извлечь корень из отрицательного числа невозможно'}
    }
}

try {
    console.log(sqrtNum(-1))
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}

//Пример применения:

/*Задача 6js.Sp.Exc.Thr

Переделайте мой код так, чтобы функция getCost выбрасывала два типа исключений: если отсутствует цена и если отсутствует количество. Хорошо подумайте над названиями этих исключений. В блоке catch выведите разные сообщения об ошибке для исключений разных типов.*/

let product = document.getElementById('product')

function getCost(elem){

    if(elem.dataset.price != undefined && elem.dataset.amount != undefined){
        return elem.dataset.price * elem.dataset.amount
    }
    if(!elem.dataset.price){
        throw {name:'missingPrice', message:'отсутствует цена'}
    }
    if(!elem.dataset.amount){
        throw {name:'missingAmount', message:'отсутствует кольчество товара'}
    }
}

try {
    let cost = getCost(product)
    console.log(cost)
} catch (error) {
    console.log(error.message)
}

//Еще пример применения:

try {
    let json = '{"product": "яблоко", "price": 1000}'
    product = JSON.parse(json)
    
    if(product.price !== undefined && product.amount !== undefined){
        console.log(product.price * product.amount)
    } else{
        throw {name:'ProductCostError', message:'отсутствует цена или количество у продукта'}
    }
} catch (error) {
    
    if(error.name == 'SyntaxError'){
        console.log('некорректный json')
    }
    if(error.name == 'ProductCostError'){
        console.log('У продукта отсутствует цена или количество')
    }
}

/*Задача 7js.Sp.Exc.Thr

Пусть к вам приходит JSON вот такого вида:

let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;
Проверьте этот JSON на общую корректность при разборе, а после разбора проверьте, что в результате получается массив, а не что-то другое. Если в результате получается не массив - выбросите исключение.*/

try {
    let json = `[
        {
            "name": "user1",
            "age": 25,
            "salary": 1000
        },
        {
            "name": "user2",
            "age": 26,
            "salary": 2000
        },
        {
            "name": "user3",
            "age": 27,
            "salary": 3000
        }
    ]`;
    let arr = JSON.parse(json)
    console.log(arr)

    throw {name:'incorrectJSON', message:'incorrect json'}
    
} catch (error) {
    console.log(error.message)
}

/*Задача 8js.Sp.Exc.Thr

Дан следующий код:

try {
	let arr = JSON.parse(json);

	for (let i = 0; i < arr.length; i++) {
		localStorage.setItem(i, arr[i]);
	}
} catch (error) {
	if (error.name == 'QuotaExceededError') {
		alert('закончилось место в хранилище');
	}
	
	if (error.name == 'SyntaxError') {
		alert('некорректный JSON');
	}
}
Что не так с этим кодом? Исправьте его на более удачный.*/

try{
    let arr = JSON.parse(json)

    for(let i = 0; i < arr.length; i++){
        localStorage.setItem(i, arr[i])
    }
} catch(error){
    if(error.name == 'QuotaExceededError'){
        console.log('закончилось место в хранилище')
    }else if(error.name == 'SyntaxError'){
        console.log('некорректный JSON');
    } else{
        throw error
    }
}
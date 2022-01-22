'use strict';

//Обработка исключительных ситуаций в JavaScript:

try{
    let arr = '{a:1}'
    let date = JSON.parse(arr)
    
} catch{
    console.log('невозможно выполнить операцию разбора JSON')
}

/*Задача 1js.Sp.Exc.TC

Дан код, который записывает некоторую строку в локальное хранилище:

let str = 'некая строка';
localStorage.setItem('key', str);
Оберните этот код в конструкцию try-catch. В блоке catch выведите сообщение о переполнении хранилища. Проверьте работу вашего кода для строки размером менее 5 мб и для строки большего размера.*/

try{
    let str = 'stroka'
    // for (let i = 1; i <= 6 * 10 ** 6; i++) { // формируем строку более 5 мб
    //     str += '+';
    // }
    localStorage.setItem('key', str)
    console.log('work')
} catch{
    console.log('хранилище переполнено')
}

/*Задача 2js.Sp.Exc.TC

Дан JSON, внутри которого хранится массив. Если этот JSON корректный, то выведите элементы массива в виде списка ul. Если же JSON не корректный, выведите на экран сообщение о том, что на странице случилась ошибка.*/

try{
    let elems = document.getElementById('elems')
    let json = '[1,2,3,"four","pyat"]'
    let arr = JSON.parse(json)

    for(let elem of arr){
        let li = document.createElement('li')
        li.innerHTML = elem
        elems.appendChild(li)
    }
} catch{
    console.log('no')
}

//Как разрабатывать с try-catch:

/*Задача 3js.Sp.Exc.TC

Дан следующий код:

let str = 'некая строка';
localStorage.setItem('key', str);
alert('успешно сохранено!');
Что не так с этим кодом? Исправьте недостатки этого кода.*/

try{
    let str = 'некая строка';
    localStorage.setItem(str)
    console.log('успешно сохранено!')
}catch{
    console.log('произошла ошибка')
}

/*Задача 4js.Sp.Exc.TC

Дан следующий код:

let json = '[1,2,3,4,5]';

let arr = JSON.parse(json);

let sum = 0;
for (let elem of arr) {
	sum += +elem;
}

alert(sum);
Что не так с этим кодом? Исправьте недостатки этого кода.*/

try{
    let json = '[1,2,3,4,5]';
    let arr = JSON.parse(json)
    let sum = new Number()

    for(let num of arr){
        sum += +num
    }
    console.log(sum)
}catch{
    console.log('сбой')
}

//Вложенность кода:

function save (str){
    localStorage.setItem('str', str)
}

try{
    save('123')
}catch{
    console.log('хранилище переполнено')
}

/*Задача 5js.Sp.Exc.TC

Дана функция, преобразующая JSON в массив:

function getArr(json) {
	return JSON.parse(json);
}
В следующем коде из JSON получают массив:

let arr = getArr('[1,2,3,4,5]');
console.log(arr);
Оберните вызов функции в конструкцию try-catch.*/

function getArr(json){
    return JSON.parse(json)
}

try{
    console.log(getArr('123'))
}catch{
    console.log('не удалось выполнить операцию')
}
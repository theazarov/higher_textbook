'use strict';

//Команда 'или' в регулярных выражениях JavaScript:

let str = 'aaa bbb abb';
let result = str.replace(/a{2}|b{1}/g, '!')
console.log(result)

str = 'aaa bbb bbbb bbbbb axx';
result = str.replace(/a{3}|b+/g, '!')
console.log(result)

str = 'a ab abc 1 12 123';
result = str.replace(/[a-z]+|\d{3}/g, '!')
console.log(result)

str = 'aaa bbb ccc ddd';
result = str.replace(/a+|b+|c+/g, '!')
console.log(result)

str = 'axx bxx bbxx exx'
result = str.replace(/(a|b+)xx/g, '!')
console.log(result)

/*Задача 1js.Sp.RE.OC

Дана строка:

let str = 'aeeea aeea aea axa axxa axxxa';
Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или буква 'x' любое количество раз.*/

str = 'aeeea aeea aea axa axxa axxxa';
result = str.replace(/a(e+|x+)a/g, '!')
console.log(result)

/*Задача 2js.Sp.RE.OC

Дана строка:

let str = 'aeeea aeea aea axa axxa axxxa';
Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', а между ними - или буква 'e' два раза или буква 'x' любое количество раз.*/

str = 'aeeea aeea aea axa axxa axxxa'
result = str.replace(/a(e{2}|x+)a/g, '!')
console.log(result)

//Метод test в регулярных выражениях JavaScript:

console.log(/a/.test('eee aaa bbb'))
console.log(/^a+$/.test('aaaaaaaaa'))

/*Задача 1js.Sp.RE.MT

Определите, начинается ли переданная строка с 'http://'.*/

str = 'http://google.com'
console.log(/http:\/\//.test(str))

/*Задача 2js.Sp.RE.MT

Определите, начинается ли переданная строка с 'http://' или с 'https://'.*/

str = 'http://google.com'
console.log(/http:\/\/|https:\/\//.test(str))

/*Задача 3js.Sp.RE.MT

Определите, что ли заканчивается переданная строка расширением 'txt', 'html' или 'php'*/

console.log(/html$|php$|txt$/.test('index.html'))

/*Задача 4js.Sp.RE.MT

Определите, что ли заканчивается переданная строка расширением 'jpg' или 'jpeg'.*/

console.log(/jpg|jpeg/.test("hello.kitty"))

/*Задача 5js.Sp.RE.MT

Определите, что ли заканчивается переданная строка расширением 'jpg', 'jpeg' или 'png'.*/

console.log(/jpg|jpeg|png/.test("lol.png"))

/*Задача 6js.Sp.RE.MT

Определите, является ли строка 'числом, длиной от 1 до 12 цифр'.*/

console.log(/^\d{1,12}$/.test('127433336'))

/*Задача 7js.Sp.RE.MT

Определите, является ли переданная строка датой в формате год-месяц-день.*/

console.log(/(^19|^20)[0-9{2}]/.test('2030'))
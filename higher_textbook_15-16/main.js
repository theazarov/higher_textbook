'use strict';

//Особенности дефиса внутри квадратных скобок:
let str = '1a2 1-2 1c2 1z2';
let result = str.replace(/1[-az]2/g, '!')
console.log(result)

str = '1a2 1-2 1c2 1z2';
result = str.replace(/1[az-]2/g, '!')
console.log(result)

/*Задача 1js.Sp.RE.HISBF

Дана строка:

let str = 'xaz xBz xcz x-z x@z';
Найдите все строки по следующему шаблону: буква 'x', большая или маленькая буква или дефис, буква 'z'.

*/

str = 'xaz xBz xcz x-z x@z';
result = str.replace(/x[a-zA-Z-]z/g, '!')
console.log(result)

/*Задача 2js.Sp.RE.HISBF

Дана строка:

let str = 'xaz x$z x-z xcz x+z x%z x*z';
Найдите все строки по следующему шаблону: буква 'x', затем или доллар, или дефис или плюс, потом буква 'z'.*/

str = 'xaz x$z x-z xcz x+z x%z x*z';
result = str.replace(/x[$\-+]z/g, '!')
console.log(result)

//Начало и конец строки в регулярках JavaScript:

str = 'aaa aaa aaa';
result = str.replace(/^aaa/g, '!')
console.log(result)

result = str.replace(/aaa$/g, '!')
console.log(result)

str = 'aaa';
result = str.replace(/^aaa$/g, '!')
console.log(result)

/*Задача 1js.Sp.RE.LBE

Дана строка:

let str = 'abc def xyz';
Напишите регулярку, которая найдет первую подстроку из букв.*/

str = 'abc def xyz'
result = str.replace(/^abc/g, '!')
console.log(result)

/*Задача 2js.Sp.RE.LBE

Дана строка:

let str = 'abc def xyz';
Напишите регулярку, которая найдет последнюю подстроку из букв.*/

str = 'abc def xyz'
result = str.replace(/xyz$/g, '!')
console.log(result)
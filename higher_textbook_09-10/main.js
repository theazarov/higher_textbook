'use strict';

//Инвертирование наборов символов в регулярках:

let str = 'xaz xbz xcz xez';
let result = str.replace(/x[^abc]z/g, '!')
console.log(result)

str = 'xaz xbz x1z xСz';
result = str.replace(/x[^a-z]z/g, '!')
console.log(result)

/*Задача 1js.Sp.RE.ChSI

Напишите регулярку, которая найдет строки по шаблону: цифра '1', затем символ не 'e' и не 'x', цифра '2'.*/

str = '1exr2 1dhf2 1iiiy2'
result = str.replace(/1[^ex]+?2/g, '!')
console.log(result)

/*Задача 2js.Sp.RE.ChSI

Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ цифра от 2 до 7, буква 'z'.*/

str = 'x45z x889z xHJYz'
result = str.replace(/x[^2-7]+?z/g, '!')
console.log(result)

/*Задача 3js.Sp.RE.ChSI

Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ большая латинская буква от 1 и более раз, буква 'z'.*/

str = 'xGz x0z xoz xFl xtz'
result = str.replace(/x[^A-Z]+?z/g, '!')
console.log(result)

/*Задача 4js.Sp.RE.ChSI

Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ большая маленькая латинская буква и не цифра от 1 до 5 от 1 и более раз, буква 'z'.*/

str = 'x9z xJz x*z'
result = str.replace(/x[^a-zA-Z1-5]+?z/g, '!')
console.log(result)

//Особенности кириллицы в регулярках JavaScript:

/*Задача 1js.Sp.RE.CF

Дана строка:

let str = 'wйw wяw wёw wqw';
Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'w', а между ними - буква кириллицы.*/

str = 'wйw wяw wёw wqw';
result = str.replace(/w[а-яё]w/g, '!')
console.log(result)

/*Задача 2js.Sp.RE.CF

Дана строка:

let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
Напишите регулярку, которая найдет все слова по шаблону: любая кириллическая буква любое количество раз.*/

str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
result = str.replace(/[а-яёА-ЯЁ]+/g, '!')
console.log(result)
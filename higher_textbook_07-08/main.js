'use strict';

//Группы символов в регулярных выражениях JavaScript:

let str = '1 12 123';
let result = str.replace(/\d/g, '!')
console.log(result)

str = '1 12 123 abc @@@';
result = str.replace(/\d+/g, '!')
console.log(result)

str = '123abc3@@';
result = str.replace(/\D+/g, '!')
console.log(result)

str = '1 12 123 abc @@@';
result = str.replace(/\s/g, '!')
console.log(result)

str = '1 12 123 abc @@@';
result = str.replace(/\S+/g, '!')
console.log(result)

str = '1 12 123a Abc @@@';
result = str.replace(/\w+/g, '!')
console.log(result)

str = '1 12 123 Abc @@@';
result = str.replace(/\W+/g, '!')
console.log(result)

/*Задача 1js.Sp.RE.ChG

Дана строка:

let str = 'a1a a2a a3a a4a a5a aba aca';
Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.*/

str = 'a1a a2a a3a a4a a5a aba aca';
result = str.replace(/a\da/g, '!')
console.log(result)

/*Задача 2js.Sp.RE.ChG

Дана строка:

let str = 'a1a a22a a333a a4444a a55555a aba aca';
Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр.*/

str = 'a1a a22a a333a a4444a a55555a aba aca';
result = str.replace(/a\d+a/g, '!')
console.log(result)

/*Задача 3js.Sp.RE.ChG

Дана строка:

let str = 'aa a1a a22a a333a a4444a a55555a aba aca';
Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa').*/

str = 'aa a1a a22a a333a a4444a a55555a aba aca';
result = str.replace(/a\d{0,}a/g, '!')
console.log(result)

/*Задача 4js.Sp.RE.ChG

Дана строка:

let str = 'avb a1b a2b a3b a4b a5b abb acb';
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.*/

str = 'avb a1b a2b a3b a4b a5b abb acb';
result = str.replace(/a\Db/g, '!')
console.log(result)

/*Задача 5js.Sp.RE.ChG

Дана строка:

let str = 'ave a#b a2b a$b a4b a5b a-b acb';
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.*/

str = 'ave a#b a2b a$b a4b a5b a-b acb';
result = str.replace(/a\Wb/g, '!')
console.log(result)

/*Задача 6js.Sp.RE.ChG

Дана строка:

let str = 'ave a#a a2a a$a a4a a5a a-a aca';
Напишите регулярку, которая заменит все пробелы на '!'.*/

str = 'ave a#a a2a a$a a4a a5a a-a aca';
result = str.replace(/\s/g, '!')
console.log(result)

//Наборы символов в регулярных выражениях JavaScript:

str = 'xax xbx xcx x@x';
result = str.replace(/x[a-z]x/g, '!')
console.log(result)

str = 'xax xbx xmx x@x';
result = str.replace(/x[a-k]x/g, '!')
console.log(result)

str = 'xax xBx xcx x@x';
result = str.replace(/x[A-Z]x/g, '!')
console.log(result)

str = 'xax x1x x3x x5x x@x';
result = str.replace(/x[0-9]x/g, '!')
console.log(result)

str = 'xax x1x x3x x5x x@x';
result = str.replace(/x[3-7]x/g, '!')
console.log(result)

str = 'xax x1x x3x x5x x@x';
result = str.replace(/x[a-z1-9]x/g, '!')
console.log(result)

str = 'xax xBx xcx x5x x@x';
result = str.replace(/x[a-zA-Z]x/g, '!')
console.log(result)

str = 'xax xbx x1x x2x x3x';
result = str.replace(/x[a-z12]x/g, '!')
console.log(result)

str = 'xx xabesx xaadx x123x xa3x';
result = str.replace(/x[a-z]+x/g, '!')
console.log(result)

str = 'xx xabesx xaadx x123x xa3x';
result = str.replace(/x[a-z]*x/g, '!')
console.log(result)

/*Задача 1js.Sp.RE.ChS

Дана строка:

let str = 'aba aea aca aza axa';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква 'b', 'e' или 'x'.*/

str = 'aba aea aca aza axa';
result = str.replace(/a[bex]a/g, '!')
console.log(result)

/*Задача 2js.Sp.RE.ChS

Дана строка:

let str = 'a1a a3a a7a a9a aba';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - цифра от 3-х до 6-ти.*/

str = 'a1a a3a a7a a9a aba';
result = str.replace(/a[3-6]a/g, '!')
console.log(result)

/*Задача 3js.Sp.RE.ChS

Дана строка:

let str = 'aba aea afa aha aga';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до g.*/

str = 'aba aea afa aha aga';
result = str.replace(/a[a-g]a/g, '!')
console.log(result)

/*Задача 4js.Sp.RE.ChS

Дана строка:

let str = 'aba aea afa aha aga';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от j до z.*/

str = 'aba aea afa aha aga';
result = str.replace(/a[a-fj-z]a/g, '!')
console.log(result)

/*Задача 5js.Sp.RE.ChS

Дана строка:

let str = 'aAa aea aEa aJa a3a';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от A до D.*/

str = 'aAa aea aEa aJa a3a';
result = str.replace(/a[a-fA-E]a/g, '!')
console.log(result)

/*Задача 6js.Sp.RE.ChS

Дана строка:

let str = 'aAXa aeffa aGha aza ax23a a3sSa';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы, не затронув остальных.*/

str = 'aAXa aeffa aGha aza ax23a a3sSa';
result = str.replace(/a[a-z]+a/g, '!')
console.log(result)

/*Задача 7js.Sp.RE.ChS

Дана строка:

let str = 'aAXa aeffa aGha aza ax23a a3sSa';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие и большие латинские буквы, не затронув остальных.*/

str = 'aAXa aeFfa aGha aza ax23a a3sSa';
result = str.replace(/a[a-zA-Z]+a/g, '!')
console.log(result)

/*Задача 8js.Sp.RE.ChS

Дана строка:

let str = 'aAXa aeffa aGha aza ax23a a3sSa';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы и цифры, не затронув остальных.*/

str = 'aAXa aeffa aGha aza ax23a a3sSa';
result = str.replace(/a[a-z1-9]+a/g, '!')
console.log(result)
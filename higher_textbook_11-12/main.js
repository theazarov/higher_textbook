'use strict';

//Спецсимволы внутри квадратных скобок в JavaScript:

let str = 'xax xbx xcx xdx x.x x@x';
let result = str.replace(/x[abc.]x/g, '!')
console.log(result)

str = 'xax xbx xcx x@x';
result = str.replace(/x[a-z.]x/g, '!')
console.log(result)

/*Задача 1js.Sp.RE.SChISB

Дана строка:

let str = 'aba aea aca aza axa a.a a+a a*a';
Напишите регулярку, которая найдет строки 'a.a', 'a+a', 'a*a', не затронув остальных.*/

str = 'aba aea aca aza axa a.a a+a a*a';
result = str.replace(/a[.+*]a/g, '!')
console.log(result)

/*Задача 2js.Sp.RE.SChISB

Дана строка:

let str = 'xaz x.z x3z x@z x$z xrz';
Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ точка, НЕ собака, и НЕ доллар, а потом буква 'z'.*/

str = 'xaz x.z x3z x@z x$z xrz';
result = str.replace(/x[^.@$]z/g, '!')
console.log(result)

//Группы символов внутри квадратных скобок JavaScript:

str = 'xax xbx x1x x2x xhx x@x';
result = str.replace(/x[\da-f]x/g, '!')
console.log(result)

str = 'xaz x1z xAz x.z x@z';
result = str.replace(/x[^\d.a-z]z/g, '!')
console.log(result)

/*Задача 1js.Sp.RE.ChGISB

Напишите регулярку, которая найдет строки по шаблону: цифра или точка от 1 и более раз.*/

str = '334h ..556 gghd8'
result = str.replace(/[\d.]+/g, '!')
console.log(result)

/*Задача 2js.Sp.RE.ChGISB

Напишите регулярку, которая найдет строки по шаблону: не цифра и не буква от 'a' до 'g' от 3 до 7 раз.*/

str = 'xx xxx yyyx agd dddaxxx'
result = str.replace(/[^\da-g{3-7}]/g, '!')
console.log(result)
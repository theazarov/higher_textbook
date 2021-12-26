'use strict';

//Введение в регулярные выражения в JavaScript:

let str = 'abc'
console.log(str.replace('a', '0_o'))

console.log('abc'.replace(/b/, '!'))

console.log('hi sos lol'.replace(/s.s/, '-'))

console.log('privet mir, cho delaesh?'.replace(/e/g, '!'))

/*Задача 1js.Sp.RE.Inr
Дана строка:
let str = 'ahb acb aeb aeeb adcb axeb';
Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.*/

str = 'ahb acb aeb aeeb adcb axeb';
console.log(str.replace(/a.b/g, 'lol'))

/*Задача 2js.Sp.RE.Inr

Дана строка:

let str = 'aba aca aea abba adca abea';
Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' по шаблону: буква 'a', 2 любых символа, буква 'a'.*/

str = 'aba aca aea abba adca abea';
console.log(str.replace(/a..a/g, 'hi'))

/*Задача 3js.Sp.RE.Inr

Дана строка:

let str = 'aba aca aea abba adca abea';
Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.*/

str = 'aba aca aea abba adca abea';
console.log(str.replace(/ab.a/g, 'hi'))

//Операторы повторения символов в регулярках:

str = 'xx xax xaax xaaax xbx';

let res = str.replace(/xa+x/g, '!-!')
console.log(res)

str = 'xx xax xaax xaaax xbx'
res = str.replace(/xa*x/g, '%')
console.log(res)

str = 'xx xax xaax xbx';
res = str.replace(/xa?x/g, '!')
console.log(res)

/*Задача 1js.Sp.RE.RO

Дана строка:

let str = 'aa aba abba abbba abca abea';
Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.*/

str = 'aa aba abba abbba abca abea';
res = str.replace(/ab+a/g, 'hi')
console.log(res)

/*Задача 3js.Sp.RE.RO

Дана строка:

let str = 'aa aba abba abbba abca abea';
Напишите регулярку, которая найдет строки 'aa', 'aba' по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.*/

str = 'aa aba abba abbba abca abea';
res = str.replace(/ab?a/g, 'hi')
console.log(res)

/*Задача 4js.Sp.RE.RO

Дана строка:

let str = 'aa aba abba abbba abca abea';
Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba', не захватив 'abca' и 'abea'.*/

str = 'aa aba abba abbba abca abea';
res = str.replace(/ab*a/g, 'hi')
console.log(res)
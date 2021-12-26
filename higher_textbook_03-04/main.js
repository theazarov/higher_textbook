'use strict';

let str = 'xabx xababx xaabbx'
let res = str.replace(/x(ab)+x/g, 'hi')
console.log(res)

/*Задача 1js.Sp.RE.GB

Дана строка:

let str = 'ab abab abab abababab abea';
Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.*/

str = 'ab abab abab abababab abea';
res = str.replace(/(ab)+/g, 'hi')
console.log(res)

str = 'a+x ax aax aaax';
res = str.replace(/a\+x/g, 'hi')
console.log(res)

str = 'a.x abx azx';
res = str.replace(/a\.x/g, 'hi')
console.log(res)

/*Задача 1js.Sp.RE.ESCh

Дана строка:

let str = 'a.a aba aea';
Напишите регулярку, которая найдет строку 'a.a', не захватив остальные.*/

str = 'a.a aba aea';
res = str.replace(/a\.a/g, 'hi')
console.log(res)

/*Задача 2js.Sp.RE.ESCh

Дана строка:

let str = '2+3 223 2223';
Напишите регулярку, которая найдет строку '2+3', не захватив остальные.*/

str = '2+3 223 2223';
res = str.replace(/2\+3/g, 'hi')
console.log(res)

/*Задача 3js.Sp.RE.ESCh

Дана строка:

let str = '23 2+3 2++3 2+++3 345 567';
Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3', не захватив остальные (+ может быть любое количество).*/

str = '23 2+3 2++3 2+++3 345 567';
res = str.replace(/2\++3/g, 'hi')
console.log(res)

/*Задача 4js.Sp.RE.ESCh

Дана строка:

let str = '23 2+3 2++3 2+++3 445 677';
Напишите регулярку, которая найдет строки '23', '2+3', '2++3', '2+++3', не захватив остальные.*/

str = '23 2+3 2++3 2+++3 445 677';
res = str.replace(/2\+*3/g, 'hi')
console.log(res)

/*Задача 5js.Sp.RE.ESCh

Дана строка:

let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив остальные.*/

str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
res = str.replace(/\*(q)+\+/g, 'hi')
console.log(res)

/*Задача 6js.Sp.RE.ESCh

Дана строка:

let str = '[abc] {abc} abc (abc) [abc]';
Напишите регулярку, которая найдет строки в квадратных скобках и заменят их на '!'.*/

str = '[abc] {abc} abc (abc) [abc]';
res = str.replace(/\[(abc)+\]/g, 'hi')
console.log(res)
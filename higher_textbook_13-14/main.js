'use strict';

//Спецсимволы-исключения внутри квадратных скобок:

let str = 'x]x xax x[x x1x';
let result = str.replace(/x[\[\]]x/g, '!')
console.log(result)

/*Задача 1js.Sp.RE.SChEISB

Дана строка:

let str = 'x[]z x{}z x.z x()z';
Напишите регулярку, которая найдет все слова по шаблону: буква 'x', затем любое количество любых скобок, затем буква 'z'.*/

str = 'x[]z x{}z x.z x()z';
result = str.replace(/x[\[\]\{\}\(\)]+?z/g, '!')
console.log(result)

/*Задача 2js.Sp.RE.SChEISB

Дана строка:

let str = '[abc] {abc} abc (abc) [abc]';
Напишите регулярку, которая найдет строки в любых скобках и заменят их на '!'.*/

str = '[abc] {abc} abc (abc) [abc]';
result = str.replace(/[\[\{\(]abc[\]\}\)]/g, '!')
console.log(result)

//Символ шляпки внутри квадратных скобок регулярок:

str = 'axx bxx ^xx dxx';
result = str.replace(/[^d]xx/g, '!')
console.log(result)

str = 'axx bxx ^xx dxx';
result = str.replace(/[d^]xx/g, '!')
console.log(result)

str = 'axx bxx ^xx dxx';
result = str.replace(/[\^d]xx/g, '!')
console.log(result)

/*Задача 1js.Sp.RE.HSISB

Дана строка:

let str = '^xx axx ^zz bkk @ss';
Напишите регулярку, которая найдет строки по шаблону: шляпка или собака, а затем две латинских буквы.*/

str = '^xx axx ^zz bkk @ss';
result = str.replace(/[@\^][\w{2}]+/g, '!')
console.log(result)

/*Задача 2js.Sp.RE.HSISB

Дана строка:

let str = '^xx axx ^zz bkk @ss';
Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка и не собака, а затем две латинских буквы.*/

str = '^xx axx ^zz bkk @ss';
result = str.match(/[\^@]\w{2}/g);
console.log(result)

/*Задача 3js.Sp.RE.HSISB

Дана строка:

let str = '^xx axx ^zz bkk';
Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка, а затем две латинских буквы.*/

str = '^xx axx ^zz bkk';
result = str.match(/[\^]\w{2}/g)
console.log(result);
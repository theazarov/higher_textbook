'use strict';

//Карманы в самой регулярке в JavaScript:

let str = 'aa bb cd ef';
let result =  str.replace(/([a-z])\1/g, '!')
console.log(result)

str = 'asxca buzxb csgd';
result = str.replace(/([a-z])[a-z]+\1/g, '!')
console.log(result)

/*Задача 1js.Sp.RE.EP

Дана строка:

let str = 'aaa bbb ccc xyz';
Найдите все подстроки, в которых есть три одинаковые буквы подряд.*/

str = 'aaa bbb ccc xyz';
result = str.replace(/([a-z])\1\1\1/g, '!')
console.log(result)

/*Задача 3js.Sp.RE.EP

Дана строка:

let str = 'aaa aaa bbb bbb ccc ddd';
Найдите все подстроки, в которых есть два одинаковых слова подряд.*/

str = 'aaa aaa bbb bbb ccc ddd';
result = str.replace(/([a-z]+)\s\1/g, '!')
console.log(result)

//Несохраняющие скобки в регулярках JavaScript:

str = 'abab123';
result = str.match(/(?:ab)+([1-9]+)/);
console.log(result[1])

str = '2021/11/08'
result = /(^[^0]\d{1,4})+\/+(0|1)+([0-9])+\/([0-3])+([0-9])/.test(str)
console.log(result)

result = str.replace(/(^[^0]\d{1,4})+\/+(0|1)+([0-9])+\/([0-3])+([0-9])/g, '!')
console.log(result)
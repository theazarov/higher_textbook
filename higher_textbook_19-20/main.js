"use strict";

//Метод match с модификатором g в JavaScript:

let str = "a aa aaa aaaa aab";
let result = str.match(/a+/g, "!");
console.log(result);

result = str.match(/a+/g);
console.log(result);

str = "1 23 456 789";
result = str.match(/\d+/g);
console.log(result);

str = "1 23 456 789";
result = str.match(/\d/g);
console.log(result);

/*Задача 1js.Sp.RE.MMWGM

Дана строка:

let str = 'site.ru sss site.com zzz site.net';
Получите массив доменных имен из этой строки.*/

str = "site.ru sss site.com zzz site.net";
result = str.match(/[-A-Za-z0-9]+\.+[A-Za-z]{2,6}/g);
console.log(result);

/*Задача 2js.Sp.RE.MMWGM

Дана строка:

let str = 'a1b c34d x567z';
Найдите сумму всех чисел этой строки.*/

str = "a1b c34d x567z";
result = str.match(/\d/g);
let sum = 0;

for (let num of result) {
  sum += Number(num);
}
console.log(sum);

//Карманы в методе match в регулярках JavaScript:

str = "zzz xaaax xaaaax xaaaaax";
result = str.match(/xa+x/);
console.log(result);
console.log(result[0]);

/*Задача 1js.Sp.RE.MP

Дана строка, содержащая домен:

let str = 'sss domain.ru zzz';
Найдите этот домен и положите его имя в первый карман, а зону - во второй.*/

str = "sss domain.ru zzz";
result = str.match(/([-A-Za-z0-9]{2,64})+\.+([A-Za-z]{2,6})/);
console.log(result);

/*Задача 2js.Sp.RE.MP

Дана строка, содержащая дату:

let str = '31.12.2025';
Положите день в первый карман, месяц - во второй, а год - в третий.*/

str = '31.12.2025'
result = str.match(/(\d{2})+\.+(\d{2})+\.+(\d{4})/)
console.log(result)
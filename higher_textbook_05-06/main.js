"use strict";

//Фигурные скобки в регулярных выражения JavaScript:

let str = "xx xax xaax xaaax";
let res = str.replace(/xa{1,2}x/g, "!");
console.log(res);

str = "xx xax xaax xaaax";
res = str.replace(/xa{2,}x/g, "!");
console.log(res);

str = "xx xax xaax xaaax";
res = str.replace(/xa{3}x/g, "!");
console.log(res);

str = "aaa aaaaaaaaaa aaa";
res = str.replace(/a{10}/g, "!");
console.log(res);

str = "xx xax xaax xaaax";
res = str.replace(/xa{1,3}x/g, "!");
console.log(res);

str = "xx xax xaax xaaax";
res = str.replace(/xa{0,3}x/g, "!");
console.log(res);

/*Задача 1js.Sp.RE.CB

Дана строка:

let str = 'aa aba abba abbba abbbba abbbbba';
Напишите регулярку, которая найдет строки 'abba', 'abbba', 'abbbba' и только их.*/

str = "aa aba abba abbba abbbba abbbbba";
res = str.replace(/ab{2,4}a/g, "!");
console.log(res);

/*Задача 2js.Sp.RE.CB

Дана строка:

let str = 'aa aba abba abbba abbbba abbbbba';
Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается менее 3-х раз (включительно).*/

str = "aa aba abba abbba abbbba abbbbba";
res = str.replace(/ab{1,3}a/g, "!");
console.log(res);

/*Задача 3js.Sp.RE.CB

Дана строка:

let str = 'aa aba abba abbba abbbba abbbbba';
Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается более 4-х раз (включительно).*/

str = "aa aba abba abbba abbbba abbbbba";
res = str.replace(/ab{4,}a/g, "!");
console.log(res);

//Ограничение жадности в регулярках в JavaScript:

str = "aeeex zzz x kkk";
res = str.replace(/a.+?x/g, "!");
console.log(res);

/*Задача 1js.Sp.RE.GL

Дана строка:

let str = 'aba accca azzza wwwwa';
Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. Между буквами a может быть любой символ (кроме 'a').*/

str = "aba accca azzza wwwwa";
res = str.replace(/a.+?a/g, "!");
console.log(res);
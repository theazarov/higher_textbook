"use strict";

//Позитивный и негативный просмотр в JavaScript:

console.log("aaax aaab".replace(/aaa(?=x)/g, "!"));
console.log("aaax aaab".replace(/aaa(?!x)/g, "!"));

/*Задача 1js.Sp.RE.PNV

Дана строка, содержащая имена функций:

let str = 'func1() func2() func3()';
Получите массив имен функций из строки.*/

let str = "func1() func2() func3()";
let result = str.match(/func\d{1,}/g, "!");
console.log(result);

/*Задача 2js.Sp.RE.PNV

Дана строка с тегом:

let str = '<a href="" class="eee" id="zzz">';
Получите массив имен атрибутов этого тега.*/

str = '<a href="" class="eee" id="zzz">';
result = str.match(/([a-z])\1\1/g, "!");
console.log(result);

//Коллбэк в методе replace в регулярках JavaScript:

str = "2 u u03 aaa 45";
result = str.replace(/\d+/g, function (num) {
  return num ** 2;
});
console.log(result);

str = "2+3= 4+5= 6+7=";
result = str.replace(/(\d+)\+(\d+)=/g, function (match, num1, num2) {
  let sum = Number(num1) + Number(num2);
  return match + sum;
});
console.log(result);

/*Задача 1js.Sp.RE.RMC

Дана строка:

let str = 'aaa [2] bbb [3] ccc [12] ddd';
Найдите числа, стоящие в скобках и увеличьте их в два раза. То есть из нашей строки должна получится следующая:

'aaa [6] bbb [9] ccc [24] ddd'*/

str = "aaa [2] bbb [3] ccc [12] ddd";
result = str.replace(/(\d+)/g, function (match, num) {
  let sum = Number(num) + Number(num);
  return sum;
});
console.log(result);

/*Задача 2js.Sp.RE.RMC

Дана строка:

let str = '123 456 789';
Найдите все числа и переверните их цифры в обратном порядке. То есть из нашей строки должна получится следующая:

'321 654 789'*/

str = "123 456 789";
result = str.replace(/(\d)+(\d)+(\d)/g, function (match, one, two, three) {
  return three + two + one;
});
console.log(result);

/*Задача 3js.Sp.RE.RMC

Дана строка с датами:

let str = '31.12.2025 30.11.2024 29.10.2023';
Найдите все даты и преобразуйте их в другой формат так, чтобы получилась следующая строка:

'2025-12-31 2024-11-30 2023-10-29'*/

str = "31.12.2025 30.11.2024 29.10.2023";
result = str.replace(
  /(\d+)\.(\d+)\.(\d+)/g,
  function (match, day, month, year) {
    return year + "-" + month + "-" + day;
  }
);
console.log(result);
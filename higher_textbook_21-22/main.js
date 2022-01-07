'use strict';

//Карманы в методе replace в регулярках JavaScript:

let str = '1 23 456 xax';
let result = str.replace(/(\d+)/g, "($1)")
console.log(result)

str = 'x1x x23x x456x xax';
result = str.replace(/x(\d+)x/g, '!$1!')
console.log(result)

str = 'aaa@bbb ccc@ddd';
result = str.replace(/([a-z]+)@([a-z]+)/g, "$2@$1")
console.log(result)

/*Задача 1js.Sp.RE.RP

Дана строка:

let str = '12 34 56 78';
Поменяйте местами цифры во всех двухзначных числах.*/

str = '12 34 56 78';
result = str.replace(/(\d)+(\d)/g, '$2$1')
console.log(result)

/*Задача 2js.Sp.RE.RP

Дана строка с датой:

let str = '31.12.2025';
Преобразуйте эту дату в '2025.12.31'.*/

str = '31.12.2025';
result = str.replace(/(\d{2})\.(\d{2})\.(\d{4})/g, '$3.$2.$1')
console.log(result)

//Карманы по умолчанию в методе replace в JavaScript:

str = '1 23 456';
result = str.replace(/\d+/g, "($&)")
console.log(result)

str = '123@456';
result = str.replace(/(@)/g, "($`$1$')")
console.log(result)

str = 'aaa $ bbb';
result = str.replace(/\$/g, '($$)')
console.log(result)

/*Задача 1js.Sp.RE.RDP

Дана строка:

let str = 'a1b2c3';
Напишите регулярку, которая рядом с каждой цифрой напишет такую же.*/

str = 'a1b2c3';
result = str.replace(/\d/g, '$&$&')
console.log(result)

/*Задача 2js.Sp.RE.RDP

Дана строка:

let str = 'sss site.ru zzz site.com kkk';
Замените домены на ссылки вида:

<a href="http://site.ru">site.ru</a>*/

str = 'sss site.ru zzz site.com kkk';
result = str.replace(/([-A-Za-z0-9]{2,64})+\.+([A-Za-z]{2,6})/g, "<a href=\"http\:\/\/$&\">$&</a>")
console.log(result)
"use strict";

//Конструкция try-catch:

try {
  let json = JSON.parse("{1,2,3}");
} catch (error) {
  console.log("невозможно выполнить операцию разбора JSON");
}

/*Задача 1js.Sp.Exc.TC

Дан код, который записывает некоторую строку в локальное хранилище:

let str = 'некая строка';
localStorage.setItem('key', str);
Оберните этот код в конструкцию try-catch. В блоке catch выведите сообщение о переполнении хранилища. Проверьте работу вашего кода для строки размером менее 5 мб и для строки большего размера.*/

try {
  let str = "";
  //   for (let i = 1; i <= 6 * 10 ** 6; i++) {
  //     // формируем строку более 5 мб
  //     str += "+";
  //   }
  localStorage.setItem("key", str);
} catch {
  console.log("хранилище переполнено");
}

/*Задача 2js.Sp.Exc.TC

Дан JSON, внутри которого хранится массив. Если этот JSON корректный, то выведите элементы массива в виде списка ul. Если же JSON не корректный, выведите на экран сообщение о том, что на странице случилась ошибка.*/

try {
  let elems = document.getElementById("elems");
  let json = '[1,2,"three"]';
  let arr = JSON.parse(json);

  for (let elem of arr) {
    let li = document.createElement("li");
    li.innerHTML = elem;
    elems.appendChild(li);
  }
} catch {
  console.log("невозможно выполнить операцию разбора JSON");
}

/*Задача 3js.Sp.Exc.TC

Дан следующий код:

let str = 'некая строка';
localStorage.setItem('key', str);
alert('успешно сохранено!');
Что не так с этим кодом? Исправьте недостатки этого кода.*/

try {
  let str = "некая строка";
  localStorage.setItem("key", str);
  console.log("успешно сохранено!");
} catch {
  console.log("сбой сохранения");
}

/*Задача 4js.Sp.Exc.TC

Дан следующий код:

let json = '[1,2,3,4,5]';

let arr = JSON.parse(json);

let sum = 0;
for (let elem of arr) {
	sum += +elem;
}

alert(sum);
Что не так с этим кодом? Исправьте недостатки этого кода.*/

try {
  let json = "[1,2,3,4,]";
  let arr = JSON.parse(json);
  let sum = new Number();

  for (let digit of arr) {
    sum += digit;
  }
  console.log(sum);
} catch {
  console.log("где-то оштбочка");
}

//Вложенность кода:

function saveOne(str) {
  localStorage.setItem("key", str);
}

try {
  saveOne("string");
} catch {
  console.log("где-то оштбочка");
}

/*Задача 5js.Sp.Exc.TC

Дана функция, преобразующая JSON в массив:

function getArr(json) {
	return JSON.parse(json);
}
В следующем коде из JSON получают массив:

let arr = getArr('[1,2,3,4,5]');
console.log(arr);
Оберните вызов функции в конструкцию try-catch.*/

try {
  let arr = getArr("[1,2,3]");
  console.log(arr);
} catch (error) {
  console.log("невозможно выполнить операцию разбора JSON");
}

function getArr(json) {
  return JSON.parse(json);
}

//Объект с ошибкой:

/*Задача 1js.Sp.Exc.EO

Специально создайте исключительную ситуацию, связанную с попыткой разбора некорректного JSON. Выведите в консоль имя и текст этой ошибки.*/

try {
  let obj = [{ 1: 2, 3: 4 }];

  let arr = JSON.parse(obj);
  console.log(arr);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

/*Задача 1js.Sp.Exc.EO

Специально создайте исключительную ситуацию, связанную с попыткой разбора некорректного JSON. Выведите в консоль имя и текст этой ошибки.*/

try {
  let json = "[1,2,3,4,5,]";
  let arr = JSON.parse(json);
  console.log(arr);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

/*Задача 2js.Sp.Exc.EO

Специально создайте исключительную ситуацию, связанную с переполнением локального хранилища. Выведите в консоль имя и текст этой ошибки.*/

try {
  //   let str = "";
  //   for (let i = 1; i <= 6 * 10 ** 6; i++) {
  //     // формируем строку более 5 мб
  //     str += "+";
  //   }

  localStorage.setItem("key", str); // пытаемся записать в хранилище
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

/*Задача 3js.Sp.Exc.EO
Скопируйте код моей функции saveData, а затем не подсматривая в мой код реализуйте описанную мною обработку ошибок.*/

/*Задача 4js.Sp.Exc.EO
Специально по очереди создайте исключительные ситуации, которые могут возникнуть в функции saveData.*/

function saveData(json) {
  let arr = JSON.parse(json);

  for(let i = 0; i < arr.length; i++){
      localStorage.setItem(i, arr[i])
  }

//   let str = "";
//   for (let i = 1; i <= 6 * 10 ** 6; i++) {
//     // формируем строку более 5 мб
//     str += "+";
//   }
//   localStorage.setItem('key', str)
}

try {
  saveData("[1,2,3,4,]");
} catch (error) {
  console.log(error.name);
  console.log(error.message);

  if (error.name == "QuotaExceededError") {
    console.log("закончилось место в хранилище");
  }
  if (error.name == "SyntaxError") {
    console.log("некорректный JSON");
  }
}

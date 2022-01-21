"use strict";

/*Задача 1js.Sp.Sg.Bs

Напишите скрипт, который сохранит в локальном хранилище три числа под тремя разными ключами. Запустите этот скрипт, чтобы данные сохранились. Затем напишите скрипт, который получит ваши три числа из локального хранилища и найдет их сумму. Запустите второй скрипт и убедитесь в его работоспособности.*/

localStorage.setItem("one", 1);
localStorage.setItem("two", 2);
localStorage.setItem("three", 3);

let one = Number(localStorage.getItem("one"));
let two = Number(localStorage.getItem("two"));
let three = Number(localStorage.getItem("three"));

console.log(one + two + three);

//Однократное сохранение:

let time = localStorage.getItem("time");

if (time === null) {
  let date = new Date().getDate();
  localStorage.setItem("time", date);
}

/*Задача 2js.Sp.Sg.Bs

По заходу пользователя на сайт запишите в локальное хранилище текущий момент времени. Затем по повторному заходу выведите, сколько прошло времени с предыдущего захода пользователя на сайт.*/

let first = localStorage.getItem("first");
let last = localStorage.getItem("last");

if (first === null) {
  let date = new Date().getTime();
  localStorage.setItem("first", date);
} else if (first != null) {
  let date = new Date().getTime();
  localStorage.setItem("last", date);
}

/*Задача 3js.Sp.Sg.Bs

По заходу пользователя на сайт спросите у него дату рождения. При следующем заходе пользователя на сайт, если у него в этот день будет День Рождения - поздравьте его с этим праздником.*/

let parent = document.getElementById("parent");
let birthday = localStorage.getItem("birthday");

if (!birthday) {
  let input = document.createElement("input");
  let p = document.createElement("p");

  p.innerHTML =
    "введите дату своего рождения в формате дд-мм-гг и нажмите enter";

  input.addEventListener("keydown", function () {
    if (event.keyCode == 13) {
      localStorage.setItem("birthday", input.value);
      input.remove()
    }
  });
  parent.appendChild(p);
  parent.appendChild(input);
} else if (birthday) {
  let date = new Date();
  let formatDate =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

  if (birthday == formatDate) {
    let p = document.createElement("p");
    p.innerHTML = "с др короч...";
    parent.appendChild(p);
  }
}

/*Задача 4js.Sp.Sg.Bs

Дан инпут. По потери фокуса в этом инпуте сохраните его значение в локальное хранилище. При следующем заходе пользователя на страницу установите в инпуте сохраненный ранее текст.*/

let elem = document.getElementById('one')
let getInput = localStorage.getItem('input')

if(getInput === null){

  elem.addEventListener('blur', function (){
    localStorage.setItem('input', elem.value)
  })

} else if(getInput != null){
  elem.value = getInput
}

/*Задача 5js.Sp.Sg.Bs

Пользователь заходит на сайт, затем обновляет страницу, затем еще раз обновляет и так далее. Сделайте счетчик обновления страницы. Каждый раз при обновлении выводите значение счетчика на экран.*/

let count = localStorage.getItem('count')

if(count === null){
  localStorage.setItem('count', 1)
} else if(count >= 20){
  localStorage.removeItem('count')
}else if(count != null){
  localStorage.setItem('count', Number(count)+1)
} 
console.log(count)

/*Задача 6js.Sp.Sg.Bs

Модифицируйте предыдущую задачу. Сделайте так, чтобы счетчик обнулялся после того, как дойдет до 100.*/

/*Задача 7js.Sp.Sg.Bs

Очистите хранилище. Проверьте, что все ранее установленные вами ключи пропали.*/

localStorage.clear()
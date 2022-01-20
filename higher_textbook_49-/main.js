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

console.log(time);

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
console.log(last - first);

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
    }
  });
  parent.appendChild(p);
  parent.appendChild(input);
} else if (birthday) {
  let date = new Date();
  let formatDate =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  console.log(formatDate);
  console.log(birthday);

  if (birthday == formatDate) {
    let p = document.createElement("p");
    p.innerHTML = "с др короч...";
    parent.appendChild(p);
  }
}

/*Задача 4js.Sp.Sg.Bs

Дан инпут. По потери фокуса в этом инпуте сохраните его значение в локальное хранилище. При следующем заходе пользователя на страницу установите в инпуте сохраненный ранее текст.*/

one = document.getElementById('one')

let oneValue = localStorage.getItem('one')

one.addEventListener('blur', function (){
    localStorage.setItem('one', one.value)
})

if(!oneValue){
    one.value = localStorage.getItem('one')
}

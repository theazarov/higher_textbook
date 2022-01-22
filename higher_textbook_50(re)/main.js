'use strict';

//Хранение массивов и объектов в локальном хранилище:

let arr = [1,2,3,4,5]
localStorage.setItem('arr', JSON.stringify(arr))
console.log(localStorage.getItem('arr'))

/*Задача 1js.Sp.Sg.AO

Даны инпуты и кнопка. По нажатию на кнопку получите тексты всех инпутов в виде массива и сохраните этот массив в локальное хранилище.*/

let inputOne = document.getElementById('inputOne')
let inputTwo = document.getElementById('inputTwo')
let addString = document.getElementById('addString')
let local = localStorage.getItem('localArr')

if(local === null){
    addString.addEventListener('click', function(){
        let arr = [inputOne.value, inputTwo.value]
        localStorage.setItem('localArr', JSON.stringify(arr))
        
        let json = localStorage.getItem('localArr')
        arr = JSON.parse(json)
        console.log(arr)
    })
} else{
    let arr = JSON.parse(localStorage.getItem('localArr'))
    inputOne.value = arr[0]
    inputTwo.value = arr[1]
}

/*Задача 2js.Sp.Sg.AO

Модифицируйте предыдущую задачу. Сделайте так, чтобы при следующем заходе на страницу в инпутах стояли сохраненные в локальном хранилище значения.*/

/*Задача 3js.Sp.Sg.AO

Дан следующий массив с юзерами:

let users = [
	{
		surname: 'surname1',
		name: 'name1',
		age: 31,
	},
	{
		surname: 'surname2',
		name: 'name2',
		age: 32,
	},
	{
		surname: 'surname3',
		name: 'name3',
		age: 33,
	},
];
Сохраните его в локальное хранилище. Затем сделайте 3 инпута и кнопку. Пусть в инпуты вводятся фамилия, имя и возраст. По нажатию на кнопку запишите нового юзера в конец сохраненного в хранилище массива.*/

let users = [
	{
		surname: 'surname1',
		name: 'name1',
		age: 31,
	},
	{
		surname: 'surname2',
		name: 'name2',
		age: 32,
	},
	{
		surname: 'surname3',
		name: 'name3',
		age: 33,
	},
];

localStorage.setItem('users', JSON.stringify(users))

let surname = document.getElementById('surname')
let username = document.getElementById('username')
let age = document.getElementById('age')
let addUser = document.getElementById('addUser')

addUser.addEventListener('click', function(){
    let obj = {
		surname: surname.value,
		name: username.value,
		age: age.value,
	}
    console.log(obj)

    users = JSON.parse(localStorage.getItem('users'))
    users.push(obj)
    localStorage.setItem('users', JSON.stringify(users))
    console.log(localStorage.getItem('users'))
})
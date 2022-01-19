'use strict';

//Введение в формат JSON в JavaScript:

let json = `[1,2,3,4,5]`

json = `[
    {
        'a':'aaa',
        'b': 'ddd'
    },
    {
        'c':'ccc',
        'd':'ddd'
    }
]`
console.log(json)

/*Задача 1js.Sp.Cl.JnIn

Дан массив:

let arr = [1, 2, 3, 'a', 'b', 'c'];
Вручную преобразуйте этот массив в строку в формате JSON.*/

let arr = [1, 2, 3, 'a', 'b', 'c'];

json = `[1, 2, 3, 'a', 'b', 'c']`

/*Задача 2js.Sp.Cl.JnIn

Дан объект:

let obj = {
	a: 1,
	b: 2,
	c: 'eee',
	d: true,
};
Вручную преобразуйте этот массив в строку в формате JSON.*/

let obj = {
	a: 1,
	b: 2,
	c: 'eee',
	d: true,
};

json = `[
    {
        'a': 1,
        'b': 2,
        'c': 'eee',
        'd': true,
    }
]`

/*Задача 3js.Sp.Cl.JnIn

Дан объект:

let obj = {
	a: ['a', 'b', 'c',],
	b: '111',
	c: 'eee',
};
Вручную преобразуйте этот массив в строку в формате JSON. */

obj = {
	a: ['a', 'b', 'c',],
	b: '111',
	c: 'eee',
};

json = `[
    'a': ['a', 'b', 'c',],
	'b': '111',
	'c': 'eee'
]`

//Преобразование JSON в структуру данных JavaScript:

json = '[1, 2, 3, 4, 5, "a", "b"]'

arr = JSON.parse(json)

console.log(arr)

/*Задача 1js.Sp.Cl.JnTS

Дана строка в формате JSON, содержащая массив с числами:

let json = '[1,2,3,4,5]';
Преобразуйте эту строку в настоящий массив JavaScript и найдите сумму чисел этого массива*/

json = '[1,2,3,4,5]'
let sum = new Number()

arr = JSON.parse(json)

for(let elem of arr){
    sum += elem
}

console.log(sum)

/*Задача 2js.Sp.Cl.JnTS

Дана строка в формате JSON, содержащая объект с данными:

let json = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`;
Найдите сумму чисел из представленных данных.*/

json = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`
sum = new Number()

arr = JSON.parse(json)
console.log(arr)

arr[Symbol.iterator] = function *(){
    for(let key in this){
        yield this[key]
    }
}

for(let one of arr){
    for(let num of one){
        sum += num
    }
}
console.log(sum)

/*Задача 3js.Sp.Cl.JnTS

Дана строка в формате JSON, содержащая имена юзеров:

let json = '["user1","user2","user3","user4","user5"]';
Выведите эти имена в виде списка ul.*/

json = '["user1","user2","user3","user4","user5"]';

arr = JSON.parse(json)

for(let elem of arr){
    console.log(elem)
}

/*Задача 4js.Sp.Cl.JnTS

Дана строка в формате JSON, содержащая массив с данными работников:

let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;
Выведите этих работников на экран в виде HTML таблицы.*/

let parent = document.getElementById('parent')

json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`

arr = JSON.parse(json)

for(let elem of arr){
    elem[Symbol.iterator] = function *(){
        for(let key in this){
            yield key + ' ' + this[key]
        }
    }
}

let table = document.createElement('table')

for(let obj of arr){
    let tr = document.createElement('tr')

    for(let elem of obj){
        let td = document.createElement('td')
        td.innerHTML = elem
        tr.appendChild(td)
    }
    table.appendChild(tr)
}

parent.appendChild(table)
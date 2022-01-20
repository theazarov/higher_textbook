'use strict';

//Преобразование JSON в структуру данных JavaScript RE:

let json = '[1, 2, 3, 4, 5, "a", "b"]'

let arr = JSON.parse(json)
console.log(arr)

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
]`;

arr = JSON.parse(json)

for(let obj of arr){

    obj[Symbol.iterator] = function *(){
        for(let key in this){
            yield this[key]
        }
    }

    for(let elem of obj){
        console.log(elem)
    }
}

//Преобразование структур данных JavaScript в формат JSON:

arr = [1,2,'a','b']
json = JSON.stringify(arr)
console.log(json)

/*Задача 1js.Sp.Cl.JnFS

Дан следующий массив:

let json = ['user1', 'user2', 'user3', 'user4', 'user5'];
Преобразуйте этот массив в формат JSON.*/

arr = ['user1', 'user2', 'user3', 'user4', 'user5'];
json = JSON.stringify(arr)
console.log(json)

/*Задача 2js.Sp.Cl.JnFS

Дан следующий HTML:

<ul>
	<li>city1</li>
	<li>city2</li>
	<li>city3</li>
	<li>city4</li>
</ul>
Получите список городов в формате JSON.*/

let city = document.querySelectorAll('li')
arr = new Array()

for(let elem of city){
    arr.push(elem.innerHTML)
}

json = JSON.stringify(arr)
console.log(json)

/*Задача 3js.Sp.Cl.JnFS

Дан следующий HTML:

<table>
	<tr>
		<th>Фамилия</th>
		<th>Имя</th>
		<th>Отчество</th>
	</tr>
	<tr>
		<td>Иванов</td>
		<td>Иван</td>
		<td>Иванович</td>
	</tr>
	<tr>
		<td>Петров</td>
		<td>Петр</td>
		<td>Петрович</td>
	</tr>
	<tr>
		<td>Сидоров</td>
		<td>Сидр</td>
		<td>Сидорович</td>
	</tr>
</table>
Получите представленные данные в формате JSON в виде объекта с ключами surname, name, patronymic.*/

let trs = document.querySelectorAll('tr')

arr = new Array()

for(let tr of trs){
    let obj = new Object()
    let tds = tr.querySelectorAll('td')
    let i = 0
    
    for(let elem of tds){
        i == 0 ? obj['surname'] = elem.innerText : null
        i == 1 ? obj['name'] = elem.innerText : null
        i == 2 ? obj['patronymic'] = elem.innerText : null

        i == 3 ? i = 0 : i++
    }
    arr.push(obj)
}

arr.shift()
json = JSON.stringify(arr)
console.log(json)

//Изменение данных в JSON на JavaScript:

/*Задача 1js.Sp.Cl.JnDCh

Дан следующий JSON:

let json = '["user1","user2","user3","user4","user5"]';
Добавьте в конец строки еще одного юзера.*/

json = '["user1","user2","user3","user4","user5"]'
arr = JSON.parse(json)
arr.push('user6')
json = JSON.stringify(arr)

console.log(json)

/*Задача 2js.Sp.Cl.JnDCh

Дан следующий JSON:

let json = '["user1","user2","user3","user4","user5"]';
Поменяйте имя второго юзера.*/

json = '["user1","user2","user3","user4","user5"]';
arr = JSON.parse(json)
arr[1] = 'lol'
json = JSON.stringify(arr)

console.log(json)

/*Задача 3js.Sp.Cl.JnDCh

Дан следующий JSON:

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
Добавьте в эту строку еще одного работника.*/

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
]`;

arr = JSON.parse(json)

arr[3] = {}
arr[3]["name"] = 'doter'
arr[3]["age"] = '13'
arr[3]["salary"] = '0'
console.log(arr)

json = JSON.stringify(arr)
console.log(json)
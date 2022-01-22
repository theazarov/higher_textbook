"use strict";

//Объект с ошибкой:

/*Задача 1js.Sp.Exc.EO

Специально создайте исключительную ситуацию, связанную с попыткой разбора некорректного JSON. Выведите в консоль имя и текст этой ошибки.*/

try {
  let arr = [1, 2, 3];
  JSON.parse(arr);
  console.log("work");
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

//   localStorage.setItem("key", str);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

function saveData(json){
    //работает
    // let arr = JSON.parse(json)

    // for(let i = 0; i < arr.length; i++){
    //     localStorage.setItem(i, arr[i])
    // }
    // console.log('work')

    //хранилище переполнено
    // let str = json;
    // for (let i = 1; i <= 6 * 10 ** 6; i++) {
    // // формируем строку более 5 мб
    // str += "+";
    // }

    //некорректный JSON
    let arr = [1, 2, 3];
    JSON.parse(arr);
    console.log("work");

    localStorage.setItem("key", str);
}

try{
    saveData(('[1,2,3,4,5]'))
} catch(error){

    if (error.name == 'QuotaExceededError') {
        console.log('закончилось место в хранилище')
    }

    if(error.name == 'SyntaxError'){
        console.log('некорректный JSON')
    }
}

function saveDataTwo(json){

    try{
        let arr = JSON.parse(json)

        for(let i = 0; i < arr.length; i++){
            try{
                localStorage.setItem(i, arr[i])
            }catch(error){
                console.log('закончилось место в хранилище')
            }
        }
    } catch(error){
        console.log(('некорректный JSON'))
    }
}
saveDataTwo('[1,2,3,4,5]')
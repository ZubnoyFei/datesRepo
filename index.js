'use strict'

// const now = new Date('2022-04-20');
//
// console.log(now);

//const now = new Date(2022, 5, 8, 20); // UTC +3

/*Timestamp -это количество миллисекунд с 1 января 1970*/

// const now = new Date(0);//1970-01-01T00:00:00.000Z

const now = new Date('2022-04-20');

//console.log(now.getFullYear());// result 2022

// console.log(now.getMonth());//3

//console.log(now.getDate());//20

// console.log(now.getDay());//3 Wednesday

//console.log(now.getUTCHours());// 10

//console.log(now.getTimezoneOffset());// -180. Количество минут, на которые я различаюсь с главным часовым поясом


// console.log(now.setHours(18));
// console.log(now);

// new Date.parse(2022-04-20);// Это метод, который спарсит строку

let start = new Date();//Начало работы скрипта

for(let i = 0; i<100000; i++){
    let some = i **3;// Мы i возводим в степень каждый раз
}

let end = new Date();//Конец работы скрипта

alert(`Цикл отработал за ${end - start} мс`);
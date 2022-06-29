"use strict";

let userName;
console.log(typeof userName);

let willYouMarryMe = true;
if (willYouMarryMe){
   console.log(':)');
} else {
   console.log(':(');
}


let trueOrFalse = 58 > 18;
console.log(trueOrFalse);

let userAge = 36;
let userInfo = 'Фрилансер ${userAge}';

let userHeight = 145 / 0;
console.log(userHeight);

let resultOne = "25" - 5;
console.log(resultOne);
console.log(typeof resultOne);

let resultTwo = 10 * "80";
console.log(resultTwo);
console.log(typeof resultTwo);

let message = 'Hello, freelance';

if (2 > 1){
   console.log(message);
}

let number = 5;
if (number > 6){
   console.log(message);
} else{
   console.log('Условие не выполнено :(');
}
/*
let messageHello = "Hello";
let messageEnd;
if (5 > 1){
   messageEnd = ", Вася!";
} else {
   messageHello = ", Оля!";
}
messageHello += messageEnd;
console.log(messageHello);
*/
let messageHello = "Hello";
let messageEnd = (5 > 1) ? ",Вася!" : ", Оля";
messageHello += messageEnd;
console.log(messageHello);

// Цикл While

// Пример 
let num = 0;
while (num < 5) {
   console.log(num);
   num++;
}


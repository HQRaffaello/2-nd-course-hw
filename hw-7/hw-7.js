/* Задание 1
let str = prompt(`Введите названия языка программирования:`);
str = str.toUpperCase();
console.log(str);
*/

/*
const products = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';

products.forEach((product) => {

	if (product.toLowerCase().includes(search.toLowerCase())) {
		console.log(product);
	}
});
*/

/* Задание 2
Вариант 1
let a = new Array();
let count = 6;

for (let i=0; i<count; i++)
    a[i]=String(prompt("Введите  слово:", ""));
alert("Массив: "+a.join(", "));

let search = String(prompt(`Введите часть или полное слово для поиска`));

a.forEach((product) => {

	if (product.toLowerCase().includes(search.toLowerCase())) {
		console.log(product);
	}
});

Вариант 2
function searchStart(str, search) {

    str.forEach((product) => {
        if (product.toLowerCase().startsWith(search.toLowerCase())) {
            console.log(product);
        }
    });
    return str;
};

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []
*/

/* Задание 3
let x = 32.58884;
let x1 = Math.floor(x);
console.log(x1);
let x2 = Math.ceil(x);
console.log(x2);
let x3 = Math.round(x);
console.log(x3);
*/

/* Задание 4
let arr = [52, 53, 49, 77, 21, 32];
let max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
let min = arr.reduce((a, b) => Math.min(a, b), +Infinity);

console.log(max);
console.log(min);
*/

/* Задание 5
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRndInteger(1, 10));
*/

/* Задание 6
function getRandomArrNumbers(numb) {
    let array = [];
    let halfArray = Math.floor(numb / 2);
    for (let i = 0; i < halfArray; i++) {
        array.push(Math.ceil(Math.random(numb)));
    }
    return array
}
getRandomArrNumbers(7)
getRandomArrNumbers(12)
*/

/* Задание 7
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
*/

/* Задание 8
let nowDate = new Date ();
console.log(nowDate);
*/

/* Задание 9
let currentDate = new Date ();
setDate(getDate(73))
*/

/* Задание 10
// для начала создадим массив, в который занесем все дни недели на русском
// помним, что отсчет в JS начинается с воскресенья - 0
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// создадим массив, где будем хранить названия месяцев на русском
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); // здесь мы получаем текущую дату
let fullDate = "Сегодня: " + myDate.getDate() + // getDate возвращает число
" " + months[myDate.getMonth()] + // getMonth возвращает номер месяца, который мы можем использовать в качестве индекса для массива months
" " + myDate.getFullYear() + // getFullYear возвращает год
", " + days[myDate.getDay()]; // getDay возвращает номер дня недели, который мы используем в качестве индекса для массива days
let hour = myDate.getHours(); // получаем час из нашей даты
let minute = myDate.getMinutes(); // получаем минуты
let second = myDate.getSeconds(); // получаем секунды

console.log(fullDate); // Сегодня: 1 Февраль 2023, Среда
console.log("Текущее время: " + hour + ":" + minute + ":" + second);
*/

/* Задание 11
const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
const shuffledWords = words.sort(() => Math.random() - 0.5);

alert("Перемешанный массив: " + shuffledWords);

const firstWord = prompt("Чему равнялся первый элемент массива?");
const lastWord = prompt("Чему равнялся последний элемент массива?");

if (firstWord === shuffledWords[0] && lastWord === shuffledWords[shuffledWords.length - 1]) {
  alert("Поздравляем, вы угадали оба слова!");
} else if (firstWord === shuffledWords[0] || lastWord === shuffledWords[shuffledWords.length - 1]) {
  alert("Вы были близки к победе!");
} else {
  alert("Вы ответили неверно");
}
*/
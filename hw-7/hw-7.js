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


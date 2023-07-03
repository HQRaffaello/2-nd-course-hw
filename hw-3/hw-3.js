/* Задание 1
let password = 'пароль';
let user_password = prompt('Введите пароль:')

if (password === user_password) {
    alert('Пароль введен верно')
    
} else {
    alert('Пароль введен неправильно')
}


let password = 'пароль';
let user_password = prompt('Введите пароль:')

if (password === user_password) {
    console.log('Пароль введен верно')
    
} else {
    console.log('Пароль введен неправильно')
}
*/

/* Задание 2
let c = Number(prompt('Введи числа 0, 10, -3, 2 -для проверки'));

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');
*/

/* Задание 3
let d = Number(prompt('Введи числа для проверки'));
let e = Number(prompt('Введи числа для проверки'));

if (d > 100 || e < 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

(d > 100 || e < 100) ? console.log('Верно') : console.log('Неверно');
*/

/* Задание 4
let a = '2';
let b = '3';

alert(a * 1 + b * 1);
*/

/* Задание 5
let monthNumber = +prompt('Для того, чтобы узнать к какому сезону этот месяц принадлежит - введите номер месяца:');

switch (monthNumber) {
    case 9:
    case 10:
    case 11:
        console.log('Осень');        
        break;

    case 12:
    case 1:
    case 2:
        console.log('Зима');        
        break;

    case 3:
    case 4:
    case 5:
        console.log('Весна');        
        break;

    case 6:
    case 7:
    case 8:
        console.log('Лето');        
        break;

    default:
        console.log('Вы ввели некрроктное значение!');
        break;
}
*/
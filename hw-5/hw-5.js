/* Задание 1
function min() {
    let e = +prompt(`Введите первое число:`);
    let f = +prompt(`Введите второе число:`);
    if (e < f) {
        console.log(e);
    } else {
        console.log(f);
    }
}

let result = min();
*/

/* Задание 2
function min() {
    let e = +prompt(`Введите число:`);

    if (e % 2 == 0) {
        console.log(`Число четное`);
    } else {
        console.log(`Число нечетное`);
    }
}

let result = min();
*/

/* Задание 3.1
function min() {
    let e = +prompt(`Введите число:`);
    e = e ** 2
    console.log(e);
}

let result = min();
*/

/* Задание 3.2
function min() {
    let e = +prompt(`Введите число:`);
    return e ** 2;
}

let result = min();
alert(result);
*/

/* Задание 4
function age() {
    let e = +prompt(`Сколько вам лет?`);

    if (e < 0) {
        console.log(`Вы ввели неправильное значение`);
    } else if (e > 0 && e <12) {
        console.log(`Привет, друг!`);
    } else if ( e === 13) {
        console.log(`Добро пожаловать!`);
    }
}

let result = age();
*/

/* Задание 5
function multiplyNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return 'Одно или оба значения не являются числом';
    } else {
      return num1 * num2;
    }
}
*/

/* Задание 6
function cubeNumber() {
    let number = prompt("Введите число:");
  
    if (isNaN(number)) {
      return 'Переданный параметр не является числом';
    } else {
      let cube = Math.pow(Number(number), 3);
      return ${number} в кубе равняется ${cube};
    }
}
*/

/* Задание 7
let circle1 = {
    radius: 5,
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
};
  
let circle2 = {
    radius: 10,
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
};
*/
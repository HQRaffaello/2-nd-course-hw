/* Задание 1
let i = 1;

while (i <= 2) {
    console.log('Привет');
    i++;
}
*/

/* Задание 2
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
*/

/* Задание 3
let i = 7;

while (i <= 22) {
    console.log(i);
    i++;
}
*/

/* Задание 4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}

for (let key in obj) {
        console.log(`${key} — зарплата ${obj[key]} долларов.`);
}
*/

/* Задание 5
let n = 1000;
let num = 0;
while (n >= 50) {
   n = n/2;
   num++;
}
console.log(n);
console.log(num);
*/

/* Заание 6 вариант 1
let dayNumber = +prompt('Введите число первой пятницы месяца');

while (dayNumber <= 31) {
    if (1 <= dayNumber && dayNumber <= 3) {
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
    }
    else if (4 <= dayNumber && dayNumber <= 7) {
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        dayNumber = dayNumber + 7;
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
    }
    
    else {
        console.log(`На сегодня нет задач.`);
    }


    break;
}
*/

 /* Задание 6 вариант 2
let dayNumber = +prompt('Введите число первой пятницы месяца');
for ( ; dayNumber <= 31; dayNumber+=7) { 
	if (dayNumber % 5 == 0) { 
		continue; 
	}
	alert(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
}
*/
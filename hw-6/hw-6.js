/* Задание 1
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i-1] == 10) break;
	console.log(numbs[i]);
}
*/

/* Задание 2
const numbs = [1, 5, 4, 10, 0, 3];
const item = 4;
const index = numbs.indexOf(item);

if (index !== -1) {
  console.log(`Элемент ${item} имеет индекс ${index} в этом массиве`);
}
else {
  console.log(`Элемент ${item} не найдет в этом массиве.`);
}
*/

/* Задание 3
numbers = [1, 3, 5, 10, 20];

numbers = numbers.join(' ');
console.log(numbers);
*/

/* Задача 4
let arr = [];

for (let i = 0; i < 3; i++  ) {
	arr[i] = []; // создаем подмассив
	
	for (let j = 0; j < 3; j++) {
		arr[i].push(1); // заполняем подмассив числами
	}
}

console.log(arr);
*/

/* Задание 5
let massive = [1, 1, 1];
massive.push(2, 2, 2,);
console.log(massive);
*/

/* Задание 6
let massive = [9, 8, 7, 'a', 6, 5]
massive = massive.sort(); // 
massive.splice(5,1);
console.log(massive);
*/

/* Задание 7
let arr = [9, 8, 7, 6, 5];
let n = number(promt('Введите число'));
if (arr.includes(n)) {
    alert('Вы угадали');
} else {
    alert('Вы не угадали');
}
*/

/* Задание 8
const str = 'abcdef';
const reverse = str.split(' ').reverse().join(' ');
console.log(reverse);
*/

/*Задание 9
let arr = [[1, 2, 3,],[4, 5, 6]];
let newArr = arr.flat(Infinity);
console.log(newArr);
*/

/* Задание 10
let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length - 1; i++) {
  let sum = arr[i] + arr[i + 1];
  console.log(sum);
}
*/

/* Задание 11
const arr = [5, 2, 3];

const newarr = arr.map((arr) => arr ** 2);
console.log(newarr);
*/

/* Задание 12
const getLengthWords = source => source.map(str => str.length);

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));
*/

/* Задание 13
function getNegativeNumbers(arr) {
  let negativeNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeNumbers.push(arr[i]);
    }
  }
  return negativeNumbers;
}

let numbers = [1, -2, 3, -4, 5];
let negativeNumbers = getNegativeNumbers(numbers);
console.log(negativeNumbers); //
*/
// вроде работает
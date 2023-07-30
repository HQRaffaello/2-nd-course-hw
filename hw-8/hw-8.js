/* Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 console.log(people.sort((person1, person2) => person1.age - person2.age)); 
 // сортировка по возрастанию возраста
*/

/* Задание 2
function map(array, ruleFunction) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(ruleFunction(array[i]));
    }
    return newArray;
  }
  
  function filter(array, ruleFunction) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (ruleFunction(array[i])) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  
  function isPositive(number) {
    return number > 0;
  }
  
  function isMale(person) {
    return person.gender === 'male';
  }
  
  console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
  
  const people = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
  
  console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]. // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
*/


/* Задание 3
let counter = 0;
const intervalId = setInterval(() => {
   console.log(new Date());
   counter += 3;
   if (counter >= 30) {
      clearInterval(intervalId);
      console.log('30 секунд прошло.');
   }
}, 3000);
*/

/* Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
 }
 
delayForSecond(function () {
    sayHi('Глеб');
}); 
 */

/* Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => {
  sayHi('Глеб');
});
 */
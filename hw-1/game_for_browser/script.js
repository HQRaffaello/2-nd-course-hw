function getSeason() {
    let month = +prompt(`Выберите месяц:`);
  if (month < 1 || month > 12) {
    alert('Неправильный параметр');
  } else if (month >= 3 && month <= 5) {
    alert('Весна');
  } else if (month >= 6 && month <= 8) {
    alert('Лето');
  } else if (month >= 9 && month <= 11) {
    alert('Осень');
  } else {
    alert('Зима');
  }
  
}

function wordquzizz() {
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
}
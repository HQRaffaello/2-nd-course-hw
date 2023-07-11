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
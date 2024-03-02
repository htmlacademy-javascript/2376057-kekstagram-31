// Функция для проверки строки

function checksLength(string, length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
}

// Проверка строки

checksLength('Тут мало слов', 20);


// Проверка на полидром

function isPalidrom(str) {

  const cleanStr = str.toLowerCase().replace(/[^a-zа-я]/g, '');

  const reversedStr = cleanStr.split('').reverse().join('');

  return cleanStr === reversedStr;
}

// Проверка полидрома

isPalidrom('Лёша на полке клопа нашёл ');


// Вытаскивание цифр

function extractNumber(str) {
  if (!/\d/.test(str)) {
    return NaN;
  }

  const digitsArray = str.match(/\d/g);
  const digitsStr = digitsArray.join('');
  return parseInt(digitsStr, 10);
}

// Проверка функции по вытаскиванию чисел

extractNumber('Соне скоро 20 лет');

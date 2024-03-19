//Функция рандомного числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.ceil(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Возвращение рандомного элемента массива
const getRandomArrayElement = (element) => element[getRandomInteger(0, element.length - 1)];

//Рандомный id
const getRandomIdGenerator = (min, max) => {
  const ids = [];
  return function () {
    let id = getRandomInteger(min, max);
    while (ids.includes(id)) {
      id = getRandomInteger(min, max);
    }
    ids.push(id);
    return id;
  };
};

export {getRandomInteger, getRandomArrayElement, getRandomIdGenerator};

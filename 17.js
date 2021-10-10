// Write a function that takes an array as a parameter. The function returns the index of the maximum element:
// Написать функцию, которая параметром принимает массив. Функция возвращает индекс максимального элемента:

const array = [1, 2, 3, 4, 10, 6, 7, 11, 9, 5];

const testFunction = (arr) => {
  let max = 0;
  let indexMax = 0;

  arr.forEach((item, index) => {
    if (item > max) {
      max = item;
      indexMax = index;
    }
  });

  return indexMax;
};

console.log(testFunction(array));

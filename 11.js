// Write a function that takes an array as a parameter. The function returns true if all values ​​are positive, otherwise false:
// Написать функцию, которая параметром принимает массив. Функция возвращает true, если все значения положительные, иначе false:

const array1 = [1, -3, 2, 3, 4, -7, 5, 6, 7, 8, 9, 10];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const testFunction = (arr) => {
  let temp = true;

  arr.forEach((item) => {
    if (item < 0) {
      temp = false;
    }
  });

  return temp;
};

console.log(testFunction(array1));
console.log(testFunction(array2));

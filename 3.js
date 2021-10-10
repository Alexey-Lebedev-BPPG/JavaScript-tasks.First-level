// Write a function that takes an array as a parameter. Print even values ​​of an array:
// Написать функцию, которая параметром принимает массив. Вывести четные значения массива:

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const testFunction = (arr) => {
  arr.forEach((item) => {
    if (item % 2 === 0) {
      console.log(item);
    }
  });
};

testFunction(array);

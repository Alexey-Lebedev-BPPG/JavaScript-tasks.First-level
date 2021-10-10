// Write a function that takes an array of elements as a parameter. The function returns true if all elements are odd, otherwise false:
// Написать функцию, которая параметром принимает массив элементов. Функция возвращает true, если все элементы нечетные, иначе false:

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [1, 3, 5, 7, 9];

const testFunction = (arr) => {
  let temp = true;

  arr.forEach((item) => {
    if (item % 2 === 0) {
      temp = false;
    }
  });

  return temp;
};

console.log(testFunction(array1));
console.log(testFunction(array2));

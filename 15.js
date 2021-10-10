// Write a function that takes an array of elements and a value as a parameter. The function returns true if the array contains this value, otherwise false:
// Написать функцию, которая параметром принимает массив элементов и значение. Функция возвращает true,если в массиве есть это значение, иначе false:

const array = [1, 2, 3, 4, 5, 6, 7, 7, 7];

const testFunction = (arr, val) => {
  let temp = false;

  arr.forEach((item) => {
    if (item === val) {
      temp = true;
    }
  });

  return temp;
};

console.log(testFunction(array, 3));
console.log(testFunction(array, 8));

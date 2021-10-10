// Write a function that takes as parameters: an array of elements, 1st value, 2nd value. Return an array of values ​​that are greater than these 2 parameters:
// Написать функцию, которая параметрами принимает: массив элементов, 1-е значение, 2-е значение. Вернуть массив значений, которые больше эти 2-х параметров:

const array = [1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 7, 7];

const testFunction = (arr, val1, val2) => {
  let newArray = [];

  arr.forEach((item) => {
    if (item > val1 && item > val2) {
      newArray.push(item);
    }
  });

  return newArray;
};

console.log(testFunction(array, 4, 1));

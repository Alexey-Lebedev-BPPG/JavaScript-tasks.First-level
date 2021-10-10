// Write a function that takes as parameters: an array of elements, 1st value, 2nd value. Return an array of element indices of values ​​that match the parameters:
// Написать функцию, которая параметрами принимает: массив элементов, 1-е значение, 2-е значение. Вернуть массив индексов элементов значений, которых совпадают с параметрами:

const array = [1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 7, 7];

const testFunction = (arr, val1, val2) => {
  let newArray = [];

  arr.forEach((item, index) => {
    if (item === val1 || item === val2) {
      newArray.push(index);
    }
  });

  return newArray;
};

console.log(testFunction(array, 7, 2));

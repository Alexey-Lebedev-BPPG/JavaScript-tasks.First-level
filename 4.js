// Write a function that takes a value and an array of values ​​as parameters. Print an array of indices of elements that are equal to the given value:
// Написать функцию, которая параметрами принимает значение и массив значений. Вывести массив индексов элементов, которые равны заданному значению:

const array = [1, 2, 3, 4, 5, 6, 7, 7, 7];
const value1 = 7;

const testFunction = (value, arr) => {
  let newArray = [];
  
  arr.forEach((item, index) => {
    if (item === value) {
      newArray.push(index);
    }
  });

  return newArray;
};

console.log(testFunction(value1, array));

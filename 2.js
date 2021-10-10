// Write a function that takes a value and an array of values ​​as parameters. Print the number of array elements that are equal to the first parameter:
// Написать функцию, которая параметрами принимает значение и массив значений. Вывести количество элементов массива, которые равны первому параметру:

const array = [1, 2, 3, 4, 5, 6, 7, 7, 7];
const value1 = 7;

const testFunction = (value, arr) => {
  let temp = 0;
  arr.forEach((item) => {
    if (item === value) {
      temp++;
    }
  });

  return temp;
};

console.log(testFunction(value1, array));

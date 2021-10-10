// Write a function that takes an array as a parameter. The function returns true if at least 1 value is positive, otherwise false. And return an array of positive values:
// Написать функцию, которая параметром принимает массив. Функция возвращает true, если хотя бы 1 значение положительное, иначе false. И вернуть массив положительных значений:

const array = [1, -3, 2, 3, 4, -7, 5, 6, 7, 8, 9, 10];

const testFunction = (arr) => {
  let temp = false;
  let newArray = [];

  arr.forEach((item) => {
    if (item > 0) {
      temp = true;
      newArray.push(item);
    }
  });

  console.log(newArray);
  return temp;
};

console.log(testFunction(array));

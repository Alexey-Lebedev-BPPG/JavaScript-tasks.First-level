// Write a function that takes an array of elements as a parameter. Select an array with even elements. Return an array with values ​​that are not in the resulting array:
// Написать функцию, которая параметром принимает массив элементов. Отобрать массив с четными элементами. Вернуть массив со значениями, которые отсутствуют в получившемся массиве:

const array = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 9, 10];

const testFunction = (arr) => {
  let newArray = [];
  let newArray1 = [];

  arr.forEach((item) => {
    if (item % 2 === 0) {
      newArray.push(item);
    } else {
      newArray1.push(item);
    }
  });

  return newArray1;
};

console.log(testFunction(array));

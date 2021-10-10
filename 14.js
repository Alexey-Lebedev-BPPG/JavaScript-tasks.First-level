// Write a function that takes an array of elements as a parameter. The function returns true if at least 1 element is odd, otherwise false. And return an array of odd values:
// Написать функцию, которая параметром принимает массив элементов. Функция возвращает true, если хотя бы 1 элемент нечетный, иначе false. И вернуть массив нечетных значений:

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [2, 4, 6, 8];

const testFunction = (arr) => {
  let temp = false;
  let newArray = [];

  arr.forEach((item) => {
    if (item % 2 !== 0) {
      temp = true;
      newArray.push(item);
    }
  });

  console.log(newArray);
  return temp;
};

console.log(testFunction(array1));
console.log(testFunction(array2));

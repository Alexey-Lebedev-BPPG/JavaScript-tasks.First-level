// Write a function that takes an array as a parameter. The function returns an object in the form: {max: value, index: i, count: number}, where max is the value of the maximum element, index is the index of the maximum element, and count is the number of elements. The maximum value of an element can be repeated in the array:
// Напишите функцию, которая принимает в качестве параметра массив. Функция возвращает объект в форме: {max: value, index: i, count: number}, где max - это значение максимального элемента, index - это индекс максимального элемента, а count - количество элементов. Максимальное значение элемента может повторяться в массиве:

const array = [1, 2, 3, 4, 10, 6, 7, 11, 11, 11, 9, 5];

const testFunction = (arr) => {
  let object = {};
  let max = 0;
  let index = 0;
  let count = 1;

  arr.forEach((item, ind) => {
    if (item >= max && ind > count) {
      if (item === max) {
        count++;
      }
      max = item;
      index = ind;
    }
  });
  object.max = max;
  object.index = index;
  object.count = count;

  return object;
};
console.log(testFunction(array));

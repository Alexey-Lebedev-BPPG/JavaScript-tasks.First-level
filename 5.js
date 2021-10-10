// Write a function that takes 3 arguments: 2 values ​​and an array with values. You need to display a modified array of values, in which the last occurrence of the first argument is replaced by the last argument:
// Написать функцию, которая принимает 3 аргумента: 2 значения и массив со значениями. Необходимо вывести измененный массив значений, в котором последнее вхождение первого аргумента заменено на последний аргумент:

const array = [1, 2, 3, 4, 5, 6, 7, 7, 7, 8];

const testFunction = (val1, val2, arr) => {
  let temp = 0;
  let newArray = [];

  arr.forEach((item) => {
    if(item === val1){
      temp = val2;
    } else {
      newArray.push(item);
    }
  });
  newArray.push(temp);

  return newArray;
}

console.log(testFunction(7, 10, array));
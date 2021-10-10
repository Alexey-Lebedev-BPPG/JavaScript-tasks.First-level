// Using the map method, implement getting the number of elements in an array:
// С помощью метода map реализовать получение количества элементов в массиве:

const array = [1, 2, 3, 4, 5, 6, 7];

const testFunction = (arr) => {
  let temp = 0;

  arr.map((value) => {
    if (value < arr.length) {
      temp++;
    }
  });

  return temp;
};

console.log(testFunction(array));

// Write a function that takes as parameters: an array of objects, the name of the key. The function returns an element with a property whose value is maximum:
// Написать функцию, которая параметрами принимает: массив объектов, название ключа. Функция возвращает элемент со свойством, значение которого максимальное:

const collectionObject = [
  {
    name: "John",
    age: 30,
    number: 81111111111,
  },
  {
    name: "Maria",
    age: 18,
    number: 82222222222,
  },
  {
    name: "Maria",
    age: 18,
    number: 82222222222,
  },
  {
    name: "Petr",
    age: 40,
    number: 83333333333,
  },
];

const testFunction = (coll, age) => {
  let temp = coll[0];

  coll.forEach((obj) => {
    if (obj.age > temp.age) {
      temp = obj;
    }
  });

  return temp;
};

console.log(testFunction(collectionObject, "age"));

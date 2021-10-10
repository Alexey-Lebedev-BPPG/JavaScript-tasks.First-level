// Write a function that takes as parameters: an array of objects, a key, a value. The function returns an array of objects that have the same value for the given key. But the array stores objects that may not have this property or be an empty object altogether:
// Написать функцию, которая параметрами принимает: массив объектов, ключ, значение. Функция возвращает массив объектов, у которых по заданному ключу совпадает заданное значение. Но в массиве хранятся объекты у которых может отсутствовать данное свойство или быть вообще пустым объектом:

const collectionObject = [
  {
    name1: "John",
    age1: 30,
    number1: 81111111111,
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
  {},
  {
    name: "Ibrahim",
    number: 83333333333,
  },
];

const testFunction = (coll, key, val) => {
  let newCollection = [];

  coll.forEach((obj) => {
    if (obj[key] === val) {
      newCollection.push(obj);
    }
  });

  return newCollection;
};

console.log(testFunction(collectionObject, "age", 18));

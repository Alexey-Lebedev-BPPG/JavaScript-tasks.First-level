// Write a function that takes as parameters: an array of objects, an object with at least 2 fields. Return an array of objects, the objects of which match the object from the parameter at least one key or value:
// Написать функцию, которая параметрами принимает: массив объектов, объект с минимум 2-ми полями. Вернуть массив объектов, объекты которого, совпадают с объектом из параметром минимум по одному ключу или значению:

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
    age: 19,
    number: 5555,
  },
  {
    name: "Petr",
    age: 40,
    number: 83333333333,
  },
];
const object1 = { name1: "Ivan", age1: 18, number1: 5555 };

const testFunction = (coll, obj1) => {
  let newCollection = [];
  let temp = {};

  coll.forEach((object) => {
    for (const key in object) {
      for (const key1 in obj1) {
        if (key === key1 || object[key] === obj1[key1]) {
          temp = object;
        }
      }
    }
    newCollection.push(temp);
  });

  return newCollection;
};

console.log(testFunction(collectionObject, object1));

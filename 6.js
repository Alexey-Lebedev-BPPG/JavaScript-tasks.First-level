// Write a function that takes 2 arguments: an object and an array with objects. It is necessary to display an array of objects in which all objects match the object of the first argument of the function:
// Написать функцию, которая принимает 2 аргумента: объект и массив с объектами. Необходимо вывести массив объектов, в котором все объекты совпадают с объектом первого аргумента функции:

const collectionObject = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Maria",
    age: 18,
  },
  {
    name: "Maria",
    age: 18,
  },
  {
    name: "Petr",
    age: 40,
  },
];
const object1 = { name: "Maria", age: 18 };

const testFunction = (obj1, collection) => {
  let newCollection = [];

  collection.forEach((object) => {
    if (object.name === obj1.name && object.age === obj1.age) {
      newCollection.push(object);
    }
  });

  return newCollection;
};

console.log(testFunction(object1, collectionObject));

// Задание 1: Создание массива
let fruits = ["Яблоко", "Банан", "Апельсин"];
console.log(fruits);

// Задание 2: Доступ к элементам массива
console.log(fruits[0]);
console.log(fruits[2]);

fruits.push("Груша");

// Задание 3: Удаление элементов из массива
fruits.pop();
fruits.shift();

console.log(fruits);

// Задание 4: Метод `forEach`
fruits.forEach((fruit) => console.log(fruit));

// Задание 5: Метод `map`
let lengths = fruits.map((fruit) => fruit.length);

// Задание 6: Метод `filter`
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter((num) => num % 2 === 0);

// Задание 7: Метод `reduce`
let sum = numbers.reduce((acc, num) => acc + num, 0);

// Задание 8: Метод `find`
let result = numbers.find(function (number) {
  if (number > 5) {
    return true;
  }
});

// Задание 9: Соединение массивов
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let array = arr1.concat(arr2);

// Задание 10: Проверка существования элемента (метод `includes`)
let hasBanana = fruits.includes("Банан");

console.log(hasBanana);

// Задание 11: Обратный порядок массива
fruits.reverse();

// Задание 1: Цикл `while`
let num = 0;

while (num <= 10) {
  num++;

  // Задание 2: Управление циклами: `break` и `continue`
  if (num === 5) {
    continue;
  }

  console.log(num);

  if (num === 8) {
    break;
  }
}

// Задание 3: Цикл `do-while`
let num2 = 1;

do {
  console.log(num2);
  num2++;
} while (num2 <= 5);
/* цикл do-while сначала выполняет тело цикла хотя бы один раз, а потом проверяет условие.
а цикл while сначала проверяет условие и может не выполниться ни разу*/

// Задание 4: Бесконечные циклы
/*let input;

while (input !== 10) {
  input = Number(prompt("Введите 10 для завершения цикла"));
  console.log("Вы ввели: " + input);
  if (input === 10) {
    break;
  }
}*/

// Задание 5: Цикл `for`
for (let a = 1; a <= 5; a++) {
  console.log(a);
}

// Задание 6: Бесконечный цикл `for`
let num3 = 0;

for (;;) {
  if (num3 > 100) {
    break;
  }
  console.log(num3);
  num3++;
}

// Задание 7: Перебор элементов массива
let numbers = [1, 2, 3, 4, 5];
for (let b = 0; b < numbers.length; b++) {
  console.log(numbers[b]);
}

// Задание 8: Выбор между `while` и `for`
/*
for: когда количество итераций известно заранее
while: когда количество итераций заранее не известно

Цикл for итерирование по массиву

let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
   console.log(fruits[i]);
}

Цикл while ожидание пользовательского ввода

let input;
while (input !== "stop") {
   input = prompt("Введите 'stop' для завершения");
   console.log("Вы ввели: " + input);
};
*/

// Задание 9: Цикл с обратным отсчетом
for (let c = 10; c >= 1; c--) {
  console.log(c);
}

// Задание 10: Использование `continue` в цикле `for`
for (let d = 1; d <= 10; d++) {
  if (d % 2 !== 0) {
    continue;
  }
  console.log(d);
}

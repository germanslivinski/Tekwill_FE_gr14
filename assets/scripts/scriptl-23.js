// 1. 
let fruits = [];

fruits.push("apple");
fruits.push("banana");
fruits.push("orange");

console.log("Длина массива fruits:", fruits.length);
console.log("Содержимое массива fruits:", fruits);

// 2.
let numbers = [1, 2, 3, 4, 5];

let lastElement = numbers.pop();
console.log("Операция 1:", lastElement);
console.log("Массив после pop():", numbers);

let firstElement = numbers.shift();
console.log("Операция 2:", firstElement);
console.log("Массив после shift():", numbers);

// 3.
let colors = ["red", "green", "blue", "yellow"];

let greenIndexof = colors.indexOf("green");
console.log("Индекс элемента 'green':", greenIndexof);

let wasOrange = colors.includes("orange");
console.log("Массив содержит 'orange'?", wasOrange);

// 4.
let names = ["John", "Jane", "Mike", "Jennifer"];

names.unshift("David");
console.log("Массив после добавления():", names);
console.log("Индекс элемента 'Mike':", names.indexOf("Mike"));

// 5.
let number = [2, 4, 6, 8, 10];

let hasNumber = number.includes('5');
console.log("Массив содержит '5'?", hasNumber);

number.push(12);
console.log(number)

// 6.
let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  
months.sort();
console.log("Отсортированные месяцы:", months);
// 7.
let filterMonths = months.filter(month => month.length > 3);
console.log("длиннее 3 букв:", filterMonths);

// 8.
let monthnew = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

let newMonths = monthnew.slice(6, 11);
console.log("С июля по ноябрь:", newMonths);

// 9.
let sortedMonths = months.sort();

let filteredMonths = sortedMonths.filter(month => month.length >= 5);

let resultString = filteredMonths.join("“-”");
console.log("Результат:", resultString);
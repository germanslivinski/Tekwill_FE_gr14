//1. Упражнения с циклами for

const fruits = ['apple', 'banana', 'orange'];

for (let i = 0; i < fruits.length; i++) 
console.log(fruits[i])

//2. 

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);

//3.

const names = ["John", "Jane", "Mikhael", "Jennifer", "Bobby"];
const nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths)

//4.

// a. Выведите в консоль имена всех работников компании.

const departments = [
    ["Алексей", "Мария", "Иван"],
    ["Ольга", "Петр"],
    ["Елена", "Дмитрий", "Сергей"],
    ["Анна", "Николай", "Татьяна"]
  ];
  for (let i = 0; i < departments.length; i++) {
    for (let j = 0; j < departments[i].length; j++) {
      console.log(departments[i][j]);
    }
  }

// б. Создайте новый массив состоящий только из имен всех работников, отсортированных в алфавитном порядке.

  const allNames = [];
for (let i = 0; i < departments.length; i++) {
  for (let j = 0; j < departments[i].length; j++) {
    allNames.push(departments[i][j]);
  }
}
const sortedNames = allNames.sort();
console.log("Отсортированные имена всех работников:", sortedNames);

//5. Упражнения с объектами

  const person = {
    name: "John",
    имя: "Doe",
    возраст: 30,
    профессия: "developer"
  };
    function countProperties(obj) {
    return Object.keys(obj).length;
  }
  
  console.log("Количество свойств:", countProperties(person));

  //6.

  function generateArray(n) {
    const result = [];
  
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
  
    return result;
  }
  
  const n = 5;
  const number = generateArray(n);
  
  console.log(number);

  //7.

  function findMaxNumber(arr) {
    let theBiggestNumber = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      const currentNumber = arr[i];
      if (currentNumber > theBiggestNumber) {
        theBiggestNumber = currentNumber;
      }
    }
    return theBiggestNumber;
  }
  const arr = [5, 8, 2, 10, 3];
  const maxNumber = findMaxNumber(arr);
  
  console.log("Наибольшее число:", maxNumber);

  //8.

  function calculateAverageGrade(grades) {
    const gradeValues = Object.values(grades);
    const sum = gradeValues.reduce((acc, grade) => acc + grade, 0);
    return sum / gradeValues.length;
  }
  
  const grades = {
    math: 8,
    literature: 7,
    history: 9
  };
  
  const averageGrade = calculateAverageGrade(grades);
  console.log("Средний балл:", averageGrade);

  //9.

  const Dog = new Object();
Dog.name = "Pluto";
Dog.age = 5;
Dog.color = "brown";


  function addPuppies(dog, numberOfPuppies) {
  const puppies = [];

  for (let i = 1; i <= numberOfPuppies; i++) {
    puppies.push(`Puppy_${i}`);
  }

  dog.puppies = puppies;
}

addPuppies(Dog, 5);
console.log(Dog);

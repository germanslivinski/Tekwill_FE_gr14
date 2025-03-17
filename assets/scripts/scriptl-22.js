// 1.Тернарным оператором
const number = 8;

if (number % 2 === 0) {
  console.log(`${number} — четное число.`);
} else {
  console.log(`${number} — нечетное число.`);
}

// 2.Тернарным оператором
const isLoggedIn = true;

const login = isLoggedIn ? "Пользователь аутентифицирован." : "Пользователь не аутентифицирован.";

console.log(login);

// 3.Тернарным оператором
const pricePerUnit = 12;
const quantity = 5;
const isInStock = true;

const message = isInStock 
  ? `Полная цена товара: ${pricePerUnit * quantity} MDL.` 
  : "Товара нет в наличии.";

console.log(message);

// 4.Тернарным оператором
const currentYear = new Date().getFullYear();


let isLeapYear = false;

if ((currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0) {
  isLeapYear = true;
}

if (isLeapYear) {
  console.log(`${currentYear} год — високосный.`);
} else {
  console.log(`${currentYear} год — не високосный.`);
}

// 1.Switch
function getCountryName(code) {
    let countryName;
  
    switch (code) {
      case "MD":
        countryName = "Moldova";
        break;
      case "US":
        countryName = "USA";
        break;
      case "DE":
        countryName = "Germany";
        break;
      case "FR":
        countryName = "France";
        break;
      case "JP":
        countryName = "Japan";
        break;
      default:
        countryName = "Код страны не найден.";
    }
  
    return countryName;
  }
  
  console.log(getCountryName("MD"));
  console.log(getCountryName("US"));
  console.log(getCountryName("DE"));
  console.log(getCountryName("FR"));
  console.log(getCountryName("JP"));
  console.log(getCountryName("JJ"));

  // 2.Switch
  function getGrade(score) {
    let grade;
  
    switch (true) {
      case score >= 97 && score <= 100:
        grade = "A+";
        break;
      case score >= 93 && score <= 96:
        grade = "A";
        break;
      case score >= 90 && score <= 92:
        grade = "A-";
        break;
      case score >= 87 && score <= 89:
        grade = "B+";
        break;
      case score >= 83 && score <= 86:
        grade = "B";
        break;
      case score >= 80 && score <= 82:
        grade = "B-";
        break;
      case score >= 77 && score <= 79:
        grade = "C+";
        break;
      case score >= 73 && score <= 76:
        grade = "C";
        break;
      case score >= 70 && score <= 72:
        grade = "C-";
        break;
      case score >= 67 && score <= 69:
        grade = "D+";
        break;
      case score >= 63 && score <= 66:
        grade = "D";
        break;
      case score >= 60 && score <= 62:
        grade = "D-";
        break;
      case score >= 0 && score <= 59:
        grade = "F";
        break;
      case score === "I":
        grade = "Incomplete";
        break;
      case score === "S":
        grade = "Satisfactory";
        break;
      case score === "U":
        grade = "Unsatisfactory";
        break;
      case score === "O":
        grade = "Outstanding";
        break;
    }
  
    return grade;
  }
  
  console.log(getGrade(98));
  console.log(getGrade(85));
  console.log(getGrade(72));
  console.log(getGrade(60));
  console.log(getGrade(45));
  console.log(getGrade("I"));
  console.log(getGrade("S"));
  console.log(getGrade("U"));
  console.log(getGrade("O"));

  // 1.Function
function TellFortune(N, Z, Y, X) {
    console.log(`You will be ${X} in ${Y}, and will get married to ${Z} with ${N} kids.`);
  }
  
  TellFortune(0, "Gherman", "Moldova", "a software engineer");
  TellFortune(3, "Maria", "New York", "Director of the company");
  TellFortune(1, "Elena", "Tokyo", "designer");

  //2.Function
    function CalculatedDogAge(puppyAge, conversionRate = 7) {
    const dogAge = puppyAge * conversionRate;
    console.log(`Вашей собачке ${dogAge} лет в собачьих годах!`);
  }
  
  CalculatedDogAge(2);
  CalculatedDogAge(5);
  CalculatedDogAge(10);

  //3.Function
    const CalculationSupply = (currentAge, foodPerDay, maxAge = 100) => {
        const yearsLeft = maxAge - currentAge;
        const totalFood = foodPerDay * 365 * yearsLeft;
        console.log(`Вам понадобится ${totalFood} кг еды, чтобы продержаться до глубокой старости ${maxAge} лет.`);
      };
      
      
      CalculationSupply(18, 0.5, 100);
   CalculationSupply(25, 1, 100);
   CalculationSupply(90, 0.8, 100);


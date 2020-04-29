//Task 1

let name = "Генератор защитного поля";
let price = 1000;

console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

price = 2000;

console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

//Task 2

const total = 100;
const ordered = 50;

if (total < ordered) {
  alert("На складе недостаточно товаров!");
} else {
  alert("Заказ оформлен, с вами свяжется менеджер");
}

//Task 3

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const response = prompt("Введите пароль");

if (response === null) {
  message = "Отменено пользователем!";
} else if (response === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);

//Task 4

let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;

let amountOfDroids = JSON.parse(prompt("Желаемое количество дроидов"));

if (amountOfDroids === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = amountOfDroids * pricePerDroid;
}

if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log(
    `Вы купили ${amountOfDroids} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`
  );
}

//Task 5

let country = prompt("Страна доставки");

switch (country.toLowerCase()) {
  case "китай":
    alert(`Доставка в ${country} будет стоить 100 кредитов`);
    break;

  case "чили":
    alert(`Доставка в ${country} будет стоить 250 кредитов`);
    break;

  case "австралия":
    alert(`Доставка в ${country} будет стоить 170 кредитов`);
    break;

  case "индия":
    alert(`Доставка в ${country} будет стоить 80 кредитов`);
    break;

  case "ямайка":
    alert(`Доставка в ${country} будет стоить 120 кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}

//Task 6

let input;
let totalAmount = 0;

do {
  totalAmount = totalAmount + input;
  input = JSON.parse(prompt("Введите число"));
} while (input !== null);

alert(`Общая сумма чисел равна ${totalAmount}`);

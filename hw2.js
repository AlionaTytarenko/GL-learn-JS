//Task 1

let logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//Task 2

const calculateEngravingPrice = function(message, pricePerWord) {
    let numberOfWords = message.split(' ').length;
    return numberOfWords * pricePerWord;
  };
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); // 80
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); // 160
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); // 240
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); // 120

  //Task 3

  const findLongestWord = function(string) {
    let arrayOfWords = string.split(' ');
    arrayOfWords.sort(function(a, b){return b.length - a.length});
    return arrayOfWords[0];
  };
  

  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'

  //Task 4

  const formatString = function(string) {
    let result;
    if (string.length > 40) {
        result = string.slice(0, 41).concat('...');
    }
    return result;
  };
  

  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // вернется оригинальная строка
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // вернется форматированная строка

  //Task 5

  const checkForSpam = function(message) {
    return (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale'));
  };
  

  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

  //Task 6

  let input;
  const numbers = [];
  let total = 0;

  do {
    input = prompt("Введите число");
    numbers.push(Number(input));
  } while (input !== null);

  for(let number of numbers) {
    total += number 
}

  console.log(`'Общая сумма чисел равна ${total}'`);
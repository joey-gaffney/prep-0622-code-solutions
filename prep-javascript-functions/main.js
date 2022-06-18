function addTwoNumbers(a, b) {
  return a + b;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(a) {
  return 60 * a;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log(convertHoursToMinutesResult);

function getGreeting(name) {
  return 'hello' + ' ' + name;
}

var getGreetingResult = getGreeting('world!');
console.log(getGreetingResult);

function addAndMultiply(num1, num2) {
  var add = num1 + num2;
  return add * 5;
}

var addAndMultiplyResult = addAndMultiply(10, 5);
console.log(addAndMultiplyResult);

function multiplyAndDivideBy5(c, d) {
  return c * d / 5;
}

var multiplyAndDivideBy5Results = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivideBy5Results);

function subtractTwoNumbers(number1, number2) {
  return number1 - number2;
}

var subtractTwoNumbersResults = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbersResults);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResults = getCircleCircumference(5);
console.log(getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getFullNameResults = getFullName('juan', 'ramirez');
console.log(getFullNameResults);

// NOT SURE IF THIS IS CORRECT
function cube(number) {
  return Math.pow(5, 3);
}

var cubeResults = cube(5);
console.log(cubeResults);

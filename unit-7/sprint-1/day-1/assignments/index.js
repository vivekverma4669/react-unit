const operation = process.argv[2];
const values = process.argv.slice(3).map(Number);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

function sin(value) {
  return Math.sin(value);
}

function cos(value) {
  return Math.cos(value);
}

function tan(value) {
  return Math.tan(value);
}

function random() {
  return Math.random();
}

function calculate(operation, values) {
  switch (operation) {
    case 'add':
      return add(...values);
    case 'sub':
      return subtract(...values);
    case 'mult':
      return multiply(...values);
    case 'divide':
      return divide(...values);
    case 'sin':
      return sin(values[0]);
    case 'cos':
      return cos(values[0]);
    case 'tan':
      return tan(values[0]);
    case 'random':
      return random();
    default:
      return 'Invalid operation';
  }
}

const result = calculate(operation, values);
console.log(result);

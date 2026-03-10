/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

function calculator(num1, operator, num2) {
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  // Validate input
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Both operands must be valid numbers');
  }

  let result;

  // Perform the operation based on the operator
  switch (operator) {
    case '+':
      // Addition operation
      result = a + b;
      break;
    case '-':
      // Subtraction operation
      result = a - b;
      break;
    case '*':
      // Multiplication operation
      result = a * b;
      break;
    case '/':
      // Division operation
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }
      result = a / b;
      break;
    default:
      throw new Error(`Invalid operator '${operator}'. Supported operators are: +, -, *, /`);
  }

  return result;
}

module.exports = calculator;

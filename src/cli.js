#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * 
 * Usage: node cli.js <number1> <operator> <number2>
 * Example: node cli.js 10 + 5
 */

const calculator = require('./calculator');

// Get command line arguments
const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error('Usage: node cli.js <number1> <operator> <number2>');
  console.error('Example: node cli.js 10 + 5');
  console.error('Supported operators: +, -, *, /');
  process.exit(1);
}

const [num1, operator, num2] = args;

try {
  const result = calculator(num1, operator, num2);
  console.log(`${num1} ${operator} ${num2} = ${result}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}

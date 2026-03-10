const calculator = require('../calculator');

describe('Calculator - Addition Tests', () => {
  test('should add two positive numbers: 2 + 3 = 5', () => {
    expect(calculator(2, '+', 3)).toBe(5);
  });

  test('should add positive and negative numbers: 10 + (-5) = 5', () => {
    expect(calculator(10, '+', -5)).toBe(5);
  });

  test('should add two negative numbers: -5 + (-3) = -8', () => {
    expect(calculator(-5, '+', -3)).toBe(-8);
  });

  test('should add zero to a number: 7 + 0 = 7', () => {
    expect(calculator(7, '+', 0)).toBe(7);
  });

  test('should add decimal numbers: 2.5 + 1.5 = 4', () => {
    expect(calculator(2.5, '+', 1.5)).toBe(4);
  });
});

describe('Calculator - Subtraction Tests', () => {
  test('should subtract two positive numbers: 10 - 4 = 6', () => {
    expect(calculator(10, '-', 4)).toBe(6);
  });

  test('should subtract larger number from smaller: 5 - 10 = -5', () => {
    expect(calculator(5, '-', 10)).toBe(-5);
  });

  test('should subtract negative number: 10 - (-5) = 15', () => {
    expect(calculator(10, '-', -5)).toBe(15);
  });

  test('should subtract from zero: 0 - 5 = -5', () => {
    expect(calculator(0, '-', 5)).toBe(-5);
  });

  test('should subtract decimal numbers: 10.5 - 3.2 = 7.3', () => {
    expect(calculator(10.5, '-', 3.2)).toBeCloseTo(7.3);
  });
});

describe('Calculator - Multiplication Tests', () => {
  test('should multiply two positive numbers: 45 * 2 = 90', () => {
    expect(calculator(45, '*', 2)).toBe(90);
  });

  test('should multiply by zero: 45 * 0 = 0', () => {
    expect(calculator(45, '*', 0)).toBe(0);
  });

  test('should multiply negative numbers: -5 * 3 = -15', () => {
    expect(calculator(-5, '*', 3)).toBe(-15);
  });

  test('should multiply two negative numbers: -4 * -6 = 24', () => {
    expect(calculator(-4, '*', -6)).toBe(24);
  });

  test('should multiply decimal numbers: 2.5 * 4 = 10', () => {
    expect(calculator(2.5, '*', 4)).toBe(10);
  });

  test('should multiply by one: 100 * 1 = 100', () => {
    expect(calculator(100, '*', 1)).toBe(100);
  });
});

describe('Calculator - Division Tests', () => {
  test('should divide two positive numbers: 20 / 5 = 4', () => {
    expect(calculator(20, '/', 5)).toBe(4);
  });

  test('should divide with remainder: 10 / 3 = 3.333...', () => {
    expect(calculator(10, '/', 3)).toBeCloseTo(3.333, 2);
  });

  test('should divide negative numbers: -20 / 4 = -5', () => {
    expect(calculator(-20, '/', 4)).toBe(-5);
  });

  test('should divide two negative numbers: -20 / -4 = 5', () => {
    expect(calculator(-20, '/', -4)).toBe(5);
  });

  test('should divide zero by non-zero: 0 / 5 = 0', () => {
    expect(calculator(0, '/', 5)).toBe(0);
  });

  test('should divide decimal numbers: 10.5 / 2.5 = 4.2', () => {
    expect(calculator(10.5, '/', 2.5)).toBeCloseTo(4.2);
  });

  test('should throw error for division by zero', () => {
    expect(() => calculator(20, '/', 0)).toThrow('Division by zero is not allowed');
  });
});

describe('Calculator - Edge Cases and Error Handling', () => {
  test('should throw error for invalid operator', () => {
    expect(() => calculator(5, '%', 3)).toThrow('Invalid operator');
  });

  test('should throw error for non-numeric first operand', () => {
    expect(() => calculator('abc', '+', 5)).toThrow('Both operands must be valid numbers');
  });

  test('should throw error for non-numeric second operand', () => {
    expect(() => calculator(5, '+', 'xyz')).toThrow('Both operands must be valid numbers');
  });

  test('should handle string numbers correctly: "5" + "3" = 8', () => {
    expect(calculator('5', '+', '3')).toBe(8);
  });

  test('should handle large numbers: 999999 * 999999', () => {
    expect(calculator(999999, '*', 999999)).toBe(999998000001);
  });

  test('should handle very small decimal numbers', () => {
    expect(calculator(0.1, '+', 0.2)).toBeCloseTo(0.3);
  });
});

describe('Calculator - Examples from Image', () => {
  test('Image example 1: 2 + 3 = 5', () => {
    expect(calculator(2, '+', 3)).toBe(5);
  });

  test('Image example 2: 10 - 4 = 6', () => {
    expect(calculator(10, '-', 4)).toBe(6);
  });

  test('Image example 3: 45 * 2 = 90', () => {
    expect(calculator(45, '*', 2)).toBe(90);
  });

  test('Image example 4: 20 / 5 = 4', () => {
    expect(calculator(20, '/', 5)).toBe(4);
  });
});

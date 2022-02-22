const calculator = require('/Users/andrewtam/Documents/Jest_Test_Suite/code/calculator.js');

test('calculator has correct 4 functionalities', () =>{
    expect(calculator.add(3,5)).toBe(8);
    expect(calculator.subtract(5,2)).toBe(3);
    expect(calculator.multiply(4,4)).toBe(16);
    expect(calculator.divide(16,4)).toBe(4);
});
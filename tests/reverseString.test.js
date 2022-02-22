const reverseString = require('/Users/andrewtam/Documents/Jest_Test_Suite/code/reverseString.js');

test('The String is Reversed',() => {
    expect(reverseString('ilovedogs')).toBe('sgodevoli');
});
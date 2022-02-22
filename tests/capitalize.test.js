// test for capitalize string function
const capitalize = require('/Users/andrewtam/Documents/Jest_Test_Suite/code/capitalize.js');

test('First letter of string is capitalized', () =>{
    expect(capitalize('the lakers will lose to the Wizards')).toBe('The lakers will lose to the Wizards');
});
const { getName, copyAndPush, capitalizeAndFilter, fetchQuotes } = require('./index.js');

describe('returns the name property of an object', () => {
const character = { name: 'hilda', position: 'sparrow scout' }
it('returns name property using destructure', () => {
    const charName = getName(character);
    expect(charName).toEqual('hilda')
});
});

describe('returns a new array with all the items in the original array and a new item pushed to the end', () => {
const numArray = [4, 8, 15, 16, 23]
const item = 42
it('use push array to add item to array and return new array and old array', () => {
    const arr = copyAndPush(numArray, item); 
    expect(arr).toEqual([4, 8, 15, 16, 23, 42], )
});
it('confirm original array is unchanged', () => {
    expect(numArray).toEqual([4, 8, 15, 16, 23]);
});
});

describe('takes an array of strings and capitalizes all strings and filters out any string that starts with the letter f', () => {
const arr = ['hilda', 'david', 'frida', 'alfur', 'johanna']
it('uses array methods to get tests to pass', () => {
    const capArr = capitalizeAndFilter(arr);
    expect(capArr).toEqual(['HILDA', 'DAVID', 'ALFUR', 'JOHANNA']);
})
})
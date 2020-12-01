const { getName, copyAndPush, capitalizeAndFilter, fetchQuotes } = require('./index.js');
const request = require('superagent');
jest.mock('superagent');

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
});
});

describe('use Futurama API to return a single quote', () => {
it('fetches first futurama quote', async() => {
    request.get.mockResolvedValue({
        body: {
            results: [
                {
                    character: "Bender",
                    quote: "I'm a fraud. A poor, lazy, sexy fraud.",
                    image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
                }
            ]
        }
    });

    const quote = await fetchQuotes();
    expect(quote).toEqual({
        name: "Bender",
        text: "I'm a fraud. A poor, lazy, sexy fraud.",
        image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
    });
});
});
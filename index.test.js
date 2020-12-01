const { getName, copyAndPush, capitalizeAndFilter, fetchQuotes } = require('./index.js');

describe('returns the name property of an object', () => {
const character = { name: 'hilda', position: 'sparrow scout' }
it('returns name property using bracket notation', () => {
    const name = getName(character);
    expect(name).toEqual('hilda')
});
});
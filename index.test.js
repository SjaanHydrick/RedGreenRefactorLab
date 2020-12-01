const { getName, copyAndPush, capitalizeAndFilter, fetchQuotes } = require('./index.js');

describe('returns the name property of an object', () => {
const character = { name: 'hilda', position: 'sparrow scout' }
it('returns name property using destructure', () => {
    const charName = getName(character);
    expect(charName).toEqual('hilda')
});
});
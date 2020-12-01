
// fetchQuotes - use Futurama API to return a single quote

// bonus Mock
const request = require('superagent');


const getName = ({ name } = obj) => {
    return name;
};

const copyAndPush = (arr, item) => {
    return [...arr, item]
};

const capitalizeAndFilter = arr => {
    const filter = arr.filter(name => !name.startsWith('f'));
    newArr = filter.map((name) => {return name.toUpperCase()})
    return newArr;
};

const fetchQuotes = async() => {
    const { body } = await request.get('futuramaapi.herokuapp.com/api/quotes')

    const {results: [{ character: name, quote: text, image }, ...rest]} = body; 
    return { name, text, image }
};

module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter,
    fetchQuotes
};
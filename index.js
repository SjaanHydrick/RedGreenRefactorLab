
// capitalizeAndFilter function - takes an array of strings capitalize all strings and filter out any string that starts with the letter f
// use a for loop to get test to pass
// refactor, use array methods instead of for loop

// fetchQuotes - use Futurama API to return a single quote

// bonus Mock



const getName = ({ name } = obj) => {
    return name;
};

const copyAndPush = (arr, item) => {
    return [...arr, item]
};

const capitalizeAndFilter = arr => {
    const newArr = [];
    const filter = arr.filter(name => !name.startsWith('f'));
    for(i = 0; i < filter.length; i++){
        newArr.push(filter[i].toUpperCase());
    }
    return newArr;
}

module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter
};
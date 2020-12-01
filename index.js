
// copyAndPush function - returns a new array with all the items in the original array and a new item pushed to the end
// add another test that makes sure that the original array is unchanged
// update code, use spread to copy and append

// capitalizeAndFilter function - takes an array of strings capitalize all strings and filter out any string that starts with the letter f
// use a for loop to get test to pass
// refactor, use array methods instead of for loop

// fetchQuotes - use Futurama API to return a single quote

// bonus Mock



const getName = ({ name } = obj) => {
    return name;
};

const copyAndPush = (arr, item) => {
    newArr = arr.slice(0);
    newArr.push(item);
    return newArr;
};

module.exports = {
    getName,
    copyAndPush
};
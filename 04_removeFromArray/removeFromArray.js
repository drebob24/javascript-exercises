const removeFromArray = function (array, ...args) {
    for (const toDelete of args){
        array = array.filter(val => val !== toDelete);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;




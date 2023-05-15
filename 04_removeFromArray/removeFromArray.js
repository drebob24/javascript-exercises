const removeFromArray = function (array, ...args) {
    for (const toDelete of args){

        array = array.filter(function(arrayContent) {
            return arrayContent !== toDelete;
        });
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;




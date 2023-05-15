const reverseString = function(string) {
    const stringLetters = string.split("");
    let stringReversed = "";
    for (const letters of stringLetters){
        stringReversed = letters + stringReversed;
    }
    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;

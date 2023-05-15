const repeatString = function (str, num) {
    if (num < 0) {
        return "ERROR";
    }
    else {
        let concatString = "";
        for (let i = 1; i <= num; i++){
            concatString += str;
        }
        return concatString;
    }
};

// Do not edit below this line
module.exports = repeatString;

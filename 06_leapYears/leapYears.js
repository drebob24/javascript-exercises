const leapYears = function(year) {
    let leapYear = (year % 4 === 0);
    let century = (year % 100 === 0);
    if (century){
        let mulitpleOf400 = (year % 400 === 0);
        return mulitpleOf400;
    }
    else
    return leapYear;

};

// Do not edit below this line
module.exports = leapYears;



// divide by 4
// Not divide by 100 - unless can divide by 400
// return true/false
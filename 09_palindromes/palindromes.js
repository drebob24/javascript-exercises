const palindromes = function (string) {
    let arr = string.split("");
    let noPunc = arr.filter(item => 
        item !== ' ' &&
        item !== '.' &&
        item !== ',' &&
        item !== '!'        
        );
    let lowercase = noPunc.map(letter => letter.toLowerCase());
    return lowercase.join('') === lowercase.reverse().join('');

};

// Do not edit below this line
module.exports = palindromes;

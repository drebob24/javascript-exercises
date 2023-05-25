const fibonacci = function(n) {
    if (n < 0) {
        return 'OOPS';
    }
    if (n == 0) {
        return 0;
    }
    let fibonacci = [1, 1];
    for (let i = 2; i < n; i++){
        fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    }
    return fibonacci[n-1];
};

// Do not edit below this line
module.exports = fibonacci;

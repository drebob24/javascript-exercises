const add = function(a,b) {
  return Number(a)+Number(b);
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce((sum, current) => sum += current, 0);	
};

const multiply = function(arr) {
  return arr.reduce((sum, curr) => sum *= curr);
};

const power = function(a, b){
  let result = 1;
  for (let i = 0; i < b; i++){
    result *= a;
  }
  return result;	
};

const factorial = function(a) {
  let product = 1;
  if (a === 0){
    return product;
  }
	for (let i = 1; i <= a; i++){
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

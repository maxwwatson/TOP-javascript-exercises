const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const subtract = function(...numbers) {
	let sum = numbers[0];
  for(let i = 1; i < numbers.length; i++) {
    sum -= numbers[i];
  }
  return sum;
};

const sum = function(...numbers) {
  console.log(numbers.length);
  console.log(numbers);
  if(numbers[0].length == 0) return 0;
	let sum = 0;
  for(let i = 0; i < numbers[0].length; i++) {
    sum += parseInt(numbers[0][i]);
    console.log(sum);
  }
  return sum;
};

const multiply = function(...numbers) {
  if(numbers[0].length == 0) return 0;
  let sum = numbers[0][0];
  for(let i = 1; i < numbers[0].length; i++) {
    if(numbers[0][i] == 0) return 0;
    sum *= numbers[0][i];
  }
  return sum;
};

const power = function(...numbers) {
  if(numbers.length == 0) return 0;
  console.log(numbers[0]);
  return(numbers[0]** numbers[1]);
};

const factorial = function(num) {
  if(num == 0) return 1;
  let sum = 1;
  for(let i = num; i > 0; i--) {
    sum *= i;
  }
  return sum;
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

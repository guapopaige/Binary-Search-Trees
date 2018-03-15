//Write a factorial Function

function factorial(num) {
  if(num === 1) {      //base case
    return num;
  } else {          //recursive case
    return num * factorial(num -1);
  }
}

factorial(4);

//call stack represents what order happens at each step and what order the function is called at


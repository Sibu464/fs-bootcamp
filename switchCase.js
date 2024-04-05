

const prompt=require('prompt-sync')();// Library module for accepting user input
let results;
const operator=prompt('Enter either *,+,_,/ or: ');
const num1=parseFloat(prompt('Enter a number'));
const num2=parseFloat(prompt('Enter a nmber: '));
switch (operator) {
    case '*':
      result = num1 * num2;
        console.log("The result is: "+result);
      break;
    case '+':
      result = num1 + num2;
      console.log("The result is: "+result);
      break;
    case '_':
      result = num1 - num2;
      console.log("The result is: "+result);
      break;
    case '/':
      if (num2!== 0) {
        result = num1 / num2;
        console.log(`The rsult it ${result}`);
      } else {
        console.log('Error: Division by zero is not allowed.');
        break;
      }
    default:
      console.log('Invalid operator. Please enter either *, +, -, or /.');
      break;
  }
  

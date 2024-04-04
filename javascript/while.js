//creating an app that will count positive and negative numbers
let input=require('prompt-sync')();
let sum=0;
let num=1;
while(num>=0){
sum+=num;
num=parseInt(input('Enter a Number: '));
if(isNaN(num)){
    console.log("what you entered is not a number");
    num=0;
    continue;
}
console.log(`the sum is ${sum}`);
if(num==-1){
    break;
}
}


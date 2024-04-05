
let prompt=require('prompt-sync')();
let age=prompt("How old are you?",18);
function checkAge(age){
    if (age>=18){
        console.log("Access granted!");
        return true;
       
    }else{
        console.log("Access denied");
        return false;
    }
}
function showMovie(){
    while((checkAge(age))){
    console.log("Playing movie!");
    }
}
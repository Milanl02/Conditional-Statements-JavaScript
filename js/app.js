var firstInput=document.body.querySelector(".random");
var inputedOperator=document.body.querySelector(".operator");
var secondInput=document.body.querySelector(".secondNumber");
var equation=document.body.querySelector(".answer")

var q1=Number(prompt("Enter your first number:"));

if(isNaN(q1)){
    firstInput.innerHTML="First step done incorrectly. You did not enter a number in the first prompt. Program has failed here.";
}else{
    firstInput.innerHTML="First step done correctly. Your number was saved by the calculator.";
}

var q2=prompt("Enter an operator: +, -, *, x, /:")

if(q2=="+"||q2=="-"||q2=="*"||q2=="x"||q2=="/"){
    inputedOperator.innerHTML="Second step done correctly. Your operator was saved by the calculator.";
}else{
    inputedOperator.innerHTML="Second step done incorrectly. You did not enter an operator in the second prompt. Program has failed here.";
}

var q3=Number(prompt("Enter your second number:"));

if(isNaN(q3)){
    secondInput.innerHTML="Third step done incorrectly. You did not enter a number here. Program has failed here. ";
}else{
    secondInput.innerHTML="Third step done correctly. Your number was saved by the calculator.";
}

if(q2=="+"){
   equation.innerHTML=q1+q3
}else if(q2=="-"){
    equation.innerHTML=q1-q3
}else if(q2=="*"){
    equation.innerHTML=q1*q3
}else if(q2=="x") {
    equation.innerHTML = q1*q3
}else if(q2=="/"){
    equation.innerHTML=q1/q3
}
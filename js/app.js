var firstInput=document.body.querySelector(".random");
var inputedOperator=document.body.querySelector(".operator");
var secondInput=document.body.querySelector(".secondNumber");
var equation=document.body.querySelector(".answer")

var q1=prompt("Enter your first number:");

if(isNaN(q1)){
    firstInput.innerHTML="First step done incorrectly. You did not enter a number in the first prompt. Program has ended.";
}else{
    firstInput.innerHTML="First step done correctly. Your number was saved by the calculator.";
}

var q2=prompt("Enter an operator: +, -, *, x, /:")

if(q2=="+"||q2=="-"||q2=="*"||q2=="x"||q2=="/"){
    inputedOperator.innerHTML="Second step done correctly. Your operator was saved by the calculator.";
}else{
    inputedOperator.innerHTML="Second step done incorrectly. You did not enter an operator in the second prompt. Program has ended.";
}

var q3=prompt("Enter your second number:");

if(isNaN(q3)){
    secondInput.innerHTML="Third step done incorrectly. You did not enter a number here. Program has ended. ";
}else{
    secondInput.innerHTML="Third step done correctly. Your number was saved by the calculator.";
}

var q1=number(q1)
var q3=number(q3)

var later=(q1)(q2)(q3);
    equation.innerHTML="The answer to your equation is (later)";










    // if(userOperator=="+")||(userOperator=="-")


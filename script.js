//Declare variables//
let variable;
let sign;
let answer = null;

//Set the variables for DOM elements//
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const addButton = document.getElementById("add");
const subButton = document.getElementById("minus");
const multiButton = document.getElementById("multiply");
const divButton = document.getElementById("divide");
const equalButton = document.getElementById("equals");
const clear = document.getElementById("clear");
const back = document.getElementById("back");
const display = document.getElementById("display-text");

//Define functions for buttons//
function buttonPress () {
  let latest = display.textContent;
  display.textContent = latest + this.value;
}
function add () {
  variable = parseInt(display.textContent);
  if (answer != null) {
    answer += variable;
  }
  else {
    answer = variable;
  }
  display.textContent = "";
  sign = this.value;
}
function subtract () {
  variable = parseInt(display.textContent);
  if (answer != null) {
    answer -= variable;
  }
  else {
    answer = variable;
  }
  display.textContent = "";
  sign = this.value;
}
function multiply () {
  variable = parseInt(display.textContent);
  if (answer != null) {
    answer *= variable;
  }
  else {
    answer = variable;
  }
  display.textContent = "";
  sign = this.value;
}
function divide () {
  variable = parseInt(display.textContent);
  if (answer != null) {
    if (variable == 0) {
      alert ("Cannot divide by Zero!");
      clearAll();
    }
    answer /= variable;
  }
  else {
    answer = variable;
  }
  display.textContent = "";
  sign = this.value;
}
function Equals () {
  variable = parseInt(display.textContent);
  if (variable == 0) {
      alert ("Cannot divide by Zero!");
      clearAll();
    }
  if (sign == "+") {
    answer += variable;
  }
  if (sign == "-") {
    answer -= variable;
  }
  if (sign == "*") {
    answer *= variable;
  }
  if (sign == "/") {
    answer /= variable;
  }
  if (answer != null) {
    display.textContent = answer;
  }
  else {
    display.textContent = answer;
  }
  answer = null;
}
function clearAll () {
  variable = 0;
  answer = null;
  display.textContent = "";
}
function cancel () {
  display.textContent = display.textContent.slice(0,-1);
}

//Add the functions or events to the buttons//
zero.addEventListener("click",buttonPress);
one.addEventListener("click",buttonPress);
two.addEventListener("click",buttonPress);
three.addEventListener("click",buttonPress);
four.addEventListener("click",buttonPress);
five.addEventListener("click",buttonPress);
six.addEventListener("click",buttonPress);
seven.addEventListener("click",buttonPress);
eight.addEventListener("click",buttonPress);
nine.addEventListener("click",buttonPress);
addButton.addEventListener("click",add);
subButton.addEventListener("click",subtract);
multiButton.addEventListener("click",multiply);
divButton.addEventListener("click",divide);
back.addEventListener("click",cancel);
equalButton.addEventListener("click",Equals);
clear.addEventListener("click",clearAll);

//Function for keyboard inputs//
document.addEventListener("keydown",function(event) {
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    let latest = display.textContent;
    display.textContent = latest + String(event.keyCode-48);
  }
  if (event.keyCode >= 96 && event.keyCode <= 103) {
    let latest = display.textContent;
    display.textContent = latest + String(event.keyCode-96);  
  }
  if (event.keyCode == 8) {
    cancel();
  }
  if (event.keyCode === 13) {
    event.preventDefault()
    Equals();
  }
  if (event.keyCode == 67) {
    clearAll();
  }
})


var x = 8;  // declare variables to perfrom math opperations on
var y = 6;


function addition(x,y) { // addition function
    result = x + y;
    document.getElementById('math').innerHTML = "Addition " +result;
};

addition(x,y);


function subtraction(x,y) {  // subtraction function
    result =  x - y;
    document.getElementById('math1').innerHTML =  "Subtraction " + result;
};

subtraction(x,y);

function multiplication(x,y) {  // subtraction function
    result =  x * y;
    document.getElementById('math2').innerHTML = "Multiplication " + result;
};

multiplication(x,y);

function modulus(x,y){
    var mod = x % y;
    document.getElementById('math3').innerHTML = "Modulus " + mod;
}

modulus(x,y);


var num = (Math.random());  // get random number

document.getElementById('math4').innerHTML = "Random number: " + num;

num++;  // add 1 to random number
document.getElementById('math5').innerHTML = "Random number plus 1: " +num;

num--;
num--; // subtract 1 from random number
document.getElementById('math6').innerHTML = "Random number minus 1: " +num;


document.getElementById('math7').innerHTML = "The square root of 64 is " + Math.sqrt(64);



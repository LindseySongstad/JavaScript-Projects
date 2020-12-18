



function addition(x,y) { // addition function
    result = x + y;
    document.getElementById('math').innerHTML = "Addition " +result;
};




function subtraction(x,y) {  // subtraction function
    result =  x - y;
    document.getElementById('math1').innerHTML =  "Subtraction " + result;
};



function multiplication(x,y) {  // subtraction function
    result =  x * y;
    document.getElementById('math2').innerHTML = "Multiplication " + result;
};



function modulus(x,y){
    var mod = x % y;
    document.getElementById('math3').innerHTML = "Modulus " + mod;
}



function doMath(){  // executes all math functions when button is pushed
    var x = 8;  // declare variables to perfrom math opperations on
    var y = 6;

    addition(x,y);
    subtraction(x,y);
    multiplication(x,y);
    modulus(x,y);

    var num = (Math.random());  // get random number

    document.getElementById('math4').innerHTML = "Random number: " + num;

    num++;  // add 1 to random number
    document.getElementById('math5').innerHTML = "Random number plus 1: " +num;

    num--;
    num--; // subtract 1 from random number
    document.getElementById('math6').innerHTML = "Random number minus 1: " +num;


    document.getElementById('math7').innerHTML = "The square root of 64 is " + Math.sqrt(64);
}




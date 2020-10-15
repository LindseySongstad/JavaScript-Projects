


function myFunction(x,y) { 
    result = x + y;
    document.getElementById('math').innerHTML = result;
};

myFunction(3,4);


function subtraction() {
    result = 5 - 2;
    document.getElementById('math2').innerHTML = result;
};

subtraction();

function modulus(){
    var mod = 25 % 6;
    document.getElementById('math3').innerHTML = "remainder of 25 / 6 is " + mod;
}

modulus();

var num = (Math.random());

document.writeln("num: " + num);
num++;

document.writeln("num plus 1: " +num);

document.writeln(Math.sqrt(64));

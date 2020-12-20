var str1 = "Merry Christmas to all, ";
var str2 = "and to all a good night!";
var str3 = str1.concat(str2);
var str4 = str3.slice(0,15)


function christmas() {
    document.getElementById('christmas').innerHTML = str3;
}

function christmas1() {
    document.getElementById('christmas1').innerHTML = str4;
}

function numToString() {
    var num = 47;
    var numString = num.toString();
    document.getElementById('numToString').innerHTML = numString;
}

function numToPrecision() {
    var num = 3.1415;
    var numPrecise = num.toPrecision(3);
    document.getElementById('numToPrecision').innerHTML = numPrecise;
}





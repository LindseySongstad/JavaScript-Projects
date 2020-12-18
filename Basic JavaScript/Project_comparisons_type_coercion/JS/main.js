
var str = "Hello, World!";
var int = 47;

document.write(str + " is a " + typeof(str) + "<br>");
document.write(int + " is a " + typeof(int) + "<br>");

var combined = str + int;

document.writeln("combined: " + combined + "<br>");

var x = 1;  
var y = 5;

document.writeln((x==y) + "<br>");
document.writeln((x===y) + "<br>");
document.writeln((x<y) + "<br>");
document.writeln((x>y) + "<br>");
document.writeln(((x<y) && (x>y)) + "<br>");
document.writeln(((x<y) || (x>y)) + "<br>");
document.writeln((!x==y) + "<br>");
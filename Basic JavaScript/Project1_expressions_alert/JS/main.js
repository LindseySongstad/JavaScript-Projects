
var x= 'Hello ', y='there ', z='world!';  // declare variables

var x = x.fontcolor('red'), y=y.fontcolor('yellow')  // assign color to variables


document.write(x + y +z); // print variables

function myFunction() {  // function runs when button is pushed
    document.getElementById('push').innerHTML = 'You pushed a button!';
    window.alert("You pushed a button!");
}

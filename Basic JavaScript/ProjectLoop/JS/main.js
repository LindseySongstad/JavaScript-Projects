function count() {
    var message = "";
    let num = 1;
    while (num < 11) {
        message+= "<br>" + num;
        num++;
    }
   document.getElementById("counting").innerHTML = message;
};

function arrayLoop() {
    var myList = ['one', 'two', 'three', 'four'];
    message = '';
    for ( var i=0; i < myList.length; i++){
        message += myList[i] + "<br>"   
    }
    document.getElementById("array").innerHTML=message;
}

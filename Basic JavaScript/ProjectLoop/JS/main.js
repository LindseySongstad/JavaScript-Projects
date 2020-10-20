function count() {
    var par = "";
    var num = 1;
    while (num < 11) {
        par+= "<br>" + num;
        num++;
    }
   document.getElementById("counting").innerHTML = par;
};

function arrayLoop() {
    var myList = ['one', 'two', 'three', 'four'];
    par = '';
    for ( var i=0; i < myList.length; i++){
        par += myList[i] + "<br>"   
    }
    document.getElementById("array").innerHTML=par;
}

function validateForm(){
    var inputList = document.getElementsByTagName('input');
    for(let i=0; i<inputList.length; i++){
        var x = document.forms['myForm'][i].value;
        if (x=='') {
            alert("All fields must be filled out");
            return false;
        }
    }

}


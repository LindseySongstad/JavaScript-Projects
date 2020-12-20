var canVote;
function vote() {
    var age;
    age = document.getElementById('age').value;
    if (age >= 18){
        canVote = 'You should vote!'
        console.log("Hello world");
    }
    else {
        canVote = 'You should vote, but not untill you are old enough'
    }
    document.getElementById('canVote').innerHTML = canVote;
}

var Reply;
function timeFunction() {
    var Time = new Date().getHours();
    
    if (Time < 12 == Time > 0) {
        Reply = "It is moring time!"
        
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("time").innerHTML = Reply;
}






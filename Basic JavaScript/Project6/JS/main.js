
function vote() {
    var age, canVote;
    age = document.getElementById('age').value;
    if (age >= 18){
        canVote = 'You should vote!'
    }
    else {
        canVote = 'You should vote, but not untill you are old enough'
    }
    document.getElementById('canVote').innerHTML = canVote;
}

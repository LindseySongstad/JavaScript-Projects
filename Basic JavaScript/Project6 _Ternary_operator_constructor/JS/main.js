
function vote() {
    var age, canVote;
    age = document.getElementById('age').value;   
    canVote = (age >= 18) ? 'You should vote!' : 'You are not old enough';   
    document.getElementById('canVote').innerHTML = canVote;
}

function displayTeam() { 
    function Team (name, color1, color2) { 
        this.teamName = name;
        this.teamColor1= color1;
        this.teamColor2= color2;
    }
    var hawks = new Team("Seahawks", "Navy Blue", "Action Green");
    document.getElementById("Team").innerHTML = `The ${hawks.teamName} colors are ${hawks.teamColor1} and ${hawks.teamColor2}`;
}
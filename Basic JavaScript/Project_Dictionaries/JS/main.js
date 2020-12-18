


function myDictionary() {
    var Team = {
        Name: "Seahawks",
        Color1: "Navy Blue",
        Color2: "Action Green",
        Division: "NFC West"
    };
    delete Team.Division;
    document.getElementById("Dictionary").innerHTML = Team.Division;
}




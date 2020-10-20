function colorFunction(){
    var colorOutput;
    var color = document.getElementById('color').value;
    switch(color) {
        case 'red':
            colorOutput = "you chose red";
        break;
        case 'blue':
            colorOutput = 'you chose blue';
        break;
        case 'yellow':
            colorOutput = 'you chose yellow'
        break;
        default:
            colorOutput = 'choose only primary colors';

    }
    document.getElementById('output').innerHTML = colorOutput;
}

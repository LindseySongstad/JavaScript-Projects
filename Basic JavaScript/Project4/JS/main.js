
function rFunt() {
    var height, canRide;
    height = document.getElementById('Height').value;
    canRide = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById('Ride').innerHTML = canRide + ' to ride.';
}

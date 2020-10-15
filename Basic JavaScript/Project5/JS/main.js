

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var start = 9;
        function plus() {start += 1;}
        plus();
        return start;
    }
}

function enter() {
    var content = document.getElementById("test").value;
    localStorage.setItem("doc", content);
    console.dir("Saved");
}

window.onload = function myFunction() {
    document.getElementById("test").innerHTML = localStorage.getItem("doc");
    console.clear();
}

var input = document.getElementById("test");
document.addEventListener('DOMContentLoaded', function () {
    input.addEventListener("keydown", function(event) {
        if (event.keyCode === 91 && 83 && 16) {
            enter();
        }
        if(event.keyCode === 17){
            enter();
        }

        
    });
});



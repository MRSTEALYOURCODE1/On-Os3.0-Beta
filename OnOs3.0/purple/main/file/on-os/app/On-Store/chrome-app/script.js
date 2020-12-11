function run(){
    window.location.href="../main.html"
}

function runpwd(){
    document.getElementById("ent").style.display = "block";
    document.getElementById("hold-up").style.display = "block";
}

function check() {
    if(localStorage.getItem("doodoo") == document.getElementById("ent").value){
        document.getElementById("ent").style.display = "none";
        document.getElementById("hold-up").style.display = "none";
        document.getElementById("incor").style.display = "none";
        window.open("https://bluhorse.ca/googlechrome.dmg", "download");
    }else{
        document.getElementById("incor").style.display = "block";
    }
}



function runpwd1(){
    document.getElementById("ent2").style.display = "block";
    document.getElementById("hold-up2").style.display = "block";
}

function check1() {
    if(localStorage.getItem("doodoo") == document.getElementById("ent2").value){
        document.getElementById("ent2").style.display = "none";
        document.getElementById("hold-up2").style.display = "none";
        document.getElementById("incor").style.display = "none";
        window.open("https://bluhorse.ca/googlechromeintel.dmg", "download");
    }else{
        document.getElementById("incor").style.display = "block";
    }
}




function runpwd2(){
    document.getElementById("ent3").style.display = "block";
    document.getElementById("hold-up3").style.display = "block";
}

function check2() {
    if(localStorage.getItem("doodoo") == document.getElementById("ent3").value){
        document.getElementById("ent3").style.display = "none";
        document.getElementById("hold-up3").style.display = "none";
        document.getElementById("incor").style.display = "none";
        window.open("https://bluhorse.ca/ChromeSetup.exe", "download");
    }else{
        document.getElementById("incor").style.display = "block";
    }
}




var inputt = document.getElementById("ent");
document.addEventListener('DOMContentLoaded', function () {
    inputt.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            check();
        }
    });
});

var input = document.getElementById("ent2");
document.addEventListener('DOMContentLoaded', function () {
    input.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            check1();
        }
    });
});

var inputtt = document.getElementById("ent3");
document.addEventListener('DOMContentLoaded', function () {
    inputtt.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            check2();
        }
    });
});









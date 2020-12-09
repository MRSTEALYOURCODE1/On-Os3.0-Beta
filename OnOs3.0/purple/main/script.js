function myFunction() {
    document.getElementById("panel").style.display = "block";
    enter();
}

document.getElementById("foldername").innerHTML = localStorage.getItem("nam");
    document.getElementById("foldername").innerHTML = localStorage.getItem("nam");
    document.getElementById("foldername").innerHTML = localStorage.getItem("nam");


if(document.getElementById("foldername").innerHTML == ""){
    document.getElementById("foldername").style.display = "none";
    document.getElementById("folder").style.display = "none";
}else{
    document.getElementById("foldername").style.display = "block";
    document.getElementById("folder").style.display = "block";
}

function enter() {
    var content = prompt("Enter URL");
    localStorage.setItem("url", content);
}

document.getElementById("mySidepanel").style.display = "none";

    

    function createFolder(){
        var folname = prompt("Create A Folder Name");
        localStorage.setItem("nam", folname);
        document.getElementById("foldername").innerHTML = localStorage.getItem("nam");

        if(document.getElementById("foldername").innerHTML == ""){
            document.getElementById("foldername").style.display = "none";
            document.getElementById("folder").style.display = "none";
        }else{
            document.getElementById("foldername").style.display = "block";
            document.getElementById("folder").style.display = "block";
        }
    }


function check() {
    window.location.href=localStorage.getItem("url", '_blank');
}


function openNav() {
    document.getElementById("mySidepanel").style.display = "block";
    document.getElementById("mySidepanel").style.width = "35%";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    setTimeout(function(){document.getElementById("mySidepanel").style.display = "none";}, 3000);
  }

/*function pwd(){
    var hi = prompt("Set Password");
    localStorage.setItem("hi", hi);
}

window.onload = function like(){
        if(localStorage.getItem("hi") == null){
        pwd();
    }else{
        var no = prompt("Enter password");
        if(no!=localStorage.getItem("hi")){
            alert("incorrect");
            location.reload();
        }else if(no==localStorage.getItem("hi")){
            console.log("correct");
        }
    }

}
*/

if(localStorage.getItem("doodoo") == null) {
    document.getElementById("ent").style.display = "none";
    document.getElementById("enter").style.display = "none";
}else{
    document.getElementById("set").style.display = "none";
    document.getElementById("sett").style.display = "none";
}


function setPassKey(){
     var key = document.getElementById("set").value;
     localStorage.setItem("doodoo", key);
     document.getElementById("turn").style.display = "none";
}

function enterPassKey(){
    if(localStorage.getItem("doodoo") == document.getElementById("ent").value){
        document.getElementById("turn").style.display = "none";
    }else{
        document.getElementById("lego").style.display = "block";
        document.getElementById("ent").value = "";
    }
}


var input = document.getElementById("ent");
document.addEventListener('DOMContentLoaded', function () {
    input.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            enterPassKey();
        }
    });
});
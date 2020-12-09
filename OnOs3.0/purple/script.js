function enter() {
    var content = document.getElementById("test").value;
    localStorage.setItem("username", content);
    var check = confirm("You Have Entered  '" + content + "'");
    if(check==true) {
        window.location.href="enter.html";
    }else{
        location.reload();
    }
}




window.onload = function myFunction() {
    document.getElementById("test").innerHTML = localStorage.getItem("username");
}



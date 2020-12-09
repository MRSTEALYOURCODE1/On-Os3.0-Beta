document.getElementById("html-code").innerHTML = localStorage.getItem("editor");
document.getElementById("css-code").innerHTML = localStorage.getItem("sec");
document.getElementById("js-code").innerHTML = localStorage.getItem("jsss");

function run() {
    let htmlCode = document.querySelector(".editor #html-code").value;
    let cssCode = "<style>"+document.querySelector(".editor #css-code").value+"</style>";
    let jsCode = document.querySelector(".editor #js-code").value;
    let output = document.querySelector(".editor #output");
    output.contentDocument.body.innerHTML = htmlCode+cssCode;
    output.contentWindow.eval(jsCode);
}

function enter() {
    var content = document.getElementById("html-code").value;
    localStorage.setItem("editor", content);
    console.dir("Saved");
    document.getElementById("html-code").innerHTML = localStorage.getItem("editor");
    var doc = document.getElementById("css-code").value;
    localStorage.setItem("sec", doc);
    console.dir("Saved");
    document.getElementById("css-code").innerHTML = localStorage.getItem("sec");
    var cod = document.getElementById("js-code").value;
    localStorage.setItem("jsss", cod);
    console.dir("Saved");
    document.getElementById("js-code").innerHTML = localStorage.getItem("jsss");
}


document.getElementById("html-code").innerHTML = localStorage.getItem("editor");
document.getElementById("css-code").innerHTML = localStorage.getItem("sec");
document.getElementById("js-code").innerHTML = localStorage.getItem("jsss");


function reset() {
    enter();
    location.reload();
}




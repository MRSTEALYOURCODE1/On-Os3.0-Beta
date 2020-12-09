function rect(){
    var length = parseInt(prompt("What Is the Length Of Your Figure?"));
    var width = parseInt(prompt("What Is the Width Of Your Figure?"));
    alert("Area Of Your Rectangle/Square Is " + length * width);
}

function triangle(){
    var base = parseInt(prompt("What Is The Base Of Your Figure?"));
    var height = parseInt(prompt("What Is The Height Of Your Figure?"));
    alert("The Area Of Your Triangle Is " + base * height / 2);
}

function trapezoid(){
    var base = parseInt(prompt("What Is The Top Base Of Your Figure?"));
    var base1 = parseInt(prompt("What Is The Bottom Base Of Your Figure"));
    var height = parseInt(prompt("What Is The Height Of Your Figure"));
    alert("The Area Of Your Trapezoid Is " + (base + base1) / 2 * height);
}


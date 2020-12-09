
function enter() {
    if(document.getElementById("inside").value == "ls"){
        if(document.getElementById("iterm").innerHTML == "OnOs:"){
            alert("Apps");
            alert("System");
            document.getElementById("iterm").innerHTML = "OnOs:";
            document.getElementById("inside").value = "";
        }
    }

    if(document.getElementById("inside").value == "cd Apps" || document.getElementById("inside").value == "cd apps"){
        if(document.getElementById("iterm").innerHTML == "OnOs:"){
            document.getElementById("iterm").innerHTML = "Apps:";
            document.getElementById("inside").value = "";
        }
    }

    if(document.getElementById("inside").value == "dir" || document.getElementById("inside").value == "dir"){
        if(document.getElementById("iterm").innerHTML == "OnOs:"){
            document.getElementById("inside").value = "";
            alert("Bat Commands Do Not Work Error: 404?");
        }
    }

    if(document.getElementById("inside").value == "dir" || document.getElementById("inside").value == "dir"){
        if(document.getElementById("iterm").innerHTML == "Apps:"){
            document.getElementById("inside").value = "";
            alert("Bat Commands Do Not Work Error: 404?");
        }
    }

    if(document.getElementById("inside").value == "dir" || document.getElementById("inside").value == "dir"){
        if(document.getElementById("iterm").innerHTML == "system:"){
            document.getElementById("inside").value = "";
            alert("Bat Commands Do Not Work Error: 404?");
        }
    }

    if(document.getElementById("inside").value == "rm" || document.getElementById("inside").value == "Rm"){
        if(document.getElementById("iterm").innerHTML == "OnOs:"){
            document.getElementById("inside").value = "";
            alert("Cannot Complete Action");
        }
    }

    if(document.getElementById("inside").value == "rm" || document.getElementById("inside").value == "Rm"){
        if(document.getElementById("iterm").innerHTML == "Apps:"){
            document.getElementById("inside").value = "";
            alert("Cannot Complete Action");
        }
    }

    if(document.getElementById("inside").value == "rm" || document.getElementById("inside").value == "Rm"){
        if(document.getElementById("iterm").innerHTML == "system:"){
            document.getElementById("inside").value = "";
            alert("Cannot Complete Action");
        }
    }


    if(document.getElementById("inside").value == "../" || document.getElementById("inside").value == "cd .."){
        if(document.getElementById("iterm").innerHTML == "OnOs:"){
            document.getElementById("iterm").innerHTML = "OnOs:";
            document.getElementById("inside").value = "";
            alert("access denied");
        }
    }

    if(document.getElementById("inside").value == "cd docs" || document.getElementById("inside").value == "cd Docs"){
        if(document.getElementById("iterm").innerHTML == "Apps:"){
            document.getElementById("inside").value = "";
            window.open("https://docs.google.com", "blank")
        }
    }

    if(document.getElementById("inside").value == "cd .." || document.getElementById("inside").value == "../"){
        if(document.getElementById("iterm").innerHTML == "Apps:"){
            document.getElementById("inside").value = "";
            document.getElementById("iterm").innerHTML = "OnOs:";
        }
    }

    if(document.getElementById("inside").value == "cd doc" || document.getElementById("inside").value == "cd Doc"){
        if(document.getElementById("iterm").innerHTML == "Apps:"){
            document.getElementById("inside").value = "";
            window.open("../../on-os/app/document-app/index.html", "blank")
        }
    }

    if(document.getElementById("inside").value == "cd slides" || document.getElementById("inside").value == "cd Slides"){
        if(document.getElementById("iterm").innerHTML == "Apps:"){
            document.getElementById("inside").value = "";
            window.open("https://docs.google.com/presentation", "blank")
        }
    }

    if(document.getElementById("inside").value == "cd sheets" || document.getElementById("inside").value == "cd Sheets"){
        if(document.getElementById("iterm").innerHTML == "Apps:"){
            document.getElementById("inside").value = "";
            window.open("https://docs.google.com/spreadsheets", "blank")
        }
    }

    if(document.getElementById("inside").value == "ls" || document.getElementById("inside").value == "ls"){
        if(document.getElementById("iterm").innerHTML == "Apps:"){
            document.getElementById("inside").value = "";
            alert("Docs");
            alert("Slides");
            alert("Sheets");
            alert("Forms");
            alert("Chrome");
            alert("Doc");
            alert("Editor");
            alert("On Term");
        }
    }

    if(document.getElementById("inside").value == "cd forms" || document.getElementById("inside").value == "cd Forms"){
        if(document.getElementById("iterm").innerHTML == "Apps:"){
            document.getElementById("inside").value = "";
            window.open("https://docs.google.com/forms", "blank")
        }
    }

    if(document.getElementById("inside").value == "cd chrome" || document.getElementById("inside").value == "cd Chrome"){
        if(document.getElementById("iterm").innerHTML == "Apps:"){
            document.getElementById("inside").value = "";
            window.open("https://google.com", "blank")
        }
    }

    if(document.getElementById("inside").value == "cd editor" || document.getElementById("inside").value == "cd Editor" || document.getElementById("inside").value == "cd code" || document.getElementById("inside").value == "cd Code"){
        if(document.getElementById("iterm").innerHTML == "Apps:"){
            document.getElementById("inside").value = "";
            window.open("../main.html", "blank")
        }
    }

    

    if(document.getElementById("inside").value == "cd System" || document.getElementById("inside").value == "cd system"){
        if(document.getElementById("iterm").innerHTML == "OnOs:"){
            document.getElementById("iterm").innerHTML = "system:";
            document.getElementById("inside").value = "";
            window.open("../../../../../../On%20Os3.0", "_blank")
        }
    }

    if(document.getElementById("inside").value == "ls" || document.getElementById("inside").value == "ls"){
        if(document.getElementById("iterm").innerHTML == "system:"){
            document.getElementById("iterm").innerHTML = "system:";
            document.getElementById("inside").value = "";
            window.open("../../../../../../On%20Os3.0", "_blank")
        }
    }

    if(document.getElementById("inside").value == "cd .." || document.getElementById("inside").value == "../"){
        if(document.getElementById("iterm").innerHTML == "system:"){
            document.getElementById("iterm").innerHTML = "OnOs:";
            document.getElementById("inside").value = "";
        }
    }
}




    

var input = document.getElementById("inside");
document.addEventListener('DOMContentLoaded', function () {
    input.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            enter();
        }
    
            
    });
});
    
console.log("Version-0.1");
console.log("Loading Bin");
console.warn("Beta");
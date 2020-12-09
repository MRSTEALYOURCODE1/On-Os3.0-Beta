<?php
    session_start();
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page</title>
    <style>
        body{
            background: url(../start/background.jpg);
            background-size: 100% 100%;
        }

        button{
            cursor: pointer;
        }
        
        .border{
            background-color: white;
            height: 9%;
            width: 100%;
            position: absolute;
            top: 0%;
            left: 0%;
        }

        .pos{
            position: absolute;
            top: 0%;
            left: 0%;
            cursor: pointer;
            height: 9%; 
            width: 12.5%;
        }

        .separation{
            background-color: black;
            height: 9%;
            width: 0.1%;
            position: absolute;
            top: 0%;
            left: 12.435%;
        }

        .capto{
            background-color: whitesmoke;
            color: #116dff;
            border: solid #116dff;
            height: 50px;
            width: 210px;
            position: absolute;
            top: 50%;
            left: 42%;
            border-radius: 10px;
        }

        .capto:hover{
            transition: .7s;
            background-color: #116dff;
            color: whitesmoke;
        }

        .usr{
            background: #f1f1f1;
            border: none;
            text-align: center;
            height: 6.5%;
            width: 14.5%;
            position: absolute;
            top: 45%;
            left: 44%;
            border-radius: 10px;
        }
        
        .pwd{
            background: #f1f1f1;
            border: none;
            text-align: center;
            height: 6.5%;
            width: 14.5%;
            position: absolute;
            top: 52%;
            left: 44%;
            border-radius: 10px;
        }

        .login{
            background: #f1f1f1;
            border: solid purple;
            height: 6.5%;
            width: 14.5%;
            text-align: center;
            position: absolute;
            top: 59%;
            left: 44%;
            border-radius: 10px;
        }

        .login:hover{
            transition: .7s;
            background-color: purple;
            color: #f1f1f1;
        }

        .logout{
            background: #f1f1f1;
            border: solid #116dff;
            height: 6.5%;
            width: 8.7%;
            text-align: center;
            position: absolute;
            top: 1%;
            left: 90%;
            border-radius: 10px;
            visibility: hidden;
        }

        .logout:hover{
            transition: .7s;
            background-color: #116dff;
            color: #f1f1f1;
        }

        .sign{
            color: black;
            position: absolute;
            border: solid black;
            left: 92.7%;
            top: 2%;
            text-align: center;
            font-size: 150%;
            border-radius: 10px;
            width: 6.5%;
            height: 4%;
        }

        .talk{
            background: #f1f1f1;
            border: solid #116dff;
            height: 6.5%;
            width: 8.7%;
            text-align: center;
            position: absolute;
            top: 1%;
            left: 81%;
            border-radius: 10px;
        }

        .talk:hover{
            transition: .7s;
            background-color: #116dff;
            color: whitesmoke;
        }

        .list{
            background: #f1f1f1;
            border: solid #116dff;
            height: 6.5%;
            width: 8.7%;
            text-align: center;
            position: absolute;
            top: 1%;
            left: 72%;
            border-radius: 10px;
        }

        .list:hover{
            transition: .7s;
            background-color: #116dff;
            color: whitesmoke;
        }

        .search{
            background: #f1f1f1;
            border: solid #116dff;
            height: 6.5%;
            width: 8.7%;
            text-align: center;
            position: absolute;
            top: 1%;
            left: 63%;
            border-radius: 10px;
        }

        .search:hover{
            transition: .7s;
            background-color: #116dff;
            color: whitesmoke;
        }

       
        .done{   
            background-color: rgb(16, 76, 231);
            border: solid black;
            border-radius: 30px;
            width: 20%;
            height: 7.5%;
            position: absolute;
            top: 35%;
            left: 40%;
    }

    .done:hover{
        transition: 2s;
        background-color: black;
        border: solid rgb(16, 76, 231);
        color: rgb(16, 76, 231);
    }
        
        
        
    </style>
</head>
<body>
    

    <nav>
        <div>
            <?php
                if(isset($_SESSION['userId'])) {
                    echo '<form action="includes/logout.inc.php" method="post">
                    <button class="logout" type="submit" name="Logout-Submit">Logout</button>
                </form>
                <a href="../main/prefrences/main.html">
                    <button class="done">Next</button>
                </a>
                

                
                ';
                }else{
                    echo '<form action="includes/login.inc.php" method="post">
                    <input class="usr" type="text" name="mailuid"  placeholder="E-mail...">
                    <input class="pwd" type="password" name="pwd"  placeholder="Password...">
                    <button class="login" type="submit" name="login-submit">Login</button>
                </form>

    
                
                    
                
                
                ';


                }
            ?>
            

            
        </div>
    </nav>

</body>
</html>
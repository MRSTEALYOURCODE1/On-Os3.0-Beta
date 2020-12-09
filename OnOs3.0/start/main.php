

    <main>
    <style>


        body{
            background: url(background.jpg);
            background-size: 100% 100%;
        }

        .welcome-btn{
            background-color: rgb(16, 76, 231);
            border: solid black;
            border-radius: 30px;
            width: 10%;
            height: 3.75%;
            position: absolute;
            top: 0%;
            right: 0%;
        }

        .welcome-btn:hover{
            transition: 2s;
            background-color: black;
            border: solid rgb(16, 76, 231);
            color: rgb(16, 76, 231);
        }

        

        .signback{
            background-color: white;
            width: 35%;
            height: 60%;
            position: absolute; 
            top: 25%;
            left: 31.5%;
            border: solid purple 10px;
            border-radius: 10px;
        }

        .usr{
            background: #f1f1f1;
            border: none;
            text-align: center;
            height: 6.5%;
            width: 65%;
            top: 10%;
            left: 17.5%;
            position: absolute;
            border-radius: 10px;
        }

        .usr1{
            background: #f1f1f1;
            border: none;
            text-align: center;
            height: 6.5%;
            width: 65%;
            top: 25%;
            left: 17.5%;
            position: absolute;
            border-radius: 10px;
        }

        .usr2{
            background: #f1f1f1;
            border: none;
            text-align: center;
            height: 6.5%;
            width: 65%;
            top: 40%;
            left: 17.5%;
            position: absolute;
            border-radius: 10px;
        }

        .usr3{
            background: #f1f1f1;
            border: none;
            text-align: center;
            height: 6.5%;
            width: 65%;
            top: 55%;
            left: 17.5%;
            position: absolute;
            border-radius: 10px;
        }

        .signupbtn{
            background: #f1f1f1;
            border: solid purple;
            height: 20%;
            width: 50%;
            text-align: center;
            position: absolute;
            top: 70%;
            left: 25%;
            border-radius: 10px;
        }

        .signupbtn:hover{
            transition: .7s;
            background-color: purple;
            color: #f1f1f1;
        }

        .fam{
            position: absolute;
            top: 85%;
            left: 46%;
            color: red;
        }

        .dam{
            position: absolute;
            top: 85.5%;
            left: 33%;
            color: green;
        }

    </style>

        <div class="back"></div>


        
        <?php 
            if(isset($_GET['error'])){
                if($_GET['error'] == "emptyfields"){
                    echo '<p class="fam">Fill In All Fields!</p>';
                }else if($_GET['error'] == "invalidmail"){
                    echo '<p class="fam"Invalid Mail!</p>';

                }else if($_GET['error'] == "passwordcheck"){
                    echo '<p class="fam"Password Does Not Match!</p>';

                }else if($_GET['error'] == "internet_error_or_sql_error"){
                    echo '<p class="fam"Internet Not Connected!</p>';
                }else if($_GET['error'] == "YouHaveSuccesfullyMadeAnAccount"){
                    echo '<p class="dam">You Succesfully Made An Account Please Press Next To Continue</p>';
                }


                
            }
        ?>
        <div class="signback">
            <form action="signup.inc.php" method="post">
                <input class="usr" type="text" name="uid" placeholder="Username">
                <input class="usr1" type="text" name="mail" placeholder="E-mail">
                <input class="usr2" type="password" name="pwd" placeholder="Password">
                <input class="usr3" type="password" name="pwd-repeat" placeholder="Repeat Password">
                <button class="signupbtn" type="submit" name="signup-submit">SignUp</button>
            </form>
        </div>
        <a href="../login/main.php">
            <button class="welcome-btn">Next</button>
        </a>
    </main>


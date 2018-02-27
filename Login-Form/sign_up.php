<?php
require_once('temp/db.php');


    if(isset($_POST['submit']))
    {
        sign_up($conn,$_POST['name'],$_POST['email'],$_POST['password']);
        
    }
  
function sign_up($db,$name,$email,$password)
{
    $sql = "INSERT INTO 'tbluser_login' ('tbl_username','tbl_useremail','tbl_userpassword','tbl_useractive') VALUES ('$name',$email,$password)";
    $run_sql = mysql_query($sql,$db);

    return $run_sql;
}
?>

<html>
    <head>
        <title>Welcome To Home</title>
        <link href="style.css" rel="stylesheet">
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:700,600' rel='stylesheet' type='text/css'>
    </head>
    <body>
    </div>
           <div class="box">
               <h1>Sign Up</h1>
               <input type="text" class="email" name="name" id="name" placeholder="Enter Your Full Name" required/>
               <input type="email" class="email" name="email" id="email" placeholder="Enter Your email" required/>
               <input type="password" class="password" name="password" id="password" placeholder="Enter Your password" required/>
               <input type="password" class="password" name="c_password" id="c_password" placeholder="Enter Your Confirm password" required/>
               <input type="submit" class="btn" value="Sign Up" name="submit" id="submit" class="btn btn-block btn-danger">
               <a href="index.php"><div class="btn2">Sign In</div></a>
            </div>
       </form>
    </body>
</html>
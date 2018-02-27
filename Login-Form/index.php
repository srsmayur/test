<?php
require_once('temp/db.php');

?>
<html>
    <head>
        <title>Welcome To Home</title>
        <link href="style.css" rel="stylesheet">
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:700,600' rel='stylesheet' type='text/css'>
    </head>
    <body>
       <form method="post" action="index.html">
           <div class="box">
               <h1>Admin Login</h1>
               <input type="email" class="email" name="email" id="email" placeholder="Enter Your email" required/>
               <input type="password" class="password" name="password" id="password" placeholder="Enter Your password" required/>
               <a href="#"><div class="btn">Sign In</div></a>
               <a href="sign_up.php"><div id="btn2">Sign Up</div></a>
            </div>
       </form>
    </body>
</html>
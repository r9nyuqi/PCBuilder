<?php 
    $error = "";
    if(isset($_POST['submit']))
    {
       $username = $_POST['username'];
       $password = $_POST['password'];
       if(empty($username) || empty($password))
       {
           $error = "Wrong username or password";
       }
       else
       {
           echo "Your username is: {$username} and your password is: {$password}";
       }
    }
?>
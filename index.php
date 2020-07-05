<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  
 $mailTo = 'njasur.1995@gmail.com';
 
 mail($mailTo, $name, $email);
 
?>

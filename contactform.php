<?php
  if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $emailTo = "pooja_dodia1990@hotmail.com";
    $headers = "From: ".$emailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($emailTo, $subject, $txt, $headers);
    header("Location: thankyou.html?mailsend");
  }

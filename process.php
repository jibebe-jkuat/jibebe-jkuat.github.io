<?php

if($_POST['axn'] == 'contact_3' and isset($_POST['username']) != ""){
	
			$to = "themezane@outlook.com";
			$from =  $_POST["email"];
			$message = "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Name: </strong>".$_POST["username"]."<br />";
			$message .= "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Email Address: </strong>".$_POST["email"]."<br />";
			$message .= "&nbsp;&nbsp;&nbsp;&nbsp; <strong>Message: </strong>".$_POST["description"]."<br />";
			$subject = 'Contact Enquiry';		
			$headers = "From: ".$_POST["email"]."\n";
			$headers .= "MIME-Version: 1.0" . "\r\n";
			$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
			
			$send =	mail($to,$subject,$message,$headers);
	
	
	
	if($send)
	{
		echo "success";
	}
	else
	{
		echo "error";
	}
}


?>
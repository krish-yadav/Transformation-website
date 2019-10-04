<?php

if(isset($_POST['submit'])){

	$name = $_POST['name'];
	
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$age = $_POST['age'];
	
	

	$db = mysqli_connect("localhost", "root", "", "transformation")
	or die('error connecting');

	mysqli_query($db, "INSERT INTO demo VALUES (0, '$name', '$email', '$phone', '$age')")
	or die('error quering');

	echo'<script language="javascript"> alert("Your response has been submitted.")</script>';
	

}


?>
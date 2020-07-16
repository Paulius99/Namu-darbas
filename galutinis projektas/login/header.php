<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Login</title>
	<link rel="shortcut icon" href="../images/navigation-3482965_960_720.png" />
	<link rel="stylesheet" href="css/style.css">
</head>

<body>
	<header>
		<div class="home">
			<i class="fas fa-home"></i>
			<a href="../index.php">Home</a>
		</div>
		<div class="nav-login">
			<div class="img-text">
				<p>Log in</p>
			</div>
			<form action="includes/login.inc.php" method="post">
				<input type="text" name="uid" placeholder="Username/Email" />
				<input type="password" name="pwd" placeholder="Password" />
				<button type="submit" name="submit">Login</button>
			</form>
			<p>Haven't signed up? <a href="signup.php"> Sign up</a></p>
		</div>
	</header>
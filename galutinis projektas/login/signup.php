<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Signup</title>
	<link rel="shortcut icon" href="/images\navigation-3482965_960_720.png" />
	<link rel="stylesheet" href="css/style.css">
</head>
<body>

<section class="main-container">
	<div class="home">
					<i class="fas fa-home"></i>
					<a href="../index.php">Home</a>
				</div>
				<div class="nav-login">
					<div class="img-text">
						<p>Sign up</p>
					</div>
					<form class="signup-form" action="includes/signup.inc.php" method="post">
					<input type="text" name="first" placeholder="First name">
					<input type="text" name="last" placeholder="Last name">
					<input type="text" name="email" placeholder="Email address">
					<input type="text" name="uid" placeholder="Username">
					<input type="password" name="pwd" placeholder="Password">
					<button type="submit" name="submit">Sign up</button>
					</form>
					<p>Already signed up? <a href="index.php"> Login</a></p>
				</div>
</section>
</body>
</html>
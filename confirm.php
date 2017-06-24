<html>
<head>

  <title><?php
	$orderNumber = rand(10000, 99999);
	echo "Order Number: " . $orderNumber; ?></title>
  <link href="style.css" text="text/css" rel="stylesheet"/>
</head>

<body>
  <p id="Action">
    <?php
		$temp = $_POST["temp"]; 
		$JSON = json_decode($temp, true);
		$total = $_POST["total"];
		$name = $_POST["name"];
		$address = $_POST["address"];
		$phone = $_POST["phone"];
		$cardNumber = $_POST["cardNumber"];
		$cardName = $_POST["cardName"];
		$expire = $_POST["expire"];
		
        if ($_POST["action"] == "confirmOrder")
        {
		echo 'Confirmed: Order #' . $orderNumber;
            echo '<br />';
            echo 'Thank you for your purchase!';
        }
        else
        {
            echo 'Order Cancelled';
            echo '<br />';
            echo 'Having issues confiriming your order, Please contact technical support.';
        }
    ?>
  </p>
</body>
</html>
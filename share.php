<!DOCTYPE html>
<html>
<head>
  <!-- for facebook -->
  <meta property="fb:app_id"   		content="667650703443105" />

<meta property="og:url"                content="http://localhost/d2idesign/<?php echo $_GET['img']; ?>" />
<meta property="og:type"               content="picture" />
<meta property="og:image"              content="http://localhost/d2idesign/<?php echo $_GET['img']; ?>" />
<!-- for pinterest-->
<meta property="og:title" content="Image" />
<meta property="og:description" content="View the album on infizer" />
<meta property="og:type" content="picture" />
<!-- <meta property="og:url" content="URL_OF_THIS_PAGE" /> -->
<meta property="og:site_name" content="http://localhost/d2idesign/" />
<meta property="og:image" content="http://localhost/d2idesign/<?php echo $_GET['img']; ?>" />

<!--tiwtter -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@infizer" />
<meta name="twitter:title" content="Image" />
<meta name="twitter:description" content="View the album on infizer" />
<meta name="twitter:image" content="http://localhost/d2idesign/<?php echo $_GET['img']; ?>" />
  
<title>share</title>
</head>
<body>
		<img id="img" src="http://localhost/d2idesign/<?php echo $_GET['img']; ?>" /><br>
</body>
</html>

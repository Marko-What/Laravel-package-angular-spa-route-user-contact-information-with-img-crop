
<html ng-app="angularFormsApp">
<title>HTML Tutorial</title>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>	


<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<!-- bootstrapcdn UI -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js"></script>




   

<link rel="stylesheet" type="text/css" href="<?= asset('app/styles.css') ?>" />
<link rel="stylesheet" type="text/css" href="<?= asset('css/image-crop-styles.css') ?>" />
<link rel="stylesheet" type="text/css" href="<?= asset('css/imguploadStyle.css') ?>" />


    <!-- AngularJS Application Scripts -->
	<!-- jquery -->
  
    <script src="<?= asset('app/angularFormsApp.js') ?>"></script>
    <script src="<?= asset('app/angular-route.min.js') ?>"></script>
    <script src="<?= asset('app/DataService.js') ?>"></script>
   



<script src="<?= asset('app/DataService.js') ?>"></script>
<script src="<?= asset('app/image-crop.js') ?>"></script>
<script src="<?= asset('app/EmployeeForm/efController.js') ?>"></script>
<script src="<?= asset('app/EmployeeForm/efControlleredit.js') ?>"></script>


	
	
</head>

<body class="container">

 <div ng-view></div>
</body>
</html>



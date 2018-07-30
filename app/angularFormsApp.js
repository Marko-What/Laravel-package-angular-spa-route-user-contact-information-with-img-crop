
var angularFormsApp = angular.module('angularFormsApp', ["ngRoute", "ImageCropper"]);




var base_url = window.location.origin;

 // define our canstant for the API
  angularFormsApp.constant('BASE_URL', base_url);

 
	


angularFormsApp.config(function($routeProvider, $locationProvider){
	
	$routeProvider

	.when("/uploadImg",{ 
		templateUrl:"/app/EmployeeForm/uploadImg.html",
		controller:"efController"	
	})

	.when("/editImg",{ 
		templateUrl:"/app/EmployeeForm/editImg.html",
		controller:"efControlleredit"	
	})

	.otherwise({
		redirectTo:"/uploadImg"
	});

	
	//http://127.0.0.1:9020/uploadImgCrop#/editImg



		/* does clean it up  hash mark realtive  */
	/*$locationProvider.html5Mode(true);*/
});




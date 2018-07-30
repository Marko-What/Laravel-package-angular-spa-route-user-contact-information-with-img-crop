
var angularFormsApp = angular.module('angularFormsApp', ["ngRoute", "ImageCropper"]);


 // define our canstant for the API
/*angularFormsApp.constant('constants', {
        API_CONTROLLER: 'http://http://127.0.0.1:8000/apicontroller/'
 });*/



angularFormsApp.config(function($routeProvider, $locationProvider){
	
	$routeProvider

	.when("/uploadImg",{ 
		templateUrl:"/app/EmployeeForm/uploadImg.html",
		controller:"efController"	
	})


	.otherwise({
		redirectTo:"/uploadImg"
	});
		/* does clean it up  hash mark realtive  */
	/*$locationProvider.html5Mode(true);*/
});




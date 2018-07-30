angularFormsApp.controller('efController',
	
	function efController($scope, $window, $routeParams, $http){


	/* re3ally to discuss the croop so on */




	$scope.fileChanged = function(e) {			
		
			var files = e.target.files;
		
     			var fileReader = new FileReader();
			fileReader.readAsDataURL(files[0]);		
			
			fileReader.onload = function(e) {
				$scope.imgSrc = this.result;
				$scope.$apply();


			//confirm('hidden input field');
			console.log($scope.imgSrc);
			


			};
			
		}		
	   
		$scope.clear = function() {
			 $scope.imageCropStep = 1;
			 delete $scope.imgSrc;
			 delete $scope.result;
			 delete $scope.resultBlob;
		};






$scope.imageCropStep = 1;
$scope.fileChanged = function(e) {			
		
		
			var files = e.target.files;
		
     			var fileReader = new FileReader();
			fileReader.readAsDataURL(files[0]);		
			
			fileReader.onload = function(e) {
				$scope.imgSrc = this.result;
				$scope.$apply();


			confirm('hidden input field');
			console.log($scope.imgSrc);
			


			};
			
		}


		
	   
$scope.clear = function() {
	 $scope.imageCropStep = 1;
	 delete $scope.imgSrc;
	delete $scope.result;
	 delete $scope.resultBlob;
};







	   
$scope.upload = function() {
	console.log($scope.result);
	img = $scope.result;

	if($scope.imgName) {
		function makeid() {
	  var text = "";
	  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	  for (var i = 0; i < 5; i++)
	    text += possible.charAt(Math.floor(Math.random() * possible.length));

	     imgName = $scope.imgName + '-' + text;
	}

	makeid();


		
	} else {
	
			
	function makeid() {
	  var text = "";
	  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	  for (var i = 0; i < 5; i++)
	    text += possible.charAt(Math.floor(Math.random() * possible.length));

	     imgName = text;
	}

	makeid();

	}
		



	
	var postData={};

	postData = {img: img, imgName: imgName};
	

	console.log(postData);		

	$http.post('http://127.0.0.1:9020/uploadImgCrop/imgUpload/', JSON.stringify(postData))
			    .success(function (result) {
				confirm('passed throught');
				console.log(result);
			    })
			    .error(function (data, status, header, config) {
				confirm('submit error img');
			    })


};





});








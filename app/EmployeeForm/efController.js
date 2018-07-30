angularFormsApp.controller('efController',
	
	function efController($scope, $window, DataService, $routeParams, $http, BASE_URL){

	$scope.firstname = true;
		
	$scope.uploadBool = true;

	$scope.form;
	
	
	
	 	
			

	//	console.log($scope.form.firstUppercase);



	$scope.aboutClick = function(){
		$scope.firstname = !$scope.firstname;	
		
	};


	


	/* re3ally to discuss the croop so on */




	$scope.fileChanged = function(e) {			
		
			var files = e.target.files;	
		
     			var fileReader = new FileReader();
			fileReader.readAsDataURL(files[0]);		
			
			fileReader.onload = function(e) {
				$scope.imgSrc = this.result;
				$scope.$apply();

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

			};
			
		}


		


	



	$scope.close = function(){
	
			var el = document.querySelector(".opacity");
			el.classList.add('opacityBack');
	
			var modal = document.querySelector(".modal");	
			modal.classList.add('modalEscape');
			modal.classList.add('modalPunch');		
		


			$scope.form.first = "";
			$scope.form.last = "";
			$scope.form.email = "";
			$scope.form.notes = "";
			$scope.form.about = "";
			 delete $scope.imgSrc;
	
		

	
	}




	$scope.edit = function(){
	
		$window.location.href = '/uploadImgCrop/#/editImg';
	}




	   
	$scope.upload = function() {

		console.log($scope.form);



		console.log($scope.result);
		img = $scope.result;

		imgName = $scope.form.first;

		console.log(imgName);

	


		if($scope.form.first){

			function makeid() {
			  var text = "";
			  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

			  for (var i = 0; i < 5; i++)
			    text += possible.charAt(Math.floor(Math.random() * possible.length));

			     imgName = $scope.form.first + "-" + text;
			}

			makeid();
		} else {

			console.log('form.first without data');	
		}





	function modal(){
	
		opacityBack = ".opacityBack";		

		var el = document.querySelector(".opacity");
		var modal = document.querySelector(".modal");
		console.log(el);



		if (modal.classList.contains('modalEscape')) {
			modal.classList.remove('modalEscape');
			modal.classList.add('modalPunch');
			el.classList.remove('opacityBack');
			
		      } else {
			modal.classList.add('modalPunch');
			
			setTimeout(function(){modal.classList.add('modalEscape');}, 550);

		      }

		
	}


	






	 first = $scope.form.first;
	 last = $scope.form.last;
	 email = $scope.form.email;
	 notes = $scope.form.notes;

	 $scope.firstaa = $scope.form.first;
	 $scope.lastaa = $scope.form.last;
	 $scope.emailaa = $scope.form.email;
	 $scope.notesaa = $scope.form.notes;
	 $scope.userimageaa = $scope.imgSrc;
	
	var postData={};

	postData = {img: img, imgName: imgName, first: first, last: last, email: email, notes: notes};
	
	






	/* services */

	

	 DataService.insertUser(postData);
			
	
	/* really cause of a circumstance later on promises would be implementated either casuse of a circumstance just to fastrward the development process*/


	function modalFunctionCall(){
		check = localStorage.getItem("success");
		confirm(check);
		if(check == "true"){ modal(postData); }
	}


	setTimeout(modalFunctionCall, 1000);






	} /* end of a upload function */;





});








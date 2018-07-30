angularFormsApp.controller('efControllershow',
	
	function efController($scope, $window, $routeParams, $http){

	$scope.firstname = true;
	/*$scope.cone = true;	
	$scope.ctwo = false;*/	
	$scope.uploadBool = true;

	$scope.form;
	
	
						
	/* if(!employeeForm.first.$error && employeeForm.first.$dirty) {
		console.log('without any error');
	 	 $scope.uploadBool = false;
	  }*/


	$scope.aboutClick = function(){
		$scope.firstname = !$scope.firstname;	
		console.log($scope.firstname);
		
		/*if($scope.firstname){
			$scope.cone = true;	
			$scope.ctwo = false;		
		}
		if(!$scope.firstname){
			$scope.cone = false;	
			$scope.ctwo = true;		
		}
		*/




	};
	
	
	




	function closing(){

		//confirm('clicked');	
		opacityBack = ".opacityBack";		

		var el = document.querySelector(".opacity");
		var modal = document.querySelector(".modal");
	

		console.log(el);		 
		// el.className += ' ' + opacityBack;
	
		 if (el.classList.contains('opacityBack')) {
			el.classList.remove('opacityBack');
			// alert("remove faq display!");
		      } else {
			el.classList.add('opacityBack');
			// alert("add faq display!");
		      }	


		
		if (modal.classList.contains('modalEscape')) {
			modal.classList.remove('modalEscape');
			modal.classList.remove('modalPunch');
			// alert("remove faq display!");
		      } else {
			modal.classList.add('modalPunch');
			

			setTimeout(function(){modal.classList.add('modalEscape');}, 550);

			
			// alert("add faq display!");
		      }



	} /* end of closing */

















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


			/*confirm('hidden input field');*/
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




	 first = $scope.form.first;
	 last = $scope.form.last;
	 email = $scope.form.email;
	 notes = $scope.form.notes;

	
	var postData={};

	postData = {img: img, imgName: imgName, first: first, last: last, email: email, notes: notes};
	

	console.log(postData);		

	$http.post('http://127.0.0.1:8000/uploadImgCrop/imgUpload/', JSON.stringify(postData))
			    .success(function (result) {
				confirm('passed throught');
				console.log(result);


				window.location.href ="http://127.0.0.1:8000/uploadImgCrop/#/showUser";


			    })
			    .error(function (data, status, header, config) {
				confirm('submit error img');
			    })


	};





});








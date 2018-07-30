angularFormsApp.controller('efControlleredit',
	
	function efController($scope, $window, $routeParams, DataService, $http, BASE_URL){

	url = window.location.origin;


	$scope.firstname = true;
	
	$scope.uploadBool = true;
	$scope.displayCUreImg = true;
	

	$scope.firstCure = true;
	$scope.lastCure = true;
	$scope.emailCure = true;
	$scope.notesCure = true;
	



	$scope.form;
	



	$scope.aboutClick = function(){
		$scope.firstname = !$scope.firstname;	
		console.log($scope.firstname);
	
	};
	
	

	
		
	
	
		


	/* re3ally to discuss the croop so on */

	$scope.testing = "what";
	$scope.forma= "";

	$scope.first = "Steve";	
	$scope.last = "Vojachec";	
	$scope.email = "mastermill@gmail.com";	
	$scope.imgName = "it's a test";	
	$scope.notes = "it's a test";	


	$scope.firsta =  null;	
	$scope.lasta = null;
	$scope.emaila = null;	
	$scope.imgNamea = null;
	$scope.notesa = null;
	
		

	



	var editData;

	$scope.checkIn = function(){
		
		
				
		editData = [];
		first = $scope.forma.firstEdit;
		email = $scope.forma.emailEdit;
	


		var obj = { "first": first, "email": email };
		var myJSON = JSON.stringify(obj);
	

		

		
		

	




		
		base_url = BASE_URL;
		$scope.base_urla = base_url;

		urlToStore = url + '/uploadImgCrop/getUserByemails';



			$http.post(urlToStore, myJSON)
			    .success(function (result) {
				
				
				$scope.formaData = result; 
				console.log($scope.formaData);
			
				CurrentimgName = $scope.formaData[0].imgName;
	
				$scope.first =  $scope.formaData[0].first;	
				$scope.last = $scope.formaData[0].last;
				$scope.email = $scope.formaData[0].email;	
				$scope.imgName = $scope.formaData[0].imgName;
				$scope.notes = $scope.formaData[0].notes;

		
				first =  $scope.formaData[0].first;	
				last = $scope.formaData[0].last;
				email = $scope.formaData[0].email;	
				imgName = $scope.formaData[0].imgName;
				notes = $scope.formaData[0].notes		
			


				closing();

			    })
			    .error(function (data, status, header, config) {
				confirm('submit error img');
			    })

	};

	




	






	function closing(){

		
		opacityBack = ".opacityBack";		

		var el = document.querySelector(".opacity");
		var modal = document.querySelector(".modal");
	

		console.log(el);		 
		
	
		 if (el.classList.contains('opacityBack')) {
			el.classList.remove('opacityBack');
			
		      } else {
			el.classList.add('opacityBack');
			
		      }	


		
		if (modal.classList.contains('modalEscape')) {
			modal.classList.remove('modalEscape');
			modal.classList.remove('modalPunch');
			
		      } else {
			modal.classList.add('modalPunch');
			

			setTimeout(function(){modal.classList.add('modalEscape');}, 550);

			
			
		      }



	} /* end of closing */


	



	$scope.close = function(){
	
	$window.location.href = '/uploadImgCrop/#/';
	}









	$scope.check = function(){

		confirm('clicked');	


		$scope.displayCheckImg = true;
		$scope.displayCUreImg = false;
		



		
		$scope.checkImg = $scope.result;




		console.log($scope.imgSrc);

		$scope.firstCure = false;
		$scope.lastCure = false;
		$scope.emailCure = false;
		$scope.notesCure = false;


	};








	$scope.fileChanged = function(e) {			
		
			var files = e.target.files;	
		
     			var fileReader = new FileReader();
			fileReader.readAsDataURL(files[0]);		
			
			fileReader.onload = function(e) {
				$scope.imgSrc = this.result;
				$scope.$apply();


			};
			
		}	
	
	   
	






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





		
	   
	$scope.clear = function() {

				

		$scope.displayCheckImg = false;
		$scope.displayCUreImg = true;

		$scope.firsta = null;
		$scope.lasta = null;
		$scope.emaila = null;
		$scope.notesa = null;
	
	
		

		$scope.firstCure = true;
		$scope.lastCure = true;
		$scope.emailCure = true;
		$scope.notesCure = true;
		
		

		$scope.first =  first;	
		$scope.last = last;
		$scope.email = email;	
		$scope.imgName = CurrentimgName;
		$scope.notes = notes;



		$scope.form.first = "";	
		$scope.form.last = "";
		$scope.form.email = "";		
		$scope.form.imgName = "";	
		$scope.form.notes = "";	
	


	        $scope.imageCropStep = 1;
	        delete $scope.imgSrc;
	        delete $scope.result;
	        delete $scope.resultBlob;


		
	

	};



 


	$scope.datas = "it's a string";





	fia = document.querySelector(".aaa");
	fib = document.querySelector(".bbb");
	fic = document.querySelector(".ccc");	


	$scope.typings = function(datas, ifa){
	


	console.log(datas);

	if(ifa == "first"){
	$scope.firsta = datas;	
	fia.classList.add('cross');
	}
	
	if(ifa == "last"){
	$scope.lasta = datas;	
	fib.classList.add('cross');
	}
	
	if(ifa == "email"){
	$scope.emaila = datas;
	fic.classList.add('cross');	
	}

	if(ifa == "notes"){
	$scope.notesa = datas;	
	}

	
	if(!$scope.firsta){
		fia.classList.remove('cross');
	}

	if(!$scope.lasta){
		fib.classList.remove('cross');
	}

	if(!$scope.emaila){
		fic.classList.remove('cross');
	}
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

	
	emaila = $scope.forma.emailEdit;
	postData = {img: img, imgName: imgName, first: first, last: last, email: email, currEmail: emaila, notes: notes};
	

	console.log(postData);		
	


	

	 DataService.updateUser(postData);
			
	
	/* really cause of a circumstance later on promises would be implementated either casuse of a circumstance just to fastrward the development process*/


	function modalFunctionCallEdit(){
		check = localStorage.getItem("success");
		if(check){ $window.location.href = '/uploadImgCrop/#/uploadImg'; }
	}


	setTimeout(modalFunctionCallEdit, 1000);



} /* end of upload */;




	



});








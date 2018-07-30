

angularFormsApp.factory('DataService',
	function($http){
		 
		
		var getUser = function(){
			
			return "Micka Ficka";

			
			

		};  /* end of getUser */







		url = window.location.origin;
		urlToStore = url + '/uploadImgCrop/imgUpload/';

		
		var insertUser = function(postData){



			$http.post(urlToStore, JSON.stringify(postData))
			    .success(function (result) {
				confirm('passed throught');
				localStorage.setItem("success", true);
		
				
			    })
			    .error(function (data, status, header, config) {
				confirm('submit error img');
				localStorage.setItem("success", false);
			    })

		

	
		};	/* end of insertEmployee */





		
		var updateUser = function(postData){

			urlToStorea = url + '/uploadImgCrop/imgUploadEdit';

			$http.post(urlToStorea, JSON.stringify(postData))
			    .success(function (result) {
				confirm('passed throught');
				localStorage.setItem("success", true);
		
			    })
			    .error(function (data, status, header, config) {
				confirm('submit error img');
				localStorage.setItem("success", false);
			    })





				
		};
		
		return {
			insertUser: insertUser,
			getUser: getUser,
			updateUser: updateUser	
		};


	});/* end of function */




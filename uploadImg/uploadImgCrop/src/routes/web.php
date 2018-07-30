<?php

$namespace = 'uploadImgCrop\Http\Controllers';   

Route::group([
	'namespace' => $namespace,
	'prefix' => 'uploadImgCrop',
	'middleware' => 'web'
], function(){
	Route::get('/aa', function(){
		echo "basic scrape page testing if route does work ... ";
	});

	

	Route::get('/',[
	'uses' => 'uploadImgCropController@index',
	'as' => 'uploadImgCropindex',  		
	]);


	Route::get('/editImgSave',[
	'uses' => 'uploadImgCropController@editImg',
	'as' => 'uploadImgCropeditImg',  		
	]);

	
	
	Route::post('/getUserByemails',[
	'uses' => 'uploadImgCropController@getUserByemail',
	'as' => 'getUserByemail',  		
	]);

	
	Route::get('/getUserByemailGetReq',[
	'uses' => 'uploadImgCropController@getUserByemailGetReq',
	'as' => 'getUserByemailGetReq',  		
	]);

	
	Route::post('/imgUploadEdit',[
		'uses' => 'uploadImgCropController@imgUploadEdit',
		'as' => 'imgUploadEdit',  		
	]);


	//Route::post('/imgUploadEdit', 'uploadImgCropController@imgUploadEdit');


	Route::post('/imgUpload', 'uploadImgCropController@imgUpload');


	Route::get('/testingPopulate',[
	'uses' => 'uploadImgCropController@testingPopulate',
	'as' => 'uploadImgCroptestingPopulate',  		
	]);

	
		/* uploadImgCrop/testingUpdatePopulate */
	
	Route::get('/testingUpdatePopulate',[
	'uses' => 'uploadImgCropController@testingUpdatePopulate',
	'as' => 'testingUpdatePopulate',  		
	]);
	
	
	Route::get('/userimage/{filename}', [
			'uses' => 'uploadImgCropController@getUserImage',
			'as' => 'uploadImgCropController.image'
	]);




});

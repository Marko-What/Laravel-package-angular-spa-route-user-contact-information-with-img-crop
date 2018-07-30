<?php 

namespace uploadImgCrop\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


use Illuminate\Http\Response;


use Illuminate\Support\Facades\Storage;


use App\userData;


class uploadImgCropController extends Controller {

		
	/*consturctor $userDataDB = new userData(); */


	public function index(){
	
		return view('upladImg::api');
	}
	


	public function imgUpload(Request $request){

	      $userDataDB = new userData();
		
			
	
		$userDataDB['first'] = $request['first'];
		$userDataDB['last'] = $request['last'];
		$userDataDB['email'] = $request['email'];
		$userDataDB['notes'] = $request['notes'];
		$userDataDB['imgName'] = $request['imgName'];
			
	

		if($request['img']){
		
			$file =  $request['img'];
			
			
		$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $file));

			Storage::disk('public')->put($request['imgName'], $data);
		}



		$userDataDB->save();

		
	//	return redirect()->route('uploadImgCropindex');
		//  return redirect('/uploadImgCrop');

	} /* end of a imgUpload function*/





	public function editImg(Request $request){
		
		
		 $userDataDB = new userData();

					
		 $edituserData = $userDataDB::where(email == $request['email'])->first();
		return $edituserData;
		
	}

	


	public function testingPopulate(){

		

		$userDataDB = new userData();

		$userDataDB['first'] = "test";
		$userDataDB['last'] = "test";
		$userDataDB['email'] = "test";
		$userDataDB['notes'] = "test";
		$userDataDB['imgName'] = "test";
		$userDataDB->save();
	}





	public function getUserImage($filename){

			//$filename = "tigercat";
			$file = Storage::disk('public')->get($filename);
			
			return new Response($file, 200);  
	}




	public function getUserByemail(Request $request){

			$userDataDB = new userData();

			$first = $request['first'];
			$email = $request['email'];
			
		

			$data = $userDataDB::where('first', $first)->Where('email', '=', $email)->get();	
			
			return $data;

	}







	public function getUserByemailGetReq(){

			$userDataDB = new userData();

			$first = "Marko";
			
			$data = $userDataDB::where('first', $first)->first();
			
	
			echo "<pre>";
			var_dump($data);
			echo "</pre>";

	}







	

	public function imgUploadEdit(Request $request){
	

			//return "*** imgUploadEdit controller connection works ***";

			$userDataDB = new userData();
			
			
			$userDataDB::where('email', $request['currEmail'])->update([
				'first' => $request['first'],
				'last' => $request['last'],
				'email' => $request['email'],		
				'notes' => $request['notes'],	
				'imgName' => $request['imgName']	
						
			]);
			
			
			if($request['img']){
		
				$file =  $request['img'];
			
			
			$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $file));

				Storage::disk('public')->put($request['imgName'], $data);
			}

		

			//return "check out ...";
	}














	public function testingUpdatePopulate(){

		$data ="markomarkomarko";

		$userDataDB = new userData();
			$userDataDB::where('email', "tiberb@gmail.com")->update([
				'first' => $data,
				'last' => "test data",
				'email' => "test@gmail.com",		
				'notes' => "test data",	
				'imgName' => "test"	
						
			]);

	}
}

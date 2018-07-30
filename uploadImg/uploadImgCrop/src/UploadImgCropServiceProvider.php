<?php

namespace uploadImgCrop;

use Illuminate\Support\ServiceProvider;	

class UploadImgCropServiceProvider extends ServiceProvider
{
	

	public function boot() 
	{

		//Schema::defaultStringLength(191);		

		$this->loadRoutesFrom(__DIR__ . '/routes/web.php');
		$this->loadViewsFrom(__DIR__ . '/./../resources/views', 'upladImg');
	}


	public function register()
	{
		$this->registerPublishables();		
	}


	private function registerPublishables()
	{
		$basePath = dirname(__DIR__);
		
		$arrPublishable = [
			'migrations' => [
				"$basePath/publishables/database/migrations/" => database_path('migrations'),		
			]		
		];

		foreach ($arrPublishable as $group => $paths) {
			
			$this->publishes($paths, $group);			
		}

						
	}


}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('userData', function(Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
	    $table->string('first');
	    $table->string('last');
	    $table->string('email');
	    $table->string('notes');
	    $table->string('imgName'); 	
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('userData');
    }
}

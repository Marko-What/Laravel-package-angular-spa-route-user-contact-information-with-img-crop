<?php
namespace uploadImgCrop\Http\Controllers;


use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class userData extends Authenticatable
{
    use Notifiable;

  protected $table = 'userData';

  protected $fillable = [
        'first', 'last', 'email', 'notes', 'imgName'
    ];

}

<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Text extends Model
{
    //
    use SoftDeletes;
    protected $table = "texts";
    protected $fillable = [];
    protected $hidden = [];

    public function textable()
    {
        // -- Esto es necesario para que reconozca el tipo de relacion
        return $this->morphTo();
    }

    public function galleries()
    {
        return $this->morphMany('App\Http\Entities\Gallery', 'imageable');
    }
}

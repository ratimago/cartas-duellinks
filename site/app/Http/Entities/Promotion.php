<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Promotion extends Model
{
    use SoftDeletes;
    protected $table    = 'promotions';
    protected $fillable = ['id', 'title', 'subtitle', 'active', 'meta_description'];
    protected $hidden   = [];

    public function galleries()
    {
        return $this->morphMany('App\Http\Entities\Gallery', 'imageable');
    }
}

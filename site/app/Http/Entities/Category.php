<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{

    use SoftDeletes;
    protected $table    = 'categories';
    protected $fillable = ['id', 'slug', 'name', 'title', 'meta_description'];
    protected $hidden   = [];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function articles(){
        return $this->hasMany('App\Http\Entities\Article');
    }

}

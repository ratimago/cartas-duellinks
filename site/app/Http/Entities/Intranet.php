<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Intranet extends Model
{

    //use SoftDeletes;
    //protected $table = 'trucks';
    //protected $fillable = ['id', 'slug', 'name_image_background', 'name_image_truck', 'name_logo',
    //    'title', 'text', 'subtitle', 'loading_capacity', 'technology', 'characteristics', 'meta_description', 'name',
    //    'name_profile', 'file_catalog', 'file_datasheet'];
    //protected $hidden = [];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function galleries()
    {
        return $this->morphMany('App\Http\Entities\Gallery', 'imageable');
    }



}

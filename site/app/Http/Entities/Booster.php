<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Booster extends Model
{

    use SoftDeletes;
    protected $table = 'boosters';
    protected $fillable = ['id',
        'slug',
        'name',
        'meta_descripcion',
        'image',
        'banner_image',
        'minibox',
        'available',
        'available_date'
    ];

    protected $hidden = [];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function galleries()
    {
        return $this->morphMany('App\Http\Entities\Gallery', 'imageable');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function quotations()
    {
        return $this->belongsToMany('App\Http\Entities\Quotation')->withTimestamps();
    }

}

<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Block extends Model
{

    use SoftDeletes;
    protected $table = 'blocks';
    protected $fillable = ['id', 'name', 'title', 'subtitle', 'text', 'staticmenu_id', 'slug', 'position', 'meta_description'];
    protected $hidden = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function staticmenu()
    {
        return $this->belongsTo('App\Http\Entities\Staticmenu', 'staticmenu_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function galleries()
    {
        return $this->morphMany('App\Http\Entities\Gallery', 'imageable');
    }

    public function texts()
    {
        return $this->morphMany('App\Http\Entities\Text', 'textable');
    }
}

<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gallery extends Model
{
    use SoftDeletes;
    protected $table = 'galleries';
    protected $fillable = ['id', 'name', 'position', 'active', 'directory', 'imageable_id', 'imageable_type'];
    protected $hidden = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function imageable()
    {
        return $this->morphTo();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function elements()
    {
        return $this->HasMany('App\Http\Entities\GalleryElements', 'gallery_id');
    }
}

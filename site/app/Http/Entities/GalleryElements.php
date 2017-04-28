<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GalleryElements extends Model
{
    use SoftDeletes;
    protected $table    = 'gallery_elements';
    protected $fillable = ['id', 'value', 'type', 'title', 'subtitle', 'link_text', 'link_href',
        'position', 'gallery_id', 'background'];
    protected $hidden   = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function gallery()
    {
        return $this->belongsTo('App\Http\Entities\Gallery', 'gallery_id');
    }
}

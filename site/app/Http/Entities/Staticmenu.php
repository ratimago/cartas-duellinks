<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Staticmenu extends Model
{
    use SoftDeletes;
    // Nota: agregar slug y meta_description a la base y a los modelos
    protected $table    = 'staticmenus';
    protected $fillable = ['id', 'name', 'title', 'subtitle', 'text', 'slug', 'meta_description'];
    protected $hidden   = [];

    /**
     * @return mixed
     */
    public function blocks(){
        return $this->hasMany('App\Http\Entities\Block');
    }
}

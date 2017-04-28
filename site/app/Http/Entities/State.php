<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected $table    = 'states';
    protected $fillable = ['id', 'clave', 'name', 'slug'];
    protected $hidden   = [];

    public function dealerships(){
        return $this->hasMany('App\Http\Entities\Dealership');
    }

    public function jobsmarket(){
        return $this->hasMany('App\Http\Entities\JobMarket');
    }

    public function quotations(){
        return $this->hasMany('App\Http\Entities\Quotation');
    }
}

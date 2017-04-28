<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class JobMarket extends Model
{
    use SoftDeletes;
    protected $table    = 'jobs_market';
    protected $fillable = ['id', 'name', 'age', 'phone', 'email', 'address', 'city',
        'state_id', 'change_home', 'civil_status', 'experience', 'reason_work', 'gclid'];
    protected $hidden   = [];

    public function state()
    {
        return $this->belongsTo('App\Http\Entities\State');
    }
}

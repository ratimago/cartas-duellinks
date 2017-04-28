<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Quotation extends Model
{
    use SoftDeletes;
    protected $table    = 'quotations';
    protected $fillable = ['id', 'autoresponder_id', 'email', 'name', 'state_id',
        'area_code', 'phone', 'company_name', 'bussiness_office', 'bussiness_type',
        'material_transport', 'load_weight', 'message_text', 'other_office', 'other_material', 'gclid'];
    protected $hidden   = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function state()
    {
        return $this->belongsTo('App\Http\Entities\State');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function autoresponder()
    {
        return $this->belongsTo('App\Http\Entities\Autoresponder');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function trucks(){
        return $this->belongsToMany('App\Http\Entities\Truck')->withTimestamps();
    }
}

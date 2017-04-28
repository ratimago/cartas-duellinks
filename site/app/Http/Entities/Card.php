<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Card extends Model
{
    use SoftDeletes;
    protected $table    = 'Cards';
    protected $fillable = ['id', 'booster_id', 'name', 'type_monster_card', 'type_magic_card_trap', 'text', 'image'];
    protected $hidden   = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function booster()
    {
        return $this->belongsTo('App\Http\Entities\Booster');
    }
}

<?php

namespace App\Http\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Autoresponder extends Model
{
    use SoftDeletes;
    protected $table    = 'autoresponders';
    protected $fillable = ['id', 'section', 'departament', 'issue', 'addressee_mail', 'text_button', 'message_text', 'slug'];
    protected $hidden   = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function quotations(){
        return $this->hasMany('App\Http\Entities\Quotation');
    }
}

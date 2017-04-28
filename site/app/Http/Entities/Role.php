<?php namespace App\Http\Entities;

class Role extends \Eloquent
{
    protected $table    = 'roles';
    protected $fillable = ['name', 'type'];
}

<?php namespace App\Http\Entities;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class User extends Model implements AuthenticatableContract, AuthorizableContract, CanResetPasswordContract
{
    use SoftDeletes;
    use Authenticatable, Authorizable, CanResetPassword;

    protected $table    = 'users';
    protected $fillable = ['role_id', 'name', 'email', 'password', 'active'];
    protected $hidden   = ['password', 'remember_token'];

    /*
     * ============== Tipo de Usuario ==============
     */
    public function role()
    {
        return $this->belongsTo('App\Http\Entities\Role');
    }

    /*
     * ============== Encriptar contraseña ==============
     */
    public function setPasswordAttribute($value)
    {
        !empty($value)
            ? $this->attributes['password'] = bcrypt($value)
            : null
        ;
    }

}

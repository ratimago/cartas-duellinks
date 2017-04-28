<?php namespace App\Http\Backend\Requests;

use Illuminate\Routing\Route;

class UserRequest extends Request
{
    protected $rules = [
        'name'      => 'required|max:255',
        'email'     => 'required|email|max:255|unique:users',
        'password'  => 'required|confirmed|min:4',
        'role_id'   => 'required'
    ];

    public function rules(Route $route)
    {
        $id = current($route->parametersWithoutNulls());

        if($id > 0)
        {
            $this->rules['email']       = 'required|email|max:255|unique:users,email,' . $id;
            $this->rules['password']    = 'confirmed|min:4';
        }

        return $this->rules;
    }

    public function authorize()
    {
        return true;
    }
} 
<?php namespace App\Http\Frontend\Requests;

use Illuminate\Routing\Route;

class FormRequest extends Request
{
    protected $rules = [
        'nombres'               => 'required|max:255',
        'apellido'              => 'required|max:255',
        'correo'                => 'required|email',
        'telefono'              => 'max:25',
        'sucursal_de_interes'   => 'required',
    ];

    public function rules(Route $route)
    {
        return $this->rules;
    }

    public function authorize()
    {
        return true;
    }
} 
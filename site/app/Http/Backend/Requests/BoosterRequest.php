<?php

namespace App\Http\Backend\Requests;

use App\Http\Backend\Requests\Request;

class BoosterRequest extends Request
{
    protected $rules = [
        'imagencamion'     => 'mimes:jpg,jpeg,png,gif|max:5000',
        'imagenfondo'          => 'mimes:jpg,jpeg,png,gif|max:5000',
        'logotipo'                 => 'mimes:jpg,jpeg,png,gif|max:5000',
        //'title'                     => 'required|max:255',
        'subtitle'                  => 'max:255',
        //'loading_capacity'          => 'required|min:4',
        //'technology'                => 'required|max:255',
        //'characteristics'           => 'required',
        'name'                      => 'required|max:255',
        'meta_description'          => 'max:255',
        'imagenperfil'              => 'mimes:jpg,jpeg,png,gif|max:5000',
        'file_catalog'              => 'mimes:pdf,xls,word,txt,jpg,jpeg,png,gif',
        'file_datasheet'            => 'mimes:pdf,xls,word,txt,jpg,jpeg,png,gif',
    ];
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        //dd($this->all());
        return $this->rules;
    }
}

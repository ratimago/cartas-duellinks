<?php

namespace App\Http\Backend\Requests;

use App\Http\Backend\Requests\Request;

class ArticleRequest extends Request
{

    protected $rules = [
        'title'         => 'required|max:255',
        'subtitle'      => 'max:255',
        'text'          => 'required|min:100',
        'icono'         => 'mimes:jpg,jpeg,png,gif|max:5000',
        'category_id'   => 'required'
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
        return $this->rules;
    }
}

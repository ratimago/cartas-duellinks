<?php

namespace App\Http\Backend\Requests;

use App\Http\Backend\Requests\Request;

class StaticmenuRequest extends Request
{
    protected $rules = [
        'name'      => 'required|max:255',
        'title'     => 'max:255',
        'subtitle'  => 'min:4',
        'text'      => 'min:50'
/*        'name_block'=>'required|max:255',
        'title_block'=>'min:5',
        'subtitle_block'=>'min:5',
        'text_block' =>'min:50'*/
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

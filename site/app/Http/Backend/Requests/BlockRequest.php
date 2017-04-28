<?php

namespace App\Http\Backend\Requests;

use App\Http\Backend\Requests\Request;

class BlockRequest extends Request
{
    protected $rules = [
        'title'         => 'max:255',
        'subtitle'      => 'max:255',
        'text'          => 'min:4',
        'name'          => 'required|max:255',
        'staticmenu_id' => 'required'
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

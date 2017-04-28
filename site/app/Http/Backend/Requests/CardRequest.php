<?php

namespace App\Http\Backend\Requests;

use App\Http\Backend\Requests\Request;

class CardRequest extends Request
{
    protected $rules = [
        #'address'           => 'required|max:255',
        #'coordinates'       => 'required|max:255',
        #'phones'            => 'required|min:7',
        #'state_id'          => 'required',
        #'title'             => 'max:255',
        #'type_dealership'   => 'required'
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

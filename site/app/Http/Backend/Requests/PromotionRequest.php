<?php

namespace App\Http\Backend\Requests;

use App\Http\Backend\Requests\Request;

class PromotionRequest extends Request
{
    protected $rules = [
        'title'             => 'required|max:255',
        'active'            => 'required',
        'meta_description'  => 'max:230'
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

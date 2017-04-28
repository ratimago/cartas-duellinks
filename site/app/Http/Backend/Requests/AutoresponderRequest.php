<?php

namespace App\Http\Backend\Requests;

use App\Http\Backend\Requests\Request;

class AutoresponderRequest extends Request
{
    protected $rules = [
        'issue'             => 'required|max:255',
        'addressee_mail'    => 'required',
        'text_button'       => 'min:4|max:255',
        'message_text'      => 'required',
        'departament'       => 'required',
        'slug'              => 'max:255',
        'section'           => 'max:255'
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

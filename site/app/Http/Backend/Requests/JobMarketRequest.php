<?php

namespace App\Http\Backend\Requests;

use App\Http\Backend\Requests\Request;

class JobMarketRequest extends Request
{
    protected $rules = [
        'name'          => 'required|max:255',
        'age'           => 'required',
        'phone'         => 'required|min:4|max:255',
        'email'         => 'required|max:255|email',
        'address'       => 'required|max:255',
        'city'          => 'required|min:4|max;255',
        'state_id'      => 'required',
        'change_home'   => 'required|max:2',
        'civil_status'  => 'required|min:4',
        'experience'    => 'required|max:5',
        'reason_work'   => 'required|min:5',
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

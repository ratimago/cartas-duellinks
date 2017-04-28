<?php

namespace App\Http\Frontend\Requests;

use App\Http\Frontend\Requests\Request;

class JobMarketRequest extends Request
{
    protected $rules = [
        'name'          => 'required|max:255',
        'age'           => '',
        'phone'         => 'required|min:4|max:255',
        'email'         => 'required|max:255|email',
        'address'       => 'max:255',
        'city'          => 'min:4|max:255',
        'state_id'      => '',
        'change_home'   => 'max:2',
        'civil_status'  => 'min:4',
        'experience'    => 'min:5',
        'reason_work'   => 'min:5',
        'g-recaptcha-response' => 'required|recaptcha',
        'gclid' => 'max:255'
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

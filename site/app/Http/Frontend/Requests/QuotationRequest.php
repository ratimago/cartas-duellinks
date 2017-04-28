<?php

namespace App\Http\Frontend\Requests;

use App\Http\Frontend\Requests\Request;

class QuotationRequest extends Request
{
    protected $rules = [
        'autoresponder_id' => 'required',
        'email' => 'required|email|max:255',
        'name' => 'required|min:4',
        'state_id' => '',
        //'area_code' => 'required|min:3',
        'phone' => 'required',
        'company_name' => 'max:255',
        'bussiness_office' => 'max:255',
        'bussiness_type' => 'max:255',
        'material_transport' => 'max:255',
        'load_weight' => 'max:255',
        'message_text' => 'min:4',
        'g-recaptcha-response' => 'required|recaptcha',
        'other_office' => 'max:255',
        'other_material' => 'max:255',
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

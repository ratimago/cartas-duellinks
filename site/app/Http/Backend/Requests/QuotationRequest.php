<?php

namespace App\Http\Backend\Requests;

use App\Http\Backend\Requests\Request;

class QuotationRequest extends Request
{
    protected $rules = [
        'autoresponder_id'      => 'required',
        'email'                 => 'required|email|max:255',
        'name'                  => 'required|min:4',
        'state_id'              => 'required',
        'area_code'             => 'required|min:3',
        'phone'                 => 'required',
        'company_name'          => 'required|max:255',
        'bussiness_office'      => 'max:255',
        'bussiness_type'        => 'min:4|max:255',
        'material_transport'    => 'max:255',
        'load_weight'           => 'required|max:255',
        'message_text'               => 'required|min:4',
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

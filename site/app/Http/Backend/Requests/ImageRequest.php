<?php namespace App\Http\Backend\Requests;


class ImageRequest extends Request
{
    protected $rules = [
        'link_href'      => 'url'
    ];

    public function rules()
    {
        return $this->rules;
    }

    public function authorize()
    {
        return true;
    }
} 
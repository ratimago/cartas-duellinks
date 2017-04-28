<?php
namespace App\Http\Backend\Helpers;

use Illuminate\Support\Facades\Validator;
class ContactFormValidator {

    public static $CAPTCHA_GOOGLE_NAME = 'g-recaptcha-response';
    protected static $RULES = [
        'email'     => 'email',
    ];
    protected static $ERRORS;

    protected static $MESSAGES = [
        'required'  => 'Este campo es obligatorio',
        'recaptcha' => 'Validación de Captcha fallida',
        'in'        => 'Seleccione un elemento de la lista',
        'email'     => 'Ingrese una dirección de correo electrónico',
    ];

    public static function passes($inputs,$data) {
        $rules = [];
        foreach($inputs as $input) {
            $slug = ($input->type == 'captcha') ? ContactFormValidator::$CAPTCHA_GOOGLE_NAME : $input->slug;
            $r = ContactFormValidator::getRules($input);
            if(!empty($r)) $rules[$slug] = $r;
        }

        $data = ContactFormValidator::getData($inputs,$data);

        $validator = Validator::make($data,$rules,ContactFormValidator::$MESSAGES);
        $ok = $validator->passes();

        if(!$ok) ContactFormValidator::$ERRORS = $validator->errors();

        return $ok;
    }


    public static function getData($inputs,$rawData) {
        $data = [];
        foreach($inputs as $input) {
            $slug = ($input->type == 'captcha') ? ContactFormValidator::$CAPTCHA_GOOGLE_NAME : $input->slug;
            $data[$slug] = array_key_exists($slug,$rawData) ? $rawData[$slug] : '';
        }
        return $data;
    }

    private static function getRules($input) {
        $rules = [];

        if($input->required) $rules[] = 'required';

        if(array_key_exists($input->type,ContactFormValidator::$RULES))
            $rules[] = ContactFormValidator::$RULES[$input->type];

        $options = json_decode($input->options);
        /*   if($input->type == 'select') {
               $rules[] = 'in:'.implode(',',$options);
           }
        */

        if($input->type == 'captcha') {
            $rules[] = "recaptcha:{$options[1]}";
        }

        return $rules;
    }

    public static function getErrors() {
        return ContactFormValidator::$ERRORS;
    }

}
<?php namespace App\Http\Backend\Helpers;

use App\Http\Backend\Repositories\InputRepo;
use Illuminate\Support\Facades\Validator;

class CustomValidator {
    protected $separator = ',';

    public function emailList($attribute,$value,$parameters) {
        $array = explode($this->separator,$value);

        if(is_array($array) && !empty($array)){
            foreach($array as $email) {
                $data = ['field'=>trim($email)];
                $validator = Validator::make($data,['field'=>'email']);
                if($validator->fails()) return false;
            }
            return true;
        } else return false;
    }

    public function optionList($attribute,$value,$parameters) {
        $array = explode($this->separator,$value);

        if(is_array($array) && !empty($array)){
            return true;
        } else return false;
    }

    public function googleCaptchaKeys($attribute,$value,$parameters) {
        $array = explode(InputRepo::$SEPARATOR,$value);
        if(is_array($array) && count($array) == 2){
            return true;
        } else return false;
    }
}
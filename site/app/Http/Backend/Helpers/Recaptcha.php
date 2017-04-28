<?php namespace App\Http\Backend\Helpers;

class Recaptcha {

    protected $url = "https://www.google.com/recaptcha/api/siteverify";

    public function validate($attribute,$value,$parameters) {
        $secret = urlencode($parameters[0]);
        $response = urlencode($value);
        $data = "secret={$secret}&response={$response}";

        // abrimos la sesión cURL
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,$this->url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec ($ch);
        curl_close ($ch);

        $result = json_decode($result);
        return $result->success;
    }
}
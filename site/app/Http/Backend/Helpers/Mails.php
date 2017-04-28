<?php namespace App\Http\Backend\Helpers;

class Mails
{
    /*
     * ================ Enviar nueva contraseña ================
     */
    public function sendMailPassword($user, $password)
    {
        \Mail::send('Backend.Auth.recovery', ['name' => $user->name, 'password' => $password], function ($message) use ($user) {
            $message->subject('Generación de nueva contraseña.');
            $message->from('no-replay@isuzu.com', 'Isuzu Motors México');
            $message->to($user->email, $user->name);
        });

        return \Lang::get('passwords.sendPassword');
    }
}
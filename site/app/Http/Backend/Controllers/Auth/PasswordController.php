<?php

namespace App\Http\Backend\Controllers\Auth;

use App\Http\Backend\Helpers\Mails;
use App\Http\Backend\Repositories\UserRepo;
use App\Http\Backend\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
// Marcaba Error momentaneo
use Illuminate\Http\Request;

class PasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Create a new password controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /*
     * ================ Recuperar contraseña ================
     */
    public function getEmail()
    {
        return view('Backend.Auth.password');
    }

    /*
     * ================ Generar nueva contraseña ================
     */
    public function resetForEmail(Request $request, UserRepo $user, Mails $mail)
    {
        $this->validate($request, ['email' => 'required|email']);

        $data = $user->findField('email', $request->get('email'));

        if(!empty($data))
        {
            $password       = str_random(10);
            $data->password = $password;
            $data->save();
            return redirect()->back()->with('message', $mail->sendMailPassword($data, $password));
        }
        else
        {
            return redirect()->back()->with('error', \Lang::get('passwords.email'));
        }

    }
}

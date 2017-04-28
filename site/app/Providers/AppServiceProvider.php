<?php

namespace App\Providers;

//use App\Http\Entities\GalleryElements;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Validator::extend('email_list','App\Http\Backend\Helpers\CustomValidator@emailList');
        Validator::extend('option_list','App\Http\Backend\Helpers\CustomValidator@optionList');
        Validator::extend('google_captcha_keys','App\Http\Backend\Helpers\CustomValidator@googleCaptchaKeys');
        Validator::extend('recaptcha','App\Http\Backend\Helpers\Recaptcha@validate');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}

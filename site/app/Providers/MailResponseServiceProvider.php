<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class MailResponseServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        \App::bind('MailsFrontend', function()
        {
            return new \App\Http\Frontend\Helpers\Mails\MailsFrontend();
        });
    }
}

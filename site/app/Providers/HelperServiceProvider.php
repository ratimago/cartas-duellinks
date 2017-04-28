<?php namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class HelperServiceProvider extends ServiceProvider
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
        $this->app->bind('Util', function()
        {
            return new \App\Http\Backend\Helpers\Util\Util;
        });

		$this->app->bind('Frontend', function()
		{
			return new \App\Http\Frontend\Helpers\Util\Frontend;
		});
	}

}
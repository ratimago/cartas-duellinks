<?php

namespace App\Providers;

use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\SomeEvent' => [
            'App\Listeners\EventListener',
        ],
        'App\Http\Backend\Events\Category' => [
            'App\Http\Backend\Listeners\Category\DeleteImage',
        ],
    ];

    /**
     * The subscriber classes to register.
     *
     * @var array
     */
    protected $subscribe = [
        //Categorías
        'App\Http\Backend\Listeners\Category\DeleteListener',
        //Artículos
        'App\Http\Backend\Listeners\Article\SaveListener',
        'App\Http\Backend\Listeners\Article\DeleteListener',
        //Truck
        'App\Http\Backend\Listeners\Truck\SaveListener',
        'App\Http\Backend\Listeners\Truck\DeleteListener',
        //Promotion
        'App\Http\Backend\Listeners\Promotion\SaveListener',
        'App\Http\Backend\Listeners\Promotion\DeleteListener',
        //Block
        'App\Http\Backend\Listeners\Block\SaveListener',
        'App\Http\Backend\Listeners\Block\DeleteListener',
    ];

    /**
     * Register any other events for your application.
     *
     * @param  \Illuminate\Contracts\Events\Dispatcher  $events
     * @return void
     */
    public function boot(DispatcherContract $events)
    {
        parent::boot($events);

        //
    }
}

<?php namespace App\Http\Frontend\Helpers\Util;

use Illuminate\Support\Facades\Facade;

class UtilFacade extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor() { return 'Frontend'; }
}
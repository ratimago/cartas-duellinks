<?php

namespace App\Http\Frontend\Helpers\Mails;

use Illuminate\Support\Facades\Facade;

class MailsFacade extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor() { return 'Mails'; }
}

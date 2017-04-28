<?php

namespace App\Http\Frontend\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /*
     * ================== Página no encontrada ==================
     */

    public function __construct()
    {
        \Session::put(['intranet' => false]);
    }

    public function notFoundUnless($value)
    {

        return !$value ? abort(404) : $value;
    }
}

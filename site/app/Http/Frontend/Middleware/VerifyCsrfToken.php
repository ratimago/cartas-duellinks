<?php

namespace App\Http\Frontend\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        //
        'sendExpress',
        'mcPanel/clinicas/reorder',
        'mcPanel/testimoniales/reorder'
    ];
}

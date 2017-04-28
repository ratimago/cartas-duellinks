<?php

namespace App\Http\Backend\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'mcPanel/galeria/ack/*',
        'mcPanel/galeria/update',
        'mcPanel/galeria/order',
        'sendExpress',
        'mcPanel/clinicas/reorder',
        'mcPanel/testimoniales/reorder'
    ];
}

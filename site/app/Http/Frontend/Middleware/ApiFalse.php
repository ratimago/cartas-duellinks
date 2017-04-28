<?php

namespace App\Http\Frontend\Middleware;

use Closure;

class ApiFalse
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");

        // ALLOW OPTIONS METHOD
        $headers = [
            'Access-Control-Allow-Methods'=> 'POST, GET, OPTIONS, PUT, 
DELETE',
            'Access-Control-Allow-Headers'=> 'Content-Type, X-Auth-Token, 
Origin',
            'Access-Control-Allow-Origin' =>  '*',
        ];

            $response = $next($request);
            foreach($headers as $key => $value)
                $response->header($key, $value);
            return $response;

    }
}
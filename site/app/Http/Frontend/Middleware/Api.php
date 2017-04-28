<?php

namespace App\Http\Frontend\Middleware;

use Closure;

class Api
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
        header("Content-Type: application/json");
        $header = $request->header('Authorization');

        // ALLOW OPTIONS METHOD
        $headers = [
            'Access-Control-Allow-Methods'=> 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers'=> 'Content-Type, X-Auth-Token, Origin',
            'Access-Control-Allow-Origin' =>  'http://moyolocal.euac',
        ];
        if($header == 'X1N/aYfjiyADfhTkyeZJn8jal7wDII5DGUEFLUgMHq.AYFPDK'){
            $response = $next($request);
            foreach($headers as $key => $value)
                $response->header($key, $value);
            return $response;
        }
        else{
            //return $header;
            return \Response::make('error', 403, $headers);
        }
    }
}

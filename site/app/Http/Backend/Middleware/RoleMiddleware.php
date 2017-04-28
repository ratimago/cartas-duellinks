<?php namespace App\Http\Backend\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;

class RoleMiddleware {

	/**
	 * The Guard implementation.
	 *
	 * @var Guard
	 */
	protected $auth;

	/**
	 * Create a new filter instance.
	 *
	 * @param  Guard  $auth
	 * @return void
	 */
	public function __construct(Guard $auth)
	{
		$this->auth = $auth;
	}

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next, $role)
	{
		
		if(!in_array($this->auth->user()->role_id, explode('|', $role)))
		//if($this->auth->user()->role_id =! 1)
		{
			return abort(401);
		}

		return $next($request);
	}

}

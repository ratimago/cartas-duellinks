<?php

return [

	/*
	|--------------------------------------------------------------------------
	| Menu
	|--------------------------------------------------------------------------
	|
	| The following language lines are used by the paginator library to build
	| the simple pagination links. You are free to change them to anything
	| you want to customize your views to better match your application.
	|
	*/

    /*
     * ================ Backend ================
     */
	'sections'  => \DB::table('sections')->orderBy('name', 'asc')->get(),

    /*
     * ================ Frontend ================
     */
    'bath'      => \DB::table('categories')->where('parent_id', 2)->where('block', false)->orderBy('name', 'asc')->get(),

    'bed' => \DB::table('categories')
        ->where(function($query){
            $query->whereNull('parent_id');
            $query->orWhere('parent_id', 3);
        })
        ->where('hide', false)
        ->where('block', false)
        ->orderBy('name', 'asc')
        ->get(),

    'table'     => \DB::table('categories')->where('parent_id', 4)->where('block', false)->orderBy('name', 'asc')->get()


];

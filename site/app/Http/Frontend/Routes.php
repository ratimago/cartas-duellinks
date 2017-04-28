<?php
Route::group(['namespace' => 'Frontend\Controllers'], function () {
    /*
     * ====================== Home ======================
     */
    Route::get('/', ['as' => 'home', 'uses' => 'HomeController@index']);
    Route::get('gracias', ['as' => 'thanks', 'uses' => 'HomeController@thanks']);

    //Intranet
    Route::group(['prefix' => 'isuzunet'], function(){
        Route::get('',['as' => 'intranet.index', 'uses' => 'IntranetController@index']);
        Route::post('/login',['as' => 'intranet.login','uses' => 'IntranetController@login']);
        Route::get('/panel',['as' => 'intranet.panel','middleware' => 'auth','uses' => 'IntranetController@panel']);
        Route::get('/salir',['as' => 'intranet.panel','middleware' => 'auth','uses' => 'IntranetController@salir']);
    });

    /**
     *Camiones
     */
    Route::group(['prefix' => 'camiones'], function () {
        Route::get('', ['as' => 'truck', 'uses' => 'TruckController@index']);
        Route::get('/{slug}', ['as' => 'truck.getTruck', 'uses' => 'TruckController@getTruck']);
        Route::get('/{slug}/ficha-tecnica', ['as' => 'truck.getFichaTecnica', 'uses' => 'TruckController@getFichaTecnica']);
        Route::get('/{slug}/catalogo', ['as' => 'truck.getCatalogo', 'uses' => 'TruckController@getCatalogo']);
    });

    /**
     * Aplicaciones
     */
    Route::group(['prefix' => 'aplicaciones'], function () {
        Route::get('', ['as' => 'applications', 'uses' => 'HomeController@applications']);
        Route::get('/{slug}', ['as' => 'applications.section', 'uses' => 'HomeController@applicationsSection']);
    });

    /**
     * Promociones
     */
    Route::get('promociones', ['as' => 'promotion', 'uses' => 'HomeController@promotions']);

    /**
     * Encuentra tu Concesionario
     */
    Route::group(['prefix' => 'concesionarios'], function () {
        Route::get('', ['as' => 'dealership', 'uses' => 'DealershipController@index']);
        Route::get('/{slug}', ['as' => 'dealership.getDealership', 'uses' => 'DealershipController@getDealership']);
    });
    /**
     * Centros de Servicio
     */
    Route::group(['prefix' => 'centros-de-servicio'], function () {
        Route::get('', ['as' => 'centerservice', 'uses' => 'CenterServiceController@index']);
        Route::get('/{slug}', ['as' => 'centerservice.service', 'uses' => 'CenterServiceController@getService']);
    });

    /**
     * Blog
     */
    Route::group(['prefix' => 'blog'], function () {
        Route::get('', ['as' => 'blog', 'uses' => 'CategoryController@index']);
        Route::get('{category}', ['as' => 'blog.articles', 'uses' => 'ArticleController@index']);
        Route::get('{category}/{article}', ['as' => 'blog.articles.show', 'uses' => 'ArticleController@show']);
    });

    /**
     * Contacto | Financiamiento | Solicita tu cotizacion
     */
    Route::group(['prefix' => 'cotizaciones'], function () {
        Route::get('{departament}', ['as' => 'quotation', 'uses' => 'QuotationController@index']);
        Route::post('enviar', ['as' => 'quotation.create', 'uses' => 'QuotationController@create']);
    });

    /**
     * Bolsa de Trabajo
     */
    Route::group(['prefix' => 'bolsa-trabajo'], function () {
        Route::get('', ['as' => 'trabajo', 'uses' => 'JobMarketController@index']);
        Route::post('enviar', ['as' => 'trabajo.create', 'uses' => 'JobMarketController@create']);
    });

    /**
     * Aviso de Privacidad | Términos y Condiciones | PostVenta | Acerca de | Servicio..
     */
    Route::get('{slug}', 'HomeController@section');
    Route::get('{slug}/{subsection}/{subsection_service?}', 'HomeController@subsection');
});

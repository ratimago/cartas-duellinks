<?php

Route::group(['namespace' => 'Backend\Controllers', 'prefix' => 'mcPanel', 'middle'], function () {
    /*
     * ====================== Acceso al Administrador ======================
     */
    Route::group(['namespace' => 'Auth'], function () {
        Route::get('login', ['as' => 'user.login', 'uses' => 'AuthController@index']);
        Route::post('access', ['as' => 'user.access', 'uses' => 'AuthController@postLogin']);
        Route::get('logout', ['as' => 'user.logout', 'uses' => 'AuthController@getLogout']);
        Route::get('recovery', ['as' => 'user.recovery', 'uses' => 'PasswordController@getEmail']);
        Route::post('reset', ['as' => 'user.reset', 'uses' => 'PasswordController@resetForEmail']);
    });

    /*
     * ====================== Administrador ======================
     */
    Route::group(['middleware' => ['Auth.Backend']], function () {
        /*
         * ====================== Dashboard ======================
         */
        Route::get('/', ['as' => 'dashboard', 'uses' => 'DashboardController@index']);

        /**
         * Categorías
         */
        Route::Controller('categorias', 'CategoryController',
            [
                'getId' => 'categories.id',
                'getIndex' => 'categories',
                'getRegistro' => 'categories.edit',
                'postUpdate' => 'categories.update',
                'anyEliminar' => 'categories.delete',
                'anyFiltrar' => 'categories.filter',
                'postActive' => 'categories.active',
                'getDownload' => 'categories.excel'
            ]
        );


        /**
         * Artículos
         */
        Route::Controller('articulos', 'ArticleController',
            [
                'getId' => 'articles.id',
                'getIndex' => 'articles',
                'getRegistro' => 'articles.edit',
                'postUpdate' => 'articles.update',
                'anyEliminar' => 'articles.delete',
                'anyFiltrar' => 'articles.filter',
                'postActive' => 'articles.active',
                'postImages' => 'articles.images',
                'getDownload' => 'articles.excel'
            ]
        );


        /**
         *
         */
        Route::Group(['prefix' => 'galeria'], function () {
            Route::post('actualizar-elemento/{id}', ['as' => 'gallery.elemento.actualizar', 'uses' => 'GalleryController@UpdateElement'])->where('id', '[0-9]+');
            Route::get('eliminar-elemento/{id}', ['as' => 'gallery.elemento.eliminar', 'uses' => 'GalleryController@DeleteElement'])->where('id', '[0-9]+');
            Route::post('eliminar-elemento', ['as' => 'gallery.elemento.eliminar.multi', 'uses' => 'GalleryController@DeleteElement', 'before' => 'csrf']);
            Route::post('agregar-video/{id}', ['as' => 'gallery.agregar_video', 'uses' => 'GalleryController@addVideo']);
            Route::get('ver/{id}/{type?}', ['as' => 'gallery', 'uses' => 'GalleryController@ShowGallery',])->where('id', '[0-9]+');
            Route::post('cargar/{id}', ['as' => 'gallery.cargar', 'uses' => 'GalleryController@SaveElement',])->where('id', '[0-9]+');
            Route::post('ack/{id}', ['as' => 'gallery.ack', 'uses' => 'GalleryController@ElementAck',])->where('id', '[0-9]+');
            Route::post('update', ['as' => 'gallery.update', 'uses' => 'GalleryController@UpdateElement']);
            Route::post('order', ['as' => 'gallery.order', 'uses' => 'GalleryController@setOrder',]);
            Route::get('promocion/{id}/{type}', ['as' => 'gallery.Promotion', 'uses' => 'GalleryController@mostrarPromocion']);
        });

        /**
         * Probando Mapas
         */
        Route::Controller('mapas', 'GmapsController', [
            'getIndex' => 'maps',
            'getIndexCustom' => 'maps.custom'
        ]);

        /*
         * ====================== Accesos a SuperAdmin y Admin ======================
         */
        Route::group(['middleware' => ['Auth.Backend.Role:1']], function () {
            /**
             * Usuarios
             */



            Route::Controller('usuarios', 'UsersController',
                [


                    'getId'         => 'users.id',
                    'getIndex'      => 'users',
                    'getRegistro'   => 'users.edit',
                    'postUpdate'    => 'users.update',
                    'anyEliminar'   => 'users.delete',
                    'anyFiltrar'    => 'users.filter',
                    'postActive'    => 'users.active',
                    'getDownload'   => 'users.excel'
                ]
            );

            /**
             * Camiones
             */
            Route::Controller('boosters', 'BoosterController',
                [
                    'getId' => 'boosters.id',
                    'getIndex' => 'boosters',
                    'getRegistro' => 'boosters.edit',
                    'postUpdate' => 'boosters.update',
                    'anyEliminar' => 'boosters.delete',
                    'anyFiltrar' => 'boosters.filter',
                    'postActive' => 'boosters.active',
                    'getDownload' => 'boosters.excel'
                ]
            );

            /**
             * Consecionarios
             */
            Route::Controller('cartas', 'CardController',
                [
                    'getId' => 'cards.id',
                    'getIndex' => 'cards',
                    'getRegistro' => 'cards.edit',
                    'postUpdate' => 'cards.update',
                    'anyEliminar' => 'cards.delete',
                    'anyFiltrar' => 'cards.filter',
                    'postActive' => 'cards.active',
                    'postImages' => 'cards.images',
                    'postMaps' => 'cards.maps',
                    'getDownload' => 'cards.excel'
                ]
            );

            /**
             * Promociones
             */
            Route::Controller('promociones', 'PromotionController',
                [
                    'getId' => 'promotions.id',
                    'getIndex' => 'promotions',
                    'getRegistro' => 'promotions.edit',
                    'postUpdate' => 'promotions.update',
                    'anyEliminar' => 'promotions.delete',
                    'anyFiltrar' => 'promotions.filter',
                    'postActive' => 'promotions.active',
                    'postImages' => 'promotions.images'
                ]
            );

            /**
             * Autorespuestas
             */
            Route::Controller('autorespuestas', 'AutoresponderController',
                [
                    'getId' => 'autoresponders.id',
                    'getIndex' => 'autoresponders',
                    'getRegistro' => 'autoresponders.edit',
                    'postUpdate' => 'autoresponders.update',
                    'anyEliminar' => 'autoresponders.delete',
                    'anyFiltrar' => 'autoresponders.filter',
                    'postActive' => 'autoresponders.active',
                    'postImages' => 'autoresponders.images',
                    'getDownload' => 'autoresponders.excel'
                ]
            );


            /**
             * Menús Estáticos
             */
            Route::Controller('secciones', 'StaticmenuController',
                [
                    'getId' => 'staticmenus.id',
                    'getIndex' => 'staticmenus',
                    'getRegistro' => 'staticmenus.edit',
                    'postUpdate' => 'staticmenus.update',
                    'anyEliminar' => 'staticmenus.delete',
                    'anyFiltrar' => 'staticmenus.filter',
                    'postActive' => 'staticmenus.active',
                    'postImages' => 'staticmenus.images',
                    'getDownload' => 'staticmenus.excel',
                    'getBlocks' => 'staticmenus.blocks'
                ]
            );


            /**
             * Bloques o Secciones
             */
            Route::Controller('subsecciones', 'BlockController',
                [
                    'getId' => 'blocks.id',
                    'getIndex' => 'blocks',
                    'getRegistro' => 'blocks.edit',
                    'postUpdate' => 'blocks.update',
                    'anyEliminar' => 'blocks.delete',
                    'anyFiltrar' => 'blocks.filter',
                    'postActive' => 'blocks.active',
                    'getIndexCustom' => 'blocks.custom',
                ]
            );


            /**
             * Cotizaciones
             */
            Route::Controller('cotizaciones', 'QuotationController',
                [
                    'getId' => 'quotations.id',
                    'getIndex' => 'quotations',
                    'getRegistro' => 'quotations.edit',
                    'postUpdate' => 'quotations.update',
                    'anyEliminar' => 'quotations.delete',
                    'anyFiltrar' => 'quotations.filter',
                    'postActive' => 'quotations.active',
                    'postImages' => 'quotations.images',
                    'getIndexCustom' => 'quotations.custom',
                    'getDownload' => 'quotations.excel'
                ]
            );

            /**
             * Bolsa de Trabajo
             */
            Route::Controller('bolsatrabajo', 'JobMarketController',
                [
                    'getId' => 'jobsmarket.id',
                    'getIndex' => 'jobsmarket',
                    'getRegistro' => 'jobsmarket.edit',
                    'postUpdate' => 'jobsmarket.update',
                    'anyEliminar' => 'jobsmarket.delete',
                    'anyFiltrar' => 'jobsmarket.filter',
                    'postActive' => 'jobsmarket.active',
                    'postImages' => 'jobsmarket.images',
                    'getDownload' => 'jobsmarket.excel'
                ]
            );
        });

        /*
         * ====================== Accesos a Editor de Blog ======================
         */
        Route::group(['middleware' => ['Auth.Backend.Role:2']], function () {
            // Cuantos roles hay?
        });
    });
});

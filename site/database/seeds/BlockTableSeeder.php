<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class BlockTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        /*INSERT INTO `desarro2_isuzu`.`blocks` (`id`, `slug`, `meta_description`, `staticmenu_id`, `name`, `title`, `subtitle`, `text`, `position`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('1', 'slider', '', '5', 'slider', 'slider - home', '', '', '0', '2016-11-08 23:12:44', '2016-11-08 23:12:44', NULL);
        INSERT INTO `desarro2_isuzu`.`blocks` (`id`, `slug`, `meta_description`, `staticmenu_id`, `name`, `title`, `subtitle`, `text`, `position`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('2', 'refacciones-isuzu', '', '3', 'Refacciones Isuzu', 'Refacciones Isuzu', '', '', '0', '2016-11-08 23:15:50', '2016-11-08 23:15:50', NULL);
        INSERT INTO `desarro2_isuzu`.`blocks` (`id`, `slug`, `meta_description`, `staticmenu_id`, `name`, `title`, `subtitle`, `text`, `position`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('3', 'servicios', 'Servicios', '3', 'Servicios', 'Servicios', '', '', '0', '2016-11-08 23:16:16', '2016-11-08 23:16:16', NULL);
        INSERT INTO `desarro2_isuzu`.`blocks` (`id`, `slug`, `meta_description`, `staticmenu_id`, `name`, `title`, `subtitle`, `text`, `position`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('4', 'promocion', 'Promocion', '3', 'Promocion', 'Promocion', '', '', '0', '2016-11-08 23:16:36', '2016-11-08 23:16:36', NULL);
        INSERT INTO `desarro2_isuzu`.`blocks` (`id`, `slug`, `meta_description`, `staticmenu_id`, `name`, `title`, `subtitle`, `text`, `position`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('5', 'tips-isuzu', 'Tips Isuzu', '3', 'Tips Isuzu', 'Tips Isuzu', '', '', '0', '2016-11-08 23:16:58', '2016-11-08 23:16:58', NULL);
        INSERT INTO `desarro2_isuzu`.`blocks` (`id`, `slug`, `meta_description`, `staticmenu_id`, `name`, `title`, `subtitle`, `text`, `position`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('6', 'cambiando-los-estandares-globales-y-brindando-confianza-al-m', 'Cambiando los estandares globales y brindando confianza al mundo', '1', 'Cambiando los estandares globales y brindando confianza al mundo', 'Cambiando los estandares globales y brindando confianza al mundo', '', '', '0', '2016-11-08 23:37:29', '2016-11-08 23:37:29', NULL);
        INSERT INTO `desarro2_isuzu`.`blocks` (`id`, `slug`, `meta_description`, `staticmenu_id`, `name`, `title`, `subtitle`, `text`, `position`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('7', 'nuestra-herencia', 'Nuestra Herencia', '1', 'Nuestra Herencia', 'Nuestra Herencia', '', '', '0', '2016-11-08 23:37:56', '2016-11-08 23:37:56', NULL);
        INSERT INTO `desarro2_isuzu`.`blocks` (`id`, `slug`, `meta_description`, `staticmenu_id`, `name`, `title`, `subtitle`, `text`, `position`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('8', 'historia-de-los-vehiculos-comerciales', 'Historia de los Vehiculos Comerciales', '1', 'Historia de los Vehiculos Comerciales', 'Historia de los Vehiculos Comerciales', '', '', '0', '2016-11-08 23:38:38', '2016-11-08 23:38:38', NULL);
        INSERT INTO `desarro2_isuzu`.`blocks` (`id`, `slug`, `meta_description`, `staticmenu_id`, `name`, `title`, `subtitle`, `text`, `position`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('9', 'historia-del-desarrollo-de-negocios-en-el-extranjero', 'Historia del desarrollo de Negocios en el extranjero', '1', 'Historia del desarrollo de Negocios en el extranjero', 'Historia del desarrollo de Negocios en el extranjero', '', '', '0', '2016-11-08 23:39:14', '2016-11-08 23:39:14', NULL);
        INSERT INTO `desarro2_isuzu`.`blocks` (`id`, `slug`, `meta_description`, `staticmenu_id`, `name`, `title`, `subtitle`, `text`, `position`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('10', 'isuzu-en-la-antartida', 'Isuzu en la Antártida', '1', 'Isuzu en la Antártida', 'Isuzu en la Antártida', '', '', '0', '2016-11-08 23:40:08', '2016-11-08 23:40:08', NULL);
        */

        /*INSERT INTO `desarro2_isuzu`.`galleries` (`id`, `name`, `position`, `active`, `directory`, `imageable_id`, `imageable_type`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('3', 'block-1', '1', '1', 'images/block/block-1', '1', 'App\\Http\\Entities\\Block', '2016-11-08 23:12:44', '2016-11-08 23:12:44', NULL);
        INSERT INTO `desarro2_isuzu`.`galleries` (`id`, `name`, `position`, `active`, `directory`, `imageable_id`, `imageable_type`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('4', 'block-2', '1', '1', 'images/block/block-2', '2', 'App\\Http\\Entities\\Block', '2016-11-08 23:15:50', '2016-11-08 23:15:50', NULL);
        INSERT INTO `desarro2_isuzu`.`galleries` (`id`, `name`, `position`, `active`, `directory`, `imageable_id`, `imageable_type`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('5', 'block-3', '1', '1', 'images/block/block-3', '3', 'App\\Http\\Entities\\Block', '2016-11-08 23:16:16', '2016-11-08 23:16:16', NULL);
        INSERT INTO `desarro2_isuzu`.`galleries` (`id`, `name`, `position`, `active`, `directory`, `imageable_id`, `imageable_type`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('6', 'block-4', '1', '1', 'images/block/block-4', '4', 'App\\Http\\Entities\\Block', '2016-11-08 23:16:36', '2016-11-08 23:16:36', NULL);
        INSERT INTO `desarro2_isuzu`.`galleries` (`id`, `name`, `position`, `active`, `directory`, `imageable_id`, `imageable_type`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('7', 'block-5', '1', '1', 'images/block/block-5', '5', 'App\\Http\\Entities\\Block', '2016-11-08 23:16:58', '2016-11-08 23:16:58', NULL);
        INSERT INTO `desarro2_isuzu`.`galleries` (`id`, `name`, `position`, `active`, `directory`, `imageable_id`, `imageable_type`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('8', 'block-6', '1', '1', 'images/block/block-6', '6', 'App\\Http\\Entities\\Block', '2016-11-08 23:37:29', '2016-11-08 23:37:29', NULL);
        INSERT INTO `desarro2_isuzu`.`galleries` (`id`, `name`, `position`, `active`, `directory`, `imageable_id`, `imageable_type`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('9', 'block-7', '1', '1', 'images/block/block-7', '7', 'App\\Http\\Entities\\Block', '2016-11-08 23:37:56', '2016-11-08 23:37:56', NULL);
        INSERT INTO `desarro2_isuzu`.`galleries` (`id`, `name`, `position`, `active`, `directory`, `imageable_id`, `imageable_type`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('10', 'block-8', '1', '1', 'images/block/block-8', '8', 'App\\Http\\Entities\\Block', '2016-11-08 23:38:39', '2016-11-08 23:38:39', NULL);
        INSERT INTO `desarro2_isuzu`.`galleries` (`id`, `name`, `position`, `active`, `directory`, `imageable_id`, `imageable_type`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('11', 'block-9', '1', '1', 'images/block/block-9', '9', 'App\\Http\\Entities\\Block', '2016-11-08 23:39:14', '2016-11-08 23:39:14', NULL);
        INSERT INTO `desarro2_isuzu`.`galleries` (`id`, `name`, `position`, `active`, `directory`, `imageable_id`, `imageable_type`, `created_at`, `updated_at`, `deleted_at`)
        VALUES ('12', 'block-10', '1', '1', 'images/block/block-10', '10', 'App\\Http\\Entities\\Block', '2016-11-08 23:40:08', '2016-11-08 23:40:08', NULL);
*/

        // Crear la galería para cada una de las subsecciones
        DB::table('blocks')->insert([
            'id'                => 1,
            'slug'              => 'slider',
            'meta_description'  => '',
            'staticmenu_id'     =>5,
            'name'              => 'slider',
            'title'             => 'slider - home',
            'subtitle'          =>'',
            'text'              => '',
            'position'          => 1,
            'created_at'        => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('galleries')->insert([
            'name'       => 'block-slider',
            'position'  => 1,
            'active'     =>1,
            'directory'              => 'images/block/block-slider',
            'imageable_id'             => '1',
            'imageable_type'          =>'App\\Http\\Entities\\Block',
            'created_at'              => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'          => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('blocks')->insert([
            'id'                => 2,
            'slug'       => 'refacciones-isuzu',
            'meta_description'  => '',
            'staticmenu_id'     =>3,
            'name'              => 'Refacciones Isuzu',
            'title'             => 'Refacciones Isuzu',
            'subtitle'          =>'',
            'text'              => '',
            'position'          => 1,
            'created_at'        => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('galleries')->insert([
            'name'       => 'block-refacciones-isuzu',
            'position'  => 1,
            'active'     =>1,
            'directory'              => 'images/block/block-refacciones-isuzu',
            'imageable_id'             => '2',
            'imageable_type'          =>'App\\Http\\Entities\\Block',
            'created_at'              => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'          => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('blocks')->insert([
            'id'                => 3,
            'slug'       => 'servicios',
            'meta_description'  => 'Servicios',
            'staticmenu_id'     =>3,
            'name'              => 'Servicios',
            'title'             => 'Servicios',
            'subtitle'          =>'',
            'text'              => '',
            'position'          => 1,
            'created_at'        => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('galleries')->insert([
            'name'       => 'block-servicios',
            'position'  => 1,
            'active'     =>1,
            'directory'              => 'images/block/block-servicios',
            'imageable_id'             => '3',
            'imageable_type'          =>'App\\Http\\Entities\\Block',
            'created_at'              => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'          => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('blocks')->insert([
            'id'                => 4,
            'slug'       => 'promocion',
            'meta_description'  => 'Promocion',
            'staticmenu_id'     =>3,
            'name'              => 'Promocion',
            'title'             => 'Promocion',
            'subtitle'          =>'',
            'text'              => '',
            'position'          => 1,
            'created_at'        => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('galleries')->insert([
            'name'       => 'block-promocion',
            'position'  => 1,
            'active'     =>1,
            'directory'              => 'images/block/block-promocion',
            'imageable_id'             => '4',
            'imageable_type'          =>'App\\Http\\Entities\\Block',
            'created_at'              => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'          => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('blocks')->insert([
            'id'                => 5,
            'slug'       => 'tips-isuzu',
            'meta_description'  => 'Tips Isuzu',
            'staticmenu_id'     =>3,
            'name'              => 'Tips Isuzu',
            'title'             => 'Tips Isuzu',
            'subtitle'          =>'',
            'text'              => '',
            'position'          => 1,
            'created_at'        => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('galleries')->insert([
            'name'       => 'block-tips-isuzu',
            'position'  => 1,
            'active'     =>1,
            'directory'              => 'images/block/block-tips-isuzu',
            'imageable_id'             => '5',
            'imageable_type'          =>'App\\Http\\Entities\\Block',
            'created_at'              => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'          => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('blocks')->insert([
            'id'                => 6,
            'slug'       => 'cambiando-los-estandares-globales-y-brindando-confianza-al-m',
            'meta_description'  => 'Cambiando los estandares globales y brindando confianza al mundo',
            'staticmenu_id'     =>1,
            'name'              => 'Cambiando los estandares globales y brindando confianza al mundo',
            'title'             => 'Cambiando los estandares globales y brindando confianza al mundo',
            'subtitle'          =>'',
            'text'              => '',
            'position'          => 1,
            'created_at'        => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('galleries')->insert([
            'name'                  => 'block-cambiando-los-estandares-globales-y-brindando-confianza-al-m',
            'position'              => 1,
            'active'                =>1,
            'directory'             => 'images/block/block-cambiando-los-estandares-globales-y-brindando-confianza-al-m',
            'imageable_id'          => '6',
            'imageable_type'        =>'App\\Http\\Entities\\Block',
            'created_at'            => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'            => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('blocks')->insert([
            'id'                => 7,
            'slug'              => 'nuestra-herencia',
            'meta_description'  => 'Nuestra Herencia',
            'staticmenu_id'     =>1,
            'name'              => 'Nuestra Herencia',
            'title'             => 'Nuestra Herencia',
            'subtitle'          =>'',
            'text'              => '',
            'position'          => 1,
            'created_at'        => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('galleries')->insert([
            'name'       => 'block-nuestra-herencia',
            'position'  => 1,
            'active'     =>1,
            'directory'              => 'images/block/block-nuestra-herencia',
            'imageable_id'             => '7',
            'imageable_type'          =>'App\\Http\\Entities\\Block',
            'created_at'              => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'          => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('blocks')->insert([
            'id'                => 8,
            'slug'       => 'historia-de-los-vehiculos-comerciales',
            'meta_description'  => 'Historia de los Vehiculos Comerciales',
            'staticmenu_id'     =>1,
            'name'              => 'Historia de los Vehiculos Comerciales',
            'title'             => 'Historia de los Vehiculos Comerciales',
            'subtitle'          =>'',
            'text'              => '',
            'position'          => 1,
            'created_at'        => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('galleries')->insert([
            'name'       => 'block-historia-de-los-vehiculos-comerciales',
            'position'  => 1,
            'active'     =>1,
            'directory'              => 'images/block/block-historia-de-los-vehiculos-comerciales',
            'imageable_id'             => '8',
            'imageable_type'          =>'App\\Http\\Entities\\Block',
            'created_at'              => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'          => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('blocks')->insert([
            'id'                => 9,
            'slug'       => 'historia-del-desarrollo-de-negocios-en-el-extranjero',
            'meta_description'  => 'Historia del desarrollo de Negocios en el extranjero',
            'staticmenu_id'     =>1,
            'name'              => 'Historia del desarrollo de Negocios en el extranjero',
            'title'             => 'Historia del desarrollo de Negocios en el extranjero',
            'subtitle'          =>'',
            'text'              => '',
            'position'          => 1,
            'created_at'        => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('galleries')->insert([
            'name'       => 'block-historia-del-desarrollo-de-negocios-en-el-extranjero',
            'position'  => 1,
            'active'     =>1,
            'directory'              => 'images/block/block-historia-del-desarrollo-de-negocios-en-el-extranjero',
            'imageable_id'             => '9',
            'imageable_type'          =>'App\\Http\\Entities\\Block',
            'created_at'              => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'          => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('blocks')->insert([
            'id'                => 10,
            'slug'              => 'isuzu-en-la-antartida',
            'meta_description'  => 'Isuzu en la Antártida',
            'staticmenu_id'     =>1,
            'name'              => 'Isuzu en la Antártida',
            'title'             => 'Isuzu en la Antártida',
            'subtitle'          =>'',
            'text'              => '',
            'position'          => 1,
            'created_at'        => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('galleries')->insert([
            'name'       => 'block-isuzu-en-la-antartida',
            'position'  => 1,
            'active'     =>1,
            'directory'              => 'images/block/block-isuzu-en-la-antartida',
            'imageable_id'             => '10',
            'imageable_type'          =>'App\\Http\\Entities\\Block',
            'created_at'              => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'          => Carbon::now()->format('Y-m-d H:m:s')
        ]);
    }
}

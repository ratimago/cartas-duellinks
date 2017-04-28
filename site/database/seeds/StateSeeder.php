<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('states')->insert([
            'clave' => 1,
            'slug'  => 'aguascalientes',
            'name' => 'Aguascalientes',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 2,
            'slug'  => 'baja-california-norte',
            'name' => 'Baja California Norte',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 3,
            'slug'  => 'baja-california-sur',
            'name' => 'Baja California Sur',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 4,
            'slug'  => 'campeche',
            'name' => 'Campeche',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 5,
            'slug'  => 'coahuila',
            'name' => 'Coahuila',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 6,
            'slug'  => 'colima',
            'name' => 'Colima',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 7,
            'slug'  => 'chiapas',
            'name' => 'Chiapas',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 8,
            'slug'  => 'chihuahua',
            'name' => 'Chihuahua',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 9,
            'slug'  => 'ciudad-de-mexico',
            'name' => 'Ciudad de Mexico',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 10,
            'slug'  => 'durango',
            'name' => 'Durango',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 11,
            'slug'  => 'guanajuato',
            'name' => 'Guanajuato',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 12,
            'slug'  => 'guerrero',
            'name' => 'Guerrero',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 13,
            'slug'  => 'hidalgo',
            'name' => 'Hidalgo',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 14,
            'slug'  => 'jalisco',
            'name' => 'Jalisco',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 15,
            'slug'  => 'estado-de-mexico',
            'name' => 'Estado de México',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 16,
            'slug'  => 'michoacan',
            'name' => 'Michoacán',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 17,
            'slug'  => 'morelos',
            'name' => 'Morelos',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 18,
            'slug'  => 'nayarit',
            'name' => 'Nayarit',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 19,
            'slug'  => 'nuevo-leon',
            'name' => 'Nuevo Leon',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 20,
            'slug'  => 'oaxaca',
            'name' => 'Oaxaca',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 21,
            'slug'  => 'puebla',
            'name' => 'Puebla',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 22,
            'slug'  => 'queretaro',
            'name' => 'Querétaro',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 23,
            'slug'  => 'quintana-roo',
            'name' => 'Quintana Roo',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 24,
            'slug'  => 'san-luis-potosi',
            'name' => 'San Luis Potosí',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 25,
            'slug'  => 'sinaloa',
            'name' => 'Sinaloa',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 26,
            'slug'  => 'sonora',
            'name' => 'Sonora',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 27,
            'slug'  => 'tabasco',
            'name' => 'Tabasco',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 28,
            'slug'  => 'tamaulipas',
            'name' => 'Tamaulipas',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 29,
            'slug'  => 'tlaxcala',
            'name' => 'Tlaxcala',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 30,
            'slug'  => 'veracruz',
            'name' => 'Veracruz',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 31,
            'slug'  => 'yucatan',
            'name' => 'Yucatán',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 32,
            'slug'  => 'zacatecas',
            'name' => 'Zacatecas',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('states')->insert([
            'clave' => 33,
            'slug'  => '',
            'name' => '',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

    }
}

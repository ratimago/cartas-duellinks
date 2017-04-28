<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class StaticmenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('staticmenus')->insert([
            'slug' => 'acerca-de',
            'name' => 'Acerca de',
            'meta_description' => 'Acerca de',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('staticmenus')->insert([
            'slug' => 'aviso-de-privacidad',
            'name' => 'Aviso de Privacidad',
            'meta_description' => 'Aviso de Privacidad',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('staticmenus')->insert([
            'slug' => 'postventa',
            'name' => 'Postventa',
            'meta_description' => 'Postventa',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('staticmenus')->insert([
            'slug' => 'terminos-y-condiciones',
            'name' => 'Terminos y Conciones',
            'meta_description' => 'Terminos y Condiciones',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('staticmenus')->insert([
            'slug' => 'home',
            'name' => 'Home',
            'meta_description' => 'Home',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);
    }
}

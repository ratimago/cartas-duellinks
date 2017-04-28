<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class AutoresponderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('autoresponders')->insert([
            'section' => 'Financiamiento',
            'slug' => 'financiamiento',
            'departament' => 'Departamento de Finanzas',
            'issue' => 'Dpto. Finanzas Isuzu Motors México',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('autoresponders')->insert([
            'section' => 'Cotizacion',
            'slug' => 'cotizacion',
            'departament' => 'Departamento de Ventas',
            'issue' => 'Dpto. Venta Isuzu Motors México',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('autoresponders')->insert([
            'section' => 'Contacto',
            'slug' => 'contacto',
            'departament' => 'Departamento de Atención al Cliente',
            'issue' => 'Atención al Cliente Isuzu Motors México',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('autoresponders')->insert([
            'section' => 'Bolsa de Trabajo',
            'slug' => 'bolsa-de-trabajo',
            'departament' => 'Departamento de Recursos Humanos',
            'issue' => 'Dpto. Recursos Humanos Isuzu Motors México',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);
    }
}

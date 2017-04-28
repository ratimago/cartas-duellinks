<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class PromotionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('promotions')->insert([
            'title' => 'Inauguración Isuzu',
            'subtitle' => 'Grandes Descuentos',
            'active' => 1,
            'meta_description' => 'Grandes Descuentos',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('galleries')->insert([
            'name' => 'promotion-1',
            'position' => 1,
            'active' => 1,
            'directory' => 'images/promotion/promotion-1',
            'imageable_id' => '1',
            'imageable_type' => 'App\\Http\\Entities\\Promotion',
            'created_at' => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:m:s')
        ]);
    }
}

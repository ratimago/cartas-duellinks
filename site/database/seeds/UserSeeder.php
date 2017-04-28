<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'role_id'       => 1,
            'name'          => 'Cecilia Imelda Hernandez Martinez',
            'email'         => 'cecilia.hernandez@masclicks.com.mx',
            'password'      => bcrypt('123456'),
            'active'        =>1,
            'created_at'    => Carbon::now()->format('Y-m-d H:m:s'),
            'updated_at'    => Carbon::now()->format('Y-m-d H:m:s')
        ]);
    }
}

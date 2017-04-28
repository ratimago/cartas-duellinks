<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'name'      => 'Administrador',
            'type'      => 'Admin',
            'created_at'=> Carbon::now()->format('Y-m-d H:m:s')
        ]);

        DB::table('roles')->insert([
            'name'      => 'Editor de Blog',
            'type'      => 'Blog',
            'created_at'=> Carbon::now()->format('Y-m-d H:m:s')
        ]);

    }
}

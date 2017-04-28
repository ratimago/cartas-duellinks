<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserTableSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(AutoresponderSeeder::class);
        $this->call(StaticmenuSeeder::class);
        $this->call(StateSeeder::class);
        $this->call(BlockTableSeeder::class);
        $this->call(PromotionTableSeeder::class);
    }
}

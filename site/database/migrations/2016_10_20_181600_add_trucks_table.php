<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTrucksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trucks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('slug');
            $table->string('meta_description');
            $table->string('name_image_background');
            $table->string('name_image_truck');
            $table->string('name_logo');
            $table->string('name_profile');
            $table->string('title');
            $table->string('subtitle');
            $table->text('text');
            $table->text('loading_capacity');
            $table->text('technology');
            $table->text('characteristics');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('trucks');
    }
}

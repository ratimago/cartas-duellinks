<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddGalleriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('galleries', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('position');
            $table->tinyInteger('active');
            $table->string('directory');
            $table->integer('imageable_id');
            $table->string('imageable_type');
            //$table->integer('block_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            // Una galería le pertenece a uno y sólo un bloque
            //$table->foreign('block_id')
            //    ->references('id')->on('blocks')
            //    ->onDelete('cascade');
        });

        /*Schema::create('gallery_block', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('gallery_id')->unsigned();
            $table->integer('block_id')->unsigned();

            $table->foreign('block_id')
                ->references('id')->on('blocks')
                ->onDelete('cascade');
            $table->foreign('gallery_id')
                ->references('id')->on('galleries')
                ->onDelete('cascade');
            $table->timestamps();
        });*/
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('galleries');
    }
}

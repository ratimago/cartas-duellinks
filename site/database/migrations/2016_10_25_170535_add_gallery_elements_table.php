<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddGalleryElementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gallery_elements', function (Blueprint $table) {
            $table->increments('id');
            $table->string('value');
            $table->enum('type',['image','video'])->default('image');
            $table->string('title');
            $table->string('subtitle');
            $table->string('link_text');
            $table->string('link_href');
            $table->integer('position');
            $table->integer('gallery_id')->unsigned();

            $table->foreign('gallery_id')
                ->references('id')->on('galleries')
                ->onDelete('cascade');
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
        Schema::drop('gallery_elements');
    }
}

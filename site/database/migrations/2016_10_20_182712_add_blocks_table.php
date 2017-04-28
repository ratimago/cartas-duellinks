<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddBlocksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blocks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('slug');
            $table->string('meta_description');
            $table->integer('staticmenu_id')->unsigned();
            $table->string('name');
            $table->string('title');
            $table->string('subtitle');
            $table->text('text');
            $table->integer('position');

            $table->foreign('staticmenu_id')
                ->references('id')->on('staticmenus')
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
        Schema::drop('blocks');
    }
}

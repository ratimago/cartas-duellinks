<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddStaticmenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // esto es para aviso de privacidad, terminos y condiciones, etc...
        Schema::create('staticmenus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('slug');
            $table->string('meta_description');
            $table->string('name');
            $table->string('title');
            $table->string('subtitle');
            $table->text('text');
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
        Schema::drop('staticmenus');
    }
}

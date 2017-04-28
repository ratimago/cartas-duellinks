<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDealershipsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dealerships', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->integer('state_id')->unsigned();
            $table->string('address');
            $table->string('coordinates');
            $table->string('phones');
            $table->string('type_dealership')->nullable();
            $table->string('image');
            $table->timestamps();
            $table->softDeletes();


            // Un concesionario le pertenece a un estado
            $table->foreign('state_id')
                ->references('id')->on('states')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('dealerships');
    }
}

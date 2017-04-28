<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddJobsMarketTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs_market', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('age');
            $table->string('phone');
            $table->string('email');
            $table->string('address');
            $table->string('city');
            $table->integer('state_id')->unsigned();
            $table->string('change_home');
            $table->string('civil_status');
            $table->text('experience');
            $table->text('reason_work');
            $table->string('gclid');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('state_id')
                ->references('id')->on('states');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('jobs_market');
    }
}

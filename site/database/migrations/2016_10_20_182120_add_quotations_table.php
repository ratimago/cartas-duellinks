<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddQuotationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('autoresponder_id')->unsigned();
            $table->string('email');
            $table->string('name');
            $table->integer('state_id')->unsigned();
            $table->string('area_code');
            $table->string('phone');
            $table->string('company_name');
            $table->string('bussiness_office');
            $table->string('other_office');
            $table->string('bussiness_type');
            $table->string('material_transport');
            $table->string('other_material');
            $table->string('load_weight');
            $table->text('message_text');
            $table->string('gclid');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('state_id')
                ->references('id')->on('states');
            //queda pendiente porque al parecer al cotizar pueden elegir varios camiones
            $table->foreign('autoresponder_id')
                ->references('id')->on('autoresponders');
        });


        Schema::create('quotation_truck',function(Blueprint $table){
            $table->increments('id');
            $table->integer('quotation_id')->unsigned();
            $table->integer('truck_id')->unsigned();

            $table->foreign('quotation_id')
                ->references('id')->on('quotations');
            $table->foreign('truck_id')
                ->references('id')->on('trucks');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('quotation_truck');
        Schema::drop('quotations');
    }
}

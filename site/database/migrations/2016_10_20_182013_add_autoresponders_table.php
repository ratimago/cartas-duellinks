<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAutorespondersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('autoresponders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('section');
            $table->string('slug');
            $table->string('departament')->unique();
            $table->string('issue');
            $table->text('addressee_mail');
            $table->string('text_button');
            $table->text('message_text');
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
        Schema::drop('autoresponders');
    }
}

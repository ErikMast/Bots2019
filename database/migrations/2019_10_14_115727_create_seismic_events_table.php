<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeismicEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seismic_events', function (Blueprint $table) {

            $table->bigIncrements('id');

            $table->double("long");
            $table->double("lat");

            $table->double("mag");
            $table->string("type");
            $table->date("date");
            $table->string("place");

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
        Schema::dropIfExists('seismic_events');
    }
}

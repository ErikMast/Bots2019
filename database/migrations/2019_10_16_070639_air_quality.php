<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AirQuality extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
      Schema::create('air_quality', function (Blueprint $table) {

          $table->bigIncrements('id');
          $table->string('formula');
          $table->date("date");
          $table->double('value');
          $table->string('hash')->unique();
          $table->string('location');
          $table->double("lat");
          $table->double("long");
          
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
      Schema::dropIfExists('air_quality');
  }
}

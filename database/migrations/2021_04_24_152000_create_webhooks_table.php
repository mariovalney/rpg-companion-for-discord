<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebhooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('webhooks', function (Blueprint $table) {
            $table->string('id');

            $table->integer('type');
            $table->string('url');
            $table->string('token');
            $table->string('name')->nullable();
            $table->string('avatar')->nullable();

            $table->string('channel_id')->nullable();
            $table->string('guild_id')->nullable();

            $table->timestamps();

            $table->primary('id');
            $table->foreign('channel_id')->references('id')->on('channels');
            $table->foreign('guild_id')->references('id')->on('guilds');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('webhooks');
    }
}

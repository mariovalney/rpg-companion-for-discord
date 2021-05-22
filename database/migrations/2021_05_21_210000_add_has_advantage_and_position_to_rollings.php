<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHasAdvantageAndPositionToRollings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rollings', function (Blueprint $table) {
            $table->boolean('has_advantage')->nullable()->after('rolling');
            $table->integer('position')->nullable()->after('has_advantage');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('rollings', function (Blueprint $table) {
            $table->dropColumn('has_advantage');
            $table->dropColumn('position');
        });
    }
}

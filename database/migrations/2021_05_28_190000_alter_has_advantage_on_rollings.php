<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterHasAdvantageOnRollings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rollings', function (Blueprint $table) {
            $table->dropColumn('has_advantage');
            $table->integer('advantage')->nullable()->after('rolling');
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
            $table->dropColumn('advantage');
            $table->boolean('has_advantage')->nullable()->after('rolling');
        });
    }
}

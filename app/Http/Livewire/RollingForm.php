<?php

namespace App\Http\Livewire;

use Auth;
use App\Models\Dice;
use App\Models\Guild;
use Livewire\Component;

class RollingForm extends Component
{
    /**
     * The session key
     */
    const SESSION_KEY = 'rolling-form-current-dicesssssss';

    /**
     * The current guild
     * @var integer
     */
    public $guild;

    /**
     * Dices to be rolled
     * @var array of Dice
     */
    public $dices = [];

    /**
     * The variables
     * @var array
     */
    public $data = [];

    /**
     * Render the component
     *
     * @return view()
     */
    public function render()
    {
        $this->data = $this->dicesFromSession();

        return view('livewire.rolling-form.index');
    }

    /**
     * Add a dice
     *
     * @param  string $id
     * @return void
     */
    public function addDice($sides)
    {
        $dice = new Dice();
        $dice->sides = $sides;

        $dices = (array) session()->get(self::SESSION_KEY);
        $dices[] = $dice;

        session()->put(self::SESSION_KEY, $dices);
    }

    /**
     * Update a dice by ID
     *
     * @param  string $id
     * @return void
     */
    public function updateDice($id, $prop, $value)
    {
        $data = (array) session()->get(self::SESSION_KEY);

        $dices = [];
        foreach ($data as $dice) {
            if ($dice->id === $id) {
                $dice->$prop = $value;
            }

            $dices[] = $dice;
        }

        session()->put(self::SESSION_KEY, $dices);
    }

    /**
     * Remove dice by ID
     *
     * @param  string $id
     * @return void
     */
    public function removeDice($id)
    {
        $data = (array) session()->get(self::SESSION_KEY);

        $dices = [];
        foreach ($data as $dice) {
            if ($dice->id === $id) {
                continue;
            }

            $dices[] = $dice;
        }

        session()->put(self::SESSION_KEY, $dices);
    }

    /**
     * Retrieve dices from session or at leat one
     *
     * @return array
     */
    public function dicesFromSession()
    {
        $dices = session()->get(self::SESSION_KEY);
        if ( empty( $dices ) ) {
            return [];
        }

        $data = [];
        foreach ($dices as $dice) {
            $data[] = $dice->toArray();
        }

        return $data;
    }
}

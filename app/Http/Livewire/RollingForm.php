<?php

namespace App\Http\Livewire;

use Auth;
use App\Models\Dice;
use App\Models\Guild;
use App\Models\Webhook;
use App\Support\Traits\HasAlert;
use Livewire\Component;

class RollingForm extends Component
{
    use HasAlert;

    /**
     * Rolling
     *
     * @var Rolling
     */
    public $rolling;

    /**
     * Render the component
     *
     * @return view()
     */
    public function mount()
    {
    }

    /**
     * Render the component
     *
     * @return view()
     */
    public function render()
    {
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
        // TODO
    }

    /**
     * Update a dice by ID
     *
     * @param  string $id
     * @return void
     */
    public function updateDice($id, $prop, $value)
    {
        // TODO
    }

    /**
     * Remove dice by ID
     *
     * @param  string $id
     * @return void
     */
    public function removeDice($id)
    {
        // TODO
    }
}

<?php

namespace App\Http\Livewire;

use Auth;
use App\Models\Guild;
use App\Models\Rolling;
use App\Models\Webhook;
use Livewire\Component;

class RollingsCrud extends Component
{
    /**
     * The current webhook
     * @var Webhook
     */
    public $webhook;

    /**
     * Validation errors
     * @var array
     */
    public $errors = [];

    /**
     * The rollings
     * @var array
     */
    public $rollings = [];

    /**
     * The editing state
     * @var boolean
     */
    public $editing = false;

    /**
     * Error messages
     * @var array
     */
    protected $messages = [];

    /**
     * The constructor
     */
    public function __construct()
    {
        $this->messages = [
        ];
    }

    /**
     * Mount the component
     *
     * @return void
     */
    public function mount()
    {
        $this->rollings = collect([]);

        if (! empty($this->webhook)) {
            $this->rollings = $this->webhook->channel->rollings;
        }
    }

    /**
     * Render the component
     *
     * @return view()
     */
    public function render()
    {
        return view('livewire.rollings-crud.index');
    }
}

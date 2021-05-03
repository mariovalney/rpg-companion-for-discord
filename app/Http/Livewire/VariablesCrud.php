<?php

namespace App\Http\Livewire;

use Auth;
use App\Models\Guild;
use App\Models\Variable;
use Livewire\Component;

class VariablesCrud extends Component
{

    /**
     * The variable name on form
     * @var string
     */
    public $variable_name;

    /**
     * The variable value on form
     * @var string
     */
    public $variable_value;

    /**
     * The current guild
     * @var integer
     */
    public $guild;

    /**
     * Validation errors
     * @var array
     */
    public $errors = [];

    /**
     * The variables
     * @var array
     */
    public $data = [];

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

    public function __construct()
    {
        $this->messages = [
            'variable_name.required' => __('screens/variables.validation.variable_name.required'),
            'variable_name.alpha_dash' => __('screens/variables.validation.variable_name.alpha_dash'),
            'variable_value.required' => __('screens/variables.validation.variable_value.required'),
            'variable_value.numeric' => __('screens/variables.validation.variable_value.numeric'),
        ];
    }

    /**
     * Render the component
     *
     * @return view()
     */
    public function render()
    {
        $this->data = Variable::where([
            'user_id' => Auth::id(),
            'guild_id' => $this->guild->id,
        ])->get();

        return view('livewire.variables-crud.index');
    }

    /**
     * Updated the component
     *
     * @return void
     */
    public function updated($name, $value)
    {
        if ($name !== 'variable_name') {
            return;
        }

        // Normalize variable name
        $this->variable_name = mb_strtoupper($this->variable_name);

        // Check is editing
        $found = $this->data->firstWhere('name', $this->variable_name);

        if (! empty($found)) {
            $this->variable_value = $found->value;
            $this->editing = $found->id;
            return;
        }

        if ($this->editing) {
            $this->variable_value = 0;
            $this->editing = 0;
        }
    }

    /**
     * Insert a new variable
     *
     * @return
     */
    public function process()
    {
        $this->validate([
            'variable_name' => 'required|alpha_dash',
            'variable_value' => 'required|numeric',
        ]);

        $variable = new Variable();
        if ($this->editing) {
            $maybe_variable = Variable::find($this->editing);
            if (! empty($maybe_variable) && $maybe_variable->user_id === Auth::id()) {
                $variable = $maybe_variable;
            }
        }

        $variable->name = $this->variable_name;
        $variable->value = $this->variable_value;
        $variable->guild_id = $this->guild->id;
        $variable->user_id = Auth::id();

        if ($variable->save()) {
            $this->empty();
            session()->flash('message_success', __($this->editing ? 'screens/variables.form.added' : 'screens/variables.form.edited'));
            return;
        }

        session()->flash('message_error', __('screens/variables.form.error'));
    }

    /**
     * Update a variable
     *
     * @return
     */
    public function edit($id)
    {
        $variable = Variable::find($id);

        if (empty($variable)) {
            $this->empty();
            return;
        }

        $this->editing = $variable->id;
        $this->variable_name = $variable->name;
        $this->variable_value = $variable->value;
    }

    /**
     * Destroy a variable
     *
     * @return
     */
    public function destroy($id)
    {
        if (empty($id)) {
            return;
        }

        Variable::destroy($id);
    }

    /**
     * Reset the form
     *
     * @return void
     */
    public function empty()
    {
        $this->editing = 0;
        $this->variable_name = '';
        $this->variable_value = '';
    }
}

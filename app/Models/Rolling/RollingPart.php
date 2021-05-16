<?php

namespace App\Models\Rolling;

use App\Models\Variable;
use App\Support\SimpleModel;

class RollingPart extends SimpleModel
{
    /**
     * Attributes
     *
     * @var array
     */
    protected $fillable = [
        'positive',
        'number',
        'dice',
        'variable',
    ];

    /**
     * Attributes
     *
     * @var array
     */
    protected $attributes = [
        'positive' => 1,
        'number' => 0,
        'dice' => 0,
        'variable' => '',
    ];

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [
        'guild'
    ];

    /**
     * Check is Positive
     *
     * @return boolean
     */
    public function isPositive()
    {
        return ! empty($this->positive);
    }

    /**
     * Check is Dice
     *
     * @return boolean
     */
    public function isDice()
    {
        return (int) $this->dice > 0;
    }

    /**
     * Check is Variable
     *
     * @return boolean
     */
    public function isVariable()
    {
        return ! empty($this->variable);
    }

    /**
     * Check if is empty
     *
     * @return boolean
     */
    public function isEmpty()
    {
        return ! $this->isDice() && ! $this->isVariable() && empty($this->number);
    }

    /**
     * Get signal
     *
     * @return boolean
     */
    public function getSignal()
    {
        return $this->isPositive() ? '+' : '-';
    }

    /**
     * Roll the rolling part
     *
     * @return string
     */
    public function roll()
    {
        $result = $this->makeRoll();

        $value = $result;
        if (! $this->isPositive()) {
            $value = -1 * $value;
        }

        if ($this->isDice()) {
            $number = (int) $this->number;
            $number = $number > 0 ? $number : 1;

            $value = $number * $value;
        }

        $description = $this->toText();

        if ($this->isVariable() || $this->isDice()) {
            $description .= ' (' . $result . ')';
        }

        return (object) [
            'description' => $description,
            'value' => $value,
        ];
    }

    /**
     * Return the humman readable representation
     *
     * @return string
     */
    public function toText($showSignal = true)
    {
        $value = null;

        if (is_null($value) && $this->isVariable()) {
            $value = $this->variable;
        }

        if (is_null($value) && $this->isDice()) {
            $value = ($this->number ?: '1') . 'd' . $this->dice;
        }

        if (is_null($value) && ! empty($this->number)) {
            $value = $this->number;
        }

        if (empty($value)) {
            return '';
        }

        if ($showSignal) {
            $value = $this->getSignal() . ' ' . $value;
        }

        return $value;
    }

    /**
     * Get a rolling value
     *
     * @return string
     */
    private function makeRoll()
    {
        if ($this->isVariable()) {
            $value = Variable::findByName($this->variable, $this->guild);
            $value = $value ? $value->value : 0;

            return $value;
        }

        if ($this->isDice()) {
            return random_int(1, $this->dice);
        }

        if (! empty($this->number)) {
            return (int) $this->number;
        }

        return 0;
    }
}

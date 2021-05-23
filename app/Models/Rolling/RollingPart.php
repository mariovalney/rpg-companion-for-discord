<?php

namespace App\Models\Rolling;

use App\Models\Variable;
use App\Support\SimpleModel;
use Exception;

class RollingPart extends SimpleModel
{
    /**
     * The dice limit for sides
     *
     * @var int
     */
    const DICE_SIDE_MAX = 1000;

    /**
     * The count dice limit
     *
     * @var int
     */
    const DICE_COUNT_MAX = 1000;

    /**
     * The limit for numbers
     *
     * @var int
     */
    const NUMBER_MAX = 1000000000;

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
     * Validate the rolling
     *
     * @throws ValidationException
     */
    public function validate()
    {
        if ($this->isDice() && $this->number > self::DICE_COUNT_MAX) {
            throw new Exception(sprintf(__('screens/rolling.validation.rolling.dice_count_max'), $this->formatNumber(self::DICE_COUNT_MAX)));
        }

        if ($this->isDice() && $this->dice > self::DICE_SIDE_MAX) {
            throw new Exception(sprintf(__('screens/rolling.validation.rolling.dice_side_max'), $this->formatNumber(self::DICE_SIDE_MAX)));
        }

        if ($this->isNumber() && $this->number > self::NUMBER_MAX) {
            dd($this);
            throw new Exception(sprintf(__('screens/rolling.validation.rolling.number_max'), $this->formatNumber(self::NUMBER_MAX)));
        }
    }

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
     * Check is Number
     *
     * @return boolean
     */
    public function isNumber()
    {
        return ! $this->isDice() && ! $this->isVariable() && ! empty($this->number);
    }

    /**
     * Check if is Signal
     *
     * @return boolean
     */
    public function isSignal()
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
     * @param  int $type
     *
     * @return string
     */
    public function roll($type = 0)
    {
        if ($this->isDice()) {
            return $this->rollDice();
        }

        $result = $this->makeRoll();
        $value = $result;

        if (! $this->isPositive()) {
            $value = -1 * $value;
        }

        $description = $this->toText();

        if ($this->isVariable()) {
            $description .= ' (' . $result . ')';
        }

        return (object) [
            'description' => $description,
            'value' => $value,
        ];
    }

    /**
     * Roll for dice
     *
     * @param  int $type
     *
     * @return string
     */
    public function rollDice($type = 0)
    {
        $number = (int) $this->number;
        $number = $number > 0 ? $number : 1;

        $results = [];

        for ($i = 0; $i < $number; $i++) {
            $results[] = $this->makeRoll();
        }

        $value = array_sum($results);

        if (! $this->isPositive()) {
            $value = -1 * $value;
        }

        // Bold for critical (normal roll)
        if ($this->isDice() && $type === 0) {
            foreach ($results as $key => $result) {
                if ($result === $this->dice || $result === 1) {
                    $results[ $key ] = '**' . $result . '**';
                }
            }
        }

        $description = $this->toText();
        $description .= ' (' . implode(', ', $results) . ')';

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

        if (is_null($value) && $this->isNumber()) {
            $value = $this->formatNumber($this->number);
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
            $rolls = [
                random_int(1, $this->dice),
                random_int(1, $this->dice),
                random_int(1, $this->dice),
            ];

            return $rolls[ array_rand($rolls) ];
        }

        if (! empty($this->number)) {
            return (int) $this->number;
        }

        return 0;
    }

    /**
     * Format a number for exibition
     *
     * @param  int $number
     * @return string
     */
    private function formatNumber($number)
    {
        return number_format($number, 0, ',', '.');
    }
}

<?php

namespace App\Support\Traits;

use App\Models\Rolling\RollingPart;

trait EditingRollingParts
{
    /**
     * Check we should add a dice
     *
     * @var array
     */
    public $isDice = false;

    /**
     * Available buttons after something action
     *
     * @var array
     */
    private $availableButtons = [
        'minus' => [
            'variable',
            'number',
            'signal',
            'dice',
        ],
        'plus' => [
            'variable',
            'number',
            'signal',
            'dice',
        ],
        'dice' => [
            'number',
        ],
        'variable' => [
            'signal',
        ],
        'number' => [
            'number',
            'signal',
            'dice',
            'start',
        ],
    ];

    /**
     * Check we can press a button to rolling
     *
     * @return boolean
     */
    public function canPressButton($button)
    {
        $last = $this->findLastEditing();
        $part = $this->getLastPartModel();

        // Is numeric
        if (is_numeric($button)) {
            // Avoid starting with zero
            if (empty($button) && ($last === 'signal' || ($this->isDice && ! empty($part) && empty($part->dice)))) {
                return false;
            }

            $button = 'number';
        }

        // Create a new part if editing a dice
        if (($button === 'minus' || $button === 'plus') && $this->isDice && ! empty($part) && empty($part->dice)) {
            return false;
        }

        // Can remove if is not the last
        if ($button === 'backspace') {
            return ! empty($this->editingRolling);
        }

        $actions = $this->availableButtons[ $button ] ?? [];
        return in_array($last, $actions, true);
    }

    /**
     * Rolling button action: Plus
     *
     * @return void
     */
    public function rollingButtonPlus()
    {
        $this->isDice = false;

        $data = ['positive' => true];

        if ($this->findLastEditing() === 'signal') {
            $this->editLastPart($data);
            return;
        }

        $this->addPart($data);
    }

    /**
     * Rolling button action: Minus
     *
     * @return void
     */
    public function rollingButtonMinus()
    {
        $this->isDice = false;

        $data = ['positive' => false];

        if ($this->findLastEditing() === 'signal') {
            $this->editLastPart($data);
            return;
        }

        $this->addPart($data);
    }

    /**
     * Rolling button action: Dice
     *
     * @return void
     */
    public function rollingButtonDice()
    {
        $this->isDice = ! $this->isDice;
    }

    /**
     * Rolling button action: Backspace
     *
     * @return void
     */
    public function rollingButtonBackspace()
    {
        $last = $this->getLastPartModel();
        if (empty($last)) {
            return;
        }

        // Remove dice faces if editing dice
        if ($last->isDice()) {
            $this->isDice = true;

            $newDice = 0;
            if (strlen($last->dice) > 1) {
                $newDice = substr($last->dice, 0, -1);
            }

            $this->editLastPart(['dice' => $newDice]);
            return;
        }

        // Remove dice editing
        if ($this->isDice) {
            $this->isDice = false;
            return;
        }

        if ($last->isNumber() && strlen($last->number) > 1) {
            $this->editLastPart(['number' => substr($last->number, 0, -1)]);
            return;
        }

        array_pop($this->editingRolling);
    }

    /**
     * Rolling button numeric
     *
     * @return void
     */
    public function rollingButtonNumeric($number)
    {
        $part = $this->getLastPart();
        $key = $this->isDice ? 'dice' : 'number';

        $number = ((string) ($part[ $key ] ?? '')) . $number;

        $this->editLastPart([$key => (int) $number]);
    }

    /**
     * Add a variable
     *
     * @return void
     */
    public function rollingButtonVariable($variable)
    {
        $variable = mb_strtoupper($variable);
        $this->editLastPart(['variable' => $variable]);
    }

    /**
     * Add a part to end
     *
     * @return void
     */
    private function addPart($data)
    {
        $part = new RollingPart($data);
        $this->editingRolling[] = $part->toArray();
    }

    /**
     * Edit the last part
     *
     * @return void
     */
    private function editLastPart($data)
    {
        $this->editingRolling[] = array_merge($this->getLastPart(true), $data);
    }

    /**
     * Get the last part
     *
     * @return void
     */
    private function getLastPart($remove = false)
    {
        $part = [];
        if (! empty($this->editingRolling)) {
            $part = last($this->editingRolling);
        }

        if ($remove) {
            array_pop($this->editingRolling);
        }

        return $part;
    }

    /**
     * Get the last part as the model
     *
     * @return void
     */
    private function getLastPartModel($remove = false)
    {
        $last = $this->getLastPart($remove);
        if (empty($last)) {
            return false;
        }

        return new RollingPart($last);
    }

    /**
     * Find last editing
     *
     * @return string
     */
    private function findLastEditing()
    {
        if ($this->isDice) {
            return 'dice';
        }

        $last = $this->getLastPartModel();
        if (empty($last)) {
            return 'start';
        }

        if ($last->isDice()) {
            return 'dice';
        }

        if ($last->isSignal()) {
            return 'signal';
        }

        if ($last->isVariable()) {
            return 'variable';
        }

        return 'number';
    }
}

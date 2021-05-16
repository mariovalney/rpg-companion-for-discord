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
        ],
        'plus' => [
            'variable',
            'number',
            'signal',
        ],
        'dice' => [
            'number',
            'dice',
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

        if (is_numeric($button)) {
            $part = $this->getLastPart();

            if (empty($button) && ($last === 'signal' || ($this->isDice && ! empty($part) && empty($part['dice'])))) {
                return false;
            }

            $button = 'number';
        }

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
        if ($this->isDice) {
            $this->editLastPart(['dice' => 0]);
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
     * Find last editing
     *
     * @return string
     */
    private function findLastEditing()
    {
        if (empty($this->editingRolling)) {
            return 'start';
        }

        if ($this->isDice) {
            return 'dice';
        }

        $last = end($this->editingRolling);
        $last = new RollingPart($last);

        if ($last->isEmpty()) {
            return 'signal';
        }

        if ($last->isVariable()) {
            return 'variable';
        }

        return 'number';
    }
}

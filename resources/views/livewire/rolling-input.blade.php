<div class="rolling-input-wrapper">
    <p class="rolling-result {{ $this->isKeyboardShown ? 'editing' : '' }}">
        <span class="rolling-parts">
            @foreach($this->getEditingRolling() as $rolling)
                @if(! $loop->first || $rolling->getSignal() !== '+')
                    <span class="signal-part">{{ $rolling->getSignal() }}</span>
                @endif

                @if($loop->last)
                    <span class="editing-part">
                        @if($this->isDice && empty($rolling->dice))
                            {{ $rolling->toText(false) . 'd' }}
                        @else
                            {{ $rolling->toText(false) }}
                        @endif
                        <span class="editing-cursor"></span>
                    </span>
                @else
                    <span class="text-part">
                        {{ $rolling->toText(false) }}
                    </span>
                @endif
            @endforeach
        </span>

        <i class="fas fa-keyboard"></i>
    </p>

    <div class="rolling-keyboard collapse {{ $this->isKeyboardShown ? 'show' : '' }}">
        <div class="rolling-buttons">
            <div class="rolling-buttons-group">
                <button wire:click="rollingButton('minus')" class="btn btn-blue {{ $this->rollingClass('minus') }}">
                    <i class="fas fa-minus"></i>
                </button>
                <button wire:click="rollingButton('plus')" class="btn btn-blue {{ $this->rollingClass('plus') }}">
                    <i class="fas fa-plus"></i>
                </button>
                <button wire:click="rollingButton('dice')" class="btn btn-good {{ $this->rollingClass('dice') }}">
                    <i class="fas fa-dice-d20"></i>
                </button>
                <button wire:click="rollingButton('backspace')" class="btn btn-bad {{ $this->rollingClass('backspace') }}">
                    <i class="fas fa-backspace"></i>
                </button>
            </div>

            <div class="rolling-buttons-group rolling-buttons-numeric">
                <button wire:click="rollingButton(1)" class="btn {{ $this->rollingClass('1') }}">1</button>
                <button wire:click="rollingButton(2)" class="btn {{ $this->rollingClass('2') }}">2</button>
                <button wire:click="rollingButton(3)" class="btn {{ $this->rollingClass('3') }}">3</button>
                <button wire:click="rollingButton(4)" class="btn {{ $this->rollingClass('4') }}">4</button>
                <button wire:click="rollingButton(5)" class="btn {{ $this->rollingClass('5') }}">5</button>
                <button wire:click="rollingButton(6)" class="btn {{ $this->rollingClass('6') }}">6</button>
                <button wire:click="rollingButton(7)" class="btn {{ $this->rollingClass('7') }}">7</button>
                <button wire:click="rollingButton(8)" class="btn {{ $this->rollingClass('8') }}">8</button>
                <button wire:click="rollingButton(9)" class="btn {{ $this->rollingClass('9') }}">9</button>
                <button wire:click="rollingButton(0)" class="btn {{ $this->rollingClass('0') }}">0</button>
                <button wire:click="rollingButton(10)" class="btn {{ $this->rollingClass('10') }}">10</button>
                <button wire:click="rollingButton(20)" class="btn {{ $this->rollingClass('20') }}">20</button>
                <button wire:click="rollingButton(100)" class="btn {{ $this->rollingClass('100') }}">100</button>
            </div>
        </div>

        @if(! empty($this->variables) && $this->variables->isNotEmpty())
            <div class="rolling-variable-select">
                <select wire:model="selectedVariable" class="form-control" {{ $this->rollingClass('variable') }}>
                    <option value="" disabled>{{ __('screens/rolling.form.variables.placeholder') }}</option>
                    @foreach($this->variables as $variable)
                        <option value="{{ $variable->name }}">{{ $variable->name }} ({{ $variable->value }})</option>
                    @endforeach
                </select>
            </div>
        @endif
    </div>
</div>

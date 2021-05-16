<div>
    <div class="row align-items-center mb-5">
        <div class="col">
            <h1 class="page-title mb-0">
                @if(empty($this->rolling))
                    {{ __('screens/rolling.title_empty') }}
                @elseif(empty($this->rolling->id))
                    {{ __('screens/rolling.title_new') }}
                @else
                    {{ sprintf('%s: %s', __('screens/rolling.title'), $rolling->getTitle() ) }}
                @endif
            </h1>
        </div>
    </div>

    @if(empty($this->rolling))
        @alert('{{ __("screens/rolling.empty") }}')
    @else
        @if(! empty($this->alert))
            <div class="mb-5">
                @alert('{{ $this->alert["text"] }}', '{{ $this->alert["type"] }}')
            </div>
        @endif

        <div class="row mb-5 rolling-form">
            <div class="col-sm-12 col-md-6">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="rolling-title">{{ __('screens/rolling.form.title.label') }}</label>
                            <input type="text" wire:model="rolling.title" class="form-control" id="rolling-title" placeholder="{{ __('screens/rolling.form.title.placeholder') }}">
                            @error('rolling.title') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="rolling-description">{{ __('screens/rolling.form.description.label') }}</label>
                            <textarea wire:model="rolling.description" class="form-control" id="rolling-description" placeholder="{{ __('screens/rolling.form.description.placeholder') }}" rows="8"></textarea>
                            @error('rolling.description') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label>{{ __('screens/rolling.form.rolling.label') }}</label>
                            @error('rolling.rolling') <span class="text-danger">{{ $message }}</span> @enderror

                            <div class="rolling-wrapper">
                                <p class="rolling-result">
                                    @foreach($this->getEditingRolling() as $rolling)
                                        @if(! $loop->first || $rolling->getSignal() !== '+')
                                            <span class="signal-part">{{ $rolling->getSignal() }}</span>
                                        @endif

                                        <span class="text-part">
                                            @if($loop->last && $this->isDice && empty($rolling->dice))
                                                {{ $rolling->toText(false) . 'd' }}
                                            @else
                                                {{ $rolling->toText(false) }}
                                            @endif
                                        </span>
                                    @endforeach

                                    <span class="editing-cursor"></span>
                                </p>

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

                                <div class="rolling-variable-select">
                                    <select wire:model="selectedVariable" class="form-control" {{ $this->rollingClass('variable') }}>
                                        <option value="" disabled>{{ __('screens/rolling.form.variables.placeholder') }}</option>
                                        @foreach($this->variables as $variable)
                                            <option value="{{ $variable->name }}">{{ $variable->name }} ({{ $variable->value }})</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-6">
                <div class="row">
                    <div class="col-sm-12">
                        <p class="text-uppercase text-bold mb-2">{{ __('screens/rolling.preview') }}</p>
                        <div class="discord-preview">
                            <h1 class="discord-title">{{ $this->rolling->getTitle() }}</h1>

                            @if(! empty($this->rolling->description))
                                <p class="discord-markdown">{!! nl2br( $this->rolling->getDescription() ) !!}</p>
                            @endif

                            <strong class="discord-field-name">{{ sprintf('%s: %s', __('screens/rollings.result'), 999) }}</strong>
                            <span class="discord-field-value">{{ $this->rolling->describe() }}</span>
                        </div>
                    </div>
                    <div class="col-sm-12 text-right">
                        <a href="#" class="btn mt-3 d-block" wire:click.prevent="save">{{ __('screens/rolling.submit') }}</a>

                        @if(! empty($this->rolling->id))
                            <a href="#" data-href="{{ route('rollings.delete', [ 'guild' => $this->channel->guild->id, 'channel' => $this->rolling->channel, 'rolling' => $this->rolling->id ]) }}" class="btn mt-3 d-block btn-bad" data-confirm>
                                {{ __('screens/rolling.delete') }}
                            </a>
                        @endif

                        <div class="mt-3 d-block">
                            <a href="{{ route('guilds.rollings', $this->channel->guild->id) }}" class="lead text-white">{{ __('screens/rolling.back') }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endif
</div>

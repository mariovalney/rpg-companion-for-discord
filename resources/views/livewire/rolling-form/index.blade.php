<div>
    <div class="row align-items-center mb-5">
        <div class="col">
            <h1 class="page-title mb-0">
                @if(empty($this->rolling))
                    {{ __('screens/rolling.title_empty') }}
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
    @endif

    {{-- <div class="rolling-form-wrapper has-overlay-loading">
        @include('livewire.parts.overlay-loading')

        <div class="rolling-form-dices">
            @foreach($this->dices as $dice)
                @include('livewire.rolling-form.dice', [ 'dice' => $dice->toArray() ])
            @endforeach

            @if(! count($this->dices))
                <p>@lang('screens/rollings.addone')</p>
            @endif

            <div class="rolling-actions">
                <button wire:click.prevent="roll" class="btn btn-good btn-roll-trigger">ROLAR DADOS</button>
            </div>
        </div>
        <div class="rolling-form-shortcut">
            <div>
                <button wire:click.prevent="addDice(20)" class="btn text-bold">1d20</button>
                <button wire:click.prevent="addDice(3)" class="btn">1d3</button>
                <button wire:click.prevent="addDice(4)" class="btn">1d4</button>
                <button wire:click.prevent="addDice(6)" class="btn">1d6</button>
                <button wire:click.prevent="addDice(8)" class="btn">1d8</button>
                <button wire:click.prevent="addDice(10)" class="btn">1d10</button>
                <button wire:click.prevent="addDice(12)" class="btn">1d12</button>
                <button wire:click.prevent="addDice(100)" class="btn">1d100</button>
            </div>
        </div>
    </div> --}}
</div>

<div>
    @if(! empty($success_message))
        <div class="alert alert-good">{{ $success_message }}</div>
    @endif

    @if(! empty($error_message))
        <div class="alert alert-bad">{{ $error_message }}</div>
    @endif

    <div class="rolling-form-wrapper has-overlay-loading">
        @include('livewire.parts.overlay-loading')

        <div class="rolling-form-dices">
            @foreach($dices as $dice)
                @include('livewire.rolling-form.dice', [ 'dice' => $dice->toArray() ])
            @endforeach

            @if(! count($dices))
                <p>@lang('screens/rollings.addone')</p>
            @endif

            <div class="rolling-actions">
                <button wire:click.prevent="roll" class="btn btn-good btn-roll-trigger">ROLAR DADOS</button>
            </div>
        </div>
        <div class="rolling-form-shortcut">
            <div>
                <button wire:click.prevent="addDice(20)" class="btn btn-primary text-bold">1d20</button>
                <button wire:click.prevent="addDice(3)" class="btn btn-primary">1d3</button>
                <button wire:click.prevent="addDice(4)" class="btn btn-primary">1d4</button>
                <button wire:click.prevent="addDice(6)" class="btn btn-primary">1d6</button>
                <button wire:click.prevent="addDice(8)" class="btn btn-primary">1d8</button>
                <button wire:click.prevent="addDice(10)" class="btn btn-primary">1d10</button>
                <button wire:click.prevent="addDice(12)" class="btn btn-primary">1d12</button>
                <button wire:click.prevent="addDice(100)" class="btn btn-primary">1d100</button>
            </div>
        </div>
    </div>
</div>

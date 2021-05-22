<div class="rolling-actions">
    @if($this->rolling->has_advantage)
        <a wire:click.prevent="rollWithDisadvantage({{ $this->rolling->id }})" href="#" class="btn btn-bad d-block" title="{{ __('screens/rollings.roll.disadvantaged') }}">
            <div>
                <i class="fas fa-dice"></i>
                <i class="fas fa-arrow-down"></i>
            </div>
        </a>
    @endif

    <a wire:click.prevent="roll({{ $this->rolling->id }})" href="#" class="btn d-block" title="{{ __('screens/rollings.roll.normal') }}">
        <i class="fas fa-dice"></i>
    </a>

    @if($this->rolling->has_advantage)
        <a wire:click.prevent="rollWithAdvantage({{ $this->rolling->id }})" href="#" class="btn btn-good d-block" title="{{ __('screens/rollings.roll.advantaged') }}">
            <div>
                <i class="fas fa-dice"></i>
                <i class="fas fa-arrow-up"></i>
            </div>
        </a>
    @endif
</div>

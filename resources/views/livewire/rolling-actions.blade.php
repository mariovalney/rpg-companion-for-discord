<div class="rolling-actions">
    @if(! empty($this->webhookId) && ! empty($this->rolling()) && $this->rolling()->rolling->isNotEmpty())
        @if($this->rolling()->hasDisadvantage())
            <a wire:click.prevent="rollWithDisadvantage" href="#" class="btn btn-bad d-block" title="{{ __('screens/rollings.roll.disadvantaged') }}">
                <div>
                    <i class="fas fa-dice"></i>
                    <i class="fas fa-arrow-down"></i>
                </div>
            </a>
        @endif

        <a wire:click.prevent="roll" href="#" class="btn d-block" title="{{ __('screens/rollings.roll.normal') }}">
            <i class="fas fa-dice"></i>
        </a>

        @if($this->rolling()->hasAdvantage())
            <a wire:click.prevent="rollWithAdvantage" href="#" class="btn btn-good d-block" title="{{ __('screens/rollings.roll.advantaged') }}">
                <div>
                    <i class="fas fa-dice"></i>
                    <i class="fas fa-arrow-up"></i>
                </div>
            </a>
        @endif
    @endif
</div>

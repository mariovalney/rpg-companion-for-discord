<div>
    <div id="rolling-once" class="mb-5 {{ $this->isKeyboardShown ? 'open' : '' }}">
        <h5>{{ __('screens/rollings.title_fast') }}</h5>

        <div class="row">
            <div class="col-sm-12 col-md-8">
                @livewire('rolling-input', ['attribute' => 'rolling', 'rollings' => $this->rolling->rolling->toArray(), 'variables' => [], 'isKeyboardShown' => $this->isKeyboardShown], key('rolling-once-rolling-' . $this->inputKey))
            </div>

            <div class="col-sm-12 col-md-4">
                @livewire('rolling-actions', ['rolling' => $this->rolling->toArray(), 'webhookId' => $this->webhookId], key('rolling-once-rolling-actions-' . $this->actionsKey))

                <div class="rolling-once-actions text-center">
                    {{-- <div class="{{ $this->isKeyboardShown ? 'd-block' : 'd-none' }}"></div> --}}
                    <a href="#" class="btn btn-bad clear-rolling-once" wire:click.prevent="clear">{{ __('screens/rolling.clear') }}</a>
                </div>
            </div>
        </div>
    </div>
</div>

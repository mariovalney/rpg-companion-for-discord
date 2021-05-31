<div>
    <div class="mb-5">
        <h5>
            {{ __('screens/rollings.title_fast') }}
        </h5>

        <div class="row">
            <div class="col-sm-12 col-md-8">
                @livewire('rolling-input', ['attribute' => 'rolling', 'rollings' => [], 'variables' => []], key('rolling-once-rolling'))
            </div>

            <div class="col-sm-12 col-md-4">
                @if($this->refreshRollingParts)
                    @livewire('rolling-actions', ['rolling' => $this->rolling, 'webhookId' => $this->webhookId])
                @endif
            </div>
        </div>
    </div>
</div>

<div>
    <div class="mb-5">
        <h5>{{ __('screens/rollings.title_fast') }}</h5>

        <div class="row">
            <div class="col-sm-12 col-md-8">
                @livewire('rolling-input', ['attribute' => 'rolling', 'rollings' => $this->rolling->rolling->toArray(), 'variables' => []], key('rolling-once-rolling'))
            </div>

            <div class="col-sm-12 col-md-4">
                @livewire('rolling-actions', ['rolling' => $this->rolling->toArray(), 'webhookId' => $this->webhookId], key('rolling-once-rolling-actions-' . $this->refreshRollingParts))
            </div>
        </div>
    </div>
</div>

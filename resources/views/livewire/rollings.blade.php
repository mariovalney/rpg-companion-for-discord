<div>
    <div class="row align-items-center mb-5">
        <div class="col">
            <h1 class="page-title mb-0">
                @lang('screens/rollings.title')
            </h1>
        </div>

        <div class="col-sm-12 col-md-5 col-xl-3">
            <select wire:model="webhookId" class="form-control">
                <option value="" disabled>{{ __('screens/rollings.choose_a_channel') }}</option>

                @foreach($this->guild->webhooks->sortBy('channel.name') as $webhook)
                    <option value="{{ $webhook->id }}">{{ $webhook->channel->name }}</option>
                @endforeach
            </select>
        </div>

        <div class="col-sm-12">
            <p class="lead mt-3">
                @lang('screens/rollings.description')
            </p>
        </div>
    </div>

    @livewire('rollings-list', ['guildId' => $this->guild->id, 'webhookId' => $this->webhookId], key($this->webhookId))
</div>

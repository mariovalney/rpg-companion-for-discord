<div>
    <div class="row align-items-center mb-5">
        <div class="col">
            <h1 class="page-title mb-0">
                @lang('screens/rollings.title')
            </h1>
        </div>

        <div class="col-sm-12 col-md-5 col-xl-3">
            <select wire:model="webhook" class="form-control">
                @foreach($this->guild->webhooks as $webhook)
                    <option value="{{ $webhook->id }}">{{ $webhook->channel->name }}</option>
                @endforeach
            </select>
        </div>
    </div>

    @livewire('rolling-form', ['guild' => $this->guild, 'webhook' => $this->webhook], key($this->webhook))
</div>

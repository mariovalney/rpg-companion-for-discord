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

        <div class="col-sm-12 text-white">
            <p class="lead mt-3">
                @lang('screens/rollings.description')
            </p>
        </div>
    </div>

    @livewire('rollings-crud', ['guild' => $this->guild, 'webhook' => $this->guild->webhooks->find($this->webhook)], key($this->webhook))
</div>

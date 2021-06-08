<div>
    <div class="row align-items-center mb-5">
        <div class="col">
            <h1 class="page-title mb-0">
                @if(empty($this->rolling))
                    {{ __('screens/rolling.title_empty') }}
                @elseif(empty($this->rolling->id))
                    {{ __('screens/rolling.title_new') }}
                @else
                    {{ sprintf('%s: %s', __('screens/rolling.title'), $rolling->getTitle() ) }}
                @endif
            </h1>
        </div>
    </div>

    @if(empty($this->rolling))
        @alert('{{ __("screens/rolling.empty") }}')
    @else
        <div class="row mb-5 rolling-form">
            <div class="col-sm-12 col-md-6">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="rolling-title">{{ __('screens/rolling.form.title.label') }}</label>
                            <input type="text" wire:model.lazy="rolling.title" class="form-control" id="rolling-title" placeholder="{{ __('screens/rolling.form.title.placeholder') }}">
                            @error('rolling.title') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="rolling-description">{{ __('screens/rolling.form.description.label') }}</label>
                            <textarea wire:model.lazy="rolling.description" class="form-control" id="rolling-description" placeholder="{{ __('screens/rolling.form.description.placeholder') }}" rows="8"></textarea>
                            @error('rolling.description') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label>{{ __('screens/rolling.form.rolling.label') }}</label>
                            @error('rolling.rolling') <span class="text-danger">{{ $message }}</span> @enderror

                            @livewire('rolling-input', ['attribute' => 'rolling', 'rollings' => $this->rolling->rolling->toArray(), 'variables' => $this->variables], key($this->rolling->id . '-rolling'))
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-6">
                <div class="row mb-3">
                    <div class="col-sm-12">
                        <p class="text-uppercase text-bold mb-2">{{ __('screens/rolling.preview') }}</p>
                        <div class="discord-preview">
                            <h1 class="discord-title">{{ $this->rolling->getTitle() }}</h1>

                            @if(! empty($this->rolling->description))
                                <p class="discord-markdown">{!! $this->rolling->getDescription() !!}</p>
                            @endif

                            <strong class="discord-field-name">{{ sprintf('%s: %s', __('screens/rollings.result'), 999) }}</strong>
                            <span class="discord-field-value">{{ $this->rolling->describe() }}</span>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="rolling-advantage">{{ __('screens/rolling.form.advantage.label') }}</label>
                            <select wire:model.lazy="rollingAdvantage" class="form-control" id="rolling-advantage">
                                <option value="0">{{ __('screens/rolling.form.advantage.no') }}</option>
                                <option value="{{ App\Models\Rolling\Advantage::TYPE_D20 }}">{{ __('screens/rolling.form.advantage.d20') }}</option>
                                <option value="{{ App\Models\Rolling\Advantage::TYPE_ALL }}">{{ __('screens/rolling.form.advantage.all') }}</option>
                                <option value="{{ App\Models\Rolling\Advantage::TYPE_DOUBLE }}">{{ __('screens/rolling.form.advantage.double') }}</option>
                            </select>

                            @error('rolling.advantage') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12 text-right">
                        <a href="#" class="btn mt-3 d-block" wire:click.prevent="save">{{ __('screens/rolling.submit') }}</a>

                        <div class="my-3">
                            @livewire('rolling-actions', ['rolling' => $this->rolling, 'webhookId' => ($this->webhookId ?? '')], key('rolling-actions-' . $this->rolling->advantage->type))
                        </div>

                        @if(! empty($this->rolling->id))
                            <a href="#" data-href="{{ route('rollings.delete', [ 'guild' => $this->channel->guild->id, 'channel' => $this->rolling->channel, 'rolling' => $this->rolling->id ]) }}" class="btn mt-3 d-block btn-bad" data-confirm>
                                {{ __('screens/rolling.delete') }}
                            </a>
                        @endif

                        <div class="mt-3 d-block">
                            <a href="{{ route('guilds.rollings', $this->channel->guild->id) }}" class="lead text-white">{{ __('screens/rolling.back') }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endif
</div>

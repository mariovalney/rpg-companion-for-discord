<div>
    <div class="row align-items-center mb-5">
        <div class="col">
            <h1 class="page-title mb-0">
                @if(empty($this->rolling))
                    {{ __('screens/rolling.title_empty') }}
                @else
                    {{ sprintf('%s: %s', __('screens/rolling.title'), $rolling->getTitle() ) }}
                @endif
            </h1>
        </div>
    </div>

    @if(empty($this->rolling))
        @alert('{{ __("screens/rolling.empty") }}')
    @else
        @if(! empty($this->alert))
            <div class="mb-5">
                @alert('{{ $this->alert["text"] }}', '{{ $this->alert["type"] }}')
            </div>
        @endif

        <div class="row">
            <div class="col-sm-12 col-md-6">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="rolling-title">{{ __('screens/rolling.form.title.label') }}</label>
                            <input type="text" wire:model="rolling.title" class="form-control" id="rolling-title" placeholder="{{ __('screens/rolling.form.title.placeholder') }}">
                            @error('rolling.title') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="rolling-description">{{ __('screens/rolling.form.description.label') }}</label>
                            <textarea wire:model="rolling.description" class="form-control" id="rolling-description" placeholder="{{ __('screens/rolling.form.description.placeholder') }}" rows="8"></textarea>
                            @error('rolling.description') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-6">
                <div class="row">
                    <div class="col-sm-12">
                        <p class="text-uppercase text-bold mb-2">{{ __('screens/rolling.preview') }}</p>
                        <div class="discord-preview">
                            <h1 class="discord-title">{{ $this->rolling->title }}</h1>

                            @if(! empty($this->rolling->description))
                                <p class="discord-markdown">{!! nl2br( $this->rolling->description ) !!}</p>
                            @endif

                            <strong class="discord-field-name">{{ sprintf('%s: %s', __('screens/rollings.result'), 999) }}</strong>
                            <span class="discord-field-value">{{ $this->rolling->describe() }}</span>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <a href="#" class="btn mt-3" wire:click.prevent="save">{{ __('screens/rolling.submit') }}</a>
                    </div>
                </div>
            </div>
        </div>
    @endif
</div>

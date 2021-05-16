<div>
    @if(empty($webhookId) || empty($this->rollings))
        @alert('{{ __("screens/rollings.choose_to_start") }}')
    @else
        @if(! empty($this->alert))
            <div class="mb-5">
                @alert('{{ $this->alert["text"] }}', '{{ $this->alert["type"] }}')
            </div>
        @endif

        <h5 class="mb-3">{{ __('screens/rollings.your_rools') }}</h5>

        <div class="row">
            @if ($this->rollings->isNotEmpty())
                @foreach($this->rollings as $rolling)
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div class="card rolling-card">
                            <div class="card-body">
                                <a href="{{ route('rollings.edit', ['guild' => $this->guildId, 'channel' => $this->getChannelId(), 'rolling' => $rolling->id]) }}" class="edit-overlay">
                                    <span class="icon">
                                        <i class="fas fa-pen-square"></i>
                                    </span>

                                    <h5 class="card-title">{{ $rolling->getTitle() }}</h5>
                                    <p class="card-text discord-markdown small">{!! nl2br( $rolling->getDescription() ) !!}</p>

                                    @if(! empty($rolling->rolling))
                                        <p class="card-text small">{{ sprintf('%s: %s', __('screens/rollings.describe'), $rolling->describe()) }}</p>
                                    @endif
                                </a>
                                <div class="card-buttons">
                                    <a wire:click.prevent="rollWithDisadvantage({{ $rolling->id }})" href="#" class="btn btn-bad d-block" title="{{ __('screens/rollings.roll.disadvantaged') }}">
                                        <div>
                                            <i class="fas fa-dice"></i>
                                            <i class="fas fa-arrow-down"></i>
                                        </div>
                                    </a>
                                    <a wire:click.prevent="roll({{ $rolling->id }})" href="#" class="btn d-block" title="{{ __('screens/rollings.roll.normal') }}">
                                        <i class="fas fa-dice"></i>
                                    </a>
                                    <a wire:click.prevent="rollWithAdvantage({{ $rolling->id }})" href="#" class="btn btn-good d-block" title="{{ __('screens/rollings.roll.advantaged') }}">
                                        <div>
                                            <i class="fas fa-dice"></i>
                                            <i class="fas fa-arrow-up"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            @endif

            <div class="col-sm-12">
                <a href="{{ route('rollings.create', ['guild' => $this->guildId, 'channel' => $this->getChannelId()]) }}" class="btn mt-3">{{ __('screens/rollings.create') }}</a>
            </div>
        </div>
    @endif
</div>

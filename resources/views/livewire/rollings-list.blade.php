<div>
    @if(empty($this->webhookId) || empty($this->rollings))
        @alert('{{ __("screens/rollings.choose_to_start") }}')
    @else
        @if(! empty($this->alert))
            <div class="mb-5">
                @alert('{{ $this->alert["text"] }}', '{{ $this->alert["type"] }}')
            </div>
        @endif

        <div class="row">
            <div class="col-sm-12">
                {{-- @livewire('rolling-once', ['webhookId' => $this->webhookId]) --}}
            </div>
        </div>

        <div class="row mb-4">
            @if ($this->rollings->isNotEmpty())
                <div class="col-sm-12">
                    <h5>{{ __('screens/rollings.title_saved') }}</h5>
                </div>

                @foreach($this->rollings->sortBy(['position', 'title']) as $rolling)
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div class="card rolling-card">
                            <div class="card-body">
                                <a href="{{ route('rollings.edit', ['guild' => $this->guildId, 'channel' => $this->getChannelId(), 'rolling' => $rolling->id]) }}" class="edit-overlay">
                                    <span class="icon">
                                        <i class="fas fa-pen-square"></i>
                                    </span>

                                    <h5 class="card-title" data-mh="rolling-card-title">{{ $rolling->getTitle() }}</h5>
                                    <p class="card-text discord-markdown small" data-mh="rolling-card-description">{!! $rolling->getDescription() !!}</p>

                                    @if(! empty($rolling->rolling))
                                        <p class="card-text small" data-mh="rolling-card-description">{{ sprintf('%s: %s', __('screens/rollings.describe'), $rolling->describe()) }}</p>
                                    @endif
                                </a>
                                <div class="card-buttons">
                                    @livewire('rolling-actions', ['rolling' => $rolling, 'webhookId' => $this->webhookId])
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

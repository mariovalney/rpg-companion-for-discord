<div>
    @if(empty($webhook))
        @alert(__('Por favor, escolha um canal para começar a criar rolagens.'))
    @else
        @if ($this->rollings->isNotEmpty())
            <h5 class="mb-3">{{ __('Rolagens Rápidas') }}</h5>

            <div class="row">
                @foreach($this->rollings as $rolling)
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{{ $rolling->title ?: $rolling->id }}</h5>
                                <p class="card-text">{{ $rolling->description ?? '' }}</p>
                                <div class="row">
                                    <div class="col">
                                        <a href="#" class="btn btn-sm py-2 btn-bad d-block">{{ __('Rolar') }}</a>
                                    </div>
                                    <div class="col">
                                        <a href="#" class="btn btn-sm py-2 d-block">{{ __('Rolar') }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @endif
    @endif
</div>

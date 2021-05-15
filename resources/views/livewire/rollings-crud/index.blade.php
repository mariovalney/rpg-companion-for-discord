<div>
    @if(empty($webhook))
        @alert(__('Por favor, escolha um canal para começar a criar rolagens.'))
    @else
        <p>#{{ $webhook->channel->name }}</p>
    @endif
</div>

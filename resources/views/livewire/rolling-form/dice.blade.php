<div class="dice">
    <div class="form-inline">
        <div class="form-group dice-input">
            <input type="text" wire:change="updateDice('{{$dice['id']}}', 'count', $event.target.value)" class="form-control mask-number" min="1" max="99" value="{{ $dice['count'] }}">
        </div>
        <div class="form-group dice-d">D{{ $dice['sides'] }}</div>
        <div class="form-group form-submit-group">
            <button wire:click.prevent="removeDice('{{$dice['id']}}')" class="btn btn-bad">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    </div>
</div>

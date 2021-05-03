<div>
    <div class="form-row">
        <div class="form-group">
            <label for="variable-name">@lang('screens/variables.name')</label>
            <input wire:model.lazy="variable_name" type="text" class="form-control" id="variable-name" placeholder="@lang('screens/variables.initiative')" autocomplete="off">
            @error('variable_name') <span class="text-danger">{{ $message }}</span> @enderror
        </div>
        <div class="form-group">
            <label for="variable-value">@lang('screens/variables.value')</label>
            <input wire:model.lazy="variable_value" type="number" class="form-control text-uppercase" id="variable-value" placeholder="0" autocomplete="off">
            @error('variable_value') <span class="text-danger">{{ $message }}</span> @enderror
        </div>
        <div class="form-group form-submit-group">
            <button type="submit" wire:click.prevent="process" class="btn btn-primary">@lang($editing ? 'forms.edit' : 'forms.add')</button>
        </div>
    </div>
</div>

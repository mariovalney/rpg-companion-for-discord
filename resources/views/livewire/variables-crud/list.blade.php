<div class="variables-crud-list">
    <div class="row justify-content-center">
        <div class="col-md-12">
            @if (session()->has('message_success'))
                @alert('{{ session("message_success") }}', 'good')
            @endif

            @if (session()->has('message_error'))
                @alert('{{ session("message_error") }}', 'bad')
            @endif

            <div class="table-responsive">
                <table class="table">
                    <thead class="text-uppercase">
                        <th>@lang('screens/variables.name')</th>
                        <th>@lang('screens/variables.value')</th>
                        <th></th>
                    </thead>

                    <tbody>
                        @foreach($variables as $variable)
                            <tr class="text-uppercase">
                                <td>{{ $variable->name }}</td>
                                <td>{{ $variable->value }}</td>
                                <td class="text-right">
                                    <button wire:click="edit({{ $variable->id }})"class="btn btn-sm py-1">@lang('forms.edit')</button>
                                    <button wire:click="destroy({{ $variable->id }})" class="btn btn-sm py-1 btn-bad">@lang('forms.delete')</button>
                                </td>
                            </tr>
                        @endforeach

                        @if(! count($variables))
                            <tr>
                                <td colspan="4">@lang('screens/variables.empty')</td>
                            </tr>
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

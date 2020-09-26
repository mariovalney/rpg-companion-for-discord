<div class="variables-crud-list">
    <div class="row justify-content-center">
        <div class="col-md-12">
            @if (session()->has('message_success'))
                <div class="alert alert-good">{{ session('message_success') }}</div>
            @endif

            @if (session()->has('message_error'))
                <div class="alert alert-bad">{{ session('message_error') }}</div>
            @endif

            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <th>@lang('screens/variables.name')</th>
                        <th>@lang('screens/variables.value')</th>
                        <th></th>
                    </thead>

                    <tbody>
                        @foreach($data as $row)
                            <tr>
                                <td>{{$row->name}}</td>
                                <td>{{$row->value}}</td>
                                <td class="text-right">
                                    <button wire:click="edit({{$row->id}})"class="btn btn-sm btn-primary">@lang('forms.edit')</button>
                                    <button wire:click="destroy({{$row->id}})" class="btn btn-sm btn-danger">@lang('forms.delete')</button>
                                </td>
                            </tr>
                        @endforeach

                        @if(! count($data))
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

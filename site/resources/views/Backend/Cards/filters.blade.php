<div class="container-fluid">
    {!!Form::open(['url' => route('cards.filter'),'class'=>'form form-vertical','role'=>'form'])!!}

    <div class="form-group col-sm-4">
        {!!Form::label('keyword','Buscar')!!}
        {!!Form::text('keyword', $filters['keyword'], ['placeholder'=>'Dirección','class'=>'form-control'])!!}
    </div>
    <div class="form-group col-sm-3">
        {!!Form::label('state_id','Estado')!!}
    </div>
    <div class="form-group col-sm-3">
        {!!Form::label('type_dealership','Tipo')!!}

    </div>
    <div class="form-group col-sm-2">
        {!!Form::label('items','Mostrar')!!}
    </div>
    <div class="checkbox col-sm-2">
        <label>{!!Form::checkbox('inverse','1', $filters['inverse'])!!} Orden Inverso</label>
    </div>
    <div class="text-left form-group btn-group col-sm-12">
        <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-search"></span> Filtrar</button>
        <a class="btn btn-warning" href="{{route('cards.filter')}}"><i class="glyphicon glyphicon-refresh"></i> Limpiar
            Filtros</a>
        <a class="btn btn-primary" href="{{ route('cards.edit') }}">
            <span class="glyphicon glyphicon-plus"></span> Cartas
        </a>
        <a href="{{ route('cards.excel') }}" class="btn btn-info">
            <img src="{{asset('images/Excel-icon.png')}}">Descargar</a>
    </div>
    {!!Form::close()!!}
</div>
@section('js')
    <script>
        $(".select-states").chosen({
            width: "95%",
            allow_single_deselect: true,
            placeholder_text_single: 'Seleccione el tipo de usuario',
            no_results_text: 'No se encontraron resultados'
        });

        $(".select-type").chosen({
            width: "95%",
            allow_single_deselect: true,
            placeholder_text_single: 'Seleccione',
            no_results_text: 'No se encontraron resultados'
        });
    </script>
@endsection
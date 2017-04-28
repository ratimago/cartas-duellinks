<div class="container-fluid">
    {!!Form::open(['url' => route('quotations.filter'),'class'=>'form form-vertical','role'=>'form'])!!}

    <div class="form-group col-sm-4">
        {!!Form::label('keyword','Ingrese el Nombre del Contactante')!!}
        {!!Form::text('keyword', $filters['keyword'], ['placeholder'=>'Buscador','class'=>'form-control'])!!}
    </div>
    <div class="form-group col-sm-3">
        {!!Form::label('state_id','Estado')!!}
        {!!Form::select('state_id', ['' => 'Seleccionar'] + $extra['states'], $filters['state_id'],['class'=>'form-control select-states'])!!}
    </div>
    {{--<div class="form-group col-sm-3">
        {!!Form::label('truck_id','Camion')!!}
        {!!Form::select('truck_id', ['' => 'Seleccionar'] + $extra['trucks'], $filters['truck_id'],['class'=>'form-control select-trucks'])!!}
    </div>--}}
    <div class="form-group col-sm-3">
        {!!Form::label('autoresponder_id','Sección o Página')!!}
        {!!Form::select('autoresponder_id', ['' => 'Seleccionar'] + $extra['autoresponders'], $filters['autoresponder_id'],['class'=>'form-control select-departaments'])!!}
    </div>
    <div class="form-group col-sm-2">
        {!!Form::label('items','Mostrar')!!}
        {!!Form::select('items',['5'=>'5','10'=>'10','20'=>'20','50'=>'50'], $filters['items'], ['class'=>'form-control'])!!}
    </div>
    <div class="checkbox col-sm-2">
        <label>{!!Form::checkbox('inverse','1', $filters['inverse'])!!} Orden Inverso</label>
    </div>
    <div class="text-left form-group btn-group col-sm-12">
        <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-search"></span> Filtrar</button>
        <a class="btn btn-warning" href="{{route('quotations.filter')}}"><i class="glyphicon glyphicon-refresh"></i>
            Limpiar Filtros</a>
        {{--        <a class="btn btn-primary" href="{{ route('articles.edit') }}">
                    <span class="glyphicon glyphicon-plus"></span>Nuevo Artículo
                </a>--}}
        <a href="{{ route('quotations.excel', ['id' => $filters['autoresponder_id']]) }}" class="btn btn-info">
            <img src="{{asset('images/Excel-icon.png')}}">Descargar</a>
    </div>
    {!!Form::close()!!}
</div>

@section('js')
    <script>
        $(".select-filters").chosen({
            width: "95%",
            allow_single_deselect: true,
            placeholder_text_single: 'Seleccione un filtro',
            no_results_text: 'No se encontraron resultados'
        });

        $(".select-states").chosen({
            width: "95%",
            allow_single_deselect: true,
            placeholder_text_single: 'Seleccione un estado',
            no_results_text: 'No se encontraron resultados'
        });

        /* $(".select-trucks").chosen({
         width: "95%",
         allow_single_deselect: true,
         placeholder_text_single: 'Seleccione un camión',
         no_results_text: 'No se encontraron resultados'
         });*/

        $(".select-departaments").chosen({
            width: "95%",
            allow_single_deselect: true,
            placeholder_text_single: 'Seleccione un camión',
            no_results_text: 'No se encontraron resultados'
        });
    </script>
@endsection
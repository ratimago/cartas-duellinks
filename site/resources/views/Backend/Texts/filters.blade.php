<div class="container-fluid">
    {!!Form::open(['url' => route('blocks.filter'),'class'=>'form form-vertical','role'=>'form'])!!}

    <div class="form-group col-sm-4">
        {!!Form::label('keyword','Buscar')!!}
        {!!Form::text('keyword', $filters['keyword'], ['placeholder'=>'Nombre del menu','class'=>'form-control'])!!}
    </div>
    <div class="form-group col-sm-3">
        {!!Form::label('staticmenu_id','Sección')!!}
        {!!Form::select('staticmenu_id', ['' => 'Seleccionar'] + $extra['menus'], $filters['staticmenu_id'],['class'=>'form-control select-menus'])!!}
    </div>
    <div class="form-group col-sm-4">
        {!!Form::label('items','Mostrar')!!}
        {!!Form::select('items',['5'=>'5','10'=>'10','20'=>'20','50'=>'50'], $filters['items'], ['class'=>'form-control'])!!}
    </div>
    <div class="checkbox col-sm-4">
        <label>{!!Form::checkbox('inverse','1', $filters['inverse'])!!} Orden Inverso</label>
    </div>
    <div class="text-left form-group btn-group col-sm-12">
        <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-search"></span> Filtrar</button>
        <a class="btn btn-warning" href="{{route('blocks.filter')}}"><i class="glyphicon glyphicon-refresh"></i> Limpiar
            Filtros</a>
        <a class="btn btn-primary" href="{{ route('blocks.edit') }}">
            <span class="glyphicon glyphicon-plus"></span>Agregar Subsección
        </a>
    </div>
    {!!Form::close()!!}
</div>
@section('js')
    <script>
        $(".select-menus").chosen({
            width: "95%",
            allow_single_deselect: true,
            placeholder_text_single: 'Seleccione una sección',
            no_results_text: 'No se encontraron resultados'
        });
    </script>
@endsection

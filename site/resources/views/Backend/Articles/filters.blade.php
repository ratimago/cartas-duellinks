<div class="container-fluid">
    {!!Form::open(['url' => route('articles.filter'),'class'=>'form form-vertical','role'=>'form'])!!}

    <div class="form-group col-sm-4">
        {!!Form::label('keyword','Buscar')!!}
        {!!Form::text('keyword', $filters['keyword'], ['placeholder'=>'Buscador','class'=>'form-control'])!!}
    </div>
    <div class="form-group col-sm-3">
        {!!Form::label('filters','Filtrar por')!!}
        {!!Form::select('filters',['title'=>'Título', 'subtitle'=>'Subtítulo'], $filters['filters'], ['class'=>'form-control select-filters'])!!}
    </div>
    <div class="form-group col-sm-3">
        {!!Form::label('category_id','Categoría')!!}
        {!!Form::select('category_id', ['' => 'Seleccionar'] + $extra['categories'], $filters['category_id'],['class'=>'form-control select-categories'])!!}
    </div>
    <div class="form-group col-sm-2">
        {!!Form::label('items','Mostrar')!!}
        {!!Form::select('items',['5'=>'5','10'=>'10','20'=>'20','50'=>'50'], $filters['items'], ['class'=>'form-control'])!!}
    </div>
    <div class="text-left form-group btn-group col-sm-12">
        <div class="checkbox col-sm-2">
            <label>{!!Form::checkbox('inverse','1', $filters['inverse'])!!} Orden Inverso</label>
        </div>
        <div class="text-left form-group btn-group col-sm-8">
            <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-search"></span> Filtrar</button>
            <a class="btn btn-warning" href="{{route('articles.filter')}}"><i class="glyphicon glyphicon-refresh"></i>
                Limpiar
                Filtros</a>
            <a class="btn btn-primary" href="{{ route('articles.edit') }}">
                <span class="glyphicon glyphicon-plus"></span>Nuevo Artículo
            </a>
        </div>
        <div class="text-left form-group btn-group col-sm-2">
            <a href="{{ route('articles.excel') }}" class="btn btn-info">
                <img src="{{asset('images/Excel-icon.png')}}">Descargar</a>
        </div>
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

        $(".select-categories").chosen({
            width: "95%",
            allow_single_deselect: true,
            placeholder_text_single: 'Seleccione una categoría',
            no_results_text: 'No se encontraron resultados'
        });
    </script>
@endsection
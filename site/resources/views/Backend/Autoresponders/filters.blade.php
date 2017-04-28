<div class="container-fluid">
    {!!Form::open(['url' => route('autoresponders.filter'),'class'=>'form form-vertical','role'=>'form'])!!}

    <div class="form-group col-sm-4">
        {!!Form::label('keyword','Buscar')!!}
        {!!Form::text('keyword', $filters['keyword'], ['placeholder'=>'Departamento','class'=>'form-control'])!!}
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
        <a class="btn btn-warning" href="{{route('autoresponders.filter')}}"><i class="glyphicon glyphicon-refresh"></i> Limpiar
            Filtros</a>
        {{--<a class="btn btn-primary" href="{{ route('autoresponders.edit') }}">
            <span class="glyphicon glyphicon-plus"></span> Nueva Configuración
        </a>--}}
        <a href="{{ route('autoresponders.excel') }}" class="btn btn-info">
            <img src="{{asset('images/Excel-icon.png')}}">Descargar</a>
    </div>
    {!!Form::close()!!}
</div>
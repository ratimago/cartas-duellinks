@extends('Backend.Templates.layout')

@section('title') Artículos @stop

@section('content')

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-11 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Artículos</h3>
                    </div>
                    <div>
                        {!! $filters !!}
                    </div>
                </div>
            </div>

            <div class="col-md-11 col-md-offset-1">
                <div class="panel panel-default panel-form">
                    <div class="panel-body">
                        <br>
                        {!! $message !!}
                        @if(!$list->isEmpty())
                            Total: {{$list->total()}}
                            {!!Form::Open(['class' => 'form', 'id' => 'form-multi-select'])!!}
                            <div class="text-left form-group">
                                <label class="control-label">Elementos Seleccionados: </label>
                                <a data-href="{{route('articles.delete')}}" data-action="ELIMINAR"
                                   class="btn btn-danger task-multi-select" id="delete"><i
                                            class="glyphicon glyphicon-remove-sign"></i> Eliminar</a>
                            </div>
                            {!!Form::close()!!}

                            <div class="panel panel-default">
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th><input type="checkbox" class="multi-select-all"></th>
                                            <th>Título</th>
                                            <th>Subtítulo</th>
                                            <th>Ícono</th>
                                            <th>Categoría</th>
                                            <th>Creado por</th>
                                            <th>Último Movimiento</th>
                                            <th>Acciones</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($list as $item)
                                            <tr>
                                                <td>
                                                    <input type="checkbox" class="select-checkbox" name="selected[]"
                                                           value="{{$item->id}}"/>
                                                </td>
                                                <td>{{ $item->title }}</td>
                                                <td>{{ $item->subtitle }}</td>
                                                <td>
                                                    <div class="col-xs-8">
                                                        <a href="#" class="thumbnail">
                                                            <img src={{ asset("filesUpdates/Articles/". $item->icon) }} class="img-circle"
                                                                 alt="imagen circular">
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>{{ $item->category->name }}</td>
                                                <td>{{ isset($item->user) ? $item->user->name : "Usuario Eliminado" }}</td>
                                                <td>{{ \Backend::dateFormat($item->updated_at) }}</td>
                                                <td><a class="btn btn-default"
                                                       href="{{route('articles.edit',$item->id)}}" data-toggle="tooltip" data-placement="top" title="Editar">Editar
                                                        <img src={{ asset("images/Pencil-icon.png") }} alt="imagen">
                                                    </a>
                                                </td>
                                                <td>
                                                    <a class="btn btn-default"
                                                       href="{{route('gallery',['id' => $item->galleries->first(), 'type' => 'Article'])}}" data-toggle="tooltip" data-placement="top" title="Galería">Galería
                                                        <img src={{ asset("images/gallery-icon.png") }} alt="imagen">
                                                    </a>
                                                </td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div align="center">{!!$list->render()!!}</div>
                        @else
                            <h4>No hay resultados</h4>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="dialog-confirm" title="Eliminación de Registros" style="display: none">
        <p><span class="ui-icon ui-icon-alert" style="float:left; margin:12px 12px 20px 0;"></span>Los registros seleccionados serán eliminados permanentemente. Estás Seguro?</p>
    </div>

@endsection
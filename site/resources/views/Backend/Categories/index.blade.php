@extends('Backend.Templates.layout')

@section('title') Categorías @stop
@section('css')
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
@endsection
@section('content')

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-11 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Categorías</h3>
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
                                <a data-href="{{route('categories.delete')}}" data-action="ELIMINAR"
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
                                            <th>Nombre</th>
                                            <th>Título</th>
                                            <th>último Movimiento</th>
                                            <th>Acciones</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($list as $item)
                                            <tr>
                                                <td>
                                                    <input type="checkbox" class="select-checkbox" name="selected[]"
                                                           value="{{$item->id}}"/>
                                                </td>
                                                <td>{{ $item->name }}</td>
                                                <td>{{ $item->title }}</td>
                                                <td>{{ \Backend::dateFormat($item->updated_at) }}</td>
                                                <td><a class="btn btn-default" href="{{route('categories.edit',$item->id)}}">
                                                        <img src={{ asset("images/Pencil-icon.png") }} alt="imagen">Editar
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
@extends('Backend.Templates.layout')

@section('title') Boosters @stop
@section('css')
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
@endsection
@section('content')

    {{--Test--}}
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-11 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Booster packs - Duel Links</h3>
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
                                <label class="control-label">Seleccionados: </label>
                                <a data-href="{{route('boosters.delete')}}" data-action="ELIMINAR"
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
                                            <th>Logo</th>
                                            <th>Banner</th>
                                            <th>Nombre</th>
                                            <th>Disponible</th>
                                            <th>Minibox</th>
                                            <th>Fecha de salida</th>

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
                                                <td>
                                                    <div class="col-xs-8">
                                                        <a href="#" class="thumbnail">
                                                            <img width="50px" src={{ asset("imagenes/boosters/".$item->image) }} class=""
                                                                 alt="imagen circular">
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="col-xs-8">
                                                        <a href="#" class="thumbnail">
                                                            <img width="50px" src={{ asset("imagenes/boosters/".$item->banner_image) }} class=""
                                                                 alt="imagen circular">
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>{{ $item->name }}</td>
                                                <td>

                                                    @if($item->available)
                                                        <img width="20" src=" {{asset('imagenes/true.png')}}">
                                                    @else
                                                        <img width="20" src=" {{asset('imagenes/false.png')}}">
                                                    @endif


                                                </td>
                                                <td>@if($item->minibox)
                                                        <img width="75" src=" {{asset('imagenes/mini-box.png')}}">
                                                    @else
                                                        <img width="75" src=" {{asset('imagenes/no.png')}}">

                                                    @endif  </td>
                                                <td>{{ $item->available_date }}</td>

                                                <td>{{ \Backend::dateFormat($item->updated_at) }}</td>
                                                <td><a class="btn btn-default"
                                                       href="{{route('boosters.edit',$item->id)}}" data-toggle="tooltip" data-placement="top" title="Editar">Editar
                                                        <img src={{ asset("images/Pencil-icon.png") }} alt="imagen">
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
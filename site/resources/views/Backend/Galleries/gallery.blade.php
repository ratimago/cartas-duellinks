@extends('Backend.Templates.layout')
@section('title') Edición de galerías @stop
@section('css')
    <link rel="stylesheet" href="{{asset('Backend/css/customnavred.css')}}">
@endsection
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    {{--Inician Tabs--}}


                    @if($type == 'Truck')
                        <ul class="nav nav-tabs custom-nav" role="tablist">
                            <li role="presentation" class="col-md-2 custom-tab">
                                <a href="{{ url("mcPanel/camiones") }}">Camiones</a>
                            </li>
                            <li role="presentation" class="col-md-2 custom-tab">
                                <a href="{{ url("mcPanel/camiones/registro/{$gallery->imageable->id}") }}">Datos</a>
                            </li>
                            <li role="presentation" class="col-md-3 custom-tab active">
                                <a href="#">Amplios Interiores </a>
                            </li>
                        </ul>
                    @elseif($type == 'Promotion')
                        <ul class="nav nav-tabs custom-nav" role="tablist">
                            {{-- <li role="presentation" class="col-md-2 custom-tab">
                                 <a href="{{ url("mcPanel/promociones") }}">Promociones</a>
                             </li>--}}
                            <li role="presentation" class="col-md-2 custom-tab">
                                <a href="{{ url("mcPanel/promociones/registro/{$gallery->imageable->id}") }}">Datos</a>
                            </li>
                            <li role="presentation" class="col-md-2 custom-tab active">
                                <a href="#">Galería</a>
                            </li>
                        </ul>
                    @elseif($type == 'Article')
                        <ul class="nav nav-tabs custom-nav" role="tablist">
                            <li role="presentation" class="col-md-2 custom-tab">
                                <a href="{{ url("mcPanel/articulos") }}">Artículos</a>
                            </li>
                            <li role="presentation" class="col-md-2 custom-tab">
                                <a href="{{ url("mcPanel/articulos/registro/{$gallery->imageable->id}") }}">Datos</a>
                            </li>
                            <li role="presentation" class="col-md-2 custom-tab active">
                                <a href="#">Galería</a>
                            </li>
                        </ul>

                        @elseif($type == 'intranet')


                    @else


                        <ul class="nav nav-tabs custom-nav" role="tablist">
                            {{-- <li role="presentation" class="col-md-2 custom-tab">
                                 <a href="{{ url("mcPanel/subsecciones") }}">Subsecciones</a>
                             </li>--}}
                            <li role="presentation" class="col-md-2 custom-tab">
                                <a href="{{ url("mcPanel/subsecciones/registro/{$gallery->imageable->id}") }}">Datos</a>
                            </li>
                            <li role="presentation" class="col-md-2 custom-tab active">
                                <a href="#">Galería</a>
                            </li>
                        </ul>
                    @endif
                    {{--Terminan Tabs--}}

                    @if($type != 'intranet')
                    {{--Inician Cuerpo--}}
                    <div class="panel-body">
                        <p style="margin-top: 20px;"><strong>Importante: La primera imagen de tu galería es la que
                                muestra el pie de imagen en el sitio web. Las demás imágenes tienen el campo de texto
                                habilitado en caso de que desees cambiar tu imagen principal por alguna de las otras
                                imágenes.</strong></p>

                        <p style="margin-top: 20px;">Para cambiar tu imagen principal sólo arrastra la imagen que desees
                            cambiar a la primera posición (imagen esquina superior izquierda)</p>
                        <p><strong>Recuerde: Es importante tener al menos 2 imágenes para la visualización de su galería</strong></p>
                        <hr>
                        
                        <div>
                            <div id="msj_error" class="alert alert-danger alert-dismissible" style="display: none"
                                 role="alert">
                                <strong>Error!!!</strong> La imágen <strong id="img_error_exd"></strong> rebasa el
                                limite de peso
                                permitido.
                            </div>
                            @endif
                            @include('Backend.Galleries.loader')
                        </div>
                        <hr>

                        {!!Form::open(['route'=>'gallery.elemento.eliminar.multi','class'=>'formMultiSelect'])!!}
                        <div class="form-group">
                            <input type="checkbox" id="multiSelect">
                            <label for="multiSelect">Seleccionar todos</label>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-default btn-xs tobe_eliminated_submit"><span
                                        class="glyphicon glyphicon-remove-sign"></span> Eliminar
                            </button>
                        </div>


                        {!!Form::close()!!}
                        <hr>

                        <div class="container-fluid" id="gallery-container">
                            <div class="row">
                                @if(count($gallery->elements))
                                    <ul id="sortable" data-content="galeria">
                                        @foreach($gallery->elements as $element)
                                            <li id="{{ $element->id }}" class="col-sm-6 col-md-3" style="list-style-type: none;">

                                                @include('Backend.Galleries.element')

                                            </li>
                                        @endforeach
                                    </ul>
                                @else
                                    <h4>No hay elementos</h4>
                                @endif
                            </div>
                        </div>

                    </div>
                </div>
                {{--Termina Cuerpo--}}
            </div>
        </div>
    </div>

@stop
@section('js')
    <script>
        function addEventGalery(id){
            $('.checklogo'+ id).on('click', function () {
                if ($(this).is(':checked')) {
                    $('.input-logo-' + id).show();
                } else {
                    $('.input-logo-' + id).hide();
                }
            });
        }
    </script>
@endsection
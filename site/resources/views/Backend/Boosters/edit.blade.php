@extends('Backend.Templates.layout')
@section('title') {{$title}} @stop
@section('css')
    <link rel="stylesheet" href="{{asset('Backend/css/checkbox.css')}}">
    <link rel="stylesheet" href="{{asset('Backend/css/customnavred.css')}}">
@endsection
@section('content')

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs custom-nav" role="tablist">
                    <li role="presentation" class="col-md-2 custom-tab">
                        <a href="{{ route('boosters') }}">Booster Packs</a>
                    </li>
                    <li role="presentation" class="active col-md-2 custom-tab">
                        <a href="#javatab">
                            @if($item->title)
                                Datos
                            @else
                                 Crear
                            @endif
                        </a>
                    </li>
                    @if($item->galleries->first() !== null)
                        <li role="presentation" class="col-md-3 custom-tab">
                            <a href="{{route('gallery',['id' => $item->galleries->first(), 'type' => 'Booster'])}}">Amplios
                                Interiores</a>
                        </li>
                    @endif
                </ul>
                <!-- Tab panes -->
                {!! $message !!}
                <div class="panel panel-default panel-form">
                    <div class="panel-body">
                        <h3 class="text-center">Booster Pack</h3>
                        {!!Form::Open(['url' => route('boosters.update',$id), 'files' => true, 'class' => "form-horizontal", 'role'=>'form'])!!}
                        <div class="form-group">
                            {!!Form::Label('name','Nombre:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('name',@$item->name,['class'=>'form-control'])!!}
                                {!!$errors->first('name','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>

                        <div class="form-group">
                            {!!Form::Label('meta_description','Metadescripción:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('meta_description',@$item->meta_description,['class'=>'form-control'])!!}
                                {!!$errors->first('meta_description','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>

                        <div class="form-group">
                            {!!Form::Label('minibox','¿Es minibox?:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {{ Form::checkbox('minibox', 1,@$item->minibox) }}
                                {!!$errors->first('minibox','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>

                        <div class="form-group">
                            {!!Form::Label('available','¿Aun disponible?:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {{ Form::checkbox('available', 1,@$item->available) }}
                                {!!$errors->first('available','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>


                        <div class="form-group">

                            {!!Form::Label('image','Imagen:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!! Form::file("image", ['class'=>'']) !!}
                                {!!$errors->first('image','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>

                        {!!Form::Label('banner_image','Banner:',['class'=>'col-md-3 control-label'])!!}
                        <div class="col-md-8">
                            {!! Form::file("banner_image", ['class'=>'']) !!}
                            {!!$errors->first('banner_image','<div class="text-danger">:message</div>')!!}
                        </div>

                        <hr>



                        <div class="form-group text-center">
                            <div class="btn-group">
                                <button type="submit" class="btn btn-success"><i
                                            class="glyphicon glyphicon-floppy-disk" id="pay-button"></i> Guardar
                                </button>
                                <a href="{{ route('boosters') }}" class="btn btn-default"><i
                                            class="glyphicon glyphicon-arrow-left"></i> Regresar</a>
                            </div>
                        </div>


                        {!!Form::Close()!!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
@section('js')
    <script>
        $('.textarea-content').trumbowyg({
            removeformatPasted: true
        });

        $( '.chb-fichatecnica' ).on( 'click', function() {
            if( $(this).is(':checked') ){
                $('#input-fichatecnica').show();
            } else {
                $('#input-fichatecnica').hide();
            }
        });

        $( '.chb-catalogo' ).on( 'click', function() {
            if( $(this).is(':checked') ){
                $('#input-catalogo').show();
            } else {
                $('#input-catalogo').hide();
            }
        });
    </script>
    <script>
        var divValue, values = '';

        function showContent() {
            logotipo = document.getElementById("imagenlogotipo");
            fondo = document.getElementById("imagenfondo");
            camion = document.getElementById("imagencamion");
            perfil = document.getElementById("imagenperfil");

            checklogo = document.getElementById("checklogo");
            checkfondo = document.getElementById("checkfondo");
            checkcamion = document.getElementById("check");
            checkperfil = document.getElementById("checkperfil");

            if (checklogo.checked) {
                logotipo.style.display = 'block';
                document.getElementById("imagenlogotipo").value = "";
            }
            else {
                logotipo.style.display = 'none';
                document.getElementById("imagenlogotipo").value = "";
            }
            if (checkfondo.checked) {
                fondo.style.display = 'block';
                document.getElementById("imagenfondo").value = "";
            }
            else {
                fondo.style.display = 'none';
                document.getElementById("imagenfondo").value = "";
            }
            if (checkcamion.checked) {
                camion.style.display = 'block';
                document.getElementById("imagencamion").value = "";
            }
            else {
                camion.style.display = 'none';
                document.getElementById("imagencamion").value = "";
            }
            if (checkperfil.checked) {
                perfil.style.display = 'block';
                document.getElementById("imagenperfil").value = "";
            }
            else {
                perfil.style.display = 'none';
                document.getElementById("imagenperfil").value = "";
            }
        }
    </script>
@endsection
